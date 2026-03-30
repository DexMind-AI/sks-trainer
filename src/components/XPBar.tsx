'use client';

import { GamificationState, getLevelForXP, getXPProgress, getNextLevel, XPGain, Level } from '@/lib/gamification';
import { useEffect, useState } from 'react';

interface XPBarProps {
  state: GamificationState;
  compact?: boolean;
}

export function XPBar({ state, compact = false }: XPBarProps) {
  const level = getLevelForXP(state.xp);
  const progress = getXPProgress(state.xp);
  const next = getNextLevel(level.level);

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-lg">{level.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-200">{level.rank}</span>
            <span className="text-slate-400">{state.xp} XP</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-0.5">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-navy-600 to-blue-700 rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-center gap-3">
        <div className="text-4xl">{level.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-75">Rang {level.level}</p>
              <p className="font-bold text-lg">{level.rank}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{state.xp}</p>
              <p className="text-xs opacity-75">XP</p>
            </div>
          </div>
          {next && (
            <div className="mt-2">
              <div className="flex justify-between text-xs opacity-75 mb-1">
                <span>Lv. {level.level}</span>
                <span>{progress.current}/{progress.needed} XP</span>
                <span>Lv. {next.level} {next.emoji}</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
            </div>
          )}
          {!next && (
            <p className="text-xs opacity-75 mt-1">Maximaler Rang erreicht! ⭐</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Floating XP gain indicator
interface XPFloatProps {
  gains: XPGain[];
  onDone: () => void;
}

export function XPFloat({ gains, onDone }: XPFloatProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 300);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  if (gains.length === 0) return null;

  const total = gains.reduce((sum, g) => sum + g.amount, 0);

  return (
    <div
      className={`fixed top-20 right-4 z-[90] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="bg-amber-500 text-white rounded-xl px-3 py-2 shadow-lg">
        <p className="text-lg font-bold">+{total} XP</p>
        {gains.length > 1 && (
          <div className="text-xs opacity-80">
            {gains.map((g, i) => (
              <div key={i}>+{g.amount} {g.source}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Level up overlay
interface LevelUpOverlayProps {
  level: Level;
  onDismiss: () => void;
}

export function LevelUpOverlay({ level, onDismiss }: LevelUpOverlayProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onDismiss}
    >
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl border-2 border-amber-400 animate-scaleIn">
        <div className="text-6xl mb-4 animate-bounce">{level.emoji}</div>
        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
          🎖️ Beförderung!
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {level.rank}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Du hast Rang {level.level} erreicht. Weiter so, Kapitän!
        </p>
      </div>
    </div>
  );
}
