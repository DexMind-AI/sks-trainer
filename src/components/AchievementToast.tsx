'use client';

import { useEffect, useState } from 'react';
import { Achievement } from '@/lib/gamification';

interface AchievementToastProps {
  achievements: Achievement[];
  onDismiss: () => void;
}

export default function AchievementToast({ achievements, onDismiss }: AchievementToastProps) {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (achievements.length === 0) return;
    // Slide in
    const showTimer = setTimeout(() => setVisible(true), 100);
    // Auto-dismiss after 3s per achievement
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        if (currentIndex < achievements.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setVisible(true);
        } else {
          onDismiss();
        }
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [achievements, currentIndex, onDismiss]);

  if (achievements.length === 0 || currentIndex >= achievements.length) return null;

  const achievement = achievements[currentIndex];

  return (
    <div className="fixed bottom-24 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <div
        className={`bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-amber-200 dark:border-amber-700 p-4 max-w-sm w-full transition-all duration-300 pointer-events-auto ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-4xl animate-bounce">{achievement.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
              🏅 Erfolg freigeschaltet!
            </p>
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {achievement.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
