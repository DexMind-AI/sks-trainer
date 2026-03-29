// Stromdreieck (Current Triangle) logic and visualization data
// Three vectors: KdW/FdW (course/speed through water), 
// Strom (StR/StG = current direction/speed),
// KüG/FüG (course/speed over ground)

import { normalizeAngle } from './steuertafel';

export interface Vector {
  direction: number; // in degrees (0-360)
  speed: number;     // in knots
}

export interface StromdreieckData {
  kdw: Vector;  // Kurs/Fahrt durchs Wasser
  strom: Vector; // Stromrichtung/Stromgeschwindigkeit
  kueg: Vector;  // Kurs/Fahrt über Grund
}

/**
 * Convert polar (direction, speed) to cartesian (x, y)
 * Direction is nautical: 0° = North, 90° = East, clockwise
 */
export function polarToCartesian(direction: number, speed: number): { x: number; y: number } {
  const rad = ((90 - direction) * Math.PI) / 180;
  return {
    x: speed * Math.cos(rad),
    y: speed * Math.sin(rad),
  };
}

/**
 * Convert cartesian back to polar (nautical direction + speed)
 */
export function cartesianToPolar(x: number, y: number): { direction: number; speed: number } {
  const speed = Math.sqrt(x * x + y * y);
  if (speed < 0.01) return { direction: 0, speed: 0 };
  const rad = Math.atan2(y, x);
  const direction = normalizeAngle(90 - (rad * 180) / Math.PI);
  return { direction: Math.round(direction * 10) / 10, speed: Math.round(speed * 10) / 10 };
}

/**
 * Solve Stromdreieck: given KdW and Strom, find KüG
 * KüG = KdW + Strom (vector addition)
 */
export function solveForKueg(kdw: Vector, strom: Vector): Vector {
  const kdwXY = polarToCartesian(kdw.direction, kdw.speed);
  const stromXY = polarToCartesian(strom.direction, strom.speed);
  return cartesianToPolar(kdwXY.x + stromXY.x, kdwXY.y + stromXY.y);
}

/**
 * Solve: given KüG and Strom, find KdW
 * KdW = KüG - Strom
 */
export function solveForKdw(kueg: Vector, strom: Vector): Vector {
  const kuegXY = polarToCartesian(kueg.direction, kueg.speed);
  const stromXY = polarToCartesian(strom.direction, strom.speed);
  return cartesianToPolar(kuegXY.x - stromXY.x, kuegXY.y - stromXY.y);
}

/**
 * Solve: given KdW and KüG, find Strom
 * Strom = KüG - KdW
 */
export function solveForStrom(kdw: Vector, kueg: Vector): Vector {
  const kdwXY = polarToCartesian(kdw.direction, kdw.speed);
  const kuegXY = polarToCartesian(kueg.direction, kueg.speed);
  return cartesianToPolar(kuegXY.x - kdwXY.x, kuegXY.y - kdwXY.y);
}

export type StromdreieckProblemType = 'find_kueg' | 'find_kdw' | 'find_strom';

export interface StromdreieckProblem {
  type: StromdreieckProblemType;
  given: Partial<StromdreieckData>;
  solution: StromdreieckData;
}

/**
 * Generate a random Stromdreieck problem
 */
export function generateStromdreieckProblem(type?: StromdreieckProblemType): StromdreieckProblem {
  const types: StromdreieckProblemType[] = ['find_kueg', 'find_kdw', 'find_strom'];
  const selectedType = type || types[Math.floor(Math.random() * types.length)];

  // Generate realistic values
  const kdw: Vector = {
    direction: Math.floor(Math.random() * 36) * 10,
    speed: 4 + Math.round(Math.random() * 30) / 10, // 4-7 kn
  };
  const strom: Vector = {
    direction: Math.floor(Math.random() * 36) * 10,
    speed: 0.5 + Math.round(Math.random() * 25) / 10, // 0.5-3 kn
  };
  const kueg = solveForKueg(kdw, strom);

  const solution: StromdreieckData = { kdw, strom, kueg };

  switch (selectedType) {
    case 'find_kueg':
      return { type: selectedType, given: { kdw, strom }, solution };
    case 'find_kdw':
      return { type: selectedType, given: { kueg, strom }, solution };
    case 'find_strom':
      return { type: selectedType, given: { kdw, kueg }, solution };
  }
}

/**
 * Get SVG points for drawing a vector from origin
 */
export function getVectorEndpoint(
  origin: { x: number; y: number },
  direction: number,
  speed: number,
  scale: number = 40 // pixels per knot
): { x: number; y: number } {
  // Convert nautical direction to SVG coordinates (y-axis inverted)
  const rad = ((90 - direction) * Math.PI) / 180;
  return {
    x: origin.x + speed * scale * Math.cos(rad),
    y: origin.y - speed * scale * Math.sin(rad), // SVG y is inverted
  };
}
