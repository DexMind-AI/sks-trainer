// Keyword extraction and highlighting for model answers

// Predefined dictionary of nautical/legal/technical terms
const NAUTICAL_TERMS = new Set([
  // Navigation
  'Kompass', 'Kurs', 'Peilung', 'Tide', 'Gezeiten', 'Missweisung', 'Ablenkung',
  'Deviation', 'Variation', 'Koppelnavigation', 'Besteck', 'Standlinie', 'Standort',
  'Breite', 'Länge', 'Nautische Meile', 'Seemeile', 'Knoten', 'Logge',
  'Lot', 'Echolot', 'Radar', 'GPS', 'AIS', 'ECDIS', 'Seekarte', 'Leuchtfeuer',
  'Feuer', 'Tonne', 'Bake', 'Fahrwasser', 'Fahrrinne', 'Betonnung', 'Befeuerung',
  'Koppeln', 'Beschickung', 'Kartendatum', 'WGS 84', 'Kabel', 'Steuerbord',
  'Backbord', 'Bug', 'Heck', 'Voraus', 'Achteraus', 'Dwars', 'Lee', 'Luv',
  'Abdrehen', 'Anlaufen', 'Kursversetzung', 'Abdrift', 'Strom', 'Stromversetzung',
  'Stromdreieck', 'Gezeitenstrom', 'Nipptide', 'Springtide', 'Hochwasser', 'Niedrigwasser',
  'Tiefgang', 'Wassertiefe', 'Kartentiefe', 'Seekartennull', 'Pegelstand',
  'Gezeitentafel', 'Stromatlas', 'Seezeichen', 'Lateralsystem', 'Kardinalsystem',
  'Einzelgefahrzeichen', 'Wrackzeichen', 'Ansteuerungstonne',
  'Wegepunkt', 'Route', 'Track', 'Plotter', 'Bildschirm', 'Display',
  // Ship handling
  'Ruder', 'Ruderlage', 'Propeller', 'Schraube', 'Radeffekt', 'Drehkreis',
  'Manöver', 'Ankermanöver', 'Anlegemanöver', 'Ablegemanöver', 'Mann über Bord',
  'Williamson-Turn', 'Schlepp', 'Leine', 'Festmacher', 'Poller', 'Klampe',
  'Belegen', 'Aufschießen', 'Fieren', 'Hieven', 'Slippen',
  'Anker', 'Ankerkette', 'Ankerwache', 'Schwojen', 'Drift', 'Treiben',
  'Segel', 'Segeltrimm', 'Reffen', 'Bergen', 'Setzen', 'Halse', 'Wende',
  'Kreuzen', 'Am Wind', 'Halbwind', 'Raumschots', 'Vorwind', 'Backstag',
  'Genua', 'Fock', 'Großsegel', 'Spinnaker', 'Gennaker',
  'Mast', 'Baum', 'Want', 'Stag', 'Rigg', 'Takelage',
  // Weather
  'Hoch', 'Tief', 'Hochdruckgebiet', 'Tiefdruckgebiet', 'Warmfront', 'Kaltfront',
  'Okklusion', 'Isobare', 'Beaufort', 'Windstärke', 'Seegang', 'Dünung',
  'Nebel', 'Sicht', 'Sichtweite', 'Seerauch', 'Advektionsnebel', 'Strahlungsnebel',
  'Barometer', 'Thermometer', 'Hygrometer', 'Anemometer', 'Windfahne',
  'Wetterbericht', 'Seewetterbericht', 'Sturmwarnung', 'Böe', 'Gewitter',
  'Beaufortskala', 'Windrichtung', 'Windgeschwindigkeit',
  // Safety
  'Rettungsweste', 'Rettungsinsel', 'Rettungsring', 'Seenotrakete', 'Rauchsignal',
  'Notruf', 'Mayday', 'Pan-Pan', 'Sécurité', 'DSC', 'EPIRB', 'SART',
  'VHF', 'UKW', 'Kanal 16', 'Kanal 70', 'GMDSS', 'Seenotsignal',
  'Feuerlöscher', 'Lenzpumpe', 'Seeventil', 'Leck', 'Leckabwehr',
  'Erste Hilfe', 'Unterkühlung', 'Seekrankheit',
  // Technical
  'Motor', 'Diesel', 'Kraftstoff', 'Ölstand', 'Kühlwasser', 'Impeller',
  'Lichtmaschine', 'Batterie', 'Landstrom', 'Bordelektrik', 'Sicherung',
  'Segellatten', 'Vorliek', 'Achterliek', 'Unterliek', 'Schothorn',
  'Winschen', 'Fallen', 'Schoten',
]);

