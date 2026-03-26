// LocalStorage-based persistence for progress data
import { CardProgress, StudyStats, createNewCard } from './leitner';

const STORAGE_KEYS = {
  PROGRESS: 'sks-progress',
  STATS: 'sks-stats',
  SETTINGS: 'sks-settings',
  EXAM_HISTORY: 'sks-exam-history',
};

// --- Card Progress ---

export function getAllProgress(): Record<string, CardProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function getCardProgress(questionId: string): CardProgress {
  const all = getAllProgress();
  return all[questionId] || createNewCard(questionId);
}

export function saveCardProgress(card: CardProgress): void {
  if (typeof window === 'undefined') return;
  const all = getAllProgress();
  all[card.questionId] = card;
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
}

// --- Study Stats ---

export function getStats(): StudyStats {
  if (typeof window === 'undefined') {
    return { totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 };
  }
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    const stats = data ? JSON.parse(data) : null;
    if (!stats) {
      return { totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 };
    }
    // Reset today's count if it's a new day
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastStudyDate !== today) {
      stats.todayReviews = 0;
    }
    return stats;
  } catch {
    return { totalReviews: 0, todayReviews: 0, streak: 0, lastStudyDate: '', dailyGoal: 20 };
  }
}

export function recordReview(): void {
  if (typeof window === 'undefined') return;
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  stats.totalReviews++;
  stats.todayReviews++;

  if (stats.lastStudyDate === yesterday) {
    stats.streak++;
  } else if (stats.lastStudyDate !== today) {
    stats.streak = 1;
  }
  stats.lastStudyDate = today;

  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
}

export function setDailyGoal(goal: number): void {
  if (typeof window === 'undefined') return;
  const stats = getStats();
  stats.dailyGoal = goal;
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
}

// --- Exam History ---

export interface ExamResult {
  id: string;
  date: number;
  sheetName: string;
  score: number;
  maxScore: number;
  passed: boolean;
  oralExam: boolean;
  timeUsed: number; // seconds
  answers: { questionId: string; score: number }[];
}

export function getExamHistory(): ExamResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  if (typeof window === 'undefined') return;
  const history = getExamHistory();
  history.push(result);
  localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));
}

// --- Settings ---

export interface Settings {
  darkMode: boolean;
  dailyGoal: number;
  showKeywords: boolean;
}

export function getSettings(): Settings {
  if (typeof window === 'undefined') {
    return { darkMode: false, dailyGoal: 20, showKeywords: true };
  }
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? JSON.parse(data) : { darkMode: false, dailyGoal: 20, showKeywords: true };
  } catch {
    return { darkMode: false, dailyGoal: 20, showKeywords: true };
  }
}

export function saveSettings(settings: Settings): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

// --- Data Management ---

export function exportData(): string {
  return JSON.stringify({
    progress: getAllProgress(),
    stats: getStats(),
    examHistory: getExamHistory(),
    settings: getSettings(),
  }, null, 2);
}

export function importData(json: string): boolean {
  try {
    const data = JSON.parse(json);
    if (data.progress) localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(data.progress));
    if (data.stats) localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(data.stats));
    if (data.examHistory) localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(data.examHistory));
    if (data.settings) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.settings));
    return true;
  } catch {
    return false;
  }
}

export function resetAllData(): void {
  if (typeof window === 'undefined') return;
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
}
