// Gamification system - XP, levels, achievements, streaks

export interface GamificationState {
  xp: number;
  level: number;
  streak: {
    current: number;
    best: number;
    lastStudyDate: string; // YYYY-MM-DD
  };
  dailyGoal: {
    target: number;
    todayCount: number;
    date: string; // YYYY-MM-DD
  };
  achievements: Record<string, string>; // id -> ISO date unlocked
  aiCheckEnabled: boolean;
  questionsToday: number;
  totalQuestionsAnswered: number;
  sessionQuestions: number; // reset on page load
  gamificationVisible: boolean;
  soundEnabled: boolean;
}

const STORAGE_KEY = 'sks-gamification';

const DEFAULT_STATE: GamificationState = {
  xp: 0,
  level: 1,
  streak: { current: 0, best: 0, lastStudyDate: '' },
  dailyGoal: { target: 20, todayCount: 0, date: '' },
  achievements: {},
  aiCheckEnabled: true,
  questionsToday: 0,
  totalQuestionsAnswered: 0,
  sessionQuestions: 0,
  gamificationVisible: true,
  soundEnabled: false,
};

// --- Levels ---

export interface Level {
  level: number;
  xpRequired: number;
  rank: string;
  emoji: string;
}

export const LEVELS: Level[] = [
  { level: 1, xpRequired: 0, rank: 'Landrabbe', emoji: '🐀' },
  { level: 2, xpRequired: 200, rank: 'Leichtmatrose', emoji: '⚓' },
  { level: 3, xpRequired: 500, rank: 'Matrose', emoji: '🚢' },
  { level: 4, xpRequired: 1000, rank: 'Bootsmann', emoji: '🧭' },
  { level: 5, xpRequired: 2000, rank: 'Steuermann', emoji: '🌊' },
  { level: 6, xpRequired: 3500, rank: 'Navigator', emoji: '📐' },
  { level: 7, xpRequired: 5000, rank: 'Skipper', emoji: '⛵' },
  { level: 8, xpRequired: 7500, rank: 'Kapitän', emoji: '🎖️' },
  { level: 9, xpRequired: 10000, rank: 'Flottenadmiral', emoji: '👑' },
];

export function getLevelForXP(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getNextLevel(currentLevel: number): Level | null {
  const idx = LEVELS.findIndex(l => l.level === currentLevel);
  return idx >= 0 && idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

export function getXPProgress(xp: number): { current: number; needed: number; percentage: number } {
  const level = getLevelForXP(xp);
  const next = getNextLevel(level.level);
  if (!next) return { current: xp - level.xpRequired, needed: 0, percentage: 100 };
  const current = xp - level.xpRequired;
  const needed = next.xpRequired - level.xpRequired;
  return { current, needed, percentage: Math.min(100, (current / needed) * 100) };
}

// --- Achievements ---

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  category: 'progress' | 'streak' | 'mastery' | 'exam';
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'erste-schritte', name: 'Erste Schritte', description: 'Erste Frage beantwortet', emoji: '🎯', category: 'progress' },
  { id: 'tagesziel', name: 'Tagesziel', description: '20 Fragen an einem Tag', emoji: '✅', category: 'progress' },
  { id: 'fleissig', name: 'Fleißig', description: '50 Fragen an einem Tag', emoji: '💪', category: 'progress' },
  { id: 'marathonlaeufer', name: 'Marathonläufer', description: '100 Fragen in einer Sitzung', emoji: '🏃', category: 'progress' },
  { id: 'streak-starter', name: 'Streak-Starter', description: '3-Tage-Streak', emoji: '🔥', category: 'streak' },
  { id: 'auf-kurs', name: 'Auf Kurs', description: '7-Tage-Streak', emoji: '🧭', category: 'streak' },
  { id: 'unaufhaltsam', name: 'Unaufhaltsam', description: '14-Tage-Streak', emoji: '⚡', category: 'streak' },
  { id: 'legendaer', name: 'Legendär', description: '30-Tage-Streak', emoji: '🏆', category: 'streak' },
  { id: 'navigation-profi', name: 'Navigation-Profi', description: 'Alle Navigation-Fragen gemeistert', emoji: '🗺️', category: 'mastery' },
  { id: 'rechtsexperte', name: 'Rechtsexperte', description: 'Alle Schifffahrtsrecht-Fragen gemeistert', emoji: '⚖️', category: 'mastery' },
  { id: 'wetterfrosch', name: 'Wetterfrosch', description: 'Alle Wetterkunde-Fragen gemeistert', emoji: '🌤️', category: 'mastery' },
  { id: 'alter-seebar', name: 'Alter Seebär', description: 'Alle Seemannschaft-Fragen gemeistert', emoji: '🧔', category: 'mastery' },
  { id: 'pruefung-bestanden', name: 'Prüfung bestanden', description: '39+ Punkte in Prüfungssimulation', emoji: '📜', category: 'exam' },
  { id: 'pruefung-auszeichnung', name: 'Prüfung mit Auszeichnung', description: '55+ Punkte in Prüfungssimulation', emoji: '🌟', category: 'exam' },
  { id: 'minimal-meister', name: 'Minimal-Meister', description: 'Alle 413 prüfungsrelevanten Fragen gemeistert', emoji: '👑', category: 'mastery' },
];

