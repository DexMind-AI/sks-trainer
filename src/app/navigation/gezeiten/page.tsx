'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  generateGezeitenProblem,
  formatDuration,
  formatHeight,
  convertTimezone,
  addMinutes,
  timeDiffMinutes,
  type GezeitenProblem,
  type GezeitenSolution,
} from '@/data/navigation/gezeiten';

type Step = 'intro' | 'formblatt' | 'result';

export default function GezeitenPage() {
  const [problem, setProblem] = useState<GezeitenProblem | null>(null);
  const [step, setStep] = useState<Step>('intro');
  const [currentFormStep, setCurrentFormStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showSolution, setShowSolution] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

  const startProblem = useCallback(() => {
    const p = generateGezeitenProblem();
    setProblem(p);
    setStep('formblatt');
    setCurrentFormStep(0);
    setUserAnswers({});
    setShowSolution(false);
  }, []);

  const updateAnswer = (key: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextFormStep = () => {
    setCurrentFormStep(prev => Math.min(prev + 1, 6));
  };

  const finishProblem = () => {
    setStep('result');
    setPracticeCount(prev => prev + 1);
  };

  return (
    <div className="py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/navigation" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-lg font-bold text-navy-600 dark:text-blue-400">🌊 Gezeiten</h1>
        <div className="w-12" />
      </div>

      {step === 'intro' && (
        <IntroView onStart={startProblem} practiceCount={practiceCount} />
      )}

      {step === 'formblatt' && problem && (
        <FormblattView
          problem={problem}
          currentStep={currentFormStep}
          userAnswers={userAnswers}
          showSolution={showSolution}
          onUpdateAnswer={updateAnswer}
          onNextStep={nextFormStep}
          onShowSolution={() => setShowSolution(true)}
          onFinish={finishProblem}
        />
      )}

      {step === 'result' && problem && (
        <ResultView
          problem={problem}
          userAnswers={userAnswers}
          onNewProblem={startProblem}
          onBackToIntro={() => setStep('intro')}
        />
      )}
    </div>
  );
}

function IntroView({ onStart, practiceCount }: { onStart: () => void; practiceCount: number }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      {practiceCount > 0 && (
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          {practiceCount} Aufgaben geübt ✓
        </div>
      )}

      {/* Explanation */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">So funktioniert die Gezeitenberechnung</h2>
        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Bezugsort ablesen</p>
              <p className="text-xs">HW/NW-Zeiten und -Höhen für Helgoland aus Gezeitentafeln</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Zeitunterschied (ZUG) anwenden</p>
              <p className="text-xs">HW- und NW-Zeiten für Anschlussort korrigieren</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Höhenunterschied (HUG) anwenden</p>
              <p className="text-xs">HW- und NW-Höhen für Anschlussort korrigieren</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Tidenwerte berechnen</p>
              <p className="text-xs">Tidenfall, Tidenstieg, Fall-/Stiegdauer, Alter der Gezeit</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">Zeitzone beachten!</p>
              <p className="text-xs">UTC → MEZ (+1h) oder MESZ (+2h) je nach Aufgabenstellung</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time zone reminder */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
        <div className="flex gap-2">
          <span>⏰</span>
          <div className="text-xs text-amber-700 dark:text-amber-400">
            <p className="font-medium">Zeitzonen-Merkregel:</p>
            <p>Gezeitentafeln = UTC. MEZ = UTC + 1h. MESZ = UTC + 2h.</p>
            <p className="mt-1">Sommerzeit (MESZ): letzter Sonntag März bis letzter Sonntag Oktober.</p>
          </div>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-navy-600 hover:bg-navy-700 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition-colors"
      >
        🌊 Aufgabe starten
      </button>
    </div>
  );
}

interface FormblattViewProps {
  problem: GezeitenProblem;
  currentStep: number;
  userAnswers: Record<string, string>;
  showSolution: boolean;
  onUpdateAnswer: (key: string, value: string) => void;
  onNextStep: () => void;
  onShowSolution: () => void;
  onFinish: () => void;
}

function FormblattView({
  problem,
  currentStep,
  userAnswers,
  showSolution,
  onUpdateAnswer,
  onNextStep,
  onShowSolution,
  onFinish,
}: FormblattViewProps) {
  const sol = problem.solution;

  const formSteps = [
    {
      title: '1. Bezugsort ablesen',
      description: `Gezeitentafel für ${problem.bezugsort.name}, ${problem.tag.datum}`,
      fields: [
        { key: 'hw_zeit', label: 'HW Zeit (UTC)', solution: sol.hwZeit, placeholder: 'HH:MM' },
        { key: 'hw_hoehe', label: 'HW Höhe (m)', solution: sol.hwHoehe.toFixed(1), placeholder: 'z.B. 2.8' },
        { key: 'nw_zeit', label: 'NW Zeit (UTC)', solution: sol.nwZeit, placeholder: 'HH:MM' },
        { key: 'nw_hoehe', label: 'NW Höhe (m)', solution: sol.nwHoehe.toFixed(1), placeholder: 'z.B. 0.4' },
      ],
    },
    {
      title: '2. Zeitunterschied (ZUG)',
      description: `Anschlussort: ${problem.anschlussort.name}`,
      fields: [
        { key: 'zug_hw', label: 'ZUG HW (min)', solution: `${sol.zugHW >= 0 ? '+' : ''}${sol.zugHW}`, placeholder: 'z.B. +25' },
        { key: 'zug_nw', label: 'ZUG NW (min)', solution: `${sol.zugNW >= 0 ? '+' : ''}${sol.zugNW}`, placeholder: 'z.B. +50' },
      ],
    },
    {
      title: '3. Anschlussort-Zeiten',
      description: 'Bezugsort-Zeit + ZUG = Anschlussort-Zeit',
      fields: [
        { key: 'anschluss_hw_zeit', label: `HW Zeit (${problem.zeitzone})`, solution: sol.anschlussHWZeit, placeholder: 'HH:MM' },
        { key: 'anschluss_nw_zeit', label: `NW Zeit (${problem.zeitzone})`, solution: sol.anschlussNWZeit, placeholder: 'HH:MM' },
      ],
    },
    {
      title: '4. Höhenunterschied (HUG)',
      description: `Anschlussort: ${problem.anschlussort.name}`,
      fields: [
        { key: 'hug_hw', label: 'HUG HW (m)', solution: `${sol.hugHW >= 0 ? '+' : ''}${sol.hugHW}`, placeholder: 'z.B. +0.6' },
        { key: 'hug_nw', label: 'HUG NW (m)', solution: `${sol.hugNW >= 0 ? '+' : ''}${sol.hugNW}`, placeholder: 'z.B. +0.1' },
      ],
    },
    {
      title: '5. Anschlussort-Höhen',
      description: 'Bezugsort-Höhe + HUG = Anschlussort-Höhe',
      fields: [
        { key: 'anschluss_hw_hoehe', label: 'HW Höhe (m)', solution: sol.anschlussHWHoehe.toFixed(1), placeholder: 'z.B. 3.4' },
        { key: 'anschluss_nw_hoehe', label: 'NW Höhe (m)', solution: sol.anschlussNWHoehe.toFixed(1), placeholder: 'z.B. 0.5' },
      ],
    },
    {
      title: '6. Abgeleitete Werte',
      description: 'Tidenfall, Dauer, Alter der Gezeit',
      fields: [
        { key: 'tidenfall', label: 'Tidenfall (m)', solution: sol.tidenfall.toFixed(1), placeholder: 'HW − NW' },
        { key: 'falldauer', label: 'Falldauer (min)', solution: `${sol.falldauer}`, placeholder: 'Minuten' },
        { key: 'gezeiten_alter', label: 'Alter der Gezeit', solution: sol.gezeitenAlter, placeholder: 'Spring/Nipp/Mitt' },
      ],
    },
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Problem statement */}
      <div className="bg-navy-600 text-white rounded-xl p-4">
        <div className="text-xs opacity-80 mb-1">Gezeitenformblatt</div>
        <div className="font-bold">{problem.tag.datum} — {problem.bezugsort.name} → {problem.anschlussort.name}</div>
        <div className="mt-2 text-sm opacity-90 space-y-0.5">
          <div>Zeitzone: {problem.zeitzone}</div>
          <div>Mondphase: {problem.mondphase}</div>
          <div>HW {problem.bezugsort.name} (UTC): {sol.hwZeit} — {sol.hwHoehe.toFixed(1)} m</div>
          <div>NW {problem.bezugsort.name} (UTC): {sol.nwZeit} — {sol.nwHoehe.toFixed(1)} m</div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex gap-1">
        {formSteps.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              i <= currentStep ? 'bg-navy-600 dark:bg-blue-500' : 'bg-slate-200 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>

      {/* Current form step */}
      {formSteps.map((formStep, stepIdx) => {
        if (stepIdx > currentStep) return null;
        const isActive = stepIdx === currentStep;

        return (
          <div
            key={stepIdx}
            className={`bg-white dark:bg-slate-800 rounded-xl p-4 border transition-all ${
              isActive
                ? 'border-navy-500 dark:border-blue-500 shadow-md'
                : 'border-slate-200 dark:border-slate-700 opacity-70'
            }`}
          >
            <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-200">{formStep.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{formStep.description}</p>
            <div className="space-y-2">
              {formStep.fields.map((field) => (
                <div key={field.key} className="flex items-center gap-2">
                  <label className="w-28 text-xs text-slate-500 flex-shrink-0">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={userAnswers[field.key] || ''}
                    onChange={(e) => onUpdateAnswer(field.key, e.target.value)}
                    disabled={!isActive}
                    className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-mono bg-white dark:bg-slate-900 focus:ring-2 focus:ring-navy-500 dark:focus:ring-blue-500 focus:outline-none disabled:opacity-50"
                  />
                  {showSolution && (
                    <span className="text-xs font-mono text-green-600 dark:text-green-400 w-16 text-right flex-shrink-0">
                      {field.solution}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Actions */}
      <div className="flex gap-2">
        {currentStep < formSteps.length - 1 ? (
          <button
            onClick={onNextStep}
            className="flex-1 bg-navy-600 hover:bg-navy-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Nächster Schritt →
          </button>
        ) : (
          <button
            onClick={onFinish}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            ✅ Fertig
          </button>
        )}
        <button
          onClick={onShowSolution}
          className="px-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          👁 Lösung
        </button>
      </div>
    </div>
  );
}

interface ResultViewProps {
  problem: GezeitenProblem;
  userAnswers: Record<string, string>;
  onNewProblem: () => void;
  onBackToIntro: () => void;
}

function ResultView({ problem, userAnswers, onNewProblem, onBackToIntro }: ResultViewProps) {
  const sol = problem.solution;

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">📋 Ergebnis: {problem.anschlussort.name}</h3>
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">HW Zeit ({sol.zeitLocal})</div>
              <div className="font-bold text-lg text-blue-800 dark:text-blue-200">{sol.anschlussHWZeit}</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">HW Höhe</div>
              <div className="font-bold text-lg text-blue-800 dark:text-blue-200">{formatHeight(sol.anschlussHWHoehe)}</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">NW Zeit ({sol.zeitLocal})</div>
              <div className="font-bold text-lg text-orange-800 dark:text-orange-200">{sol.anschlussNWZeit}</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">NW Höhe</div>
              <div className="font-bold text-lg text-orange-800 dark:text-orange-200">{formatHeight(sol.anschlussNWHoehe)}</div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-3 space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-500">Tidenfall:</span>
              <span className="font-mono font-semibold">{formatHeight(sol.tidenfall)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Falldauer:</span>
              <span className="font-mono font-semibold">{formatDuration(sol.falldauer)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Alter der Gezeit:</span>
              <span className="font-mono font-semibold text-xs">{sol.gezeitenAlter}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onNewProblem}
          className="flex-1 bg-navy-600 text-white py-3 rounded-xl font-semibold"
        >
          Nächste Aufgabe
        </button>
        <button
          onClick={onBackToIntro}
          className="px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-medium"
        >
          Fertig
        </button>
      </div>
    </div>
  );
}
