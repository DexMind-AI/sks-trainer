// Exam relevance utilities
// Maps exam-relevance.json data to the app's question ID format

import examData from '@/data/exam-relevance.json';
import { catalog, Question } from '@/data/questions';

export interface ExamRelevanceData {
  boegen: Record<string, string[]>;
  frequency: Record<string, number>;
  neverTested: string[];
  highValue: string[];
  stats: {
    totalCatalog: number;
    testedQuestions: number;
    neverTested: number;
    highValueCount: number;
  };
}

const data = examData as ExamRelevanceData;

// Convert exam code (e.g. "N9") to app ID (e.g. "nav-9")
function examCodeToAppId(code: string): string {
  const prefix = code[0];
  const num = code.slice(1);
  switch (prefix) {
    case 'N': return `nav-${num}`;
    case 'R': return `recht-${num}`;
    case 'W': return `wetter-${num}`;
    case 'S': return `seem1-${num}`;
    default: return code;
  }
}

// Build lookup maps (computed once)
const frequencyMap: Record<string, number> = {};
for (const [code, freq] of Object.entries(data.frequency)) {
  frequencyMap[examCodeToAppId(code)] = freq;
}

const neverTestedSet = new Set(data.neverTested.map(examCodeToAppId));

const highValueSet = new Set(data.highValue.map(examCodeToAppId));

// Build bogen membership: questionId -> bogen numbers
const bogenMap: Record<string, number[]> = {};
for (const [bogenNum, codes] of Object.entries(data.boegen)) {
  for (const code of codes) {
    const id = examCodeToAppId(code);
    if (!bogenMap[id]) bogenMap[id] = [];
    bogenMap[id].push(parseInt(bogenNum));
  }
}
// Sort bogen numbers
for (const id of Object.keys(bogenMap)) {
  bogenMap[id].sort((a, b) => a - b);
}

// Public API

export function getFrequency(questionId: string): number {
  // seem2-* questions are never tested in Segel+Motor
  if (questionId.startsWith('seem2-')) return 0;
  return frequencyMap[questionId] || 0;
}

export function isNeverTested(questionId: string): boolean {
  if (questionId.startsWith('seem2-')) return true;
  return neverTestedSet.has(questionId);
}

export function isHighValue(questionId: string): boolean {
  return highValueSet.has(questionId);
}

export function getBoegen(questionId: string): number[] {
  return bogenMap[questionId] || [];
}

export type RelevanceLevel = 'high' | 'normal' | 'never';

export function getRelevanceLevel(questionId: string): RelevanceLevel {
  if (isNeverTested(questionId)) return 'never';
  if (isHighValue(questionId)) return 'high';
  return 'normal';
}

export function getRelevanceBadge(questionId: string): { label: string; color: string; textColor: string; emoji: string } {
  const freq = getFrequency(questionId);
  if (freq === 0) {
    return { label: 'Nie geprüft', color: 'bg-slate-200 dark:bg-slate-700', textColor: 'text-slate-500 dark:text-slate-400', emoji: '🔴' };
  }
  if (freq >= 2) {
    return { label: `${freq}× geprüft`, color: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-700 dark:text-green-400', emoji: '🟢' };
  }
  return { label: '1× geprüft', color: 'bg-yellow-100 dark:bg-yellow-900/30', textColor: 'text-yellow-700 dark:text-yellow-400', emoji: '🟡' };
}

// Get all exam-relevant questions (excludes never-tested + seem2)
export function getExamRelevantQuestions(): Question[] {
  return catalog.sections
    .flatMap(s => s.questions)
    .filter(q => !isNeverTested(q.id));
}

// Get high-value questions only
export function getHighValueQuestions(): Question[] {
  return catalog.sections
    .flatMap(s => s.questions)
    .filter(q => isHighValue(q.id));
}

// Total counts
export const TOTAL_QUESTIONS = 638;
export const EXAM_RELEVANT_COUNT = (() => {
  return catalog.sections
    .flatMap(s => s.questions)
    .filter(q => !isNeverTested(q.id)).length;
})();

// Per-section relevance counts
export function getSectionRelevanceCount(sectionId: string): { relevant: number; total: number } {
  const section = catalog.sections.find(s => s.id === sectionId);
  if (!section) return { relevant: 0, total: 0 };
  const relevant = section.questions.filter(q => !isNeverTested(q.id)).length;
  return { relevant, total: section.questions.length };
}

// Official exam sheet (Prüfungsbogen) generation
export function getOfficialBogen(bogenNum: number): Question[] {
  const codes = data.boegen[bogenNum.toString()];
  if (!codes) return [];
  
  const allQuestions = catalog.sections.flatMap(s => s.questions);
  const questionMap = new Map(allQuestions.map(q => [q.id, q]));
  
  return codes
    .map(code => questionMap.get(examCodeToAppId(code)))
    .filter((q): q is Question => q !== undefined);
}

export function getAllBogenNumbers(): number[] {
  return Object.keys(data.boegen).map(Number).sort((a, b) => a - b);
}

export function getRandomBogenNumber(): number {
  const nums = getAllBogenNumbers();
  return nums[Math.floor(Math.random() * nums.length)];
}
