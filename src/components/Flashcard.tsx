'use client';

import { useState, useCallback } from 'react';
import { Question } from '@/data/questions';
import { Rating } from '@/lib/leitner';
import { getRelevanceBadge, getBoegen, getFrequency } from '@/lib/exam-relevance';
import { highlightKeywords, extractKeywords } from '@/lib/keywords';
import AnswerChecker from './AnswerChecker';
import ExplanationBox from './ExplanationBox';
import { getExplanation } from '@/data/explanations';

interface FlashcardProps {
  question: Question;
  box: number;
  onRate: (rating: Rating) => void;
  index: number;
  total: number;
  aiCheckEnabled?: boolean;
}

export default function Flashcard({ question, box, onRate, index, total, aiCheckEnabled = false }: FlashcardProps) {
  const [revealed, setRevealed] = useState(false);
  const [aiMode, setAiMode] = useState(aiCheckEnabled);
  const [showManual, setShowManual] = useState(false);

  const boxColors: Record<number, string> = {
    1: 'border-red-400',
    2: 'border-orange-400',
    3: 'border-yellow-400',
    4: 'border-blue-400',
    5: 'border-green-400',
  };

  const badge = getRelevanceBadge(question.id);
  const boegen = getBoegen(question.id);
  const freq = getFrequency(question.id);

  const ratingButtons: { rating: Rating; label: string; emoji: string; color: string; subtitle: string }[] = [
    { rating: 'nochmal', label: 'Nochmal', emoji: '🔄', color: 'bg-red-500 hover:bg-red-600 active:bg-red-700', subtitle: 'Keine Ahnung' },
    { rating: 'schwer', label: 'Schwer', emoji: '😓', color: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700', subtitle: 'Teilweise' },
    { rating: 'gut', label: 'Gut', emoji: '👍', color: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700', subtitle: 'Gewusst' },
    { rating: 'leicht', label: 'Leicht', emoji: '⚡', color: 'bg-green-500 hover:bg-green-600 active:bg-green-700', subtitle: 'Sofort' },
  ];

  // Map AI score to rating
  const handleAIResult = useCallback((score: 0 | 1 | 2) => {
    const ratingMap: Record<number, Rating> = {
      0: 'nochmal',
      1: 'schwer',
      2: 'gut',
    };
    setRevealed(false);
    setShowManual(false);
    onRate(ratingMap[score]);
  }, [onRate]);

  const handleFallback = useCallback(() => {
    setShowManual(true);
    setRevealed(true);
  }, []);

  // Extract enhanced keywords for highlighting
  const extractedKeywords = extractKeywords(question.answer);

  // Render highlighted answer text
  const renderHighlightedAnswer = () => {
    const segments = highlightKeywords(question.answer, question.keywords, extractedKeywords);
    return (
      <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
        {segments.map((seg, i) => (
          seg.isKeyword ? (
            <span
              key={i}
              className="bg-amber-100 dark:bg-amber-900/30 font-semibold rounded px-0.5"
              title="Schlüsselbegriff"
            >
              {seg.text}
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        ))}
      </p>
    );
  };

  const explanation = getExplanation(question.id);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-3 text-sm text-slate-500 dark:text-slate-400">
        <span>Frage {index + 1} von {total}</span>
        <span className={`px-2 py-0.5 rounded text-xs text-white ${box === 1 ? 'bg-red-500' : box === 2 ? 'bg-orange-500' : box === 3 ? 'bg-yellow-500' : box === 4 ? 'bg-blue-500' : 'bg-green-500'}`}>
          Box {box}
        </span>
      </div>

      {/* Card */}
      <div
        className={`rounded-2xl border-2 ${boxColors[box] || 'border-slate-300'} bg-white dark:bg-slate-800 shadow-lg overflow-hidden transition-all duration-300`}
      >
        {/* Relevance badge */}
        <div className="px-6 pt-4 flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${badge.color} ${badge.textColor}`}>
            {badge.emoji} {badge.label}
          </span>
          {boegen.length > 0 && (
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Bogen {boegen.join(', ')}
            </span>
          )}
          {freq === 0 && (
            <span className="text-xs text-slate-400 dark:text-slate-500 italic">
              Nicht prüfungsrelevant
            </span>
          )}
        </div>

        {/* Question */}
        <div className="p-6 pt-3">
          <div className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-2">
            {question.id}
          </div>
          <p className={`text-lg font-medium leading-relaxed ${freq === 0 ? 'text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
            {question.question}
          </p>
        </div>

        {/* AI Check mode (before reveal) */}
        {aiMode && !revealed && !showManual && (
          <div className="px-6 pb-6">
            <AnswerChecker
              question={question}
              onResult={handleAIResult}
              onFallback={handleFallback}
            />
          </div>
        )}

        {/* Answer (revealed) */}
        {revealed && (
          <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-6 animate-fadeIn">
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-2">
              Musterantwort
            </div>
            {renderHighlightedAnswer()}
            {question.keywords.length > 0 && (
              <>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {question.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                  🔑 Schlüsselbegriffe sind hervorgehoben — diese muss der Prüfer in deiner Antwort finden
                </p>
              </>
            )}
            {/* Explanation (collapsible, initially closed) */}
            {explanation && (
              <ExplanationBox text={explanation} defaultOpen={false} />
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-4">
        {!revealed && !aiMode ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-4 bg-navy-600 hover:bg-navy-700 active:bg-navy-800 text-white font-semibold rounded-xl text-lg transition-colors shadow-md"
          >
            Antwort zeigen
          </button>
        ) : revealed || showManual ? (
          <div className="space-y-2">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-2">
              Wie gut wusstest du die Antwort?
            </p>
            <div className="grid grid-cols-4 gap-2">
              {ratingButtons.map(({ rating, label, emoji, color, subtitle }) => (
                <button
                  key={rating}
                  onClick={() => {
                    setRevealed(false);
                    setShowManual(false);
                    onRate(rating);
                  }}
                  className={`${color} text-white rounded-xl py-3 px-2 transition-all shadow-md flex flex-col items-center gap-0.5`}
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="text-xs font-semibold">{label}</span>
                  <span className="text-[10px] opacity-80">{subtitle}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* AI mode toggle - only show when not in AI check flow */}
        {!revealed && !showManual && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              onClick={() => setAiMode(!aiMode)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                aiMode
                  ? 'bg-navy-100 dark:bg-navy-900/30 text-navy-600 dark:text-blue-400'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
              }`}
            >
              🤖 KI-Bewertung {aiMode ? 'an' : 'aus'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
