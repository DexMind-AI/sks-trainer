'use client';

import { useEffect, useState } from 'react';
import { catalog } from '@/data/questions';
import { getAllProgress, getStats } from '@/lib/storage';
import { CardProgress } from '@/lib/leitner';
import { EXAM_RELEVANT_COUNT, TOTAL_QUESTIONS, getSectionRelevanceCount, isNeverTested } from '@/lib/exam-relevance';
import { getGamificationState, GamificationState, isStreakAtRisk, getToday } from '@/lib/gamification';
import SectionCard from '@/components/SectionCard';
import ProgressBar from '@/components/ProgressBar';
import { XPBar } from '@/components/XPBar';
import Link from 'next/link';

export default function HomePage() {
  const [progress, setProgress] = useState<Record<string, CardProgress>>({});
  const [stats, setStats] = useState({ totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 });
  const [gamification, setGamification] = useState<GamificationState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(getAllProgress());
    setStats(getStats());
    setGamification(getGamificationState());
    setMounted(true);
  }, []);

  const totalQuestions = TOTAL_QUESTIONS;
  const progressValues = Object.values(progress);
  const masteredCount = progressValues.filter(p => p.box >= 4).length;
  const learningCount = progressValues.filter(p => p.box >= 2 && p.box < 4).length;

  const examRelevantMastered = progressValues.filter(p => p.box >= 4 && !isNeverTested(p.questionId)).length;
  const examReadiness = EXAM_RELEVANT_COUNT > 0 ? (examRelevantMastered / EXAM_RELEVANT_COUNT) * 100 : 0;
  const overallReadiness = totalQuestions > 0 ? (masteredCount / totalQuestions) * 100 : 0;

  const sectionStats = catalog.sections.map(section => {
    const sectionProgress = section.questions.map(q => progress[q.id]);
    const mastered = sectionProgress.filter(p => p && p.box >= 4).length;
    const pct = section.questions.length > 0 ? (mastered / section.questions.length) * 100 : 0;
    return { ...section, mastered, pct };
  });
  const weakest = sectionStats.reduce((a, b) => a.pct < b.pct ? a : b);

  const sectionIcons: Record<string, string> = {
    navigation: '🧭',
    schifffahrtsrecht: '⚖️',
    wetterkunde: '🌤️',
    seemannschaft1: '⛵',
    seemannschaft2: '🚤',
  };

  const streakAtRisk = gamification ? isStreakAtRisk(gamification) : false;
  const dailyGoalProgress = gamification
    ? (gamification.dailyGoal.todayCount / gamification.dailyGoal.target) * 100
    : 0;
  const dailyGoalReached = dailyGoalProgress >= 100;

  return (
    <div className="py-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-navy-600 dark:text-blue-400">⚓ SKS Trainer</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Bestehe die SKS-Theorieprüfung mit minimalem Aufwand
        </p>
      </div>

      {/* Gamification: XP Bar + Rank */}
      {mounted && gamification && gamification.gamificationVisible && (
        <Link href="/erfolge">
          <XPBar state={gamification} />
        </Link>
      )}

      {/* Streak & Daily Goal Row */}
      {mounted && gamification && gamification.gamificationVisible && (
        <div className="grid grid-cols-2 gap-3">
          {/* Streak */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-xl font-bold text-orange-500">
                  {gamification.streak.current} Tage
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Streak</div>
              </div>
            </div>
            {streakAtRisk && gamification.streak.current > 0 && (
              <p className="text-xs text-red-500 mt-1 font-medium">
                ⚠️ Streak in Gefahr! Heute noch lernen!
              </p>
            )}
          </div>

          {/* Daily Goal */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">Tagesziel</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                {gamification.dailyGoal.todayCount}/{gamification.dailyGoal.target}
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  dailyGoalReached ? 'bg-green-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.min(100, dailyGoalProgress)}%` }}
              />
            </div>
            {dailyGoalReached && (
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                🎉 Tagesziel erreicht!
              </p>
            )}
          </div>
        </div>
      )}

      {/* Exam Readiness */}
      {mounted && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200">🎯 Prüfungsbereitschaft</h2>
            <span className="text-2xl font-bold text-navy-600 dark:text-blue-400">{Math.round(examReadiness)}%</span>
          </div>
          <ProgressBar
            value={examReadiness}
            color={examReadiness >= 65 ? 'bg-green-500' : examReadiness >= 40 ? 'bg-yellow-500' : 'bg-red-500'}
            height="h-4"
            showLabel={false}
          />
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            {examRelevantMastered}/{EXAM_RELEVANT_COUNT} prüfungsrelevante Fragen gemeistert
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">{masteredCount}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Gemeistert</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{learningCount}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Lernend</div>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-400">{totalQuestions - masteredCount - learningCount}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Ungesehen</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Gesamtfortschritt</span>
              <span>{masteredCount}/{totalQuestions}</span>
            </div>
            <div className="mt-1">
              <ProgressBar value={overallReadiness} height="h-1.5" showLabel={false} color="bg-slate-400" />
            </div>
          </div>
        </div>
      )}

      {/* Minimal-Modus CTA */}
      <Link href="/lernen?mode=minimal" className="block">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Minimal-Modus</h3>
              <p className="text-sm opacity-90">Nur was geprüft wird</p>
              <p className="text-xs opacity-75 mt-1">
                {EXAM_RELEVANT_COUNT} prüfungsrelevante Fragen (statt {totalQuestions})
              </p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </Link>

      {/* Daily Progress (legacy, merged with gamification) */}
      {mounted && (!gamification || !gamification.gamificationVisible) && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-700 dark:text-slate-200">Heute</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {stats.todayReviews} / {stats.dailyGoal} Fragen
              </p>
            </div>
            <div className="text-right">
              {stats.streak > 0 && (
                <div className="text-lg font-bold text-orange-500">🔥 {stats.streak} Tage</div>
              )}
            </div>
          </div>
          <div className="mt-2">
            <ProgressBar
              value={(stats.todayReviews / stats.dailyGoal) * 100}
              color="bg-orange-500"
              height="h-2"
              showLabel={false}
            />
          </div>
        </div>
      )}

      {/* Smart Suggestion */}
      {mounted && weakest && weakest.pct < 80 && (
        <Link href={`/lernen?section=${weakest.id}`}>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2">
              <span className="text-xl">💡</span>
              <div>
                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  Empfehlung: {weakest.name} üben
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  {Math.round(100 - weakest.pct)}% noch nicht gelernt
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/lernen" className="block">
          <div className="bg-navy-600 text-white rounded-xl p-4 text-center shadow-md hover:bg-navy-700 active:scale-[0.98] transition-all">
            <span className="text-2xl block mb-1">📚</span>
            <span className="font-semibold text-sm">Lernen starten</span>
          </div>
        </Link>
        <Link href="/pruefung" className="block">
          <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-4 text-center shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md active:scale-[0.98] transition-all">
            <span className="text-2xl block mb-1">📝</span>
            <span className="font-semibold text-sm">Prüfung üben</span>
          </div>
        </Link>
      </div>

      {/* Sections */}
      <div>
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Bereiche</h2>
        <div className="space-y-2">
          {catalog.sections.map(section => {
            const sectionProgress = section.questions.map(q => progress[q.id]);
            const mastered = sectionProgress.filter(p => p && p.box >= 4).length;
            const learning = sectionProgress.filter(p => p && p.box >= 2 && p.box < 4).length;
            const relevance = getSectionRelevanceCount(section.id);

            return (
              <SectionCard
                key={section.id}
                id={section.id}
                name={section.name}
                totalQuestions={section.questions.length}
                masteredCount={mastered}
                learningCount={learning}
                icon={sectionIcons[section.id] || '📘'}
                relevantCount={relevance.relevant}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
