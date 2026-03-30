'use client';

import { useState } from 'react';
import { Question } from '@/data/questions';

interface AICheckResult {
  score: 0 | 1 | 2;
  feedback: string;
  missingKeywords: string[];
  matchedKeywords: string[];
}

interface AnswerCheckerProps {
  question: Question;
  onResult: (score: 0 | 1 | 2) => void;
  onFallback: () => void; // switch to manual mode
}

export default function AnswerChecker({ question, onResult, onFallback }: AnswerCheckerProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<AICheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async () => {
    if (!userAnswer.trim()) return;
    
    setChecking(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.question,
          userAnswer: userAnswer.trim(),
          modelAnswer: question.answer,
          keywords: question.keywords,
        }),
      });

      if (!response.ok) {
        throw new Error('API Fehler');
      }

      const data: AICheckResult = await response.json();
      setResult(data);
    } catch {
      setError('KI-Bewertung nicht verfügbar');
      // Auto-fallback after short delay
      setTimeout(() => onFallback(), 2000);
    } finally {
      setChecking(false);
    }
  };

  const scoreConfig = {
    0: { emoji: '🔴', label: '0/2', color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800', textColor: 'text-red-700 dark:text-red-400' },
    1: { emoji: '🟡', label: '1/2', color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800', textColor: 'text-yellow-700 dark:text-yellow-400' },
    2: { emoji: '🟢', label: '2/2', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800', textColor: 'text-green-700 dark:text-green-400' },
  };

  if (error) {
    return (
      <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
        <p className="text-sm text-orange-700 dark:text-orange-400">⚠️ {error}</p>
        <p className="text-xs text-orange-600 dark:text-orange-500 mt-1">Wechsle zur manuellen Bewertung...</p>
      </div>
    );
  }

  if (result) {
    const config = scoreConfig[result.score];
    return (
      <div className="mt-4 space-y-3 animate-fadeIn">
        {/* Score badge */}
        <div className={`p-4 rounded-xl border ${config.color}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{config.emoji}</span>
            <div>
              <span className={`text-2xl font-bold ${config.textColor}`}>{config.label}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">Punkte</span>
            </div>
          </div>
          <p className={`text-sm ${config.textColor}`}>{result.feedback}</p>
        </div>

        {/* Keywords */}
        {(result.matchedKeywords.length > 0 || result.missingKeywords.length > 0) && (
          <div className="flex flex-wrap gap-1.5">
            {result.matchedKeywords.map((kw) => (
              <span key={kw} className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                ✓ {kw}
              </span>
            ))}
            {result.missingKeywords.map((kw) => (
              <span key={kw} className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full">
                ✗ {kw}
              </span>
            ))}
          </div>
        )}

        {/* Your answer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <div className="text-xs font-medium text-slate-400 mb-1">Deine Antwort</div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{userAnswer}</p>
        </div>

        {/* Model answer */}
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Musterantwort</div>
          <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">{question.answer}</p>
        </div>

        {/* Continue button */}
        <button
          onClick={() => onResult(result.score)}
          className="w-full py-3 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-xl transition-colors"
        >
          Nächste Frage →
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {/* Text input */}
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Deine Antwort eingeben..."
        className="w-full h-32 p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
        disabled={checking}
      />

      {/* Check button */}
      <button
        onClick={handleCheck}
        disabled={!userAnswer.trim() || checking}
        className={`w-full py-3 font-semibold rounded-xl text-lg transition-all ${
          !userAnswer.trim() || checking
            ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 cursor-not-allowed'
            : 'bg-navy-600 hover:bg-navy-700 text-white shadow-md active:scale-[0.98]'
        }`}
      >
        {checking ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span> Dein Prüfer bewertet...
          </span>
        ) : (
          '🤖 Antwort prüfen'
        )}
      </button>

      {/* Manual fallback */}
      <button
        onClick={onFallback}
        className="w-full py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
      >
        Lieber selbst bewerten →
      </button>
    </div>
  );
}
