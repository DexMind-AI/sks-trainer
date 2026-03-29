'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { catalog, Question } from '@/data/questions';
import { Rating, CardProgress, updateCard, isDue, createNewCard } from '@/lib/leitner';
import { getAllProgress, getCardProgress, saveCardProgress, recordReview } from '@/lib/storage';
import { getExamRelevantQuestions, getHighValueQuestions, isNeverTested, EXAM_RELEVANT_COUNT } from '@/lib/exam-relevance';
import Flashcard from '@/components/Flashcard';
import Link from 'next/link';

function LernenContent() {
  const searchParams = useSearchParams();
  const sectionFilter = searchParams.get('section');
  const mode = searchParams.get('mode'); // 'minimal' for exam-relevant only

  const isMinimalMode = mode === 'minimal';

  const [queue, setQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 });
  const [cardProgress, setCardProgress] = useState<CardProgress | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const buildQueue = useCallback(() => {
    const progress = getAllProgress();
    let questions: Question[];

    if (isMinimalMode) {
      // Minimal mode: only exam-relevant questions, high-value first
      const highValue = getHighValueQuestions();
      const examRelevant = getExamRelevantQuestions();
      const highValueIds = new Set(highValue.map(q => q.id));
      const otherRelevant = examRelevant.filter(q => !highValueIds.has(q.id));
      questions = [...highValue, ...otherRelevant];
    } else if (sectionFilter) {
      const section = catalog.sections.find(s => s.id === sectionFilter);
      questions = section ? section.questions : [];
    } else {
      questions = catalog.sections.flatMap(s => s.questions);
    }

    // Prioritize: due cards first, then unseen, then by box (lowest first)
    const now = Date.now();
    const scored = questions.map((q, originalIndex) => {
      const p = progress[q.id];
      let priority = 0;

      if (!p) {
        // Unseen - high priority, but in minimal mode preserve high-value ordering
        priority = isMinimalMode ? 100 + (originalIndex < 42 ? 50 : 0) : 100;
      } else if (isDue(p, now)) {
        // Due for review - highest priority, lower box = more urgent
        priority = 200 - p.box * 10;
      } else {
        // Not due yet - low priority
        priority = p.box;
      }

      return { question: q, priority, progress: p };
    });

    // Sort by priority (highest first), shuffle within same priority
    scored.sort((a, b) => {
      if (Math.abs(a.priority - b.priority) > 5) return b.priority - a.priority;
      return Math.random() - 0.5;
    });

    // Take top 50 for this session
    const sessionQueue = scored.slice(0, 50).map(s => s.question);
    return sessionQueue;
  }, [sectionFilter, isMinimalMode]);

  useEffect(() => {
    const q = buildQueue();
    setQueue(q);
    if (q.length > 0) {
      setCardProgress(getCardProgress(q[0].id));
    }
  }, [buildQueue]);

  const handleRate = (rating: Rating) => {
    if (!queue[currentIndex]) return;

    const current = getCardProgress(queue[currentIndex].id);
    const updated = updateCard(current, rating);
    saveCardProgress(updated);
    recordReview();

    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (rating === 'gut' || rating === 'leicht' ? 1 : 0),
    }));

    // If rated "nochmal", add back to queue
    if (rating === 'nochmal') {
      const newQueue = [...queue];
      const insertAt = Math.min(currentIndex + 3 + Math.floor(Math.random() * 3), newQueue.length);
      newQueue.splice(insertAt, 0, queue[currentIndex]);
      setQueue(newQueue);
    }

    const nextIdx = currentIndex + 1;
    if (nextIdx < queue.length) {
      setCurrentIndex(nextIdx);
      setCardProgress(getCardProgress(queue[nextIdx]?.id || queue[0].id));
    } else {
      setIsComplete(true);
    }
  };

  const sectionName = isMinimalMode
    ? '🎯 Minimal-Modus'
    : sectionFilter
      ? catalog.sections.find(s => s.id === sectionFilter)?.name || 'Unbekannt'
      : 'Alle Bereiche';

  const totalLabel = isMinimalMode ? EXAM_RELEVANT_COUNT : undefined;

  if (queue.length === 0) {
    return (
      <div className="py-12 text-center">
        <span className="text-4xl block mb-4">🎉</span>
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">
          Alles gelernt!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          {isMinimalMode
            ? 'Alle prüfungsrelevanten Fragen sind gelernt. Komm später zur Wiederholung!'
            : 'Es gibt gerade keine Fragen zur Wiederholung. Komm später wieder!'}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-navy-600 text-white rounded-xl font-semibold"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  if (isComplete) {
    const accuracy = sessionStats.reviewed > 0
      ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100)
      : 0;

    return (
      <div className="py-12 text-center animate-fadeIn">
        <span className="text-5xl block mb-4">
          {accuracy >= 80 ? '🌟' : accuracy >= 60 ? '👏' : '💪'}
        </span>
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">
          Sitzung beendet!
        </h2>
        {isMinimalMode && (
          <p className="text-sm text-amber-600 dark:text-amber-400 mb-2">
            🎯 Minimal-Modus — nur prüfungsrelevante Fragen
          </p>
        )}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mt-4 max-w-xs mx-auto">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-navy-600 dark:text-blue-400">{sessionStats.reviewed}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Fragen bearbeitet</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{accuracy}%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Richtig</div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={() => {
              setIsComplete(false);
              setCurrentIndex(0);
              setSessionStats({ reviewed: 0, correct: 0 });
              const q = buildQueue();
              setQueue(q);
              if (q.length > 0) setCardProgress(getCardProgress(q[0].id));
            }}
            className="px-5 py-3 bg-navy-600 text-white rounded-xl font-semibold"
          >
            Weiter lernen
          </button>
          <Link
            href="/"
            className="px-5 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold"
          >
            Fertig
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = queue[currentIndex];

  return (
    <div className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-sm font-semibold text-slate-600 dark:text-slate-300">{sectionName}</h1>
        <span className="text-xs text-slate-400">
          {sessionStats.reviewed} gelernt
        </span>
      </div>

      {/* Minimal mode indicator */}
      {isMinimalMode && (
        <div className="mb-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 border border-amber-200 dark:border-amber-800">
          <p className="text-xs text-amber-700 dark:text-amber-400">
            🎯 Nur prüfungsrelevante Fragen — {EXAM_RELEVANT_COUNT} statt 638
          </p>
        </div>
      )}

      {/* Flashcard */}
      {currentQuestion && (
        <Flashcard
          key={currentQuestion.id + '-' + currentIndex}
          question={currentQuestion}
          box={cardProgress?.box || 1}
          onRate={handleRate}
          index={currentIndex}
          total={queue.length}
        />
      )}
    </div>
  );
}

export default function LernenPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-slate-400">Laden...</div>}>
      <LernenContent />
    </Suspense>
  );
}
