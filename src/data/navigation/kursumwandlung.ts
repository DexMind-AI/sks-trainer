// Kursumwandlung (Course Conversion) logic
// Full conversion chain:
// MgK → (+Abl) → mwK → (+Mw) → rwK → (+BW) → KdW → (+BS) → KaK

import { getAblenkung, getAblenkungReverse, normalizeAngle } from './steuertafel';

export interface MissweisungData {
  baseValue: number;     // Base Mw in degrees (e.g., -2.5)
  baseYear: number;      // Year the Mw was measured (e.g., 2013)
  yearlyChange: number;  // Annual change in degrees (e.g., +0.1 = shifting east)
}

export interface KursumwandlungResult {
  mgk: number;
  abl: number;
  mwk: number;
  mw: number;
  rwk: number;
  bw: number;
  kdw: number;
  bs: number;
  kak: number;
}

/**
 * Calculate Missweisung corrected for a given year.
 * Mw given in degrees, corrected by yearly change.
 */
export function calculateMissweisung(data: MissweisungData, targetYear: number): number {
  const yearDiff = targetYear - data.baseYear;
  const corrected = data.baseValue + yearDiff * data.yearlyChange;
  // Round: ≥0.5° rounds up (in absolute value)
  return Math.round(corrected);
}

/**
 * Forward conversion: MgK → KaK
 */
export function convertForward(params: {
  mgk: number;
  mw: number;         // Already corrected Missweisung
  bw: number;         // Beschickung Wind (+ from port, - from starboard)
  bs: number;         // Beschickung Strom
}): KursumwandlungResult {
  const { mgk, mw, bw, bs } = params;

  const abl = getAblenkung(mgk);
  const mwk = normalizeAngle(mgk + abl);
  const rwk = normalizeAngle(mwk + mw);
  const kdw = normalizeAngle(rwk + bw);
  const kak = normalizeAngle(kdw + bs);

  return {
    mgk: normalizeAngle(mgk),
    abl,
    mwk: normalizeAngle(mwk),
    mw,
    rwk: normalizeAngle(rwk),
    bw,
    kdw: normalizeAngle(kdw),
    bs,
    kak: normalizeAngle(kak),
  };
}

/**
 * Backward conversion: KaK → MgK
 */
export function convertBackward(params: {
  kak: number;
  mw: number;
  bw: number;
  bs: number;
}): KursumwandlungResult {
  const { kak, mw, bw, bs } = params;

  const kdw = normalizeAngle(kak - bs);
  const rwk = normalizeAngle(kdw - bw);
  const mwk = normalizeAngle(rwk - mw);

  // Reverse lookup for MgK from mwK
  const { mgk, abl } = getAblenkungReverse(mwk);

  return {
    mgk: normalizeAngle(mgk),
    abl,
    mwk: normalizeAngle(mwk),
    mw,
    rwk: normalizeAngle(rwk),
    bw,
    kdw: normalizeAngle(kdw),
    bs,
    kak: normalizeAngle(kak),
  };
}

/**
 * Peilungen conversion: Only Abl + Mw, NO BW and NO BS
 */
export function convertPeilung(params: {
  mgp: number; // Magnetkompasspeilung
  mw: number;
}): { mgp: number; abl: number; mwp: number; mw: number; rwp: number } {
  const { mgp, mw } = params;
  const abl = getAblenkung(mgp);
  const mwp = normalizeAngle(mgp + abl);
  const rwp = normalizeAngle(mwp + mw);

  return { mgp: normalizeAngle(mgp), abl, mwp: normalizeAngle(mwp), mw, rwp: normalizeAngle(rwp) };
}

/**
 * Radar Head Up: RaSP relative to bow → add to MgK
 */
export function convertRadarHeadUp(params: {
  mgk: number;
  rasp: number; // Radar-Seitenpeilung
  mw: number;
}): { mgk: number; rasp: number; mgp: number; abl: number; mwp: number; mw: number; rwp: number } {
  const { mgk, rasp, mw } = params;
  const mgp = normalizeAngle(mgk + rasp);
  const abl = getAblenkung(mgk); // Use ship's MgK, not the bearing
  const mwp = normalizeAngle(mgp + abl);
  const rwp = normalizeAngle(mwp + mw);

  return { mgk, rasp, mgp, abl, mwp, mw, rwp };
}

export type ProblemType = 'forward' | 'backward' | 'peilung' | 'radar';

export interface KursumwandlungProblem {
  type: ProblemType;
  given: Record<string, number>;
  missweisung: MissweisungData;
  targetYear: number;
  windSide?: 'backbord' | 'steuerbord';
  solution: KursumwandlungResult;
}

/**
 * Generate a random Kursumwandlung practice problem
 */
export function generateProblem(type?: ProblemType): KursumwandlungProblem {
  const types: ProblemType[] = ['forward', 'backward'];
  const selectedType = type || types[Math.floor(Math.random() * types.length)];

  // Random values
  const mgk = Math.floor(Math.random() * 36) * 10 + Math.floor(Math.random() * 10);
  const baseYear = 2013;
  const targetYear = 2013 + Math.floor(Math.random() * 12); // 2013-2024
  const baseMw = -(Math.floor(Math.random() * 5) + 1) + Math.random() * 0.5; // -1 to -5.5
  const yearlyChange = 0.08 + Math.random() * 0.05; // ~8' east per year
  const missweisung: MissweisungData = { baseValue: Math.round(baseMw * 10) / 10, baseYear, yearlyChange: Math.round(yearlyChange * 100) / 100 };
  const mw = calculateMissweisung(missweisung, targetYear);

  const windSide = Math.random() > 0.5 ? 'backbord' as const : 'steuerbord' as const;
  const bw = (Math.floor(Math.random() * 4) + 1) * (windSide === 'backbord' ? 1 : -1);
  const bs = Math.floor(Math.random() * 11) - 5; // -5 to +5

  if (selectedType === 'forward') {
    const solution = convertForward({ mgk, mw, bw, bs });
    return {
      type: 'forward',
      given: { mgk },
      missweisung,
      targetYear,
      windSide,
      solution,
    };
  } else {
    const forwardResult = convertForward({ mgk, mw, bw, bs });
    const solution = convertBackward({ kak: forwardResult.kak, mw, bw, bs });
    return {
      type: 'backward',
      given: { kak: forwardResult.kak },
      missweisung,
      targetYear,
      windSide,
      solution,
    };
  }
}

/**
 * Check if a user's answer is within tolerance
 */
export function checkAnswer(userValue: number, correctValue: number, tolerance: number = 1): boolean {
  const diff = Math.abs(normalizeAngle(userValue) - normalizeAngle(correctValue));
  return diff <= tolerance || diff >= (360 - tolerance);
}

/**
 * Format angle as degrees string
 */
export function formatAngle(angle: number): string {
  return `${Math.round(normalizeAngle(angle))}°`;
}

/**
 * Format signed value (for Abl, Mw, etc.)
 */
export function formatSigned(value: number): string {
  if (value >= 0) return `+${value}°`;
  return `${value}°`;
}
