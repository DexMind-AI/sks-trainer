// Gezeitenberechnung (Tidal Calculation) data and logic
// Based on SKS Begleitheft structure

export interface Bezugsort {
  name: string;
  id: string;
}

export interface Anschlussort {
  name: string;
  id: string;
  zugHW: number; // Zeitunterschied Hochwasser in minutes (+ = later, - = earlier)
  zugNW: number; // Zeitunterschied Niedrigwasser in minutes
  hugHW: number; // Höhenunterschied Hochwasser in meters
  hugNW: number; // Höhenunterschied Niedrigwasser in meters
}

export interface GezeitenEintrag {
  zeit: string;  // HH:MM in UTC
  hoehe: number; // Height in meters
  typ: 'HW' | 'NW'; // Hochwasser or Niedrigwasser
}

export interface GezeitenTag {
  datum: string; // DD.MM.YYYY
  eintraege: GezeitenEintrag[];
}

export interface GezeitenProblem {
  bezugsort: Bezugsort;
  anschlussort: Anschlussort;
  tag: GezeitenTag;
  zeitzone: 'UTC' | 'MEZ' | 'MESZ';
  mondphase: 'Neumond' | 'Erstes Viertel' | 'Vollmond' | 'Letztes Viertel';
  solution: GezeitenSolution;
}

export interface GezeitenSolution {
  // Bezugsort values
  hwZeit: string;
  hwHoehe: number;
  nwZeit: string;
  nwHoehe: number;
  // Corrections
  zugHW: number;
  zugNW: number;
  hugHW: number;
  hugNW: number;
  // Anschlussort results
  anschlussHWZeit: string;
  anschlussHWHoehe: number;
  anschlussNWZeit: string;
  anschlussNWHoehe: number;
  // Derived values
  tidenfall: number;
  tidenstieg: number;
  falldauer: number; // in minutes
  stiegdauer: number; // in minutes
  gezeitenAlter: string;
  // Time zone converted
  zeitLocal: string; // Zeit in requested timezone
}

// Bezugsort: Helgoland (standard for SKS exam)
export const bezugsortHelgoland: Bezugsort = {
  name: 'Helgoland',
  id: 'helgoland',
};

// Anschlussorte with their correction values
export const anschlussorte: Anschlussort[] = [
  { name: 'Büsum', id: 'buesum', zugHW: 25, zugNW: 50, hugHW: 0.6, hugNW: 0.1 },
  { name: 'Cuxhaven', id: 'cuxhaven', zugHW: 55, zugNW: 65, hugHW: 0.4, hugNW: 0.2 },
  { name: 'Wangerooge', id: 'wangerooge', zugHW: -15, zugNW: 10, hugHW: 0.2, hugNW: 0.0 },
  { name: 'Norderpiep "Blauort"', id: 'norderpiep', zugHW: 10, zugNW: 30, hugHW: 0.3, hugNW: 0.0 },
  { name: 'Hörnum (Sylt)', id: 'hoernum', zugHW: -40, zugNW: -25, hugHW: -0.1, hugNW: -0.1 },
];

/**
 * Add minutes to a time string HH:MM
 */
export function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(':').map(Number);
  const totalMin = h * 60 + m + minutes;
  const newH = Math.floor(((totalMin % 1440) + 1440) % 1440 / 60);
  const newM = ((totalMin % 60) + 60) % 60;
  return `${String(newH).padStart(2, '0')}:${String(Math.round(newM)).padStart(2, '0')}`;
}

/**
 * Calculate time difference in minutes between two HH:MM strings
 */
export function timeDiffMinutes(from: string, to: string): number {
  const [h1, m1] = from.split(':').map(Number);
  const [h2, m2] = to.split(':').map(Number);
  let diff = (h2 * 60 + m2) - (h1 * 60 + m1);
  if (diff < 0) diff += 1440; // next day
  return diff;
}

/**
 * Convert UTC time to MEZ (UTC+1) or MESZ (UTC+2)
 */
export function convertTimezone(utcTime: string, timezone: 'UTC' | 'MEZ' | 'MESZ'): string {
  switch (timezone) {
    case 'MEZ': return addMinutes(utcTime, 60);
    case 'MESZ': return addMinutes(utcTime, 120);
    default: return utcTime;
  }
}

/**
 * Determine Alter der Gezeit from moon phase
 */
