'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { symbolCards, symbolCategories, type SymbolCard } from '@/data/navigation/symbole';
import { Rating, CardProgress, updateCard, isDue, createNewCard, getBoxColor } from '@/lib/leitner';

const STORAGE_KEY = 'sks-nav-symbole-progress';

function getSymbolProgress(): Record<string, CardProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch { return {}; }
}

function saveSymbolProgress(progress: Record<string, CardProgress>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

type ViewMode = 'learn' | 'browse';

export default function SymbolePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('learn');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [progress, setProgress] = useState<Record<string, CardProgress>>({});
  const [queue, setQueue] = useState<SymbolCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    setProgress(getSymbolProgress());
  }, []);

  const buildQueue = useCallback(() => {
    const prog = getSymbolProgress();
    let cards = symbolCards;
    if (selectedCategory) {
      cards = cards.filter(c => c.category === selectedCategory);
    }

    const now = Date.now();
    const scored = cards.map(card => {
      const p = prog[card.id];
      let priority = 0;
      if (!p) priority = 100;
      else if (isDue(p, now)) priority = 200 - p.box * 10;
      else priority = p.box;
      return { card, priority };
    });

    scored.sort((a, b) => {
      if (Math.abs(a.priority - b.priority) > 5) return b.priority - a.priority;
      return Math.random() - 0.5;
    });

    return scored.slice(0, 30).map(s => s.card);
  }, [selectedCategory]);

  const startLearning = useCallback(() => {
    const q = buildQueue();
    setQueue(q);
    setCurrentIdx(0);
    setRevealed(false);
    setSessionStats({ reviewed: 0, correct: 0 });
    setIsComplete(false);
    setViewMode('learn');
  }, [buildQueue]);

  const handleRate = (rating: Rating) => {
    const card = queue[currentIdx];
    if (!card) return;

    const prog = getSymbolProgress();
    const current = prog[card.id] || createNewCard(card.id);
    const updated = updateCard(current, rating);
    prog[card.id] = updated;
    saveSymbolProgress(prog);
    setProgress(prog);

    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (rating === 'gut' || rating === 'leicht' ? 1 : 0),
    }));

    if (rating === 'nochmal') {
      const newQueue = [...queue];
      const insertAt = Math.min(currentIdx + 3 + Math.floor(Math.random() * 3), newQueue.length);
      newQueue.splice(insertAt, 0, card);
      setQueue(newQueue);
    }

    const nextIdx = currentIdx + 1;
    if (nextIdx < queue.length) {
      setCurrentIdx(nextIdx);
      setRevealed(false);
    } else {
      setIsComplete(true);
    }
  };

  const totalCards = symbolCards.length;
  const masteredCount = Object.values(progress).filter(p => p.box >= 4).length;

  // Browse mode filtering
  const filteredCards = useMemo(() => {
    let cards = symbolCards;
    if (selectedCategory) cards = cards.filter(c => c.category === selectedCategory);
    if (searchQuery.length >= 2) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(c =>
        c.question.toLowerCase().includes(q) ||
        c.answer.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }
    return cards;
  }, [selectedCategory, searchQuery]);

  const ratingButtons: { rating: Rating; label: string; emoji: string; color: string }[] = [
    { rating: 'nochmal', label: 'Nochmal', emoji: '🔄', color: 'bg-red-500' },
    { rating: 'schwer', label: 'Schwer', emoji: '😓', color: 'bg-orange-500' },
    { rating: 'gut', label: 'Gut', emoji: '👍', color: 'bg-blue-500' },
    { rating: 'leicht', label: 'Leicht', emoji: '⚡', color: 'bg-green-500' },
  ];

  return (
    <div className="py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/navigation" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-lg font-bold text-navy-600 dark:text-blue-400">🗺️ Symbole & Zeichen</h1>
        <div className="w-12" />
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">{masteredCount}/{totalCards} gemeistert</span>
        <div className="flex bg-slate-200 dark:bg-slate-700 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('learn')}
            className={`px-3 py-1 text-xs rounded-md ${viewMode === 'learn' ? 'bg-white dark:bg-slate-600 shadow text-navy-600' : 'text-slate-500'}`}
          >
            Lernen
          </button>
          <button
            onClick={() => setViewMode('browse')}
            className={`px-3 py-1 text-xs rounded-md ${viewMode === 'browse' ? 'bg-white dark:bg-slate-600 shadow text-navy-600' : 'text-slate-500'}`}
          >
            Durchsuchen
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-1">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${
            !selectedCategory ? 'bg-navy-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          Alle ({totalCards})
        </button>
        {symbolCategories.map(cat => {
          const count = symbolCards.filter(c => c.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${
                selectedCategory === cat ? 'bg-navy-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {viewMode === 'learn' ? (
        <>
          {!queue.length || isComplete ? (
            <div className="space-y-4 animate-fadeIn">
              {isComplete && (
                <div className="text-center py-4">
                  <span className="text-4xl block mb-2">
                    {sessionStats.correct / Math.max(sessionStats.reviewed, 1) >= 0.8 ? '🌟' : '💪'}
                  </span>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {sessionStats.correct} von {sessionStats.reviewed} richtig
                  </p>
                </div>
              )}
              <button
                onClick={startLearning}
                className="w-full bg-navy-600 hover:bg-navy-700 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition-colors"
              >
                {isComplete ? '🔄 Weiter lernen' : '📚 Lernen starten'}
              </button>
            </div>
          ) : (
            <div className="animate-fadeIn">
              {/* Progress */}
              <div className="flex items-center justify-between mb-3 text-sm text-slate-500">
                <span>Karte {currentIdx + 1} von {queue.length}</span>
                <span>{sessionStats.reviewed} gelernt</span>
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                <div className="p-6">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">{queue[currentIdx].category}</span>
                  <p className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed mt-2">
                    {queue[currentIdx].question}
                  </p>
                </div>

                {revealed && (
                  <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-6 animate-fadeIn">
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {queue[currentIdx].answer}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {queue[currentIdx].keywords.map(kw => (
                        <span key={kw} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4">
                {!revealed ? (
                  <button
                    onClick={() => setRevealed(true)}
                    className="w-full py-4 bg-navy-600 text-white font-semibold rounded-xl text-lg shadow-md"
                  >
                    Antwort zeigen
                  </button>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    {ratingButtons.map(({ rating, label, emoji, color }) => (
                      <button
                        key={rating}
                        onClick={() => handleRate(rating)}
                        className={`${color} text-white rounded-xl py-3 transition-all shadow-md flex flex-col items-center gap-0.5`}
                      >
                        <span className="text-xl">{emoji}</span>
                        <span className="text-xs font-semibold">{label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        // Browse mode
        <div className="space-y-3 animate-fadeIn">
          <input
            type="text"
            placeholder="Symbole durchsuchen..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
          />

          <p className="text-xs text-slate-500">{filteredCards.length} Karten</p>

          <div className="space-y-2">
            {filteredCards.map(card => {
              const p = progress[card.id];
              const isExpanded = expandedCard === card.id;
              return (
                <div key={card.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                    className="w-full text-left p-3 flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {p ? (
                        <span className={`inline-block w-2 h-2 rounded-full ${getBoxColor(p.box)}`} />
                      ) : (
                        <span className="inline-block w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-slate-400">{card.category}</span>
                      <p className="text-sm text-slate-800 dark:text-slate-200 line-clamp-2">{card.question}</p>
                    </div>
                    <span className="text-slate-400 text-xs">{isExpanded ? '▲' : '▼'}</span>
                  </button>
                  {isExpanded && (
                    <div className="px-3 pb-3 animate-fadeIn border-t border-slate-100 dark:border-slate-700">
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mt-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">{card.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
