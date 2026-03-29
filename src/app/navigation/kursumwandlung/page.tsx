'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { steuertafel, getAblenkung, normalizeAngle } from '@/data/navigation/steuertafel';
import {
  convertForward,
  convertBackward,
  generateProblem,
  calculateMissweisung,
  formatAngle,
  formatSigned,
  checkAnswer,
  type KursumwandlungProblem,
  type KursumwandlungResult,
  type MissweisungData,
} from '@/data/navigation/kursumwandlung';

type Mode = 'learn' | 'practice';
type PracticeStep = 'setup' | 'solving' | 'result';

export default function KursumwandlungPage() {
  const [mode, setMode] = useState<Mode>('learn');
  const [problem, setProblem] = useState<KursumwandlungProblem | null>(null);
  const [practiceStep, setPracticeStep] = useState<PracticeStep>('setup');
  const [revealedSteps, setRevealedSteps] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [practiceCount, setPracticeCount] = useState(0);

  const startPractice = useCallback((type?: 'forward' | 'backward') => {
    const p = generateProblem(type);
    setProblem(p);
    setPracticeStep('solving');
    setRevealedSteps(0);
    setUserAnswers({});
    setScore(null);
  }, []);

  const revealNext = () => {
    setRevealedSteps(prev => prev + 1);
  };

  const revealAll = () => {
    setRevealedSteps(10);
  };

  const checkAnswers = () => {
    if (!problem) return;
    const sol = problem.solution;
    let correct = 0;
    let total = 0;

    const checks = [
      { key: 'abl', correct: sol.abl, tolerance: 1 },
      { key: 'mwk', correct: sol.mwk, tolerance: 1 },
      { key: 'mw', correct: sol.mw, tolerance: 1 },
      { key: 'rwk', correct: sol.rwk, tolerance: 1 },
      { key: 'kdw', correct: sol.kdw, tolerance: 1 },
      { key: 'kak', correct: sol.kak, tolerance: 2 },
    ];

    if (problem.type === 'backward') {
      checks.push({ key: 'mgk', correct: sol.mgk, tolerance: 2 });
    }

    for (const check of checks) {
      if (userAnswers[check.key]) {
        total++;
        const val = parseFloat(userAnswers[check.key]);
        if (!isNaN(val)) {
          if (check.key === 'abl' || check.key === 'mw') {
            // Signed value check
            if (Math.abs(val - check.correct) <= check.tolerance) correct++;
          } else {
            if (checkAnswer(val, check.correct, check.tolerance)) correct++;
          }
        }
      }
    }

    setScore({ correct, total });
    setPracticeStep('result');
    setPracticeCount(prev => prev + 1);
  };

  return (
    <div className="py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/navigation" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-lg font-bold text-navy-600 dark:text-blue-400">🧮 Kursumwandlung</h1>
        <div className="w-12" />
      </div>

      {/* Mode toggle */}
      <div className="flex bg-slate-200 dark:bg-slate-700 rounded-xl p-1">
        <button
          onClick={() => setMode('learn')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === 'learn' ? 'bg-white dark:bg-slate-600 text-navy-600 dark:text-blue-400 shadow' : 'text-slate-500'
          }`}
        >
          📖 Lernen
        </button>
        <button
          onClick={() => setMode('practice')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === 'practice' ? 'bg-white dark:bg-slate-600 text-navy-600 dark:text-blue-400 shadow' : 'text-slate-500'
          }`}
        >
          ✏️ Üben
        </button>
      </div>

      {mode === 'learn' ? (
        <LearnMode />
      ) : (
        <PracticeMode
          problem={problem}
          practiceStep={practiceStep}
          revealedSteps={revealedSteps}
          userAnswers={userAnswers}
          score={score}
          practiceCount={practiceCount}
          onStart={startPractice}
          onRevealNext={revealNext}
          onRevealAll={revealAll}
          onSetUserAnswers={setUserAnswers}
          onCheck={checkAnswers}
        />
      )}
    </div>
  );
}