export function getGezeitenAlter(mondphase: string): string {
  switch (mondphase) {
    case 'Neumond':
    case 'Vollmond':
      return 'Springzeit (ca. 1.5 Tage nach Voll-/Neumond)';
    case 'Erstes Viertel':
    case 'Letztes Viertel':
      return 'Nippzeit (ca. 1.5 Tage nach Viertelmond)';
    default:
      return 'Mittzeit';
  }
}

/**
 * Generate a random Gezeitenberechnung problem
 */
export function generateGezeitenProblem(): GezeitenProblem {
  const anschlussort = anschlussorte[Math.floor(Math.random() * anschlussorte.length)];
  const mondphasen: GezeitenProblem['mondphase'][] = ['Neumond', 'Erstes Viertel', 'Vollmond', 'Letztes Viertel'];
  const mondphase = mondphasen[Math.floor(Math.random() * mondphasen.length)];
  const zeitzonen: GezeitenProblem['zeitzone'][] = ['UTC', 'MEZ', 'MESZ'];
  const zeitzone = zeitzonen[Math.floor(Math.random() * zeitzonen.length)];

  // Generate realistic Helgoland tidal data
  const hwHour = 2 + Math.floor(Math.random() * 8); // HW between 02:00 and 10:00
  const hwMin = Math.floor(Math.random() * 6) * 10;
  const hwZeit = `${String(hwHour).padStart(2, '0')}:${String(hwMin).padStart(2, '0')}`;

  // NW is roughly 6h15 after HW
  const nwZeit = addMinutes(hwZeit, 360 + Math.floor(Math.random() * 30));

  // Realistic heights for Helgoland
  const isSpring = mondphase === 'Neumond' || mondphase === 'Vollmond';
  const hwHoehe = isSpring
    ? 2.6 + Math.round(Math.random() * 6) / 10  // 2.6 - 3.2m spring
    : 2.2 + Math.round(Math.random() * 6) / 10; // 2.2 - 2.8m neap
  const nwHoehe = isSpring
    ? 0.2 + Math.round(Math.random() * 3) / 10  // 0.2 - 0.5m spring
    : 0.4 + Math.round(Math.random() * 4) / 10; // 0.4 - 0.8m neap

  const day = 1 + Math.floor(Math.random() * 28);
  const month = 1 + Math.floor(Math.random() * 12);
  const datum = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.2024`;

  const tag: GezeitenTag = {
    datum,
    eintraege: [
      { zeit: hwZeit, hoehe: hwHoehe, typ: 'HW' },
      { zeit: nwZeit, hoehe: nwHoehe, typ: 'NW' },
    ],
  };

  // Calculate solution
  const anschlussHWZeit = addMinutes(hwZeit, anschlussort.zugHW);
  const anschlussHWHoehe = Math.round((hwHoehe + anschlussort.hugHW) * 10) / 10;
  const anschlussNWZeit = addMinutes(nwZeit, anschlussort.zugNW);
  const anschlussNWHoehe = Math.round((nwHoehe + anschlussort.hugNW) * 10) / 10;

  const tidenfall = Math.round((anschlussHWHoehe - anschlussNWHoehe) * 10) / 10;
  const tidenstieg = tidenfall; // same magnitude
  const falldauer = timeDiffMinutes(anschlussHWZeit, anschlussNWZeit);
  const stiegdauer = 1440 - falldauer; // approximately

  const solution: GezeitenSolution = {
    hwZeit,
    hwHoehe,
    nwZeit,
    nwHoehe,
    zugHW: anschlussort.zugHW,
    zugNW: anschlussort.zugNW,
    hugHW: anschlussort.hugHW,
    hugNW: anschlussort.hugNW,
    anschlussHWZeit: convertTimezone(anschlussHWZeit, zeitzone),
    anschlussHWHoehe,
    anschlussNWZeit: convertTimezone(anschlussNWZeit, zeitzone),
    anschlussNWHoehe,
    tidenfall,
    tidenstieg,
    falldauer,
    stiegdauer,
    gezeitenAlter: getGezeitenAlter(mondphase),
    zeitLocal: zeitzone,
  };

  return {
    bezugsort: bezugsortHelgoland,
    anschlussort,
    tag,
    zeitzone,
    mondphase,
    solution,
  };
}

/**
 * Format minutes as hours and minutes string
 */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}min`;
}

/**
 * Format height in meters
 */
export function formatHeight(height: number): string {
  return `${height.toFixed(1)} m`;
}