// Legal references
const LEGAL_TERMS = new Set([
  'KVR', 'SeeSchStrO', 'MARPOL', 'SOLAS', 'STCW', 'SchSV', 'BinSchStrO',
  'Regel', 'Vorfahrt', 'Ausweichpflicht', 'Kurshalter', 'Ausweicher',
  'Maschinenfahrzeug', 'Segelfahrzeug', 'Fischereifahrzeug', 'Manövrierunfähig',
  'Manövrierbehindert', 'Tiefgangbehindert', 'Überholer', 'Überholen',
  'Kreuzende Kurse', 'Entgegengesetzte Kurse', 'Enge Fahrwasser',
  'Verkehrstrennungsgebiet', 'VTG', 'TSS',
  'Lichterführung', 'Signalkörper', 'Schallsignal', 'Nebelsignal',
  'Topplicht', 'Seitenlicht', 'Hecklicht', 'Ankerlicht', 'Schlepperlicht',
  'Flagge', 'Flaggenführung', 'Nationalflagge', 'Signalflagge',
  'BSH', 'BG Verkehr', 'Wasser- und Schifffahrtsamt', 'WSA',
  'Schifffahrtspolizei', 'Hafenordnung', 'Revierordnung',
  'Sportbootführerschein', 'SKS', 'SSS', 'SHS', 'SBF See', 'SBF Binnen',
  'Logbuch', 'Schiffstagebuch', 'Seetagebuch',
  'Naturschutzgebiet', 'Nationalpark', 'Sperrgebiet', 'Ankerverbot',
  'Wasserskizone', 'Geschwindigkeitsbegrenzung',
]);

// Pattern-based detection
const MEASUREMENT_PATTERN = /\d+(?:[.,]\d+)?\s*(?:sm|nm|kn|m|km|°|hPa|mbar|Bft|kbl|min|Sek|s|h|kW|PS|V|A|Ah|l|kg|t|mm|cm|%)/gi;
const ABBREVIATION_PATTERN = /\b[A-ZÄÖÜ]{2,}\b/g;

/**
 * Extract keywords from a model answer text using the predefined dictionaries
 */
export function extractKeywords(text: string): string[] {
  const found = new Set<string>();

  // Check nautical terms
  NAUTICAL_TERMS.forEach(term => {
    if (text.toLowerCase().includes(term.toLowerCase())) {
      found.add(term);
    }
  });

  // Check legal terms
  LEGAL_TERMS.forEach(term => {
    if (text.toLowerCase().includes(term.toLowerCase())) {
      found.add(term);
    }
  });

  // Check abbreviations (2+ uppercase letters)
  const abbrevs = text.match(ABBREVIATION_PATTERN);
  if (abbrevs) {
    abbrevs.forEach(a => {
      if (a.length >= 2 && a.length <= 10) found.add(a);
    });
  }

  return Array.from(found);
}

/**
 * Highlight keywords in a text string.
 * Returns an array of segments with { text, isKeyword } for rendering.
 */
export interface TextSegment {
  text: string;
  isKeyword: boolean;
  isExtracted: boolean; // true = from dictionary, false = from question keywords
}

export function highlightKeywords(
  text: string,
  questionKeywords: string[],
  extractedKeywords?: string[]
): TextSegment[] {
  // Build set of all keywords to highlight
  const allKeywords = new Set<string>();
  const questionKwSet = new Set<string>();
  
  questionKeywords.forEach(kw => {
    allKeywords.add(kw.toLowerCase());
    questionKwSet.add(kw.toLowerCase());
  });
  
  if (extractedKeywords) {
    extractedKeywords.forEach(kw => allKeywords.add(kw.toLowerCase()));
  }

  if (allKeywords.size === 0) return [{ text, isKeyword: false, isExtracted: false }];

  // Build regex to match all keywords (longest first to avoid partial matches)
  const sortedKeywords = Array.from(allKeywords).sort((a, b) => b.length - a.length);
  const escaped = sortedKeywords.map(kw => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');

  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add non-keyword text before match
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), isKeyword: false, isExtracted: false });
    }
    // Add keyword
    const matchedLower = match[0].toLowerCase();
    segments.push({
      text: match[0],
      isKeyword: true,
      isExtracted: !questionKwSet.has(matchedLower),
    });
    lastIndex = pattern.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), isKeyword: false, isExtracted: false });
  }

  return segments.length > 0 ? segments : [{ text, isKeyword: false, isExtracted: false }];
}

/**
 * Get enhanced keywords for a question (combines existing + extracted)
 */
export function getEnhancedKeywords(answer: string, existingKeywords: string[]): string[] {
  const extracted = extractKeywords(answer);
  const combined = new Set<string>([...existingKeywords]);
  extracted.forEach(kw => combined.add(kw));
  return Array.from(combined);
}
