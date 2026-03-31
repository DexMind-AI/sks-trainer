'use client';

import { useEffect, useState } from 'react';
import { catalog } from '@/data/questions';
import { getAllProgress, getStats, getExamHistory, resetAllData, exportData, importData, setDailyGoal } from '@/lib/storage';
import { CardProgress } from '@/lib/leitner';
import { getGamificationState, saveGamificationState, GamificationState } from '@/lib/gamification';
import ProgressBar from '@/components/ProgressBar';

export default function StatistikPage() {
  const [progress, setProgress] = useState<Record<string, CardProgress>>({});
  const [stats, setStats] = useState({ totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 });
  const [examHistory, setExamHistory] = useState<ReturnType<typeof getExamHistory>>([]);
  const [gamification, setGamification] = useState<GamificationState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [goalInput, setGoalInput] = useState(20);

  useEffect(() => {
    setProgress(getAllProgress());
    setStats(getStats());
    setExamHistory(getExamHistory());
    setGamification(getGamificationState());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (gamification) {
      setGoalInput(gamification.dailyGoal.target);
    } else {
      setGoalInput(stats.dailyGoal);
    }
  }, [stats.dailyGoal, gamification]);

  if (!mounted) return <div className="py-12 text-center text-slate-400">Laden...</div>;

  const progressValues = Object.values(progress);
  const boxCounts = [0, 0, 0, 0, 0];
  progressValues.forEach(p => {
    if (p.box >= 1 && p.box <= 5) boxCounts[p.box - 1]++;
  });
  const unseenCount = 638 - progressValues.length;

  const sectionStats = catalog.sections.map(section => {
    const sQ = section.questions;
    const mastered = sQ.filter(q => progress[q.id] && progress[q.id].box >= 4).length;
    const learning = sQ.filter(q => progress[q.id] && progress[q.id].box >= 2 && progress[q.id].box < 4).length;
    const unseen = sQ.length - sQ.filter(q => progress[q.id]).length;
    return {
      name: section.name,
      total: sQ.length,
      mastered,
      learning,
      unseen,
      pct: sQ.length > 0 ? (mastered / sQ.length) * 100 : 0,
    };
  });

  const passedExams = examHistory.filter(e => e.passed).length;
  const avgScore = examHistory.length > 0
    ? Math.round(examHistory.reduce((a, e) => a + e.score, 0) / examHistory.length)
    : 0;

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sks-trainer-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const success = importData(reader.result as string);
        if (success) {
          setProgress(getAllProgress());
          setStats(getStats());
          setExamHistory(getExamHistory());
          alert('Daten erfolgreich importiert!');
        } else {
          alert('Fehler beim Import. Ungültige Datei.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    resetAllData();
    // Also reset gamification
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sks-gamification');
    }
    setProgress({});
    setStats({ totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 });
    setExamHistory([]);
    setGamification(getGamificationState());
    setShowReset(false);
  };

  const updateGamificationSetting = (key: keyof GamificationState, value: unknown) => {
    if (!gamification) return;
    const updated = { ...gamification, [key]: value };
    saveGamificationState(updated);
    setGamification(updated);
  };

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-bold text-navy-600 dark:text-blue-400">📊 Statistik</h1>

      {/* Overall Stats */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Übersicht</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-navy-600 dark:text-blue-400">{stats.totalReviews}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Wiederholungen gesamt</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">🔥 {gamification?.streak.current ?? stats.streak}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Tage-Streak</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{passedExams}/{examHistory.length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Prüfungen bestanden</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">{avgScore}/60</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Ø Prüfungspunkte</div>
          </div>
        </div>
      </div>

      {/* Leitner Boxes */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Leitner-Boxen</h2>
        <div className="space-y-2">
          {[
            { box: 0, label: 'Ungesehen', count: unseenCount, color: 'bg-slate-400' },
            { box: 1, label: 'Box 1 — Neu/Wiederholen', count: boxCounts[0], color: 'bg-red-500' },
            { box: 2, label: 'Box 2 — Lernend', count: boxCounts[1], color: 'bg-orange-500' },
            { box: 3, label: 'Box 3 — Fortgeschritten', count: boxCounts[2], color: 'bg-yellow-500' },
            { box: 4, label: 'Box 4 — Fast gemeistert', count: boxCounts[3], color: 'bg-blue-500' },
            { box: 5, label: 'Box 5 — Gemeistert', count: boxCounts[4], color: 'bg-green-500' },
          ].map(item => (
            <div key={item.box} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{item.count}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-0.5">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${(item.count / 638) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Per-Section Progress */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Bereiche</h2>
        <div className="space-y-3">
          {sectionStats.map(s => (
            <div key={s.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600 dark:text-slate-400">{s.name}</span>
                <span className="text-slate-500 dark:text-slate-400">
                  {s.mastered}/{s.total} gemeistert
                </span>
              </div>
              <ProgressBar
                value={s.pct}
                height="h-2"
                showLabel={false}
                color={s.pct >= 80 ? 'bg-green-500' : s.pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">⚙️ Einstellungen</h2>
        
        {/* Daily Goal */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Tagesziel</h3>
          <div className="grid grid-cols-4 gap-2">
            {[10, 20, 30, 50].map(goal => (
              <button
                key={goal}
                onClick={() => {
                  setGoalInput(goal);
                  setDailyGoal(goal);
                  setStats(prev => ({ ...prev, dailyGoal: goal }));
                  if (gamification) {
                    const updated = { ...gamification, dailyGoal: { ...gamification.dailyGoal, target: goal } };
                    saveGamificationState(updated);
                    setGamification(updated);
                  }
                }}
                className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                  goalInput === goal
                    ? 'bg-navy-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {goal} / Tag
              </button>
            ))}
          </div>
        </div>

        {/* Gamification toggles */}
        {gamification && (
          <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <ToggleSetting
              label="🤖 KI-Bewertung"
              description="Antworten automatisch von KI prüfen lassen"
              enabled={gamification.aiCheckEnabled}
              onChange={(v) => updateGamificationSetting('aiCheckEnabled', v)}
            />
            <ToggleSetting
              label="🏅 Gamification"
              description="XP, Ränge und Erfolge anzeigen"
              enabled={gamification.gamificationVisible}
              onChange={(v) => updateGamificationSetting('gamificationVisible', v)}
            />
            <ToggleSetting
              label="🔊 Sound-Effekte"
              description="Töne bei Aktionen (kommt bald)"
              enabled={gamification.soundEnabled}
              onChange={(v) => updateGamificationSetting('soundEnabled', v)}
            />
          </div>
        )}
      </div>

      {/* Data Management */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Daten</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm"
          >
            📤 Exportieren
          </button>
          <button
            onClick={handleImport}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm"
          >
            📥 Importieren
          </button>
          <button
            onClick={() => setShowReset(true)}
            className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm"
          >
            🗑️ Zurücksetzen
          </button>
        </div>

        {showReset && (
          <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-700 dark:text-red-400 mb-2">
              Alle Lernfortschritte, Prüfungsergebnisse und Gamification-Daten werden gelöscht. Dieser Vorgang kann nicht rückgängig gemacht werden!
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-sm font-semibold"
              >
                Ja, alles löschen
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm"
              >
                Abbrechen
              </button>
            </div>
          </div>
        )}
      </div>

      {/* About */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">ℹ️ Über diese App</h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <p>
            <strong>SKS Trainer</strong> ist ein kostenloses Lernwerkzeug für die Theorieprüfung zum Sportküstenschifferschein.
          </p>
          <p>
            Entwickelt von Claudia ✨ @{' '}
            <a
              href="https://dexmind.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-navy-600 dark:text-blue-400 hover:text-navy-800 dark:hover:text-blue-300"
            >
              DexMind AI
            </a>
          </p>
          <p>
            Die App nutzt OpenAI GPT‑4o‑mini für KI‑Bewertungen, ist{' '}
            <a
              href="https://github.com/DexMind-AI/sks-trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-navy-600 dark:text-blue-400 hover:text-navy-800 dark:hover:text-blue-300"
            >
              quelloffen auf GitHub
            </a>{' '}
            und läuft auf{' '}
            <a
              href="https://forge.dexmind.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-navy-600 dark:text-blue-400 hover:text-navy-800 dark:hover:text-blue-300"
            >
              forge.dexmind.ai
            </a>.
          </p>
          <p className="text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
            Version 1.2.0 &middot; © {new Date().getFullYear()} Claudia @ DexMind AI
          </p>
        </div>
      </div>
    </div>
  );
}

function ToggleSetting({ label, description, enabled, onChange }: {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
          enabled ? 'bg-navy-600' : 'bg-slate-300 dark:bg-slate-600'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
