// Exam simulation logic
// 30 questions: 9 Navigation, 7 Recht, 5 Wetter, 9 Seemannschaft (I or II)
import { catalog, Question } from '@/data/questions';

export interface ExamSheet {
  id: string;
  name: string;
  questions: Question[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function pickRandom<T>(array: T[], count: number): T[] {
  return shuffleArray(array).slice(0, count);
}

export function generateRandomExam(seemannschaftType: '1' | '2' | 'random' = 'random'): ExamSheet {
  const nav = catalog.sections.find(s => s.id === 'navigation')!;
  const recht = catalog.sections.find(s => s.id === 'schifffahrtsrecht')!;
  const wetter = catalog.sections.find(s => s.id === 'wetterkunde')!;
  
  let seem: typeof nav;
  if (seemannschaftType === 'random') {
    seem = catalog.sections.find(s => s.id === (Math.random() > 0.5 ? 'seemannschaft1' : 'seemannschaft2'))!;
  } else {
    seem = catalog.sections.find(s => s.id === `seemannschaft${seemannschaftType}`)!;
  }

  const questions = [
    ...pickRandom(nav.questions, 9),
    ...pickRandom(recht.questions, 7),
    ...pickRandom(wetter.questions, 5),
    ...pickRandom(seem.questions, 9),
  ];

  return {
    id: `random-${Date.now()}`,
    name: `Zufallsbogen (${seem.name})`,
    questions: shuffleArray(questions),
  };
}

export function getExamResult(scores: number[]): {
  totalScore: number;
  maxScore: number;
  passed: boolean;
  oralExam: boolean;
  failed: boolean;
  label: string;
  color: string;
} {
  const totalScore = scores.reduce((a, b) => a + b, 0);
  const maxScore = 60;
  const passed = totalScore >= 39;
  const oralExam = totalScore >= 33 && totalScore < 39;
  const failed = totalScore < 33;

  let label: string;
  let color: string;

  if (passed) {
    label = 'Bestanden! 🎉';
    color = 'text-green-600';
  } else if (oralExam) {
    label = 'Mündliche Nachprüfung';
    color = 'text-yellow-600';
  } else {
    label = 'Nicht bestanden';
    color = 'text-red-600';
  }

  return { totalScore, maxScore, passed, oralExam, failed, label, color };
}

export const EXAM_TIME_LIMIT = 90 * 60; // 90 minutes in seconds
