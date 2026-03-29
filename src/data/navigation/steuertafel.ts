// Steuertafel (Deviation Table) from SKS Begleitheft
// Maps MgK (Magnetkompasskurs) to Ablenkung (Deviation)

export interface DeviationEntry {
  mgk: number; // Magnetic compass course in degrees
  abl: number; // Deviation in degrees (+ = east, - = west)
}

export const steuertafel: DeviationEntry[] = [
  { mgk: 0, abl: 2 },
  { mgk: 10, abl: 3 },
  { mgk: 20, abl: 4 },
  { mgk: 30, abl: 5 },
  { mgk: 40, abl: 7 },
  { mgk: 50, abl: 6 },
  { mgk: 60, abl: 5 },
  { mgk: 70, abl: 4 },
  { mgk: 80, abl: 2 },
  { mgk: 90, abl: 1 },
  { mgk: 100, abl: 0 },
  { mgk: 110, abl: -1 },
  { mgk: 120, abl: -1 },
  { mgk: 130, abl: -2 },
  { mgk: 140, abl: -3 },
  { mgk: 150, abl: -3 },
  { mgk: 160, abl: -3 },
  { mgk: 170, abl: -4 },
  { mgk: 180, abl: -4 },
  { mgk: 190, abl: -4 },
  { mgk: 200, abl: -3 },
  { mgk: 210, abl: -2 },
  { mgk: 220, abl: -1 },
  { mgk: 230, abl: 0 },
  { mgk: 240, abl: 1 },
  { mgk: 250, abl: 1 },
  { mgk: 260, abl: 2 },
  { mgk: 270, abl: 2 },
  { mgk: 280, abl: 3 },
  { mgk: 290, abl: 3 },
  { mgk: 300, abl: 3 },
  { mgk: 310, abl: 3 },
  { mgk: 320, abl: 3 },
  { mgk: 330, abl: 3 },
  { mgk: 340, abl: 2 },
  { mgk: 350, abl: 2 },
];

/**
 * Interpolate deviation for any MgK value.
 * Linear interpolation between table entries.
 * Handles wrap-around at 360°/0°.
 */
export function getAblenkung(mgk: number): number {
  // Normalize to 0-360
  mgk = ((mgk % 360) + 360) % 360;

  // Find surrounding entries
  const lower = Math.floor(mgk / 10) * 10;
  const upper = (lower + 10) % 360;
  const fraction = (mgk - lower) / 10;

  const lowerEntry = steuertafel.find(e => e.mgk === lower);
  const upperEntry = steuertafel.find(e => e.mgk === upper);

  if (!lowerEntry || !upperEntry) return 0;

  // If exactly on a table value, no interpolation needed
  if (fraction === 0) return lowerEntry.abl;

  // Linear interpolation
  const interpolated = lowerEntry.abl + (upperEntry.abl - lowerEntry.abl) * fraction;

  // Round to nearest 0.5°
  return Math.round(interpolated * 2) / 2;
}

/**
 * Reverse lookup: given a true bearing, find deviation.
 * This is used when converting FROM rwK TO MgK.
 * Uses iterative approach since Abl depends on MgK.
 */
export function getAblenkungReverse(mwk: number): { mgk: number; abl: number } {
  // mwK = MgK + Abl → MgK = mwK - Abl
  // But Abl depends on MgK, so we iterate
  let mgk = mwk; // initial guess
  for (let i = 0; i < 10; i++) {
    const abl = getAblenkung(mgk);
    mgk = normalizeAngle(mwk - abl);
  }
  const abl = getAblenkung(mgk);
  return { mgk: Math.round(mgk * 10) / 10, abl };
}

/**
 * Normalize angle to 0-360° range
 */
export function normalizeAngle(angle: number): number {
  return ((angle % 360) + 360) % 360;
}
