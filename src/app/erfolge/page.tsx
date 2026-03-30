'use client';

import { useEffect, useState } from 'react';
import { ACHIEVEMENTS, Achievement, getGamificationState, GamificationState } from '@/lib/gamification';
import { XPBar } from '@/components/XPBar';
import Link from 'next/link';

export default function ErfolgePage() {
  const [state, setState] = useState<GamificationState | null>(null);

  useEffect(() => {
    setState(getGamificationState());
  }, []);

  if (!state) return <div className="py-12 text-center text-slate-400">Laden...</div>;

  const categories: { id: string; name: string; emoji: string }[] = [
    { id: 'progress', name: 'Fortschritt', emoji: '📈' },
    { id: 'streak', name: 'Streaks', emoji: '🔥' },
    { id: 'mastery', name: 'Meisterschaft', emoji: '🏅' },
    { id: 'exam', name: 'Prüfungen', emoji: '📝' },
  ];

  const unlockedCount = Object.keys(state.achievements).length;

  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-xl font-bold text-navy-600 dark:text-blue-400">🏅 Erfolge</h1>
        <span className="text-sm text-slate-400">{unlockedCount}/{ACHIEVEMENTS.length}</span>
      </div>

      {/* XP Bar */}
      <XPBar state={state} />

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-navy-600 dark:text-blue-400">{state.totalQuestionsAnswered}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Fragen gesamt</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-orange-500">🔥 {state.streak.current}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Tage-Streak</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-amber-500">{state.streak.best}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Bester Streak</div>
        </div>
      </div>

      {/* Achievement categories */}
      {categories.map(cat => {
        const catAchievements = ACHIEVEMENTS.filter(a => a.category === cat.id);
        return (
          <div key={cat.id}>
            <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">
              {cat.emoji} {cat.name}
            </h2>
            <div className="space-y-2">
              {catAchievements.map(achievement => {
                const unlocked = state.achievements[achievement.id];
                return (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                    unlockedDate={unlocked}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AchievementCard({ achievement, unlockedDate }: { achievement: Achievement; unlockedDate?: string }) {
  const isUnlocked = !!unlockedDate;
  
  return (
    <div className={`rounded-xl p-3 border flex items-center gap-3 transition-all ${
      isUnlocked
        ? 'bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-800 shadow-sm'
        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 opacity-50'
    }`}>
      <span className={`text-3xl ${isUnlocked ? '' : 'grayscale'}`}>
        {achievement.emoji}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${
          isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'
        }`}>
          {achievement.name}
        </p>
        <p className={`text-xs ${
          isUnlocked ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 dark:text-slate-600'
        }`}>
          {achievement.description}
        </p>
      </div>
      {isUnlocked && unlockedDate && (
        <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
          {new Date(unlockedDate).toLocaleDateString('de-DE')}
        </span>
      )}
      {!isUnlocked && (
        <span className="text-lg flex-shrink-0">🔒</span>
      )}
    </div>
  );
}