// --- State Management ---

export function getGamificationState(): GamificationState {
  if (typeof window === 'undefined') return { ...DEFAULT_STATE };
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return { ...DEFAULT_STATE };
    const state = { ...DEFAULT_STATE, ...JSON.parse(data) };
    
    // Reset daily counters if new day
    const today = new Date().toISOString().split('T')[0];
    if (state.dailyGoal.date !== today) {
      state.dailyGoal.todayCount = 0;
      state.dailyGoal.date = today;
      state.questionsToday = 0;
    }
    // Session always starts at 0
    state.sessionQuestions = 0;
    
    return state;
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveGamificationState(state: GamificationState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// --- XP Awards ---

export type XPEvent = {
  type: 'question_answered';
  rating: 'wrong' | 'partial' | 'correct';
} | {
  type: 'exam_completed';
  score: number;
} | {
  type: 'daily_streak';
} | {
  type: 'first_today';
};

export function calculateXP(event: XPEvent): number {
  switch (event.type) {
    case 'question_answered':
      return event.rating === 'correct' ? 30 : event.rating === 'partial' ? 20 : 10;
    case 'exam_completed':
      return 100; // bonus for completing a full exam
    case 'daily_streak':
      return 50;
    case 'first_today':
      return 25;
  }
}

export interface XPGain {
  amount: number;
  source: string;
}

export interface GamificationUpdate {
  xpGains: XPGain[];
  newAchievements: Achievement[];
  levelUp: Level | null;
  previousLevel: Level;
  state: GamificationState;
}

export function awardXP(
  state: GamificationState,
  rating: 'wrong' | 'partial' | 'correct',
  context?: {
    sectionMastery?: Record<string, { mastered: number; total: number }>;
    examScore?: number;
    examRelevantMastered?: number;
  }
): GamificationUpdate {
  const xpGains: XPGain[] = [];
  const newAchievements: Achievement[] = [];
  const today = new Date().toISOString().split('T')[0];
  const previousLevel = getLevelForXP(state.xp);

  // Deep clone state
  const s = JSON.parse(JSON.stringify(state)) as GamificationState;

  // First question of the day bonus
  if (s.questionsToday === 0) {
    const bonus = calculateXP({ type: 'first_today' });
    s.xp += bonus;
    xpGains.push({ amount: bonus, source: 'Erste Frage des Tages' });
  }

  // Question XP
  const questionXP = calculateXP({ type: 'question_answered', rating });
  s.xp += questionXP;
  xpGains.push({ amount: questionXP, source: rating === 'correct' ? 'Richtig' : rating === 'partial' ? 'Teilweise' : 'Beantwortet' });

  // Update counters
  s.totalQuestionsAnswered++;
  s.questionsToday++;
  s.sessionQuestions++;
  s.dailyGoal.todayCount++;
  s.dailyGoal.date = today;

  // Streak management
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (s.streak.lastStudyDate === yesterday) {
    s.streak.current++;
    // Daily streak bonus
    const streakBonus = calculateXP({ type: 'daily_streak' });
    s.xp += streakBonus;
    xpGains.push({ amount: streakBonus, source: 'Tages-Streak Bonus' });
  } else if (s.streak.lastStudyDate !== today) {
    s.streak.current = 1;
  }
  s.streak.lastStudyDate = today;
  s.streak.best = Math.max(s.streak.best, s.streak.current);

  // Check level up
  const newLevel = getLevelForXP(s.xp);
  s.level = newLevel.level;
  const levelUp = newLevel.level > previousLevel.level ? newLevel : null;

  // Check achievements
  const unlock = (id: string) => {
    if (!s.achievements[id]) {
      s.achievements[id] = new Date().toISOString();
      const achievement = ACHIEVEMENTS.find(a => a.id === id);
      if (achievement) newAchievements.push(achievement);
    }
  };

  // Progress achievements
  if (s.totalQuestionsAnswered >= 1) unlock('erste-schritte');
  if (s.questionsToday >= 20) unlock('tagesziel');
  if (s.questionsToday >= 50) unlock('fleissig');
  if (s.sessionQuestions >= 100) unlock('marathonlaeufer');

  // Streak achievements
  if (s.streak.current >= 3) unlock('streak-starter');
  if (s.streak.current >= 7) unlock('auf-kurs');
  if (s.streak.current >= 14) unlock('unaufhaltsam');
  if (s.streak.current >= 30) unlock('legendaer');

  // Section mastery achievements
  if (context?.sectionMastery) {
    const sm = context.sectionMastery;
    if (sm['navigation'] && sm['navigation'].mastered >= sm['navigation'].total) unlock('navigation-profi');
    if (sm['schifffahrtsrecht'] && sm['schifffahrtsrecht'].mastered >= sm['schifffahrtsrecht'].total) unlock('rechtsexperte');
    if (sm['wetterkunde'] && sm['wetterkunde'].mastered >= sm['wetterkunde'].total) unlock('wetterfrosch');
    const seem1 = sm['seemannschaft1'] || { mastered: 0, total: 0 };
    const seem2 = sm['seemannschaft2'] || { mastered: 0, total: 0 };
    if ((seem1.mastered + seem2.mastered) >= (seem1.total + seem2.total) && (seem1.total + seem2.total) > 0) {
      unlock('alter-seebar');
    }
  }

  // Exam achievements
  if (context?.examScore !== undefined) {
    if (context.examScore >= 39) unlock('pruefung-bestanden');
    if (context.examScore >= 55) unlock('pruefung-auszeichnung');
  }

  // Minimal-Meister
  if (context?.examRelevantMastered !== undefined && context.examRelevantMastered >= 413) {
    unlock('minimal-meister');
  }

  saveGamificationState(s);

  return { xpGains, newAchievements, levelUp, previousLevel, state: s };
}

// Check achievements without awarding XP (for exam results, mastery checks)
export function checkExamAchievements(state: GamificationState, examScore: number): Achievement[] {
  const newAchievements: Achievement[] = [];
  const s = JSON.parse(JSON.stringify(state)) as GamificationState;
  
  const unlock = (id: string) => {
    if (!s.achievements[id]) {
      s.achievements[id] = new Date().toISOString();
      const achievement = ACHIEVEMENTS.find(a => a.id === id);
      if (achievement) newAchievements.push(achievement);
    }
  };

  if (examScore >= 39) unlock('pruefung-bestanden');
  if (examScore >= 55) unlock('pruefung-auszeichnung');

  // Award exam completion XP
  s.xp += calculateXP({ type: 'exam_completed', score: examScore });

  saveGamificationState(s);
  return newAchievements;
}

// Check if streak is at risk (user hasn't studied today)
export function isStreakAtRisk(state: GamificationState): boolean {
  if (state.streak.current === 0) return false;
  const today = new Date().toISOString().split('T')[0];
  return state.streak.lastStudyDate !== today;
}

// Get today's date string
export function getToday(): string {
  return new Date().toISOString().split('T')[0];
}