function LearnMode() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* The Chain */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Die Umwandlungskette</h2>
        <div className="space-y-3">
          {[
            { from: 'MgK', op: '+ Abl', to: 'mwK', desc: 'Magnetkompasskurs + Ablenkung (aus Steuertafel, interpolieren!)' },
            { from: 'mwK', op: '+ Mw', to: 'rwK', desc: 'Missweisender Kurs + Missweisung (aus Karte, jahreskorrigiert!)' },
            { from: 'rwK', op: '+ BW', to: 'KdW', desc: 'Rechtweisender Kurs + Beschickung Wind (+ Backbord, − Steuerbord)' },
            { from: 'KdW', op: '+ BS', to: 'KaK', desc: 'Kurs durchs Wasser + Beschickung Strom (aus Stromdreieck)' },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                {i < 3 && <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-600" />}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">{step.from}</span>
                  <span className="text-orange-500 font-bold">{step.op}</span>
                  <span className="text-slate-400">=</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">{step.to}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Rules */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
        <h3 className="font-semibold text-red-800 dark:text-red-300 text-sm mb-2">⚠️ Wichtige Regeln</h3>
        <ul className="space-y-2 text-xs text-red-700 dark:text-red-400">
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Ablenkung interpolieren!</strong> MgK 035° → zwischen 030° (+5°) und 040° (+7°) → Abl = +6°</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Missweisung jahreskorrigiert!</strong> Karte 2013: Mw = −3° 40&apos;, Änderung 8&apos;/Jahr Ost → für 2020: −3° 40&apos; + 7 × 8&apos; = −2° 44&apos; ≈ −3°</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>BW Vorzeichen:</strong> Wind von Backbord (links) → +, Wind von Steuerbord (rechts) → −</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Peilungen:</strong> NUR Abl + Mw, KEINE BW und KEINE BS!</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Alle Winkel normieren:</strong> Ergebnis immer auf 0°–360° bringen</span>
          </li>
        </ul>
      </div>

      {/* Radar Head Up */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-2">📡 Radar &quot;Head Up&quot;</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          RaSP (Radar-Seitenpeilung) ist relativ zum Bug → zum MgK addieren. Falls &gt; 360°, einfach 360° abziehen.
        </p>
        <div className="mt-2 font-mono text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
          MgP = MgK + RaSP (falls &gt; 360° → − 360°)
        </div>
      </div>

      {/* Steuertafel */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setShowTable(!showTable)}
          className="w-full p-4 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          <span>📊 Steuertafel (Ablenkungstabelle)</span>
          <span>{showTable ? '▲' : '▼'}</span>
        </button>
        {showTable && (
          <div className="px-4 pb-4 animate-fadeIn">
            <div className="grid grid-cols-4 gap-1 text-xs">
              <div className="font-semibold text-slate-500 p-1">MgK</div>
              <div className="font-semibold text-slate-500 p-1">Abl</div>
              <div className="font-semibold text-slate-500 p-1">MgK</div>
              <div className="font-semibold text-slate-500 p-1">Abl</div>
              {steuertafel.map((entry, i) => {
                if (i % 2 !== 0) return null;
                const next = steuertafel[i + 1];
                return (
                  <Fragment key={i}>
                    <div className="p-1 bg-slate-50 dark:bg-slate-900 rounded">{entry.mgk}°</div>
                    <div className={`p-1 rounded font-mono ${entry.abl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {entry.abl >= 0 ? '+' : ''}{entry.abl}°
                    </div>
                    {next ? (
                      <>
                        <div className="p-1 bg-slate-50 dark:bg-slate-900 rounded">{next.mgk}°</div>
                        <div className={`p-1 rounded font-mono ${next.abl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {next.abl >= 0 ? '+' : ''}{next.abl}°
                        </div>
                      </>
                    ) : (
                      <>
                        <div />
                        <div />
                      </>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Example */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">📝 Rechenbeispiel (vorwärts)</h3>
        <ExampleCalculation />
      </div>
    </div>
  );
}

import { Fragment } from 'react';

function ExampleCalculation() {
  const steps = [
    { label: 'MgK', value: '135°', note: 'gegeben' },
    { label: '+ Abl', value: '+(-2.5°)', note: 'Steuertafel: 130°→−2°, 140°→−3°, interpoliert: −2.5°' },
    { label: '= mwK', value: '132.5° ≈ 133°', note: '' },
    { label: '+ Mw', value: '+(−3°)', note: 'aus Karte, jahreskorrigiert' },
    { label: '= rwK', value: '130°', note: '' },
    { label: '+ BW', value: '+(+2°)', note: 'Wind von Backbord → positiv' },
    { label: '= KdW', value: '132°', note: '' },
    { label: '+ BS', value: '+(−3°)', note: 'aus Stromdreieck' },
    { label: '= KaK', value: '129°', note: '' },
  ];

  return (
    <div className="space-y-1">
      {steps.map((step, i) => (
        <div key={i} className={`flex items-center gap-3 text-sm ${step.label.startsWith('=') ? 'font-semibold' : ''}`}>
          <span className="w-16 text-right font-mono text-xs text-slate-500">{step.label}</span>
          <span className="w-24 font-mono">{step.value}</span>
          {step.note && (
            <span className="text-xs text-slate-400 italic">{step.note}</span>
          )}
        </div>
      ))}
    </div>
  );
}

interface PracticeModeProps {
  problem: KursumwandlungProblem | null;
  practiceStep: PracticeStep;
  revealedSteps: number;
  userAnswers: Record<string, string>;
  score: { correct: number; total: number } | null;
  practiceCount: number;
  onStart: (type?: 'forward' | 'backward') => void;
  onRevealNext: () => void;
  onRevealAll: () => void;
  onSetUserAnswers: (answers: Record<string, string>) => void;
  onCheck: () => void;
}

function PracticeMode({
  problem,
  practiceStep,
  revealedSteps,
  userAnswers,
  score,
  practiceCount,
  onStart,
  onRevealNext,
  onRevealAll,
  onSetUserAnswers,
  onCheck,
}: PracticeModeProps) {
  const updateAnswer = (key: string, value: string) => {
    onSetUserAnswers({ ...userAnswers, [key]: value });
  };

  if (practiceStep === 'setup' || !problem) {
    return (
      <div className="space-y-4 animate-fadeIn">
        {practiceCount > 0 && (
          <div className="text-center text-sm text-slate-500 dark:text-slate-400">
            {practiceCount} Aufgaben geübt
          </div>
        )}
        <div className="space-y-3">
          <button
            onClick={() => onStart('forward')}
            className="w-full bg-navy-600 hover:bg-navy-700 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition-colors"
          >
            ▶️ Vorwärts: MgK → KaK
          </button>
          <button
            onClick={() => onStart('backward')}
            className="w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white py-4 rounded-xl font-semibold text-lg shadow-sm border border-slate-200 dark:border-slate-700 transition-colors"
          >
            ◀️ Rückwärts: KaK → MgK
          </button>
          <button
            onClick={() => onStart()}
            className="w-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-medium transition-colors"
          >
            🎲 Zufällig
          </button>
        </div>
      </div>
    );
  }

  const sol = problem.solution;
  const isForward = problem.type === 'forward';

  const solutionSteps = [
    {
      label: 'MgK',
      value: formatAngle(sol.mgk),
      key: isForward ? null : 'mgk',
      given: isForward,
    },
    {
      label: 'Abl (Steuertafel)',
      value: formatSigned(sol.abl),
      key: 'abl',
      given: false,
    },
    {
      label: '= mwK',
      value: formatAngle(sol.mwk),
      key: 'mwk',
      given: false,
    },
    {
      label: `Mw (${problem.missweisung.baseValue}° Basis ${problem.missweisung.baseYear}, ${problem.missweisung.yearlyChange > 0 ? '+' : ''}${problem.missweisung.yearlyChange}°/Jahr → ${problem.targetYear})`,
      value: formatSigned(sol.mw),
      key: 'mw',
      given: false,
    },
    {
      label: '= rwK',
      value: formatAngle(sol.rwk),
      key: 'rwk',
      given: false,
    },
    {
      label: `BW (Wind von ${problem.windSide === 'backbord' ? 'Backbord → +' : 'Steuerbord → −'})`,
      value: formatSigned(sol.bw),
      key: null, // BW is given
      given: true,
    },
    {
      label: '= KdW',
      value: formatAngle(sol.kdw),
      key: 'kdw',
      given: false,
    },
    {
      label: 'BS (Strom)',
      value: formatSigned(sol.bs),
      key: null, // BS is given
      given: true,
    },
    {
      label: '= KaK',
      value: formatAngle(sol.kak),
      key: isForward ? 'kak' : null,
      given: !isForward,
    },
  ];

  if (practiceStep === 'result') {
    return (
      <div className="space-y-4 animate-fadeIn">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-4xl block mb-2">
            {score && score.total > 0 && score.correct / score.total >= 0.8 ? '🌟' : score && score.correct / score.total >= 0.5 ? '👍' : '💪'}
          </span>
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            {score?.correct} von {score?.total} richtig
          </p>
        </div>

        {/* Solution breakdown */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-200 mb-3">Lösung</h3>
          <div className="space-y-2">
            {solutionSteps.map((step, i) => {
              const userVal = step.key ? userAnswers[step.key] : null;
              const isCorrectAnswer = step.key && userVal
                ? (() => {
                    const parsed = parseFloat(userVal);
                    if (isNaN(parsed)) return false;
                    if (step.key === 'abl' || step.key === 'mw') {
                      return Math.abs(parsed - (step.key === 'abl' ? sol.abl : sol.mw)) <= 1;
                    }
                    return checkAnswer(parsed, sol[step.key as keyof KursumwandlungResult] as number, 2);
                  })()
                : null;

              return (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-10 text-right font-mono text-xs text-slate-400">
                    {step.label.startsWith('=') ? '=' : '+'}
                  </span>
                  <span className={`flex-1 ${step.label.startsWith('=') ? 'font-semibold' : ''}`}>
                    {step.label.replace('= ', '')}
                  </span>
                  <span className="font-mono font-semibold">{step.value}</span>
                  {userVal && (
                    <span className={`text-xs px-1.5 py-0.5 rounded ${isCorrectAnswer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {userVal}°
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onStart(problem.type as 'forward' | 'backward')}
            className="flex-1 bg-navy-600 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Nächste Aufgabe
          </button>
          <button
            onClick={() => onStart()}
            className="px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-medium transition-colors"
          >
            🎲
          </button>
        </div>
      </div>
    );
  }

  // Solving step
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Problem statement */}
      <div className="bg-navy-600 text-white rounded-xl p-4">
        <div className="text-xs opacity-80 mb-1">{isForward ? 'Vorwärts: MgK → KaK' : 'Rückwärts: KaK → MgK'}</div>
        <div className="text-lg font-bold">
          {isForward ? `MgK = ${formatAngle(sol.mgk)}` : `KaK = ${formatAngle(sol.kak)}`}
        </div>
        <div className="mt-2 text-sm opacity-90 space-y-1">
          <div>Mw: {problem.missweisung.baseValue}° (Basis {problem.missweisung.baseYear}), {problem.missweisung.yearlyChange > 0 ? '+' : ''}{problem.missweisung.yearlyChange}°/Jahr → Jahr {problem.targetYear}</div>
          <div>Wind von {problem.windSide === 'backbord' ? 'Backbord' : 'Steuerbord'}, BW = {formatSigned(sol.bw)}</div>
          <div>BS = {formatSigned(sol.bs)} (aus Stromdreieck)</div>
        </div>
      </div>

      {/* Input fields */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Deine Berechnung</h3>
        <div className="space-y-3">
          {solutionSteps.map((step, i) => {
            if (step.given || !step.key) {
              return (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-24 text-slate-500 text-xs">{step.label.replace(/\(.*\)/, '').trim()}</span>
                  <span className="font-mono text-slate-400">{step.given ? step.value : '—'}</span>
                </div>
              );
            }
            const isRevealed = revealedSteps > i;
            return (
              <div key={i} className="flex items-center gap-2">
                <span className="w-24 text-xs text-slate-500 flex-shrink-0">
                  {step.label.replace(/\(.*\)/, '').trim()}
                </span>
                <input
                  type="number"
                  step="0.5"
                  placeholder="?"
                  value={userAnswers[step.key] || ''}
                  onChange={(e) => updateAnswer(step.key!, e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-mono bg-white dark:bg-slate-900 focus:ring-2 focus:ring-navy-500 dark:focus:ring-blue-500 focus:outline-none"
                />
                <span className="text-xs text-slate-400">°</span>
                {isRevealed && (
                  <span className="text-xs font-mono text-green-600 dark:text-green-400 ml-1">{step.value}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onCheck}
          className="flex-1 bg-navy-600 hover:bg-navy-700 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          ✅ Prüfen
        </button>
        <button
          onClick={onRevealNext}
          className="px-4 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          💡 Tipp
        </button>
        <button
          onClick={onRevealAll}
          className="px-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          👁 Lösung
        </button>
      </div>
    </div>
  );
}
