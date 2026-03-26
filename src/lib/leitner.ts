// Leitner Spaced Repetition System
// Box 1: Review every session (new/failed cards)
// Box 2: Review every 2 days
// Box 3: Review every 4 days
// Box 4: Review every 8 days
// Box 5: Review every 16 days (mastered)

export type Rating = 'nochmal' | 'schwer' | 'gut' | 'leicht';

export interface CardProgress {
  questionId: string;
  box: number; // 1-5
  lastReview: number; // timestamp
  nextReview: number; // timestamp
  reviewCount: number;
  correctStreak: number;
}

export interface StudyStats {
  totalReviews: number;
  todayReviews: number;
  streak: number; // consecutive days studied
  lastStudyDate: string; // YYYY-MM-DD
  dailyGoal: number;
}

const BOX_INTERVALS = {
  1: 0,           // immediate
  2: 2 * 86400000, // 2 days
  3: 4 * 86400000, // 4 days
  4: 8 * 86400000, // 8 days
  5: 16 * 86400000, // 16 days
};

export function getNextReview(box: number, now: number = Date.now()): number {
  const interval = BOX_INTERVALS[box as keyof typeof BOX_INTERVALS] || 0;
  return now + interval;
}

export function updateCard(card: CardProgress, rating: Rating): CardProgress {
  const now = Date.now();
  let newBox = card.box;
  let newStreak = card.correctStreak;

  switch (rating) {
    case 'nochmal':
      newBox = 1;
      newStreak = 0;
      break;
    case 'schwer':
      newBox = Math.max(1, card.box - 1);
      newStreak = 0;
      break;
    case 'gut':
      newBox = Math.min(5, card.box + 1);
      newStreak = card.correctStreak + 1;
      break;
    case 'leicht':
      newBox = Math.min(5, card.box + 2);
      newStreak = card.correctStreak + 1;
      break;
  }

  return {
    ...card,
    box: newBox,
    lastReview: now,
    nextReview: getNextReview(newBox, now),
    reviewCount: card.reviewCount + 1,
    correctStreak: newStreak,
  };
}

export function isDue(card: CardProgress, now: number = Date.now()): boolean {
  return now >= card.nextReview;
}

export function createNewCard(questionId: string): CardProgress {
  return {
    questionId,
    box: 1,
    lastReview: 0,
    nextReview: 0,
    reviewCount: 0,
    correctStreak: 0,
  };
}

export function getBoxColor(box: number): string {
  const colors: Record<number, string> = {
    1: 'bg-red-500',
    2: 'bg-orange-500',
    3: 'bg-yellow-500',
    4: 'bg-blue-500',
    5: 'bg-green-500',
  };
  return colors[box] || 'bg-gray-500';
}

export function getBoxLabel(box: number): string {
  const labels: Record<number, string> = {
    1: 'Neu / Wiederholen',
    2: 'Lernend',
    3: 'Fortgeschritten',
    4: 'Fast gemeistert',
    5: 'Gemeistert',
  };
  return labels[box] || 'Unbekannt';
}
