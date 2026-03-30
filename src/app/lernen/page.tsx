'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { catalog, Question } from '@/data/questions';
import { Rating, CardProgress, updateCard, isDue, createNewCard } from '@/lib/leitner';
import { getAllProgress, getCardProgress, saveCardProgress, recordReview } from '@/lib/storage';
import { getExamRelevantQuestions, getHighValueQuestions, isNeverTested, EXAM_RELEVANT_COUNT } from '@/lib/exam-relevance';
import { getGamificationState, awardXP, GamificationState, Achievement, GamificationUpdate } from '@/lib/gamification';
import Flashcard from '@/components/Flashcard';
import AchievementToast from '@/components/AchievementToast';
import { XPFloat, LevelUpOverlay, XPBar } from '@/components/XPBar';
import type { XPGain, Level } from '@/lib/gamification';
import Link from 'next/link';

function LernenContent() {
  const searchParams = useSearchParams();
  const sectionFilter = searchParams.get('section');
  const mode = searchParams.get('mode');
  const isMinimalMode = mode === 'minimal';

  const [queue, setQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 });
  const [cardProgress, setCardProgress] = useState<CardProgress | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [gamification, setGamification] = useState<GamificationState | null>(null);

  // Gamification UI state
  const [xpGains, setXpGains] = useState<XPGain[]>([]);
  const [showXP, setShowXP] = useState(false);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [levelUp, setLevelUp] = useState<Level | null>(null);

  useEffect(() => {
    setGamification(getGamificationState());
  }, []);

  const buildQueue = useCallback(() => {
    const progress = getAllProgress();
    let questions: Question[];

    if (isMinimalMode) {
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

    const now = Date.now();
    const scored = questions.map((q, originalIndex) => {
      const p = progress[q.id];
      let priority = 0;

      if (!p) {
        priority = isMinimalMode ? 100 + (originalIndex < 42 ? 50 : 0) : 100;
      } else if (isDue(p, now)) {
        priority = 200 - p.box * 10;
      } else {
        priority = p.box;
      }

      return { question: q, priority, progress: p };
    });

    scored.sort((a, b) => {
      if (Math.abs(a.priority - b.priority) > 5) return b.priority - a.priority;
      return Math.random() - 0.5;
    });

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

    const isCorrect = rating === 'gut' || rating === 'leicht';
    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
    }));

    // Gamification: award XP
    if (gamification) {
      const xpRating = isCorrect ? 'correct' as const : rating === 'schwer' ? 'partial' as const : 'wrong' as const;
      
      // Build section mastery context
      const allProgress = getAllProgress();
      const sectionMastery: Record<string, { mastered: number; total: number }> = {};
      catalog.sections.forEach(section => {
        const mastered = section.questions.filter(q => {
          const p = allProgress[q.id];
          return p && p.box >= 4;
        }).length;
        sectionMastery[section.id] = { mastered, total: section.questions.length };
      });

      const examRelevantMastered = Object.values(allProgress).filter(
        p => p.box >= 4 && !isNeverTested(p.questionId)
      ).length;

      const update = awardXP(gamification, xpRating, {
        sectionMastery,
        examRelevantMastered,
      });

      setGamification(update.state);

      // Show XP gains
      if (update.xpGains.length > 0) {
        setXpGains(update.xpGains);
        setShowXP(true);
      }

      // Show achievements
      if (update.newAchievements.length > 0) {
        setNewAchievements(update.newAchievements);
      }

      // Show level up
      if (update.levelUp) {
        setLevelUp(update.levelUp);
      }
    }

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

        {/* Gamification summary */}
        {gamification && gamification.gamificationVisible && (
          <div className="mt-4 max-w-xs mx-auto">
            <XPBar state={gamification} compact />
          </div>
        )}

        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={() => {
              setIsComplete(false);
              setCurrentIndex(0);
              setSessionStats({ reviewed: 0, correct: 0 });
              const q = buildQueue();
              setQueue(q);
              if (q.length > 0) setCardProgress(getCardProgress(q[0].id));
              // Reset session counter
              if (gamification) {
                const g = { ...gamification, sessionQuestions: 0 };
                setGamification(g);
              }
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

      {/* Compact XP bar */}
      {gamification && gamification.gamificationVisible && (
        <div className="mb-4">
          <XPBar state={gamification} compact />
        </div>
      )}

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
          aiCheckEnabled={gamification?.aiCheckEnabled ?? false}
        />
      )}

      {/* XP Float */}
      {showXP && xpGains.length > 0 && (
        <XPFloat gains={xpGains} onDone={() => { setShowXP(false); setXpGains([]); }} />
      )}

      {/* Achievement Toast */}
      {newAchievements.length > 0 && (
        <AchievementToast
          achievements={newAchievements}
          onDismiss={() => setNewAchievements([])}
        />
      )}

      {/* Level Up Overlay */}
      {levelUp && (
        <LevelUpOverlay level={levelUp} onDismiss={() => setLevelUp(null)} />
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
