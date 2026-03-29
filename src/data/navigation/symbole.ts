// Kartensymbole & Schifffahrtszeichen flashcards
// Based on INT 1 (chart symbols) and IALA System A (buoyage)

export interface SymbolCard {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const symbolCategories = [
  'Lateralzeichen',
  'Kardinalzeichen',
  'Einzelgefahrzeichen',
  'Mitte-Fahrwasser-Zeichen',
  'Sonderzeichen',
  'Leuchtfeuerkennung',
  'Kartensymbole',
  'Tiefenangaben',
  'Gefahren',
  'Lichter & Signale',
  'Topografie',
  'Verkehrswege',
];

export const symbolCards: SymbolCard[] = [
  // === LATERALZEICHEN (IALA System A) ===
  {
    id: 'sym-001',
    category: 'Lateralzeichen',
    question: 'Wie sieht eine Steuerbordtonne (von See kommend) im IALA-System A aus?',
    answer: 'Grüne Tonne, kegelförmiges Toppzeichen (Spitze oben). Form: Spierentonne oder Leuchttonne. Licht (wenn vorhanden): grünes Blinkfeuer.',
    keywords: ['grün', 'Kegel', 'Steuerbord', 'IALA A'],
  },
  {
    id: 'sym-002',
    category: 'Lateralzeichen',
    question: 'Wie sieht eine Backbordtonne (von See kommend) im IALA-System A aus?',
    answer: 'Rote Tonne, zylindrisches Toppzeichen. Form: Stumpftonne oder Leuchttonne. Licht (wenn vorhanden): rotes Blinkfeuer.',
    keywords: ['rot', 'Zylinder', 'Backbord', 'IALA A'],
  },
  {
    id: 'sym-003',
    category: 'Lateralzeichen',
    question: 'Welche Seite zeigt ROT im IALA-System A (von See kommend)?',
    answer: 'Backbord (links). Merkregel: "Rot ist Backbord" - auch bei Positionslichtern am Schiff.',
    keywords: ['Backbord', 'links', 'rot'],
  },
  {
    id: 'sym-004',
    category: 'Lateralzeichen',
    question: 'Was kennzeichnet eine Steuerbord-Spierentonne?',
    answer: 'Grün, spitz zulaufend (kegelförmig). Ungerade Nummern. Liegt beim Einlaufen an Steuerbord (rechts).',
    keywords: ['grün', 'spitz', 'ungerade', 'Steuerbord'],
  },
  {
    id: 'sym-005',
    category: 'Lateralzeichen',
    question: 'Was kennzeichnet eine Backbord-Stumpftonne?',
    answer: 'Rot, flach oben (zylindrisch/stumpf). Gerade Nummern. Liegt beim Einlaufen an Backbord (links).',
    keywords: ['rot', 'stumpf', 'gerade', 'Backbord'],
  },
  {
    id: 'sym-006',
    category: 'Lateralzeichen',
    question: 'Was bedeutet eine rot-grün-rot waagerecht gestreifte Tonne?',
    answer: 'Backbord-Hauptfahrwasser. An der Abzweigung/Gabelung liegt das Hauptfahrwasser an Backbord. Toppzeichen: roter Zylinder.',
    keywords: ['Hauptfahrwasser', 'Backbord', 'Abzweigung'],
  },
  {
    id: 'sym-007',
    category: 'Lateralzeichen',
    question: 'Was bedeutet eine grün-rot-grün waagerecht gestreifte Tonne?',
    answer: 'Steuerbord-Hauptfahrwasser. An der Abzweigung/Gabelung liegt das Hauptfahrwasser an Steuerbord. Toppzeichen: grüner Kegel.',
    keywords: ['Hauptfahrwasser', 'Steuerbord', 'Abzweigung'],
  },

  // === KARDINALZEICHEN ===
  {
    id: 'sym-010',
    category: 'Kardinalzeichen',
    question: 'Was zeigt ein Nordkardinalzeichen an?',
    answer: 'Das Zeichen steht SÜDLICH der Gefahr. Passiere NÖRDLICH des Zeichens. Farbe: schwarz oben, gelb unten. Toppzeichen: 2 Kegel, Spitzen nach oben (↑↑).',
    keywords: ['Nord', 'schwarz-gelb', 'Spitzen oben'],
  },
  {
    id: 'sym-011',
    category: 'Kardinalzeichen',
    question: 'Was zeigt ein Südkardinalzeichen an?',
    answer: 'Das Zeichen steht NÖRDLICH der Gefahr. Passiere SÜDLICH des Zeichens. Farbe: gelb oben, schwarz unten. Toppzeichen: 2 Kegel, Spitzen nach unten (↓↓).',
    keywords: ['Süd', 'gelb-schwarz', 'Spitzen unten'],
  },
  {
    id: 'sym-012',
    category: 'Kardinalzeichen',
    question: 'Was zeigt ein Ostkardinalzeichen an?',
    answer: 'Das Zeichen steht WESTLICH der Gefahr. Passiere ÖSTLICH des Zeichens. Farbe: schwarz-gelb-schwarz (Basis). Toppzeichen: 2 Kegel, Basen zusammen (◇).',
    keywords: ['Ost', 'schwarz-gelb-schwarz', 'Basen zusammen'],
  },
  {
    id: 'sym-013',
    category: 'Kardinalzeichen',
    question: 'Was zeigt ein Westkardinalzeichen an?',
    answer: 'Das Zeichen steht ÖSTLICH der Gefahr. Passiere WESTLICH des Zeichens. Farbe: gelb-schwarz-gelb. Toppzeichen: 2 Kegel, Spitzen zusammen (⧫).',
    keywords: ['West', 'gelb-schwarz-gelb', 'Spitzen zusammen'],
  },
  {
    id: 'sym-014',
    category: 'Kardinalzeichen',
    question: 'Welches Licht hat ein Nordkardinalzeichen?',
    answer: 'Weißes Funkelfeuer: VQ (very quick) oder Q (quick) - ununterbrochen.',
    keywords: ['weiß', 'VQ', 'Q', 'ununterbrochen'],
  },
  {
    id: 'sym-015',
    category: 'Kardinalzeichen',
    question: 'Welches Licht hat ein Ostkardinalzeichen?',
    answer: 'Weißes Funkelfeuer: VQ(3) oder Q(3) - Gruppe von 3 Blitzen (3 Uhr = Osten).',
    keywords: ['weiß', 'VQ(3)', 'Q(3)', 'drei'],
  },
  {
    id: 'sym-016',
    category: 'Kardinalzeichen',
    question: 'Welches Licht hat ein Südkardinalzeichen?',
    answer: 'Weißes Funkelfeuer: VQ(6)+LFl oder Q(6)+LFl - Gruppe von 6 Blitzen + 1 langer (6 Uhr = Süden).',
    keywords: ['weiß', 'VQ(6)', 'Q(6)', 'sechs', 'lang'],
  },
  {
    id: 'sym-017',
    category: 'Kardinalzeichen',
    question: 'Welches Licht hat ein Westkardinalzeichen?',
    answer: 'Weißes Funkelfeuer: VQ(9) oder Q(9) - Gruppe von 9 Blitzen (9 Uhr = Westen).',
    keywords: ['weiß', 'VQ(9)', 'Q(9)', 'neun'],
  },
  {
    id: 'sym-018',
    category: 'Kardinalzeichen',
    question: 'Wie merkt man sich die Kardinalzeichen-Toppzeichen?',
    answer: 'Uhrzeigermerksatz: N=12 Uhr (↑↑ beide oben), O=3 Uhr (◇ Basen zusammen), S=6 Uhr (↓↓ beide unten), W=9 Uhr (⧫ Spitzen zusammen). Oder: Bei N zeigen beide Kegel nach NORD (oben), bei S nach SÜD (unten).',
    keywords: ['Uhr', 'Merkregel', 'Kegel'],
  },

  // === EINZELGEFAHRZEICHEN ===
  {
    id: 'sym-020',
    category: 'Einzelgefahrzeichen',
    question: 'Wie sieht ein Einzelgefahrzeichen aus?',
    answer: 'Schwarz mit einem oder mehreren breiten roten waagerechten Streifen. Toppzeichen: 2 schwarze Kugeln übereinander. Licht: weiß Fl(2) - Gruppe von 2 Blitzen.',
    keywords: ['schwarz', 'rot', 'Kugeln', 'Fl(2)'],
  },
  {
    id: 'sym-021',
    category: 'Einzelgefahrzeichen',
    question: 'Auf welcher Seite darf man ein Einzelgefahrzeichen passieren?',
    answer: 'Auf allen Seiten, aber mit ausreichendem Abstand! Das Zeichen steht direkt auf oder über der Gefahrenstelle (Wrack, Untiefe).',
    keywords: ['alle Seiten', 'Abstand', 'Gefahrenstelle'],
  },

  // === MITTE-FAHRWASSER-ZEICHEN ===
  {
    id: 'sym-025',
    category: 'Mitte-Fahrwasser-Zeichen',
    question: 'Wie sieht ein Mitte-Fahrwasser-Zeichen (Ansteuerungstonne) aus?',
    answer: 'Rot-weiß senkrecht gestreift. Toppzeichen: einzelne rote Kugel. Licht: weiß Iso, Oc, oder LFl 10s. Kann auf beiden Seiten passiert werden.',
    keywords: ['rot-weiß', 'senkrecht', 'Kugel', 'Ansteuerung'],
  },
  {
    id: 'sym-026',
    category: 'Mitte-Fahrwasser-Zeichen',
    question: 'Wo steht ein Mitte-Fahrwasser-Zeichen?',
    answer: 'In der Mitte des Fahrwassers oder als Ansteuerungstonne vor dem Fahrwasser. Kennzeichnet den sicheren Ansteuerungspunkt.',
    keywords: ['Mitte', 'Ansteuerung', 'Fahrwasser'],
  },

  // === SONDERZEICHEN ===
  {
    id: 'sym-030',
    category: 'Sonderzeichen',
    question: 'Wie sehen Sonderzeichen (Sperrgebiete, Kabel, Pipelines) aus?',
    answer: 'Vollständig gelb. Toppzeichen (wenn vorhanden): gelbes X (liegendes Kreuz). Licht (wenn vorhanden): gelb.',
    keywords: ['gelb', 'X-Kreuz', 'Sperrgebiet'],
  },
  {
    id: 'sym-031',
    category: 'Sonderzeichen',
    question: 'Was kann ein gelbes Sonderzeichen kennzeichnen?',
    answer: 'Sperrgebiete, militärische Übungsgebiete, Kabeltrassen, Pipelines, Messgeräte (ODAS), Badegebiete, Naturschutzgebiete, Aquakultur.',
    keywords: ['Sperrgebiet', 'Kabel', 'Pipeline', 'Naturschutz'],
  },

  // === LEUCHTFEUERKENNUNG ===
  {
    id: 'sym-040',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Fl" bei Leuchtfeuern?',
    answer: 'Blinkfeuer (Flashing). Einzelblitze, Dunkelphase deutlich länger als Lichtphase. Dauer einer Lichterscheinung < 2 Sekunden.',
    keywords: ['Fl', 'Blinkfeuer', 'Flashing'],
  },
  {
    id: 'sym-041',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Oc" bei Leuchtfeuern?',
    answer: 'Unterbrochenes Feuer (Occulting). Verdunkelungen, Lichtphase deutlich länger als Dunkelphase. Gegenteil von Fl.',
    keywords: ['Oc', 'Unterbrochen', 'Occulting'],
  },
  {
    id: 'sym-042',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "F" bei Leuchtfeuern?',
    answer: 'Festfeuer (Fixed). Dauerlicht ohne Unterbrechung.',
    keywords: ['F', 'Festfeuer', 'Fixed', 'Dauerlicht'],
  },
  {
    id: 'sym-043',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Iso" bei Leuchtfeuern?',
    answer: 'Gleichtaktfeuer (Isophase). Licht- und Dunkelphasen sind gleich lang.',
    keywords: ['Iso', 'Gleichtakt', 'Isophase'],
  },
  {
    id: 'sym-044',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Q" bei Leuchtfeuern?',
    answer: 'Funkelfeuer (Quick). Etwa 60 Blitze pro Minute (1 pro Sekunde). Bei Kardinalzeichen verwendet.',
    keywords: ['Q', 'Funkelfeuer', 'Quick', '60/min'],
  },
  {
    id: 'sym-045',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "VQ" bei Leuchtfeuern?',
    answer: 'Schnelles Funkelfeuer (Very Quick). Etwa 120 Blitze pro Minute (2 pro Sekunde). Bei Kardinalzeichen verwendet.',
    keywords: ['VQ', 'Schnelles Funkelfeuer', 'Very Quick', '120/min'],
  },
  {
    id: 'sym-046',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "LFl" bei Leuchtfeuern?',
    answer: 'Langes Blinkfeuer (Long Flash). Lichterscheinung ≥ 2 Sekunden. Wird z.B. bei Süd-Kardinalzeichen als Zusatz verwendet.',
    keywords: ['LFl', 'Lang', 'Long Flash', '≥2s'],
  },
  {
    id: 'sym-047',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Fl(3) 15s" in einer Leuchtfeuerbeschreibung?',
    answer: 'Gruppen-Blinkfeuer: 3 Blitze in einer Gruppe, die gesamte Wiederkehr dauert 15 Sekunden.',
    keywords: ['Gruppe', 'Blitze', 'Wiederkehr', '15s'],
  },
  {
    id: 'sym-048',
    category: 'Leuchtfeuerkennung',
    question: 'Was bedeutet "Mo(A)" bei Leuchtfeuern?',
    answer: 'Morsezeichen A (kurz-lang = · —). Wird für Ansteuerungsfeuer verwendet.',
    keywords: ['Morse', 'Mo(A)', 'Ansteuerung', 'kurz-lang'],
  },

  // === KARTENSYMBOLE ===
  {
    id: 'sym-050',
    category: 'Kartensymbole',
    question: 'Was bedeutet eine gestrichelte blaue/magenta Linie auf der Seekarte?',
    answer: 'Empfohlener Kurs / Fahrwasser. Auf der Übungskarte D49 als magenta (violett) gestrichelte Linie dargestellt.',
    keywords: ['gestrichelt', 'magenta', 'Fahrwasser', 'Kurs'],
  },
  {
    id: 'sym-051',
    category: 'Kartensymbole',
    question: 'Was bedeuten die Zahlen "12" oder "5.4" auf der Seekarte?',
    answer: 'Wassertiefe in Metern bei Kartennull (LAT = Lowest Astronomical Tide). Ganze Zahlen = aufrecht. Dezimalzahlen = mit Dezimalpunkt. Unterstrichene Tiefe = trockenfallend bei Ebbe.',
    keywords: ['Tiefe', 'Meter', 'LAT', 'Kartennull'],
  },
  {
    id: 'sym-052',
    category: 'Kartensymbole',
    question: 'Was bedeutet eine unterstrichene Tiefenangabe auf der Seekarte (z.B. "2̲")?',
    answer: 'Trockenfallende Höhe (Trockenfall). Die Stelle fällt bei Kartennull um den angegebenen Betrag trocken (ragt also aus dem Wasser).',
    keywords: ['unterstrichen', 'Trockenfall', 'trockenfallend'],
  },
  {
    id: 'sym-053',
    category: 'Kartensymbole',
    question: 'Was bedeuten grüne Flächen auf der Seekarte (D49)?',
    answer: 'Wattflächen (trockenfallender Bereich). Diese Gebiete fallen bei Niedrigwasser trocken. Auf D49 der Deutsche Bucht besonders ausgeprägt.',
    keywords: ['grün', 'Watt', 'trockenfallend', 'Niedrigwasser'],
  },
  {
    id: 'sym-054',
    category: 'Kartensymbole',
    question: 'Was bedeutet ein Kreuz (+) oder Stern (*) auf der Seekarte?',
    answer: 'Ein Kreuz (+) markiert häufig eine Untiefe oder Einzelgefahr. Ein kleines Kreuz mit Punkt kann auch eine Positionstonne sein.',
    keywords: ['Kreuz', 'Untiefe', 'Einzelgefahr'],
  },
  {
    id: 'sym-055',
    category: 'Kartensymbole',
    question: 'Was bedeutet "Wk" oder ein Wracksymbol auf der Seekarte?',
    answer: 'Wrack. Das genaue Symbol zeigt an: gefährliches Wrack (mit Tiefenangabe), nicht gefährlich (mit bekannter Tiefe), oder Wrack mit unbekannter Tiefe. Schraffierte Symbole = gefährlich.',
    keywords: ['Wk', 'Wrack', 'Gefahr', 'Tiefe'],
  },
  {
    id: 'sym-056',
    category: 'Kartensymbole',
    question: 'Was bedeutet "obstn" oder "Obstn" auf der Seekarte?',
    answer: 'Obstruction = Hindernis/Schifffahrtshindernis unter Wasser. Kann Felsen, Wracks, oder andere Hindernisse sein.',
    keywords: ['Obstruction', 'Hindernis', 'unterwasser'],
  },
  {
    id: 'sym-057',
    category: 'Kartensymbole',
    question: 'Was bedeuten gepunktete Tiefenlinien auf der Seekarte?',
    answer: 'Tiefenlinien (Isobathen). Verbinden Punkte gleicher Wassertiefe. Gängige Linien: 2m, 5m, 10m, 20m, 50m. Je enger beieinander, desto steiler der Meeresboden.',
    keywords: ['Tiefenlinien', 'Isobathen', 'Wassertiefe'],
  },
  {
    id: 'sym-058',
    category: 'Kartensymbole',
    question: 'Was kennzeichnet ein Ankerplatz auf der Seekarte?',
    answer: 'Ankersymbol (⚓). Kann als Einzelankerplatz oder als Reede (Ankergebiet mit gestrichelter magenta Umrandung) dargestellt sein.',
    keywords: ['Anker', 'Ankerplatz', 'Reede'],
  },
  {
    id: 'sym-059',
    category: 'Kartensymbole',
    question: 'Was bedeutet ein magenta (violetter) Pfeil auf der Seekarte?',
    answer: 'Gezeitenstromrichtung und -geschwindigkeit. Der Pfeil zeigt die Richtung, die Zahl die Geschwindigkeit in Knoten (bei Spring- und Nippzeit).',
    keywords: ['magenta', 'Pfeil', 'Gezeitenstrom', 'Richtung'],
  },

  // === GEFAHREN ===
  {
    id: 'sym-060',
    category: 'Gefahren',
    question: 'Was bedeutet ein Gefahrenkreis (Kreis mit Kreuz) auf der Seekarte?',
    answer: 'Gefährliche Untiefe oder versunkenes Hindernis. Der Bereich sollte weiträumig umfahren werden.',
    keywords: ['Gefahrenkreis', 'Untiefe', 'Hindernis'],
  },
  {
    id: 'sym-061',
    category: 'Gefahren',
    question: 'Was bedeutet "Rk" oder "Rks" auf der Seekarte?',
    answer: 'Felsen (Rock/Rocks). Kann über- oder unterwasser sein. Mit Tiefenangabe oder unterstrichen (trockenfallend).',
    keywords: ['Rk', 'Felsen', 'Rock'],
  },
  {
    id: 'sym-062',
    category: 'Gefahren',
    question: 'Was bedeuten die Abkürzungen "S", "M", "fS", "St" auf der Seekarte?',
    answer: 'Beschaffenheit des Meeresbodens: S = Sand, M = Schlick (Mud), fS = feiner Sand, St = Steine (Stones). Wichtig für Ankern.',
    keywords: ['Sand', 'Schlick', 'Steine', 'Meeresboden'],
  },

  // === VERKEHRSWEGE ===
  {
    id: 'sym-070',
    category: 'Verkehrswege',
    question: 'Was ist ein Verkehrstrennungsgebiet (VTG) auf der Seekarte?',
    answer: 'Einbahnstraße auf See. Magenta Pfeile zeigen die Verkehrsrichtung. Trennzone in der Mitte (schraffiert). Einfahrwinkel möglichst klein. Queren möglichst rechtwinklig.',
    keywords: ['VTG', 'Einbahnstraße', 'Trennzone', 'rechtwinklig'],
  },
  {
    id: 'sym-071',
    category: 'Verkehrswege',
    question: 'Was bedeutet eine durchgezogene magenta Linie mit "CABLE" auf der Seekarte?',
    answer: 'Unterwasserkabel (Telefonkabel, Stromkabel). Ankern verboten! Kann auch als "Tel" oder "Power Cable" beschriftet sein.',
    keywords: ['Kabel', 'CABLE', 'Ankern verboten'],
  },
  {
    id: 'sym-072',
    category: 'Verkehrswege',
    question: 'Was bedeutet "PIPELINE" auf der Seekarte?',
    answer: 'Unterwasser-Pipeline (Gas, Öl, Wasser). Ankern verboten! Dargestellt als durchgezogene Linie mit Beschriftung.',
    keywords: ['Pipeline', 'Ankern verboten', 'Gas', 'Öl'],
  },
  {
    id: 'sym-073',
    category: 'Verkehrswege',
    question: 'Was bedeutet eine gestrichelte magenta Linie mit "PROHIBITED AREA" oder "RESTRICTED AREA"?',
    answer: 'Sperrgebiet (Befahren verboten) oder Beschränktes Gebiet. Kann militärische Übungsgebiete, Naturschutzgebiete oder andere Sperrungen sein.',
    keywords: ['Sperrgebiet', 'Prohibited', 'Restricted', 'verboten'],
  },
  {
    id: 'sym-074',
    category: 'Verkehrswege',
    question: 'Was bedeutet "NP" oder "Nationalpark" auf der Seekarte?',
    answer: 'Nationalpark / Naturschutzgebiet. Besondere Regeln für Befahren, Geschwindigkeit, Ankern. Im Wattenmeer: Kernzonen oft gesperrt.',
    keywords: ['Nationalpark', 'Naturschutz', 'Wattenmeer', 'Kernzone'],
  },

  // === TOPOGRAFIE ===
  {
    id: 'sym-080',
    category: 'Topografie',
    question: 'Was bedeutet ein kleines Dreieck (△) an Land auf der Seekarte?',
    answer: 'Trigonometrischer Punkt / Landmarke. Dient als Peilmarke für die Navigation. Oft mit Namen beschriftet.',
    keywords: ['Dreieck', 'Landmarke', 'Peilmarke', 'trigonometrisch'],
  },
  {
    id: 'sym-081',
    category: 'Topografie',
    question: 'Was bedeutet ein Kirchensymbol (†) auf der Seekarte?',
    answer: 'Kirche oder Kapelle. Wichtige Landmarke für die Navigation. "conspic" = weithin sichtbar (conspicuous).',
    keywords: ['Kirche', 'Kreuz', 'conspic', 'Landmarke'],
  },
  {
    id: 'sym-082',
    category: 'Topografie',
    question: 'Was bedeutet ein Turmsymbol auf der Seekarte?',
    answer: 'Turm (Tower/Tr). Kann Wasserturm, Radarturm, Funkturm sein. Wichtige Peilmarke. "conspic" wenn besonders auffällig.',
    keywords: ['Turm', 'Tower', 'Peilmarke', 'conspic'],
  },
  {
    id: 'sym-083',
    category: 'Topografie',
    question: 'Was bedeutet "conspic" oder "(conspic)" auf der Seekarte?',
    answer: 'Conspicuous = weithin sichtbar, auffällig. Das Objekt eignet sich besonders gut als Peilmarke.',
    keywords: ['conspic', 'auffällig', 'sichtbar', 'Peilmarke'],
  },

  // === LICHTER & SIGNALE ===
  {
    id: 'sym-090',
    category: 'Lichter & Signale',
    question: 'Was bedeutet das Leuchtfeuersymbol mit "Fl(2) WR 10s 23m 15M" auf der Seekarte?',
    answer: 'Gruppen-Blinkfeuer, 2 Blitze, Weiß und Rot (verschiedene Sektoren), Wiederkehr 10 Sekunden, Feuerhöhe 23 Meter über MHW, Tragweite 15 Seemeilen.',
    keywords: ['Leuchtfeuer', 'Sektoren', 'Tragweite', 'Feuerhöhe'],
  },
  {
    id: 'sym-091',
    category: 'Lichter & Signale',
    question: 'Was ist die "Tragweite" eines Leuchtfeuers?',
    answer: 'Die Nenntragweite in Seemeilen (M), bei der das Licht bei einer Sichtweite von 10 sm noch erkannt werden kann. Hängt von Lichtstärke ab, nicht von Erdkrümmung.',
    keywords: ['Tragweite', 'Seemeilen', 'Sichtweite', 'Lichtstärke'],
  },
  {
    id: 'sym-092',
    category: 'Lichter & Signale',
    question: 'Was sind Leuchtsektoren auf der Seekarte?',
    answer: 'Farbige Bereiche um ein Leuchtfeuer. Weiß = sicheres Fahrwasser, Rot = Gefahr (Untiefen Backbord), Grün = Gefahr (Untiefen Steuerbord). Sektorgrenzen als gestrichelte Linien.',
    keywords: ['Sektoren', 'weiß', 'rot', 'grün', 'Fahrwasser'],
  },
  {
    id: 'sym-093',
    category: 'Lichter & Signale',
    question: 'Was ist ein Richtfeuer (Leitfeuer)?',
    answer: 'Zwei Feuer (Ober- und Unterfeuer), die auf einer Linie stehen. Wenn beide übereinander gesehen werden, befindet man sich auf der sicheren Fahrlinie. Unterfeuer niedriger, näher.',
    keywords: ['Richtfeuer', 'Leitfeuer', 'Oberfeuer', 'Unterfeuer', 'Linie'],
  },
  {
    id: 'sym-094',
    category: 'Lichter & Signale',
    question: 'Was bedeuten die Buchstaben "R", "G", "W", "Y" bei Leuchtfeuern?',
    answer: 'Farbe des Lichts: R = Rot (Red), G = Grün (Green), W = Weiß (White), Y = Gelb (Yellow). Ohne Angabe = Weiß.',
    keywords: ['Farbe', 'R', 'G', 'W', 'Y', 'Licht'],
  },

  // === Additional chart features from D49 ===
  {
    id: 'sym-100',
    category: 'Kartensymbole',
    question: 'Was ist Kartennull (KN) und LAT?',
    answer: 'Kartennull = Bezugsfläche für Tiefenangaben. LAT (Lowest Astronomical Tide) = niedrigster möglicher Gezeitenstand. Tiefenangaben sind Mindesttiefen bei LAT. Reale Tiefe ist meist größer.',
    keywords: ['Kartennull', 'LAT', 'Bezugsfläche', 'Mindesttiefe'],
  },
  {
    id: 'sym-101',
    category: 'Kartensymbole',
    question: 'Was ist MHW (Mittleres Hochwasser)?',
    answer: 'Mean High Water = Bezugsfläche für Höhenangaben an Land und für die Feuerhöhe von Leuchtfeuern. Höhenangaben in der Seekarte beziehen sich auf MHW.',
    keywords: ['MHW', 'Mean High Water', 'Höhen', 'Leuchtfeuer'],
  },
  {
    id: 'sym-102',
    category: 'Kartensymbole',
    question: 'Was bedeutet eine blaue Farbfläche auf der Seekarte?',
    answer: 'Flaches Wasser / geringe Wassertiefe. Je heller das Blau, desto flacher. Dunkleres Blau oder Weiß = tieferes Wasser.',
    keywords: ['blau', 'flach', 'Wassertiefe', 'Farbfläche'],
  },
  {
    id: 'sym-103',
    category: 'Kartensymbole',
    question: 'Was bedeuten die Abkürzungen "bn", "By", "Lt" auf der Seekarte?',
    answer: 'bn = Bake (Beacon, festes Seezeichen), By = Tonne (Buoy, schwimmendes Seezeichen), Lt = Leuchtturm (Lighthouse).',
    keywords: ['Bake', 'Tonne', 'Leuchtturm', 'bn', 'By', 'Lt'],
  },
  {
    id: 'sym-104',
    category: 'Kartensymbole',
    question: 'Was bedeutet ein Rauten-Symbol (◇) auf der Seekarte?',
    answer: 'Radarreflektor oder Funkstation. Kann auch RACON (Radar-Transponder) sein, der auf dem Radarbildschirm ein Morsezeichen erzeugt.',
    keywords: ['Raute', 'Radar', 'RACON', 'Funkstation'],
  },
  {
    id: 'sym-105',
    category: 'Kartensymbole',
    question: 'Was bedeutet "PA" auf der Seekarte?',
    answer: 'Position Approximate = Position nur ungefähr bekannt. Das Objekt existiert, aber die genaue Position ist unsicher.',
    keywords: ['PA', 'Position Approximate', 'ungefähr'],
  },
  {
    id: 'sym-106',
    category: 'Kartensymbole',
    question: 'Was bedeutet "ED" auf der Seekarte?',
    answer: 'Existence Doubtful = Existenz zweifelhaft. Es ist unklar, ob das eingetragene Objekt (Untiefe, Wrack) tatsächlich existiert.',
    keywords: ['ED', 'Existence Doubtful', 'zweifelhaft'],
  },
  {
    id: 'sym-107',
    category: 'Kartensymbole',
    question: 'Was bedeutet "Rep" oder "(Rep)" auf der Seekarte?',
    answer: 'Reported = gemeldet aber nicht bestätigt. Eine Untiefe oder ein Hindernis wurde gemeldet, ist aber nicht vermessen/bestätigt.',
    keywords: ['Rep', 'Reported', 'gemeldet', 'unbestätigt'],
  },

  // === ADDITIONAL NAVIGATION MARKS ===
  {
    id: 'sym-110',
    category: 'Sonderzeichen',
    question: 'Was ist ein Wracktonne?',
    answer: 'Grün-rot-grün oder rot-grün-rot waagerecht gestreifte Tonne, die ein neues, noch nicht in Karten eingetragenes Wrack kennzeichnet. Blaulicht: Fl(2+1) B.',
    keywords: ['Wrack', 'Tonne', 'neu', 'blau'],
  },
  {
    id: 'sym-111',
    category: 'Lichter & Signale',
    question: 'Was sind die Positionslichter eines Segelschiffs bei Nacht?',
    answer: 'Steuerbord: grün (112,5° nach vorn). Backbord: rot (112,5° nach vorn). Heckleuchte: weiß (135° nach achtern). Kein Topplicht (im Gegensatz zu Motorfahrzeugen).',
    keywords: ['Positionslichter', 'grün', 'rot', 'weiß', 'Steuerbord', 'Backbord'],
  },
  {
    id: 'sym-112',
    category: 'Lichter & Signale',
    question: 'Was zeigt ein Fahrzeug, das "manövrierunfähig" ist?',
    answer: 'Bei Nacht: zwei rote Rundumlichter übereinander. Bei Tag: zwei schwarze Bälle übereinander. Bedeutet: kann nicht ausweichen.',
    keywords: ['manövrierunfähig', 'rot', 'Bäll', 'Rundumlichter'],
  },
  {
    id: 'sym-113',
    category: 'Lichter & Signale',
    question: 'Was zeigt ein vor Anker liegendes Fahrzeug?',
    answer: 'Bei Nacht: weißes Ankerlicht (Rundumlicht) im Vorschiff. Über 50m Länge: zusätzlich ein zweites niedrigeres Ankerlicht achtern. Bei Tag: schwarzer Ball im Vorschiff.',
    keywords: ['Anker', 'Ankerlicht', 'weiß', 'Ball'],
  },

  // More chart symbol cards
  {
    id: 'sym-120',
    category: 'Kartensymbole',
    question: 'Was bedeutet eine magenta Wellenlinie auf der Seekarte?',
    answer: 'Grenze eines Sperrgebiets, Beschränkungsgebiets oder Verkehrstrennungsgebiets.',
    keywords: ['Wellenlinie', 'magenta', 'Grenze', 'Sperrgebiet'],
  },
  {
    id: 'sym-121',
    category: 'Kartensymbole',
    question: 'Was bedeuten konzentrische Kreise auf der Seekarte?',
    answer: 'Warnung vor überflutetem/trockenfallendem Gebiet. Auch: Tidenstromdiagramm-Bezugspunkte oder Gefahrenstelle.',
    keywords: ['Kreise', 'konzentrisch', 'Warnung', 'Gefahr'],
  },
  {
    id: 'sym-122',
    category: 'Tiefenangaben',
    question: 'Was ist der Unterschied zwischen Seekartentiefe und tatsächlicher Wassertiefe?',
    answer: 'Seekartentiefe bezieht sich auf Kartennull (LAT). Die tatsächliche Wassertiefe = Kartentiefe + Gezeitenstand (Tidenstand über LAT). Bei Hochwasser ist die reale Tiefe größer als in der Karte.',
    keywords: ['Kartentiefe', 'Wassertiefe', 'LAT', 'Gezeitenstand'],
  },
  {
    id: 'sym-123',
    category: 'Tiefenangaben',
    question: 'Was ist der "Tiefgang" und warum ist er für Tiefenangaben wichtig?',
    answer: 'Tiefgang = wie tief das Schiff im Wasser liegt. Verfügbares Wasser unter dem Kiel = Kartentiefe + Gezeitenstand - Tiefgang. Muss immer positiv sein (Sicherheitszuschlag beachten!).',
    keywords: ['Tiefgang', 'Kiel', 'Sicherheit', 'Mindestwasser'],
  },

  // Radar-specific
  {
    id: 'sym-130',
    category: 'Kartensymbole',
    question: 'Was bedeutet "RACON" auf der Seekarte?',
    answer: 'Radar-Transponder. Antwortet auf Radarimpulse und erzeugt auf dem Radarbildschirm ein charakteristisches Signal (Morsezeichen). Hilft bei Identifikation von Seezeichen.',
    keywords: ['RACON', 'Radar', 'Transponder', 'Morsezeichen'],
  },
  {
    id: 'sym-131',
    category: 'Kartensymbole',
    question: 'Was bedeutet "AIS" auf Seezeichen?',
    answer: 'Automatic Identification System. Das Seezeichen sendet ein AIS-Signal und ist auf dem Kartenplotter als virtuelles oder reales AIS-Ziel sichtbar.',
    keywords: ['AIS', 'Automatic', 'Identification', 'Signal'],
  },
];
