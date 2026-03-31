import explanationsData from './explanations.json';

export const explanations: Record<string, string> = explanationsData as Record<string, string>;

export function getExplanation(questionId: string): string | null {
  return explanations[questionId] || null;
}
