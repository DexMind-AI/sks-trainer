'use client';

import Link from 'next/link';
import ProgressBar from './ProgressBar';

interface SectionCardProps {
  id: string;
  name: string;
  totalQuestions: number;
  masteredCount: number;
  learningCount: number;
  icon: string;
}

const sectionIcons: Record<string, string> = {
  navigation: '🧭',
  schifffahrtsrecht: '⚖️',
  wetterkunde: '🌤️',
  seemannschaft1: '⛵',
  seemannschaft2: '🚤',
};

export default function SectionCard({
  id,
  name,
  totalQuestions,
  masteredCount,
  learningCount,
  icon,
}: SectionCardProps) {
  const progress = totalQuestions > 0 ? (masteredCount / totalQuestions) * 100 : 0;
  const unseenCount = totalQuestions - masteredCount - learningCount;

  return (
    <Link href={`/lernen?section=${id}`} className="block">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow active:scale-[0.98]">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{icon || sectionIcons[id] || '📘'}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate">{name}</h3>
            <div className="flex gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
              <span>{totalQuestions} Fragen</span>
              <span className="text-green-600 dark:text-green-400">✓ {masteredCount}</span>
              {learningCount > 0 && <span className="text-blue-600 dark:text-blue-400">↻ {learningCount}</span>}
              {unseenCount > 0 && <span>○ {unseenCount}</span>}
            </div>
            <div className="mt-2">
              <ProgressBar value={progress} height="h-2" showLabel={false} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
