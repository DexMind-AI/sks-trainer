// Auto-generated from SKS Fragenkatalog PDF
// 638 questions across 5 sections

export interface Question {
  id: string;
  number: number;
  subtopic: string;
  question: string;
  answer: string;
  keywords: string[];
}

export interface Section {
  id: string;
  name: string;
  subtopics: string[];
  questions: Question[];
}

export interface QuestionCatalog {
  sections: Section[];
}

export const catalog: QuestionCatalog = {
  "sections": [
    {
      "id": "navigation",
      "name": "Navigation",
      "subtopics": [
        "Seekarten und weitere nautische Publikationen",
        "Ortsbestimmung, Navigieren",
        "Gezeiten",
        "Elektronische Navigation",
        "Allgemeines (Ausrüstung, Gerätekunde)"
      ],
      "questions": [
        {
          "id": "nav-1",
          "number": 1,
          "subtopic": "",
          "question": "Worauf müssen Sie als Schiffsführer vor Reiseantritt hinsichtlich der Seekarten und Seebücher achten?",
          "answer": "Auf Vollständigkeit der Unterlagen und deren Berichtigung auf den neuesten Stand.",
          "keywords": [
            "Berichtigung",
            "Stand",
            "Unterlagen",
            "Vollständigkeit"
          ]
        },
        {
          "id": "nav-2",
          "number": 2,
          "subtopic": "",
          "question": "Warum muss in der GPS-Navigation das jeweilige Kartendatum unbedingt berücksichtigt werden?",
          "answer": "Weil sich das von GPS verwendete Bezugssystem WGS 84 (World Geodetic System 1984) von anderen verwendeten Bezugssystemen (Kartendatum) unterscheiden kann.",
          "keywords": [
            "Bezugssystem",
            "Bezugssystemen",
            "Geodetic",
            "Kartendatum",
            "System"
          ]
        },
        {
          "id": "nav-3",
          "number": 3,
          "subtopic": "",
          "question": "Welche Differenzen können zwischen WGS 84 und anderen Bezugssystemen auftreten?",
          "answer": "Die Differenzen von φ und λ liegen im Allgemeinen in der Größenordnung von 0,1 kbl bis 1 kbl, also etwa von 20 bis 200 m. Es können größere Unterschiede auftreten.",
          "keywords": [
            "Allgemeinen",
            "Differenzen",
            "Größenordnung",
            "Unterschiede"
          ]
        },
        {
          "id": "nav-4",
          "number": 4,
          "subtopic": "",
          "question": "Wo finden Sie in der Seekarte Angaben über das benutzte Bezugssystem und ggf. entsprechende Korrekturhinweise?",
          "answer": "Am Kartenrand unter dem Titel.",
          "keywords": [
            "Kartenrand",
            "Titel"
          ]
        },
        {
          "id": "nav-5",
          "number": 5,
          "subtopic": "",
          "question": "Wie lautet ggf. der Korrekturhinweis bezüglich GPS in der Seekarte, wenn das benutzte Kartendatum (z. B. ED 50) und WGS 84 nicht übereinstimmen?",
          "answer": "Durch Satellitennavigation (z. B. GPS) erhaltene Positionen im WGS 84 sind 0, ... Minuten nordwärts/südwärts und 0, ... Minuten westwärts/ostwärts zu verlegen, um mit dieser Karte übereinzustimmen.",
          "keywords": [
            "Karte",
            "Minuten",
            "Positionen",
            "Satellitennavigation"
          ]
        },
        {
          "id": "nav-6",
          "number": 6,
          "subtopic": "",
          "question": "Woran erkennen Sie, bis wann eine deutsche Seekarte \"amtlich\" berichtigt ist?",
          "answer": "Am Berichtigungsstempel des BSH oder einer amtlichen Seekartenberichtigungsstelle.",
          "keywords": [
            "Berichtigungsstempel",
            "Seekartenberichtigungsstelle"
          ]
        },
        {
          "id": "nav-7",
          "number": 7,
          "subtopic": "",
          "question": "Woran erkennen Sie, bis wann eine britische Seekarte \"amtlich\" berichtigt ist?",
          "answer": "Am Berichtigungsstempel auf der Rückseite der Seekarte.",
          "keywords": [
            "Berichtigungsstempel",
            "Rückseite",
            "Seekarte"
          ]
        },
        {
          "id": "nav-8",
          "number": 8,
          "subtopic": "",
          "question": "Was bedeutet der Stempel auf der britischen Seekarte: Corrected up to N.T.M. 3595 1998?",
          "answer": "Seekarte ist berichtigt bis zur Mitteilung Nummer 3595 der Admiralty Notices to Mariners (N.T.M.) in 1998.",
          "keywords": [
            "Admiralty",
            "Mariners",
            "Mitteilung",
            "Notices",
            "Nummer"
          ]
        },
        {
          "id": "nav-9",
          "number": 9,
          "subtopic": "",
          "question": "Welche Angaben enthalten die Nachrichten für Seefahrer (NfS)?",
          "answer": "In den NfS werden für die sichere Schiffsführung wichtige Maßnahmen, Ereignisse und Veränderungen auf den Seeschifffahrtsstraßen, auf der Hohen See sowie in den Hoheitsgewässern anderer Staaten im europäischen und angrenzenden Bereich bekannt gegeben.",
          "keywords": [
            "Bereich",
            "Ereignisse",
            "Hoheitsgewässern",
            "Hohen",
            "Maßnahmen"
          ]
        },
        {
          "id": "nav-10",
          "number": 10,
          "subtopic": "",
          "question": "In welcher Sprache werden die Nachrichten für Seefahrer (NfS) verfasst?",
          "answer": "Die Angaben erfolgen in deutscher und in englischer Sprache.",
          "keywords": [
            "Angaben",
            "Sprache"
          ]
        },
        {
          "id": "nav-11",
          "number": 11,
          "subtopic": "",
          "question": "Welche Angaben enthalten deutsche und britische Leuchtfeuerverzeichnisse?",
          "answer": "Beschreibung der Leuchtfeuer, Feuerschiffe und Großtonnen sowie deren geographische Lage.",
          "keywords": [
            "Beschreibung",
            "Feuerschiffe",
            "Großtonnen",
            "Lage",
            "Leuchtfeuer"
          ]
        },
        {
          "id": "nav-12",
          "number": 12,
          "subtopic": "",
          "question": "Welche schwimmenden Schifffahrtszeichen werden in der britischen List of Lights und in deutschen Leuchtfeuerverzeichnissen nicht angegeben?",
          "answer": "Tonnen kleiner als 8 m Höhe.",
          "keywords": [
            "Höhe",
            "Tonnen"
          ]
        },
        {
          "id": "nav-13",
          "number": 13,
          "subtopic": "",
          "question": "Wo finden Sie Angaben über die Merkmale der Schifffahrtszeichen?",
          "answer": "1. In den Leuchtfeuerverzeichnissen bzw. in der List of Lights sowie auszugsweise in den Seekarten. 2. In der Karte 1/INTInternational Hydrographic 1 des BSH. 3. Schwimmende Schifffahrtszeichen zusätzlich in der Anlage I zur SeeSchStrO (z. B. Tonnen des Lateral- bzw. Kardinalsystems).",
          "keywords": [
            "Anlage",
            "Hydrographic",
            "Kardinalsystems",
            "Karte",
            "Lateral"
          ]
        },
        {
          "id": "nav-14",
          "number": 14,
          "subtopic": "",
          "question": "Worauf beziehen sich die Höhenangaben der Leuchtfeuer in Leuchtfeuerverzeichnissen in der Nord- und Ostsee?",
          "answer": "In Gewässern mit Gezeiten (z. B. Nordsee) auf mittleres Hochwasser, in gezeitenlosen Gewässern (z. B. Ostsee) auf mittleren Wasserstand.",
          "keywords": [
            "Gewässern",
            "Gezeiten",
            "Hochwasser",
            "Nordsee",
            "Ostsee"
          ]
        },
        {
          "id": "nav-15",
          "number": 15,
          "subtopic": "",
          "question": "Wo finden Sie Angaben über Brückensignale?",
          "answer": "In den See- und Hafenhandbüchern und in den Seekarten.",
          "keywords": [
            "Hafenhandbüchern",
            "Seekarten"
          ]
        },
        {
          "id": "nav-16",
          "number": 16,
          "subtopic": "",
          "question": "Welche Themen (Grobgliederung) enthalten die Seehandbücher des BSH?",
          "answer": "1. Schifffahrtsangelegenheiten, 2. Naturverhältnisse, 3. Küstenkunde und Segelanweisungen.",
          "keywords": [
            "Küstenkunde",
            "Naturverhältnisse",
            "Schifffahrtsangelegenheiten",
            "Segelanweisungen"
          ]
        },
        {
          "id": "nav-17",
          "number": 17,
          "subtopic": "",
          "question": "Wie werden Richtungsangaben in nautischen Veröffentlichungen gemacht?",
          "answer": "1. Rechtweisend in Grad, 2. im Uhrzeigersinn (rechtsherum) zählend.",
          "keywords": [
            "Grad",
            "Rechtweisend",
            "Uhrzeigersinn"
          ]
        },
        {
          "id": "nav-18",
          "number": 18,
          "subtopic": "",
          "question": "In welchem Quadranten liegt der rote Warnsektor eines Leitfeuers mit der Angabe rot 030°-042°",
          "answer": "(Begründung!) Im Südwest-Quadranten. Angegeben sind die Peilungen zum Leuchtfeuer.",
          "keywords": [
            "Angegeben",
            "Begründung",
            "Leuchtfeuer",
            "Peilungen",
            "Quadranten"
          ]
        },
        {
          "id": "nav-19",
          "number": 19,
          "subtopic": "",
          "question": "Was sind Leitfeuer (direction lights)?",
          "answer": "Leitfeuer sind Einzelfeuer, die durch Sektoren verschiedener Farbe oder Kennung (Leit- oder Warnsektoren) im Allgemeinen ein Fahrwasser, eine Hafeneinfahrt oder einen freien Seeraum zwischen Untiefen bezeichnen.",
          "keywords": [
            "Allgemeinen",
            "Einzelfeuer",
            "Fahrwasser",
            "Farbe",
            "Hafeneinfahrt"
          ]
        },
        {
          "id": "nav-20",
          "number": 20,
          "subtopic": "",
          "question": "1. Was sind Richtfeuer (leading lights)?",
          "answer": "2. Wann befindet man sich in einer Richtlinie eines Richtfeuers? 1. Richtfeuer sind Feuer, die als Unter- und Oberfeuer in Deckpeilung als Richtlinie beispielsweise einen Kurs im Fahrwasser, durch eine Hafeneinfahrt oder im freien Seeraum zwischen Untiefen bezeichnen. 2. Ein Schiff befindet sich in der Richtlinie, wenn Unter- und Oberfeuer senkrecht unter-/übereinander erscheinen.",
          "keywords": [
            "Deckpeilung",
            "Fahrwasser",
            "Feuer",
            "Hafeneinfahrt",
            "Kurs"
          ]
        },
        {
          "id": "nav-21",
          "number": 21,
          "subtopic": "",
          "question": "Was ist ein Torfeuer?",
          "answer": "Ein Torfeuer besteht aus zwei Feuern gleicher Höhe, gleicher Lichtstärke und gleicher Kennung, die zu beiden Seiten der Fahrwasserachse einander genau gegenüber (rechtwinklig zur Fahrwasserachse) und von der Fahrwasserachse gleich weit entfernt angeordnet sind.",
          "keywords": [
            "Fahrwasserachse",
            "Feuern",
            "Höhe",
            "Kennung",
            "Lichtstärke"
          ]
        },
        {
          "id": "nav-22",
          "number": 22,
          "subtopic": "",
          "question": "Was ist die \"Tragweite\" eines Feuers?",
          "answer": "Unter Tragweite versteht man denjenigen Abstand, in dem ein Feuer einen eben noch deutlichen Lichteindruck im Auge des Beobachters hervorruft.",
          "keywords": [
            "Abstand",
            "Auge",
            "Beobachters",
            "Feuer",
            "Lichteindruck"
          ]
        },
        {
          "id": "nav-23",
          "number": 23,
          "subtopic": "",
          "question": "Was ist die \"Nenntragweite\" eines Feuers?",
          "answer": "Nenntragweite ist die Tragweite eines Feuers für einen definierten Wert bei einer meteorologischen Sichtweite am Tage von 10 sm.",
          "keywords": [
            "Feuers",
            "Nenntragweite",
            "Sichtweite",
            "Tage",
            "Tragweite"
          ]
        },
        {
          "id": "nav-24",
          "number": 24,
          "subtopic": "",
          "question": "Wovon hängt die \"Tragweite\" eines Feuers ab?",
          "answer": "Sie hängt u. a. ab 1. von der Lichtstärke (Helligkeit) des Feuers und 2. vom Sichtwert (Lichtdurchlässigkeit der Atmosphäre).",
          "keywords": [
            "Atmosphäre",
            "Feuers",
            "Helligkeit",
            "Lichtdurchlässigkeit",
            "Lichtstärke"
          ]
        },
        {
          "id": "nav-25",
          "number": 25,
          "subtopic": "",
          "question": "In der Seekarte finden Sie bei einem Leuchtfeuer die Eintragung: 18 M. Was bedeutet diese Angabe?",
          "answer": "Es ist die Nenntragweite, hier 18 Seemeilen.",
          "keywords": [
            "Nenntragweite",
            "Seemeilen"
          ]
        },
        {
          "id": "nav-26",
          "number": 26,
          "subtopic": "",
          "question": "Was ist die \"Sichtweite\" eines Feuers?",
          "answer": "Wovon hängt sie ab? Sichtweite ist die Entfernung, auf die ein Leuchtfeuer über die Erdkrümmung (Kimm) hinweg vom Beobachter gesehen werden kann. Sie hängt ab 1. von der Feuerhöhe und 2. von der Augeshöhe des Beobachters.",
          "keywords": [
            "Augeshöhe",
            "Beobachter",
            "Beobachters",
            "Entfernung",
            "Erdkrümmung"
          ]
        },
        {
          "id": "nav-27",
          "number": 27,
          "subtopic": "",
          "question": "Wie müssen sich Tragweite und Sichtweite zueinander verhalten, damit das Verfahren zur Ortsbestimmung \"Feuer in der Kimm\" angewandt werden kann?",
          "answer": "Die Tragweite muss mindestens gleich der Sichtweite sein.",
          "keywords": [
            "Sichtweite",
            "Tragweite"
          ]
        },
        {
          "id": "nav-28",
          "number": 28,
          "subtopic": "",
          "question": "Wo findet man Tabellen zur Ermittlung des Abstandes eines Feuers in der Kimm?",
          "answer": "In deutschen und britischen Leuchtfeuerverzeichnissen.",
          "keywords": [
            "Leuchtfeuerverzeichnissen"
          ]
        },
        {
          "id": "nav-29",
          "number": 29,
          "subtopic": "",
          "question": "Wo sind die in Seekarten verwendeten Symbole und Abkürzungen erklärt?",
          "answer": "In der Karte 1/INT des BSH.",
          "keywords": [
            "Karte"
          ]
        },
        {
          "id": "nav-30",
          "number": 30,
          "subtopic": "",
          "question": "Wer veröffentlicht die Bekanntmachungen für Seefahrer (BfS) und was umfassen diese Veröffentlichungen?",
          "answer": "1. Die BfS werden von den jeweils zuständigen Behörden der Wasser- und Schifffahrtsverwaltung des Bundes bzw. der Länder veröffentlicht. 2. Sie enthalten alle wichtigen Maßnahmen und Ereignisse auf den Seeschifffahrtsstraßen und der ausschließlichen Wirtschaftszone Deutschlands.",
          "keywords": [
            "Behörden",
            "Bundes",
            "Deutschlands",
            "Ereignisse",
            "Länder"
          ]
        },
        {
          "id": "nav-31",
          "number": 31,
          "subtopic": "",
          "question": "Wie werden die Bekanntmachungen für Seefahrer (BfS) der Sportschifffahrt zur Kenntnis gebracht?",
          "answer": "Die BfS werden an den amtlichen Aushangstellen (z. B. bei Wasser- und Schifffahrtsämtern, Hafenverwaltungen, WSP- Dienststellen, Schleusen, Yachthäfen) für das betreffende Seegebiet, in dem die Aushangstelle liegt, und für die angrenzenden Reviere und Gebiete sowie im Internet unter www.elwis.de zur Kenntnis gebracht.",
          "keywords": [
            "Aushangstelle",
            "Aushangstellen",
            "Dienststellen",
            "Gebiete",
            "Hafenverwaltungen"
          ]
        },
        {
          "id": "nav-32",
          "number": 32,
          "subtopic": "",
          "question": "Zählen Sie die am häufigsten vorkommenden Ereignisse und Maßnahmen auf, über die die",
          "answer": "Bekanntmachungen für Seefahrer (BfS) unterrichten. 1. Änderungen an Befeuerung, Betonnung und Landmarken, 2. veränderte Wassertiefen, 3. Wracke, Schifffahrtshindernisse, Rohrleitungen usw., 4. Bauarbeiten, Baggerarbeiten, militärische Übungen und damit zusammenhängende Sperrungen oder Behinderungen.",
          "keywords": [
            "Baggerarbeiten",
            "Bauarbeiten",
            "Befeuerung",
            "Behinderungen",
            "Bekanntmachungen"
          ]
        },
        {
          "id": "nav-33",
          "number": 33,
          "subtopic": "",
          "question": "Wer gibt die nautischen Warnnachrichten (NWN) heraus und von wem werden sie verbreitet?",
          "answer": "Nautische Warnnachrichten (NWN) werden von den Verkehrszentralen für deren Zuständigkeitsbereich und von dem ständig besetzten Seewarndienst Emden für das gesamte deutsche Warngebiet zur Verbreitung über Funk herausgegeben. Der Rundfunksender Deutschlandfunk verbreitet alle über Funk abgegebenen NWN.",
          "keywords": [
            "Deutschlandfunk",
            "Emden",
            "Funk",
            "Nautische",
            "Rundfunksender"
          ]
        },
        {
          "id": "nav-34",
          "number": 34,
          "subtopic": "",
          "question": "Was bedeutet der Zusatz \"vital\" bei einer nautischen Warnnachricht (NWN)?",
          "answer": "Die NWN erhält den Zusatz \"vital\", wenn die Warnung auf eine lebensbedrohende Gefahr hinweist.",
          "keywords": [
            "Gefahr",
            "Warnung",
            "Zusatz"
          ]
        },
        {
          "id": "nav-35",
          "number": 35,
          "subtopic": "",
          "question": "Welche Besonderheit bezüglich des Zusatzes \"vital\" bei einer nautischen Warnnachricht (NWN) gibt es für die Sportschifffahrt?",
          "answer": "Vitale nautische Warnnachrichten für die Sportschifffahrt werden während der Zeit vom 1. April bis zum 31. Oktober zur Verbreitung über ausgewählte private und öffentlich-rechtliche Rundfunkanstalten weitergeleitet.",
          "keywords": [
            "April",
            "Oktober",
            "Rundfunkanstalten",
            "Sportschifffahrt",
            "Verbreitung"
          ]
        },
        {
          "id": "nav-36",
          "number": 36,
          "subtopic": "",
          "question": "Wer gibt die Nachrichten für Seefahrer (NfS) heraus und wie und wie oft erfolgt die Herausgabe?",
          "answer": "Die NfS werden vom BSH in Heftform und im Internet herausgegeben und erscheinen einmal wöchentlich.",
          "keywords": [
            "Heftform",
            "Internet"
          ]
        },
        {
          "id": "nav-37",
          "number": 37,
          "subtopic": "",
          "question": "Welche Unterlage steht Ihnen zur Verfügung zur Berichtigung von britischen Seekarten, die nicht von den NfS erfasst werden?",
          "answer": "Die britischen Notices to Mariners.",
          "keywords": [
            "Mariners",
            "Notices"
          ]
        },
        {
          "id": "nav-38",
          "number": 38,
          "subtopic": "",
          "question": "1. Was sind P-Nachrichten?",
          "answer": "2. Wie verfährt man mit diesen Nachrichten im Berichtigungsverfahren? (Begründung!) 1. P-Nachrichten sind solche, die eine bevorstehende (preliminary) Maßnahme ankündigen. 2. Wegen der begrenzten Geltungsdauer werden keine Berichtigungen auf der Grundlage von P-Nachrichten vom BSH bzw. von amtlichen Seekartenberichtigungsstellen durchgeführt. Deshalb müssen vor Gebrauch jeder Seekarte die noch gültigen P-Nachrichten erfasst und in der Karte vermerkt werden.",
          "keywords": [
            "Begründung",
            "Berichtigungen",
            "Berichtigungsverfahren",
            "Deshalb",
            "Gebrauch"
          ]
        },
        {
          "id": "nav-39",
          "number": 39,
          "subtopic": "",
          "question": "1. Was sind T-Nachrichten?",
          "answer": "2. Wie verfährt man mit diesen Nachrichten im Berichtigungsverfahren? (Begründung!) 1. T-Nachrichten sind solche, die über einen zeitweiligen (temporary) Zustand unterrichten. 2. Wegen der begrenzten Geltungsdauer werden keine Berichtigungen auf der Grundlage von T-Nachrichten vom BSH bzw. amtlichen Seekartenberichtigungsstellen durchgeführt. Deshalb müssen vor Gebrauch jeder Seekarte die noch gültigen T-Nachrichten erfasst und in der Karte vermerkt werden.",
          "keywords": [
            "Begründung",
            "Berichtigungen",
            "Berichtigungsverfahren",
            "Deshalb",
            "Gebrauch"
          ]
        },
        {
          "id": "nav-40",
          "number": 40,
          "subtopic": "",
          "question": "Worauf muss beim Ansteuern einer Küste bei der Auswahl von Seekarten geachtet werden?",
          "answer": "Begründen Sie Ihre Antwort. Seekarten mit größtmöglichem Maßstab verwenden. Nur in diesen Karten sind alle Schifffahrtszeichen und weitere für die Navigation wichtigen Informationen eingetragen.",
          "keywords": [
            "Antwort",
            "Begründen",
            "Ihre",
            "Informationen",
            "Karten"
          ]
        },
        {
          "id": "nav-41",
          "number": 41,
          "subtopic": "",
          "question": "Was müssen Sie bei Kursberechnungen hinsichtlich der in der Seekarte angegebenen Ortsmissweisungen beachten?",
          "answer": "Die für ein bestimmtes Jahr angegebene Missweisung muss mittels der in der Seekarte angegebenen jährlichen Änderung für das aktuelle Jahr berichtigt werden.",
          "keywords": [
            "Jahr",
            "Missweisung",
            "Seekarte",
            "Änderung"
          ]
        },
        {
          "id": "nav-42",
          "number": 42,
          "subtopic": "",
          "question": "Was müssen Sie bei der Benutzung von deutschen \"Sportbootkarten\" beachten?",
          "answer": "Sie werden nach dem Druck weder vom BSH noch von den Seekartenvertriebsstellen berichtigt. Sie müssen also vom Nutzer nach dem Kauf vor Benutzung über die NfS auf den aktuellen Stand berichtigt werden.",
          "keywords": [
            "Benutzung",
            "Druck",
            "Kauf",
            "Nutzer",
            "Seekartenvertriebsstellen"
          ]
        },
        {
          "id": "nav-43",
          "number": 43,
          "subtopic": "",
          "question": "Nach welcher Faustregel können Sie m/s in Knoten umrechnen?",
          "answer": "\"Doppelt so viele Knoten (kn) wie m/s\" oder \"m/s multipliziert mit 2 = kn\".",
          "keywords": [
            "Doppelt",
            "Knoten"
          ]
        },
        {
          "id": "nav-44",
          "number": 44,
          "subtopic": "",
          "question": "Was müssen Sie beachten, wenn Sie die mit Loggen ermittelte Fahrt z. B. für das Arbeiten in Seekarten berücksichtigen wollen?",
          "answer": "Die üblichen Logmethoden liefern ausschließlich die \"Fahrt durchs Wasser (FdW)\". Um die \"Fahrt über Grund (FüG)\" zu ermitteln, müssen Stromrichtung und Stromgeschwindigkeit berücksichtigt werden.",
          "keywords": [
            "Fahrt",
            "Grund",
            "Logmethoden",
            "Stromgeschwindigkeit",
            "Stromrichtung"
          ]
        },
        {
          "id": "nav-45",
          "number": 45,
          "subtopic": "",
          "question": "Welche Fahrt zeigen GPS-Geräte an?",
          "answer": "Die Fahrt über Grund (FüG).",
          "keywords": [
            "Fahrt",
            "Grund"
          ]
        },
        {
          "id": "nav-46",
          "number": 46,
          "subtopic": "",
          "question": "Welchen Kurs zeigen GPS-Geräte an?",
          "answer": "Den Kurs über Grund (KüG).",
          "keywords": [
            "Grund",
            "Kurs"
          ]
        },
        {
          "id": "nav-47",
          "number": 47,
          "subtopic": "",
          "question": "Warum müssen Sie Ihre Position regelmäßig in die Seekarte eintragen?",
          "answer": "Um Abweichungen von der Kurslinie frühzeitig und sicher zu erkennen und um ggf. den Kurs zu berichtigen.",
          "keywords": [
            "Abweichungen",
            "Kurs",
            "Kurslinie"
          ]
        },
        {
          "id": "nav-48",
          "number": 48,
          "subtopic": "",
          "question": "Was ist die Besteckversetzung (BV)?",
          "answer": "Richtung (rw) und Entfernung (in sm) vom Koppelort (O ) zum beobachteten Ort (O ), bezogen auf den gleichen Zeitpunkt. k b",
          "keywords": [
            "Entfernung",
            "Koppelort",
            "Richtung",
            "Zeitpunkt"
          ]
        },
        {
          "id": "nav-49",
          "number": 49,
          "subtopic": "",
          "question": "Welche Ursachen kann die Besteckversetzung (BV) haben?",
          "answer": "Die BV kann folgende Ursachen haben: 1. ungenaues Steuern und Koppeln, 2. Kursfehler (z. B. ungenaue Steuertafel) und 3. fehlende oder unvollständige Berücksichtigung von Strom und Wind.",
          "keywords": [
            "Berücksichtigung",
            "Koppeln",
            "Kursfehler",
            "Steuern",
            "Steuertafel"
          ]
        },
        {
          "id": "nav-50",
          "number": 50,
          "subtopic": "",
          "question": "Warum sollte der Winkel zwischen zwei Peilungen nicht kleiner als 30° und nicht größer als 150° sein?",
          "answer": "Damit der gefundene Standort eine ausreichend sichere Positionsbestimmung ergibt.",
          "keywords": [
            "Damit",
            "Positionsbestimmung",
            "Standort"
          ]
        },
        {
          "id": "nav-51",
          "number": 51,
          "subtopic": "",
          "question": "Warum sind regelmäßige Kompasskontrollen erforderlich?",
          "answer": "Zur Überprüfung der Funktionsfähigkeit des Kompasses und der Werte in der Ablenkungstabelle.",
          "keywords": [
            "Ablenkungstabelle",
            "Funktionsfähigkeit",
            "Kompasses",
            "Werte",
            "Überprüfung"
          ]
        },
        {
          "id": "nav-52",
          "number": 52,
          "subtopic": "",
          "question": "Wodurch können auch in gezeitenlosen Revieren erhebliche Wasserstandsschwankungen und Strömungen (z. B. Triftstrom) hervorgerufen werden?",
          "answer": "Durch Stärke, Dauer und Richtung des Windes oder \"Zurückschwappen\" aufgestauter Wassermassen (z. B. Ostsee).",
          "keywords": [
            "Dauer",
            "Ostsee",
            "Richtung",
            "Stärke",
            "Wassermassen"
          ]
        },
        {
          "id": "nav-53",
          "number": 53,
          "subtopic": "",
          "question": "Welche navigatorischen Vorbereitungen treffen Sie vor einer Fahrt in Dunkelheit?",
          "answer": "1. Kurse und Kursänderungspunkte möglichst vorausbestimmen, 2. Untiefen und Hindernisse in der Karte besonders kennzeichnen, 3. in der Seekarte markieren, welche Leuchtfeuer wann und wo in der Kimm erscheinen und 4. Wegstrecke nach unbefeuerten Tonnen absuchen.",
          "keywords": [
            "Hindernisse",
            "Karte",
            "Kimm",
            "Kurse",
            "Kursänderungspunkte"
          ]
        },
        {
          "id": "nav-54",
          "number": 54,
          "subtopic": "",
          "question": "Welche Möglichkeiten der terrestrischen Ortsbestimmung muss man kennen?",
          "answer": "1. Kreuzpeilung, 2. Peilung und Abstand (Feuer in der Kimm, Radarabstand), 3. Peilung und Lotung.",
          "keywords": [
            "Abstand",
            "Feuer",
            "Kimm",
            "Kreuzpeilung",
            "Lotung"
          ]
        },
        {
          "id": "nav-55",
          "number": 55,
          "subtopic": "",
          "question": "Nennen Sie zwei Möglichkeiten der Ortsbestimmung, wenn Sie nur ein Objekt mit bekannten",
          "answer": "Merkmalen (z. B. Leuchtturm) in Sicht haben. 1. Peilung und Abstand (Feuer in der Kimm, Radarabstand), 2. Peilung und Lotung.",
          "keywords": [
            "Abstand",
            "Feuer",
            "Kimm",
            "Leuchtturm",
            "Lotung"
          ]
        },
        {
          "id": "nav-56",
          "number": 56,
          "subtopic": "",
          "question": "Welche Nordrichtungen werden in der Navigation unterschieden?",
          "answer": "Erläutern Sie diese kurz. 1. rwN: rechtweisend Nord ist die Richtung eines Meridians zum geographischen Nordpol. 2. mwN: missweisend Nord ist die Richtung des erdmagnetischen Feldes zum magnetischen Nordpol, abhängig von Schiffsort und Datum (Jahr). In diese Richtung stellt sich eine ungestörte Magnet-(Kompass-)nadel ein. 3. MgN: ist die Richtung zu Magnetkompass-Nord. In diese Richtung zeigt die durch das schiffsmagnetische Feld beeinflusste Kompassnadel an Bord.",
          "keywords": [
            "Bord",
            "Datum",
            "Erläutern",
            "Feld",
            "Feldes"
          ]
        },
        {
          "id": "nav-57",
          "number": 57,
          "subtopic": "",
          "question": "Nennen Sie die Winkel zwischen den Nordrichtungen rechtweisend Nord (rwN), missweisend Nord",
          "answer": "(mwN) und Magnetkompass-Nord (MgN). 1. Mw: Missweisung ist der Winkel von rwN nach mwN. 2. Abl: Ablenkung (Abl) oder Deviation (Dev) ist der Winkel von mwN nach MgN.",
          "keywords": [
            "Ablenkung",
            "Deviation",
            "Magnetkompass",
            "Missweisung",
            "Nord"
          ]
        },
        {
          "id": "nav-58",
          "number": 58,
          "subtopic": "",
          "question": "Nennen Sie den Winkel zwischen den Nordrichtungen rwN und MgN.",
          "answer": "Der Winkel von rwN nach MgN ist die Fehlweisung (Fw; Abl + Mw = Fw).",
          "keywords": [
            "Fehlweisung",
            "Winkel"
          ]
        },
        {
          "id": "nav-59",
          "number": 59,
          "subtopic": "",
          "question": "Wo finden Sie die erforderlichen Werte der Missweisung?",
          "answer": "Worauf ist dabei zu achten? 1. Die Missweisung findet sich in der Seekarte eingedruckt für ein bestimmtes Jahr. 2. Dieser Wert muss mit der ebenfalls in der Seekarte angegebenen jährlichen Änderung auf das Jahr der Benutzung berichtigt werden.",
          "keywords": [
            "Benutzung",
            "Jahr",
            "Missweisung",
            "Seekarte",
            "Wert"
          ]
        },
        {
          "id": "nav-60",
          "number": 60,
          "subtopic": "",
          "question": "Wo finden Sie die erforderlichen Werte der Ablenkung (Abl)?",
          "answer": "Worauf ist dabei zu achten? 1. Die Abl wird einer Ablenkungstabelle entnommen. 2. Die Abl ist abhängig vom anliegenden Kurs.",
          "keywords": [
            "Ablenkungstabelle",
            "Kurs",
            "Worauf"
          ]
        },
        {
          "id": "nav-61",
          "number": 61,
          "subtopic": "",
          "question": "Warum muss für jedes Fahrzeug eine eigene Ablenkungstabelle (Steuertafel) erstellt werden?",
          "answer": "Die Ablenkungstabelle kann auf jedem Schiff andere Werte haben.",
          "keywords": [
            "Ablenkungstabelle",
            "Schiff",
            "Werte"
          ]
        },
        {
          "id": "nav-62",
          "number": 62,
          "subtopic": "",
          "question": "Worauf müssen Sie achten, wenn eine Magnetkompasspeilung (MgP) auf eine rechtweisende Peilung (rwP) beschickt werden soll?",
          "answer": "Abl für den anliegenden MgK (Magnetkompasskurs) aus der Steuertafel (Ablenkungstabelle) entnehmen; an den so erhaltenen mwK (missweisenden Kurs) die für das laufende Jahr der Seekarte entnommene Mw anbringen.",
          "keywords": [
            "Ablenkungstabelle",
            "Jahr",
            "Kurs",
            "Magnetkompasskurs",
            "Seekarte"
          ]
        },
        {
          "id": "nav-63",
          "number": 63,
          "subtopic": "",
          "question": "Unter welchen Voraussetzungen ergibt sich eine brauchbare Standlinie aus einer Lotung?",
          "answer": "Der Meeresgrund muss ausreichend regelmäßig und ausreichend steil ansteigen/abfallen.",
          "keywords": [
            "Meeresgrund"
          ]
        },
        {
          "id": "nav-64",
          "number": 64,
          "subtopic": "",
          "question": "Neben den Fahrwassertonnen liegen auf den Seeschifffahrtsstraßen weitere Tonnen aus, die für die Sportschifffahrt besonders wichtig sind. Welche Schifffahrtszeichen sind das?",
          "answer": "Sonderzeichen zur Bezeichnung von Sperrgebieten und Kardinalzeichen für allgemeine Gefahrenstellen.",
          "keywords": [
            "Bezeichnung",
            "Gefahrenstellen",
            "Kardinalzeichen",
            "Sonderzeichen",
            "Sperrgebieten"
          ]
        },
        {
          "id": "nav-65",
          "number": 65,
          "subtopic": "",
          "question": "Aus welchen nautischen Publikationen können Sie Sperr- und Verbotsgebiete mit ihren Grenzen ersehen?",
          "answer": "Aus den Seekarten, Bekanntmachungen für Seefahrer (BfS) und Nautischen Warnnachrichten (NWN).",
          "keywords": [
            "Bekanntmachungen",
            "Nautischen",
            "Seefahrer",
            "Seekarten",
            "Warnnachrichten"
          ]
        },
        {
          "id": "nav-66",
          "number": 66,
          "subtopic": "",
          "question": "Welche Sonderzeichen kennzeichnen Reeden, besondere Gebiete oder Stellen, z. B. Warngebiete?",
          "answer": "Gelbe Fasstonnen, Leuchttonnen, Spierentonnen oder Stangen.",
          "keywords": [
            "Fasstonnen",
            "Gelbe",
            "Leuchttonnen",
            "Spierentonnen",
            "Stangen"
          ]
        },
        {
          "id": "nav-67",
          "number": 67,
          "subtopic": "",
          "question": "Welche Sonderzeichen kennzeichnen Sperrgebiete?",
          "answer": "Gelbe Fasstonnen, Leuchttonnen, Spierentonnen oder Stangen mit einem breiten roten Band. Beschriftung auf Fasstonne oder Leuchttonne mit schwarzen Buchstaben: \"Sperrgebiet\" oder \"Sperr-G\".",
          "keywords": [
            "Band",
            "Beschriftung",
            "Buchstaben",
            "Fasstonne",
            "Fasstonnen"
          ]
        },
        {
          "id": "nav-68",
          "number": 68,
          "subtopic": "",
          "question": "Welche Farbe haben Feuer auf Sonderzeichen, wenn vorhanden?",
          "answer": "Farbe gelb.",
          "keywords": [
            "Farbe"
          ]
        },
        {
          "id": "nav-69",
          "number": 69,
          "subtopic": "",
          "question": "Was bedeutet das Ausliegen der folgenden Schifffahrtszeichen:",
          "answer": "weiße Fasstonne, Kugeltonne oder Stange mit einem - von oben gesehen - rechtwinkligen gelben Kreuz bzw. bei Stangen mit einem breiten gelben Band? Fahrverbot für Maschinenfahrzeuge und Wassermotorräder auf wegen Badebetrieb gesperrten Wasserflächen.",
          "keywords": [
            "Badebetrieb",
            "Band",
            "Fahrverbot",
            "Fasstonne",
            "Kreuz"
          ]
        },
        {
          "id": "nav-70",
          "number": 70,
          "subtopic": "",
          "question": "Wie stehen Sonne und Mond winkelmäßig zur Erde bei Springzeit und bei Nippzeit (die Springverspätung soll hier unberücksichtigt bleiben)?",
          "answer": "Bei Springzeit befinden sich Mond und Sonne in einer Ebene mit der Erde, bei Nippzeit stehen die Verbindungslinien Erde/Sonne und Erde/Mond im rechten Winkel zueinander.",
          "keywords": [
            "Ebene",
            "Erde",
            "Mond",
            "Nippzeit",
            "Sonne"
          ]
        },
        {
          "id": "nav-71",
          "number": 71,
          "subtopic": "",
          "question": "Erklären Sie den Begriff \"Alter der Gezeit\".",
          "answer": "Das Alter der Gezeit gibt an, in welcher Phase (Nippzeit, Mittzeit, Springzeit) sich das aktuelle Tidengeschehen befindet.",
          "keywords": [
            "Alter",
            "Gezeit",
            "Mittzeit",
            "Nippzeit",
            "Phase"
          ]
        },
        {
          "id": "nav-72",
          "number": 72,
          "subtopic": "",
          "question": "Warum findet man z. B. bei Bezugsorten in der Nordsee bzw. im Englischen Kanal zeitweise nur ein Hoch- bzw. Niedrigwasser pro Tag?",
          "answer": "Die Umlaufzeit des Mondes um die Erde dauert im Mittel 24 h 50 min. (Mondtag) gegenüber dem Sonnentag (= 24 h). Deshalb \"rutscht\" das letzte HW oder NW zeitweise in den nächsten Tag.",
          "keywords": [
            "Deshalb",
            "Erde",
            "Mittel",
            "Mondes",
            "Mondtag"
          ]
        },
        {
          "id": "nav-73",
          "number": 73,
          "subtopic": "",
          "question": "Weshalb und wie können die tatsächlichen Wasserstände von den Angaben in den Gezeitentafeln teilweise erheblich abweichen?",
          "answer": "Durch Wind und/oder durch sehr hohen bzw. sehr niedrigen Luftdruck können erhebliche Wasserstandsänderungen entstehen. HWH bzw. NWH können höher oder niedriger sein als angegeben, die Hoch- und Niedrigwasserzeit kann füher oder später eintreten als angegeben.",
          "keywords": [
            "Hoch",
            "Luftdruck",
            "Niedrigwasserzeit",
            "Wasserstandsänderungen",
            "Wind"
          ]
        },
        {
          "id": "nav-74",
          "number": 74,
          "subtopic": "",
          "question": "Worauf beziehen sich die Tiefenangaben in Seekarten in den deutschen Gewässern der Ost- und Nordsee?",
          "answer": "Auf Kartennull (KN).",
          "keywords": [
            "Kartennull"
          ]
        },
        {
          "id": "nav-75",
          "number": 75,
          "subtopic": "",
          "question": "Was ist Kartennull?",
          "answer": "Kartennull (KN) ist die Bezugsfläche für die Tiefenangaben in einer Seekarte.",
          "keywords": [
            "Bezugsfläche",
            "Kartennull",
            "Seekarte",
            "Tiefenangaben"
          ]
        },
        {
          "id": "nav-76",
          "number": 76,
          "subtopic": "",
          "question": "Wie ist Kartennull (KN) in der Ost- und Nordsee und im Englischen Kanal definiert?",
          "answer": "Wo finden Sie die entsprechenden Angaben zur Kartennullebene? In der Ostsee entspricht KN dem mittleren Wasserstand. In der Nordsee und im Englischen Kanal entspricht KN dem niedrigstmöglichen Gezeitenwasserstand (LAT = Lowest Astronomical Tide). In der jeweiligen Seekarte ist die Kartennullebene beschrieben.",
          "keywords": [
            "Angaben",
            "Astronomical",
            "Englischen",
            "Gezeitenwasserstand",
            "Kanal"
          ]
        },
        {
          "id": "nav-77",
          "number": 77,
          "subtopic": "",
          "question": "Was müssen Sie bedenken, wenn Sie die Wassertiefe außerhalb der Niedrigwasserzeit loten?",
          "answer": "Beim folgenden Niedrigwasser wird die Wassertiefe geringer sein als zum Zeitpunkt der Lotung.",
          "keywords": [
            "Lotung",
            "Niedrigwasser",
            "Wassertiefe",
            "Zeitpunkt"
          ]
        },
        {
          "id": "nav-78",
          "number": 78,
          "subtopic": "",
          "question": "Was ist die Kartentiefe?",
          "answer": "Die Kartentiefe (KT) ist die auf Kartennull bezogene Wassertiefe. Kartentiefe ist Wassertiefe abzüglich Höhe der Gezeit.",
          "keywords": [
            "Gezeit",
            "Höhe",
            "Kartennull",
            "Kartentiefe",
            "Wassertiefe"
          ]
        },
        {
          "id": "nav-79",
          "number": 79,
          "subtopic": "",
          "question": "Mit welcher Wassertiefe können Sie bei einer Lotung normalerweise mindestens rechnen?",
          "answer": "Mit der Kartentiefe.",
          "keywords": [
            "Kartentiefe"
          ]
        },
        {
          "id": "nav-80",
          "number": 80,
          "subtopic": "",
          "question": "Welche Bedeutung hat die Angabe \"Springzeit\" für die Wasserstände in Gezeitengebieten?",
          "answer": "Zur Springzeit sind besonders hohe Hochwasser und besonders niedrige Niedrigwasser zu erwarten.",
          "keywords": [
            "Hochwasser",
            "Niedrigwasser",
            "Springzeit"
          ]
        },
        {
          "id": "nav-81",
          "number": 81,
          "subtopic": "",
          "question": "Welche Bedeutung hat die Angabe \"Nippzeit\" für die Wasserstände in Gezeitengebieten?",
          "answer": "Zur Nippzeit sind besonders niedrige Hochwasser und besonders hohe Niedrigwasser zu erwarten.",
          "keywords": [
            "Hochwasser",
            "Niedrigwasser",
            "Nippzeit"
          ]
        },
        {
          "id": "nav-82",
          "number": 82,
          "subtopic": "",
          "question": "Welche Bedeutung haben die Angaben \"Nippzeit\" bzw. \"Springzeit\" für die Gezeitenströme?",
          "answer": "Zur Springzeit setzen die Gezeitenströme z. T. deutlich stärker als zur Nippzeit.",
          "keywords": [
            "Gezeitenströme",
            "Nippzeit",
            "Springzeit"
          ]
        },
        {
          "id": "nav-83",
          "number": 83,
          "subtopic": "",
          "question": "Wo können Sie Informationen über Gezeitenströme in Küstengewässern finden?",
          "answer": "1. In Gezeitenstromatlanten, Seehandbüchern, 2. in Seekarten aus Gezeitenstromtabellen, die bezogen sind auf die Hochwasserzeiten des dort genannten Bezugsortes.",
          "keywords": [
            "Bezugsortes",
            "Gezeitenstromatlanten",
            "Gezeitenstromtabellen",
            "Hochwasserzeiten",
            "Seehandbüchern"
          ]
        },
        {
          "id": "nav-84",
          "number": 84,
          "subtopic": "",
          "question": "Auf einer Seekarte finden Sie in Küstennähe die Tiefenangabe 2 3. Was bedeutet das?",
          "answer": "Der Ort der Zahl liegt 2,3 m über Kartennull und kann trockenfallen.",
          "keywords": [
            "Kartennull",
            "Zahl"
          ]
        },
        {
          "id": "nav-85",
          "number": 85,
          "subtopic": "",
          "question": "In welchem Zusammenhang stehen Kartentiefe (KT), Wassertiefe (WT) und Höhe der Gezeit (H)?",
          "answer": "WT - H = KT oder KT + H = WT (Lösung auch als Skizze möglich).",
          "keywords": [
            "Lösung",
            "Skizze"
          ]
        },
        {
          "id": "nav-86",
          "number": 86,
          "subtopic": "",
          "question": "Warum ist es in Tidengewässern wichtig, die Uhrzeit einer Lotung festzuhalten?",
          "answer": "Um anhand der Gezeitentafel feststellen zu können, ob das Wasser steigt oder fällt.",
          "keywords": [
            "Gezeitentafel",
            "Wasser"
          ]
        },
        {
          "id": "nav-87",
          "number": 87,
          "subtopic": "",
          "question": "Was ist ein Pegel?",
          "answer": "Eine Skala zur Anzeige des Wasserstandes.",
          "keywords": [
            "Anzeige",
            "Skala",
            "Wasserstandes"
          ]
        },
        {
          "id": "nav-88",
          "number": 88,
          "subtopic": "",
          "question": "Welchen Einfluss kann der Wind auf die Gezeiten haben?",
          "answer": "Der Wind kann Strömungen und Wasserstandsänderungen hervorrufen, die zu den Gezeitenströmen und den Gezeiten hinzutreten.",
          "keywords": [
            "Gezeiten",
            "Gezeitenströmen",
            "Strömungen",
            "Wasserstandsänderungen",
            "Wind"
          ]
        },
        {
          "id": "nav-89",
          "number": 89,
          "subtopic": "",
          "question": "Nennen Sie drei wichtige Vorzüge von GPS.",
          "answer": "1. GPS arbeitet weltweit. 2. Die Positionsanzeige ist jederzeit verfügbar. 3. Der Positionsfehler ist gering.",
          "keywords": [
            "Positionsanzeige",
            "Positionsfehler"
          ]
        },
        {
          "id": "nav-90",
          "number": 90,
          "subtopic": "",
          "question": "Wie groß ist die typische und realistische Genauigkeit von Positionen, die mit GPS und DGPS ermittelt werden?",
          "answer": "1. GPS: 10 - 20 m bei einer Wahrscheinlichkeit von etwa 95 %. 2. DGPS: 1 - 10 m bei einer Wahrscheinlichkeit von etwa 95 %.",
          "keywords": [
            "Wahrscheinlichkeit"
          ]
        },
        {
          "id": "nav-91",
          "number": 91,
          "subtopic": "",
          "question": "Wo muss man mit ungenauen Anzeigen des GPS rechnen?",
          "answer": "1. Bei Abschattung der GPS-Antenne. 2. In der Nähe von Flughäfen und in der Nähe von Fernsehsendern. 3. In der Nähe von Marineeinrichtungen. 4. Bei Nutzung von UKW-Geräten und anderen elektronischen/elektrischen Geräten an Bord.",
          "keywords": [
            "Abschattung",
            "Antenne",
            "Bord",
            "Fernsehsendern",
            "Flughäfen"
          ]
        },
        {
          "id": "nav-92",
          "number": 92,
          "subtopic": "",
          "question": "Was bedeutet die Abkürzung GPS?",
          "answer": "Global Positioning System.",
          "keywords": [
            "Global",
            "Positioning",
            "System"
          ]
        },
        {
          "id": "nav-93",
          "number": 93,
          "subtopic": "",
          "question": "Was ist das Grundprinzip von GPS?",
          "answer": "Durch Laufzeitmessungen von GPS-Signalen vom Satelliten zum Empfänger und damit durch Abstandsmessungen zu den Satelliten wird die Ortsbestimmung ermöglicht.",
          "keywords": [
            "Abstandsmessungen",
            "Empfänger",
            "Laufzeitmessungen",
            "Ortsbestimmung",
            "Satelliten"
          ]
        },
        {
          "id": "nav-94",
          "number": 94,
          "subtopic": "",
          "question": "Was bedeutet die Abkürzung DGPS und nach welchem Prinzip arbeitet DGPS?",
          "answer": "DGPS = Differential Global Positioning System. Hierbei handelt es sich um eine regionale Verbesserung der Ortsbestimmung. Dabei werden von Referenzstationen über Funk Korrekturwerte für die GPS-Messwerte an die Schiffe übertragen.",
          "keywords": [
            "Dabei",
            "Differential",
            "Funk",
            "Global",
            "Hierbei"
          ]
        },
        {
          "id": "nav-95",
          "number": 95,
          "subtopic": "",
          "question": "Was ist bei Anbringung einer GPS-Antenne zu beachten?",
          "answer": "1. Sie muss ringsum freie Sicht (ohne Abschattungen) haben. 2. Einwandfreie Erdung.",
          "keywords": [
            "Abschattungen",
            "Einwandfreie",
            "Erdung",
            "Sicht"
          ]
        },
        {
          "id": "nav-96",
          "number": 96,
          "subtopic": "",
          "question": "Was bewirkt die Bedienung der MOB-Taste bei GPS-Geräten?",
          "answer": "1. Die Position zur Zeit des Tastendrucks wird gespeichert. 2. Rechtweisende Peilung (rwP) und Distanz zu diesem Punkt werden angezeigt.",
          "keywords": [
            "Distanz",
            "Peilung",
            "Position",
            "Punkt",
            "Rechtweisende"
          ]
        },
        {
          "id": "nav-97",
          "number": 97,
          "subtopic": "",
          "question": "Was bedeutet die Aussage: \"Die Ortsgenauigkeit beträgt 100 m mit einer Wahrscheinlichkeit von 95 %\"?",
          "answer": "Das Schiff befindet sich mit einer Wahrscheinlichkeit von 95 % in einem Fehlerkreis von 100 m Radius um den beobachteten Ort. Also: jede 20. Ortsbestimmung (5 %) ist ungenauer als ca. 100 m.",
          "keywords": [
            "Fehlerkreis",
            "Ortsbestimmung",
            "Radius",
            "Schiff",
            "Wahrscheinlichkeit"
          ]
        },
        {
          "id": "nav-98",
          "number": 98,
          "subtopic": "",
          "question": "Wie kann man feststellen, ob die GPS-Position genau bzw. zuverlässig ist?",
          "answer": "1. Durch den vom Empfänger angezeigten HDOP (horizontal dilution of precision = Satellitenverteilung). 2. Durch die vom Empfänger angezeigte Anzahl der getrackten Satelliten. 3. Durch Vergleich mit anderen Navigationssystemen und der Koppelposition.",
          "keywords": [
            "Anzahl",
            "Empfänger",
            "Koppelposition",
            "Navigationssystemen",
            "Satelliten"
          ]
        },
        {
          "id": "nav-99",
          "number": 99,
          "subtopic": "",
          "question": "Was ist bei Eintragung eines GPS-Ortes in eine Seekarte zu beachten?",
          "answer": "Das Bezugssystem muss übereinstimmen. Dieses kann geschehen durch: 1. Auswahl und Einstellung des Kartenbezugssystems im Empfänger. 2. Manuelle Verschiebung des GPS-Ortes um die in der Seekarte angegebenen N/S- und E/W-Korrektur. 3. Verwendung von Seekarten, die auf dem System WGS 84 beruhen.",
          "keywords": [
            "Auswahl",
            "Bezugssystem",
            "Dieses",
            "Einstellung",
            "Empfänger"
          ]
        },
        {
          "id": "nav-100",
          "number": 100,
          "subtopic": "",
          "question": "Was ist ein Wegpunkt?",
          "answer": "Geographische Koordination eines anzusteuernden Punktes.",
          "keywords": [
            "Geographische",
            "Koordination",
            "Punktes"
          ]
        },
        {
          "id": "nav-101",
          "number": 101,
          "subtopic": "",
          "question": "Was bedeutet WGS 84 und was wird damit erreicht?",
          "answer": "1. Globales Bezugssystem \"World Geodetic System 1984\". 2. Mit diesem System (= Referenzellipsoid bei GPS) wird weltweit eine optimale Anpassung an die reale Form des gesamten Erdkörpers erreicht.",
          "keywords": [
            "Anpassung",
            "Bezugssystem",
            "Erdkörpers",
            "Form",
            "Geodetic"
          ]
        },
        {
          "id": "nav-102",
          "number": 102,
          "subtopic": "",
          "question": "Wodurch können Radarechos von kleinen Fahrzeugen und Tonnen auf den Sichtschirmen von Radargeräten \"verschwinden\"?",
          "answer": "1. Durch Seegang und/oder Niederschlag, 2. durch falsche Bedienung, 3. durch zu große Entfernung, 4. durch Gieren des eigenen Fahrzeugs bei relativ vorausorientierter Radarstellung (head up).",
          "keywords": [
            "Bedienung",
            "Entfernung",
            "Fahrzeugs",
            "Gieren",
            "Niederschlag"
          ]
        },
        {
          "id": "nav-103",
          "number": 103,
          "subtopic": "",
          "question": "Wie kann man mit Radar den eigenen Schiffsort bestimmen?",
          "answer": "1. Peilung des Objektes gibt einen Peilstrahl als Standlinie. 2. Abstandsmessung mit dem VRM (Variable Range Marker) gibt einen Abstandskreis als Standlinie.",
          "keywords": [
            "Abstandskreis",
            "Abstandsmessung",
            "Marker",
            "Objektes",
            "Peilstrahl"
          ]
        },
        {
          "id": "nav-104",
          "number": 104,
          "subtopic": "",
          "question": "Wie kann man gegebenenfalls verhindern, dass sich Echoanzeigen von Zielen (z. B. 2 Tonnen, 2 Molenköpfe) überlappen?",
          "answer": "1. Kurze Impulslänge wählen. 2. Messbereich verkleinern.",
          "keywords": [
            "Impulslänge",
            "Kurze",
            "Messbereich"
          ]
        },
        {
          "id": "nav-105",
          "number": 105,
          "subtopic": "",
          "question": "Was bedeutet der Begriff AIS auf See?",
          "answer": "AIS bezeichnet das automatische Identifizierungssystem (Automatic Identification System).",
          "keywords": [
            "Automatic",
            "Identification",
            "Identifizierungssystem",
            "System"
          ]
        },
        {
          "id": "nav-106",
          "number": 106,
          "subtopic": "",
          "question": "Welche Aufgaben hat AIS?",
          "answer": "Alle ausgerüsteten Schiffe senden automatisch (also ohne Aufforderung und menschliches Eingreifen) in regelmäßigen kurzen Abständen ihre Identität und einen schiffsbezogenen Datensatz. Außerdem können bei Bedarf sicherheitsrelevante Nachrichten (\"safety related messages\") von Bord oder von Landstationen gesendet werden.",
          "keywords": [
            "Abständen",
            "Aufforderung",
            "Außerdem",
            "Bedarf",
            "Bord"
          ]
        },
        {
          "id": "nav-107",
          "number": 107,
          "subtopic": "",
          "question": "Welche Reichweite hat ein AIS-Bordgerät und wovon ist sie abhängig?",
          "answer": "Die Reichweite und Ausbreitungsbedingungen entsprechen denen von UKW. Bei Handelsschiffen kann man von 20 bis 30 sm ausgehen. Die Reichweite ist abhängig von der Antennenhöhe.",
          "keywords": [
            "Antennenhöhe",
            "Ausbreitungsbedingungen",
            "Handelsschiffen",
            "Reichweite"
          ]
        },
        {
          "id": "nav-108",
          "number": 108,
          "subtopic": "",
          "question": "Wie kann die Reichweite eines AIS-Bordgerätes landseitig erhöht werden und wie wirken sich dabei Hindernisse (z. B. Berge) aus?",
          "answer": "Unter bestimmten Umständen kann die Reichweite heraufgesetzt werden (z. B. mit Hilfe von \"Relaisstationen\"), wobei ggf. auch abschattende Hindernisse umgangen werden können.",
          "keywords": [
            "Hilfe",
            "Hindernisse",
            "Reichweite",
            "Relaisstationen",
            "Umständen"
          ]
        },
        {
          "id": "nav-109",
          "number": 109,
          "subtopic": "",
          "question": "Welche AIS-Daten werden von Schiffen aus der Berufsschifffahrt gesendet?",
          "answer": "Statische Daten: ID, Rufzeichen, Länge und Breite des Schiffes u. a. Dynamische Daten (i. W. Sensordaten): UTC, Position, Heading, Kurs und Fahrt über Grund, ggf. Rate-of-turn, Fahrtstatus (z. B. Maschinenfahrzeug mit Fahrt durchs Wasser, Ankerlieger, manövrierbehindertes Fahrzeug). Reisebezogene Daten: Tiefgang, Zielort (Destinaton), ETA u. a.",
          "keywords": [
            "Ankerlieger",
            "Breite",
            "Daten",
            "Destinaton",
            "Dynamische"
          ]
        },
        {
          "id": "nav-110",
          "number": 110,
          "subtopic": "",
          "question": "Wann kann man sich auf die Verfügbarkeit und Anzeige vn AIS-Signalen anderer Fahrzeuge verlassen?",
          "answer": "Nennen Sie die wesentlichen Voraussetzungen! Andere Fahrzeuge werden nur angezeigt, wenn das Fahrzeug auch sendet, d. h., wenn 1. das Fahrzeug mit AIS ausgerüstet ist, 2. das sendende Fahrzeug AIS nicht abgeschaltet hat (darf der Kapitän allerdings nur bei bestimmten zwingenden Gründen), 3. GPS aktiv ist und 4. aus Kapazitätsgründen (z. B. durch zu viele Schiffe in einem Seegebiet = \"target overflow\") keine Fahrzeuge ausgeschlossen werden.",
          "keywords": [
            "Fahrzeug",
            "Fahrzeuge",
            "Gründen",
            "Kapazitätsgründen",
            "Kapitän"
          ]
        },
        {
          "id": "nav-111",
          "number": 111,
          "subtopic": "",
          "question": "Wie ist die Genauigkeit von AIS-Daten zu beurteilen (Position und manuell eingegebene Daten)?",
          "answer": "Position: Mit AIS wird zusätzlich zur GPS-Position eines Schiffes die Information übertragen, ob es sich um einen GPS- oder DGPS- Ort handelt. Ist die GPS-Position eines Schiffes falsch, wird diese falsche Position auf allen anderen Schiffen angezeigt. Manuell eingegebene Daten: Es muss damit gerechnet werden, dass Zielort, Tiefgang, Fahrtstatus u. a. falsch sind, wenn sie - z. B. aus Nachlässigkeit - nicht von der Schiffsführung aufdatiert werden.",
          "keywords": [
            "Daten",
            "Fahrtstatus",
            "Information",
            "Manuell",
            "Nachlässigkeit"
          ]
        },
        {
          "id": "nav-112",
          "number": 112,
          "subtopic": "",
          "question": "Welche besondere Bedeutung hat AIS für die Sportschifffahrt im Vergleich mit der Radaranzeige auf anderen Schiffen?",
          "answer": "Sportfahrzeuge werden häufig auf den Radargeräten anderer Schiffe nicht sicher angezeigt bzw. die Anzeigen gehen im Seegangsclutter oder in der Informationsfülle unter. Da jetzt auf vielen Schiffen die AIS-Daten zusätzlich im Radar dargestellt werden, besteht die Gefahr, dass Sportfahrzeuge noch weniger auffällig sind, wenn sie nicht selbst mit AIS ausgerüstet sind.",
          "keywords": [
            "Anzeigen",
            "Daten",
            "Gefahr",
            "Informationsfülle",
            "Radar"
          ]
        },
        {
          "id": "nav-113",
          "number": 113,
          "subtopic": "",
          "question": "Welche Navigationsgeräte sollten Sie auf einer Yacht auch bei Kurzfahrten nahe der Küste mindestens an Bord haben?",
          "answer": "Steuerkompass, Peilkompass, Lot, Log, Uhr.",
          "keywords": [
            "Peilkompass",
            "Steuerkompass"
          ]
        },
        {
          "id": "nav-114",
          "number": 114,
          "subtopic": "",
          "question": "Was gehört zur navigatorischen Mindestausrüstung einer Yacht in Küstengewässern?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Steuerkompass, 2. Peileinrichtung, 3. terrestrisches oder satellitengestütztes Funknavigationsgerät, 4. Log, 5. Lot, 6. Fernglas, 7. Barometer, 8. Weltempfänger für Rundfunk, 9. Seebücher und auf den neuesten Stand berichtigte Seekarten für das zu befahrende Seegebiet, 10. Logbuch, 11. Uhr/Zeitmesser.",
          "keywords": [
            "Barometer",
            "Beispiele",
            "Fernglas",
            "Funknavigationsgerät",
            "Logbuch"
          ]
        },
        {
          "id": "nav-115",
          "number": 115,
          "subtopic": "",
          "question": "Welchen Vorteil hat ein Kugelkompass gegenüber einem Fernglaskompass?",
          "answer": "1. Der Kugelkompass kann auch bei größerer Krängung noch als Messinstrument benutzt werden. 2. Die Kugelform verbessert die Ablesbarkeit der Kompassrose (Vergrößerungseffekt).",
          "keywords": [
            "Ablesbarkeit",
            "Kompassrose",
            "Krängung",
            "Kugelform",
            "Kugelkompass"
          ]
        },
        {
          "id": "nav-116",
          "number": 116,
          "subtopic": "",
          "question": "Was beeinflusst die Ablenkung eines Kompasses dauerhaft?",
          "answer": "Veränderung des magnetischen Zustandes an Bord, z. B. Einbauten und Lageänderung von Ausrüstungsgegenständen.",
          "keywords": [
            "Ausrüstungsgegenständen",
            "Bord",
            "Einbauten",
            "Lageänderung",
            "Veränderung"
          ]
        },
        {
          "id": "nav-117",
          "number": 117,
          "subtopic": "",
          "question": "Was beeinflusst die Ablenkung eines Kompasses vorübergehend?",
          "answer": "Elektronische Geräte (z. B. Radio, Handy), magnetisierte Gegenstände (z. B. Werkzeug, Peilkompass) und Gleichstromleitungen in der Nähe des Kompasses.",
          "keywords": [
            "Elektronische",
            "Gegenstände",
            "Geräte",
            "Gleichstromleitungen",
            "Handy"
          ]
        },
        {
          "id": "nav-118",
          "number": 118,
          "subtopic": "",
          "question": "Welchen Abstand muss magnetisierbares Material vom Magnetkompass haben?",
          "answer": "Mindestens 1 Meter. Stand: 01. Juli 2006 Schifffahrtsrecht",
          "keywords": [
            "Juli",
            "Meter",
            "Mindestens",
            "Schifffahrtsrecht",
            "Stand"
          ]
        }
      ]
    },
    {
      "id": "schifffahrtsrecht",
      "name": "Schifffahrtsrecht",
      "subtopics": [
        "KVR",
        "SeeSchStrO",
        "Allgemeines (Schiffspapiere, SUG, Flaggen-/Hoheitsrecht)",
        "MARPOL, besondere Verkehrs- und Befahrensregeln"
      ],
      "questions": [
        {
          "id": "recht-1",
          "number": 1,
          "subtopic": "",
          "question": "Was sind \"Sicherheitszonen\" im Sinne der Verordnung zu den KVR?",
          "answer": "Sicherheitszonen sind Wasserflächen im Umkreis von 500 m um Plattformen, Bohrinseln, Forschungsanlagen u. a., die nicht befahren werden dürfen.",
          "keywords": [
            "Bohrinseln",
            "Forschungsanlagen",
            "Plattformen",
            "Sicherheitszonen",
            "Umkreis"
          ]
        },
        {
          "id": "recht-2",
          "number": 2,
          "subtopic": "",
          "question": "Die Verordnung zu den KVR verbietet die Führung eines Fahrzeugs, wenn man infolge des Genusses alkoholischer Getränke in der sicheren Führung des Fahrzeugs behindert ist. Welchen örtlichen Geltungsbereich hat die vorgenannte Verordnung?",
          "answer": "Die Verordnung gilt auf Seeschifffahrtsstraßen und für Schiffe, die die Bundesflagge führen, seewärts der Begrenzung des Küstenmeeres der Bundesrepublik Deutschland (also weltweit), soweit nicht in den Hoheitsgewässern anderer Staaten abweichende Regelungen gelten.",
          "keywords": [
            "Begrenzung",
            "Bundesflagge",
            "Bundesrepublik",
            "Deutschland",
            "Hoheitsgewässern"
          ]
        },
        {
          "id": "recht-3",
          "number": 3,
          "subtopic": "",
          "question": "Wer darf laut Verordnung zu den KVR ein Fahrzeug nicht führen oder als Mitglied der Crew eine andere Tätigkeit des Brücken- oder Decksdienstes nicht ausüben (allgemein ohne Zahlen zu beantworten)?",
          "answer": "Wer infolge körperlicher oder geistiger Mängel oder des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung eines Fahrzeugs oder in der sicheren Ausübung einer anderen Tätigkeit des Brücken- oder Decksdienstes behindert ist.",
          "keywords": [
            "Ausübung",
            "Brücken",
            "Decksdienstes",
            "Fahrzeugs",
            "Führung"
          ]
        },
        {
          "id": "recht-4",
          "number": 4,
          "subtopic": "",
          "question": "Welche Atem- bzw. Blutalkoholkonzentration darf laut Verordnung zu den KVR nicht erreicht werden, damit kein Verbot für ein Führen eines Fahrzeugs oder als Mitglied der Crew für ein Ausüben des Brückendienstes besteht?",
          "answer": "0,25 mg/l oder mehr Alkohol in der Atemluft oder 0,5 Promille oder mehr Alkohol im Blut oder eine Alkoholmenge, die zu einer solchen Atem- oder Blutalkoholkonzentration führt.",
          "keywords": [
            "Alkohol",
            "Alkoholmenge",
            "Atem",
            "Atemluft",
            "Blut"
          ]
        },
        {
          "id": "recht-5",
          "number": 5,
          "subtopic": "",
          "question": "Die KVR regeln u. a. das Verhalten der Schiffsführungen bei Kollisionsgefahr. Was ist im Rahmen der Verantwortlichkeit bei der Auslegung und Befolgung der KVR zu berücksichtigen?",
          "answer": "Bei der Auslegung und Befolgung der KVR sind stets alle Gefahren der Schifffahrt und des Zusammenstoßes sowie alle besonderen Umstände einschließlich Behinderungen der betroffenen Fahrzeuge gebührend zu berücksichtigen, die zum Abwenden unmittelbarer Gefahr ggf. auch ein Abweichen von diesen Regeln erfordern können (z. B. Abweichen von der Kurshaltepflicht, wenn der Ausweichpflichtige nicht angemessen handelt).",
          "keywords": [
            "Abweichen",
            "Abwenden",
            "Auslegung",
            "Ausweichpflichtige",
            "Befolgung"
          ]
        },
        {
          "id": "recht-6",
          "number": 6,
          "subtopic": "",
          "question": "Welche Grundregeln für das Verhalten im Verkehr verlangen die KVR, die ein Schiffsführer zu berücksichtigen hat, auch wenn keine konkrete Regel anwendbar ist?",
          "answer": "Die KVR befreien nicht von den Folgen, die durch unzureichende Einhaltung der KVR oder unzureichende Vorsichtsmaßnahmen entstehen, d. h., allgemeine seemännische Praxis oder besondere Umstände des Falles können über die Mindestanforderungen der KVR hinausgehende Maßnahmen erfordern.",
          "keywords": [
            "Einhaltung",
            "Falles",
            "Folgen",
            "Maßnahmen",
            "Mindestanforderungen"
          ]
        },
        {
          "id": "recht-7",
          "number": 7,
          "subtopic": "",
          "question": "Was sind Verkehrstrennungsgebiete?",
          "answer": "Wie sind sie zu befahren? 1. Verkehrstrennungsgebiete sind Schifffahrtswege, die durch Trennlinien oder Trennzonen in Einbahnwege geteilt sind. 2. Diese dürfen nur in Fahrtrichtung rechts der Trennlinie/Trennzone befahren werden, aber unter Nutzung der vollen Breite des Einbahnweges.",
          "keywords": [
            "Breite",
            "Einbahnwege",
            "Einbahnweges",
            "Fahrtrichtung",
            "Nutzung"
          ]
        },
        {
          "id": "recht-8",
          "number": 8,
          "subtopic": "",
          "question": "Was ist ein \"manövrierunfähiges Fahrzeug\"?",
          "answer": "Manövrierunfähig ist ein Fahrzeug, das wegen außergewöhnlicher Umstände (z. B. Ruderbruch) nicht regelgerecht manövrieren und daher einem anderen Fahrzeug nicht ausweichen kann.",
          "keywords": [
            "Fahrzeug",
            "Manövrierunfähig",
            "Ruderbruch",
            "Umstände"
          ]
        },
        {
          "id": "recht-9",
          "number": 9,
          "subtopic": "",
          "question": "Was ist ein \"manövrierbehindertes Fahrzeug\"?",
          "answer": "Manövrierbehindert ist ein Fahrzeug, das durch die Art seines Einsatzes behindert ist (z. B. Bagger, Kabelleger), regelgerecht zu manövrieren, und daher einem anderen Fahrzeug nicht ausweichen kann.",
          "keywords": [
            "Bagger",
            "Einsatzes",
            "Fahrzeug",
            "Kabelleger",
            "Manövrierbehindert"
          ]
        },
        {
          "id": "recht-10",
          "number": 10,
          "subtopic": "",
          "question": "Nennen Sie mindestens 3 Beispiele für \"manövrierbehinderte Fahrzeuge\".",
          "answer": "1. Tonnenleger, Kabelleger, Rohrleger im Einsatz, 2. Bagger, Vermessungsfahrzeuge im Einsatz, 3. Versorger im Einsatz, 4. Flugzeugträger im Einsatz, 5. Minenräumfahrzeuge im Einsatz, 6. Fahrzeuge während eines Schleppvorganges, bei dem das schleppende Fahrzeug und sein Anhang erheblich behindert sind, vom Kurs abzuweichen.",
          "keywords": [
            "Anhang",
            "Bagger",
            "Einsatz",
            "Fahrzeug",
            "Fahrzeuge"
          ]
        },
        {
          "id": "recht-11",
          "number": 11,
          "subtopic": "",
          "question": "Was ist unter \"sicherer Geschwindigkeit\" zu verstehen?",
          "answer": "Das Fahrzeug muss jederzeit innerhalb einer solchen Entfernung zum Stehen gebracht werden können, dass ein Zusammenstoß vermieden wird.",
          "keywords": [
            "Entfernung",
            "Fahrzeug",
            "Stehen",
            "Zusammenstoß"
          ]
        },
        {
          "id": "recht-12",
          "number": 12,
          "subtopic": "",
          "question": "Ab welcher Länge müssen Sportfahrzeuge mit den Lichtern/Signalkörpern ausgerüstet sein, die bei Manövrierunfähigkeit zu setzen sind?",
          "answer": "Fahrzeuge ab 12 m Länge.",
          "keywords": [
            "Fahrzeuge",
            "Länge"
          ]
        },
        {
          "id": "recht-13",
          "number": 13,
          "subtopic": "",
          "question": "Sie sehen in der Dämmerung in der Nordsee in der Zufahrt zur Jade einen großen Tanker mit der üblichen Lichterführung, auf dem kurze Zeit später die Lichter rot-weiß-rot senkrecht übereinander zusätzlich zu den Fahrtlichtern gesetzt werden. Welche rechtliche Bedeutung hat die geänderte Signalgebung für Sie?",
          "answer": "Beim Erreichen des Geltungsbereiches der SeeSchStrO kennzeichnet sich der Tanker als Wegerechtschiff, das als manövrierbehindertes Fahrzeug gilt. Diesem so gekennzeichneten Fahrzeug muss im Falle einer Kollisionsgefahr ausgewichen werden.",
          "keywords": [
            "Diesem",
            "Erreichen",
            "Fahrzeug",
            "Falle",
            "Geltungsbereiches"
          ]
        },
        {
          "id": "recht-14",
          "number": 14,
          "subtopic": "",
          "question": "Welche Lichter müssen manövrierbehinderte Fahrzeuge (außer Minenräumfahrzeuge) führen 1. ohne Fahrt durchs Wasser (FdW), 2. mit FdW, 3. vor Anker?",
          "answer": "1. Ohne FdW: rot-weiß-rot senkrecht übereinander. 2. Mit FdW: rot-weiß-rot senkrecht übereinander und Lichter eines Maschinenfahrzeugs (Topplicht[er]), Seitenlichter, Hecklicht. 3. Vor Anker: rot-weiß-rot senkrecht übereinander und Ankerlicht(er).",
          "keywords": [
            "Anker",
            "Ankerlicht",
            "Hecklicht",
            "Lichter",
            "Maschinenfahrzeugs"
          ]
        },
        {
          "id": "recht-15",
          "number": 15,
          "subtopic": "",
          "question": "Wie sind manövrierbehinderte und manövrierunfähige Fahrzeuge am Tage bezeichnet?",
          "answer": "1. Manövrierbehinderte Fahrzeuge: Ball-Rhombus-Ball senkrecht übereinander. 2. Manövrierunfähige Fahrzeuge: zwei schwarze Bälle senkrecht übereinander.",
          "keywords": [
            "Ball",
            "Bälle",
            "Fahrzeuge",
            "Manövrierbehinderte",
            "Manövrierunfähige"
          ]
        },
        {
          "id": "recht-16",
          "number": 16,
          "subtopic": "",
          "question": "Wie müssen Sie Ihr Fahrzeug unter Segel bei Tage und bei Nacht kennzeichnen, wenn Sie gleichzeitig mit Maschinenkraft fahren?",
          "answer": "1. Bei Nacht Lichterführung eines Maschinenfahrzeugs entsprechender Größe, 2. bei Tage einen Kegel - Spitze unten - im Vorschiff gut sichtbar.",
          "keywords": [
            "Größe",
            "Kegel",
            "Lichterführung",
            "Maschinenfahrzeugs",
            "Nacht"
          ]
        },
        {
          "id": "recht-17",
          "number": 17,
          "subtopic": "",
          "question": "Was müssen Sie hinsichtlich der Zeiten der Lichterführung beachten?",
          "answer": "Die Lichter müssen geführt werden 1. zwischen Sonnenuntergang und Sonnenaufgang, 2. bei verminderter Sicht auch zwischen Sonnenaufgang und Sonnenuntergang.",
          "keywords": [
            "Lichter",
            "Sicht",
            "Sonnenaufgang",
            "Sonnenuntergang"
          ]
        },
        {
          "id": "recht-18",
          "number": 18,
          "subtopic": "",
          "question": "Sie sehen am Tage ein Fahrzeug, augenscheinlich kürzer als 50 m, mit dem Sichtzeichen \"schwarzer Rhombus\", dahinter in gleichbleibendem Abstand ein weiteres Fahrzeug mit dem gleichen Signalkörper. 1. Worum handet es sich?",
          "answer": "2. Wie sind die Fahrzeuge bei Nacht gekennzeichnet? 1. Es handelt sich um einen Schleppverband länger als 200 m (Heck des Schleppers - Heck des Anhangs). 2. Der Schlepper führt nachts drei weiße Topplichter senkrecht übereinander, Seitenlichter, Hecklicht und das gelbe Schlepplicht über dem Hecklicht. Der Anhang führt Seitenlichter und Hecklicht.",
          "keywords": [
            "Anhang",
            "Anhangs",
            "Fahrzeuge",
            "Heck",
            "Hecklicht"
          ]
        },
        {
          "id": "recht-19",
          "number": 19,
          "subtopic": "",
          "question": "Man hört bei Nebel folgendes Schallsignal mit der Pfeife (lang-kurz-kurz), unmittelbar gefolgt von (lang-kurz-kurz-kurz) etwa jede Minute. Worum handelt es sich dabei?",
          "answer": "Es ist das Schallsignal eines Schleppverbandes in Fahrt (schleppendes Fahrzeug lang-kurz-kurz; Anhang lang-kurz-kurz-kurz).",
          "keywords": [
            "Anhang",
            "Fahrt",
            "Fahrzeug",
            "Schallsignal",
            "Schleppverbandes"
          ]
        },
        {
          "id": "recht-20",
          "number": 20,
          "subtopic": "",
          "question": "Bei Nebel im Küstenbereich fahrend, hört man etwa jede Minute folgendes Signal: drei Glockenschläge, dann ca. 5 Sekunden lang rasches Läuten einer Glocke, dann drei Glockenschläge. Wer gibt dieses Signal?",
          "answer": "Dieses Signal gibt ein Fahrzeug auf Grund unter 100 m Länge.",
          "keywords": [
            "Dieses",
            "Fahrzeug",
            "Grund",
            "Länge",
            "Signal"
          ]
        },
        {
          "id": "recht-21",
          "number": 21,
          "subtopic": "",
          "question": "Sie sehen ein Fahrzeug mit folgender Lichterführung:",
          "answer": "1. Worum handelt es sich? 2. Welches Schallsignal müsste dieses Fahrzeug bei unsichtigem Wetter geben? 1. Treibnetzfischer (Fahrzeug, das nicht trawlt) in Fahrt oder vor Anker mit ausgebrachtem Fanggerät, das waagerecht weiter als 150 m ins Wasser reicht. (Das untere weiße Licht kann auch das Hecklicht sein). 2. Schallsignal (lang-kurz-kurz) mindestens alle 2 Minuten.",
          "keywords": [
            "Anker",
            "Fahrt",
            "Fahrzeug",
            "Fanggerät",
            "Hecklicht"
          ]
        },
        {
          "id": "recht-22",
          "number": 22,
          "subtopic": "",
          "question": "Sie sehen nachts auf See 2 rote Lichter senkrecht übereinander:",
          "answer": "Worum handelt es sich? Um ein manövrierunfähiges Fahrzeug in Fahrt ohne Fahrt durchs Wasser.",
          "keywords": [
            "Fahrt",
            "Fahrzeug",
            "Wasser",
            "Worum"
          ]
        },
        {
          "id": "recht-23",
          "number": 23,
          "subtopic": "",
          "question": "Die Lichteranordnung eines Fahrzeugs ändert sich plötzlich von in Was schließen Sie daraus?",
          "answer": "Ein manövrierunfähiges Fahrzeug in Fahrt ohne Fahrt durchs Wasser (FdW) hat FdW aufgenommen, da man jetzt auch das Backbord-Seitenlicht sieht.",
          "keywords": [
            "Backbord",
            "Fahrt",
            "Fahrzeug",
            "Seitenlicht",
            "Wasser"
          ]
        },
        {
          "id": "recht-24",
          "number": 24,
          "subtopic": "",
          "question": "Was bestimmen die KVR über das Ausguckhalten?",
          "answer": "Es muss jederzeit durch Sehen und Hören sowie durch jedes andere verfügbare Mittel gehöriger Ausguck gehalten werden, der einen vollständigen Überblick über die Lage und die Möglichkeit der Gefahr eines Zusammenstoßes gibt.",
          "keywords": [
            "Ausguck",
            "Gefahr",
            "Hören",
            "Lage",
            "Mittel"
          ]
        },
        {
          "id": "recht-25",
          "number": 25,
          "subtopic": "",
          "question": "Was bestimmen die KVR für das Verhalten von Fahrzeugen von weniger als 20 m Länge oder von Segelfahrzeugen im Fahrwasser einer Seeschifffahrtsstraße?",
          "answer": "Fahrzeuge von weniger als 20 m Länge oder Segelfahrzeuge dürfen nicht die Durchfahrt eines Fahrzeuges behindern, das nur innerhalb eines engen Fahrwassers oder einer Fahrrinne sicher fahren kann. Sie müssen, wenn es die Umstände erfordern, frühzeitig Maßnahmen ergreifen, um genügend Raum für die sichere Durchfahrt des anderen Fahrzeugs zu lassen.",
          "keywords": [
            "Durchfahrt",
            "Fahrrinne",
            "Fahrwassers",
            "Fahrzeuge",
            "Fahrzeuges"
          ]
        },
        {
          "id": "recht-26",
          "number": 26,
          "subtopic": "",
          "question": "Was ist eine \"Küstenverkehrszone\"?",
          "answer": "Das Gebiet zwischen der Küste und der landwärtigen Grenze eines Verkehrstrennungsgebietes.",
          "keywords": [
            "Gebiet",
            "Grenze",
            "Küste",
            "Verkehrstrennungsgebietes"
          ]
        },
        {
          "id": "recht-27",
          "number": 27,
          "subtopic": "",
          "question": "Welche Fahrzeuge dürfen die Küstenverkehrszone benutzen, ohne einen Hafen innerhalb der Küstenverkehrszone anzusteuern?",
          "answer": "Fahrzeuge von weniger als 20 m Länge und Segelfahrzeuge.",
          "keywords": [
            "Fahrzeuge",
            "Länge",
            "Segelfahrzeuge"
          ]
        },
        {
          "id": "recht-28",
          "number": 28,
          "subtopic": "",
          "question": "Wie müssen Maschinenfahrzeuge ohne Radar bei verminderter Sicht ihre Fahrweise einrichten?",
          "answer": "Maschinenfahrzeuge müssen mit sicherer Geschwindigkeit fahren, die den gegebenen Umständen und Bedingungen der verminderten Sicht angepasst ist.",
          "keywords": [
            "Bedingungen",
            "Geschwindigkeit",
            "Maschinenfahrzeuge",
            "Sicht",
            "Umständen"
          ]
        },
        {
          "id": "recht-29",
          "number": 29,
          "subtopic": "",
          "question": "Wie müssen sich Segelfahrzeuge ohne Radar bei verminderter Sicht verhalten?",
          "answer": "Was gehört dabei zu den Regeln guter Seemannschaft? 1. Segelfahrzeuge müssen mit sicherer Geschwindigkeit fahren, die den gegebenen Umständen und Bedingungen der verminderten Sicht angepasst ist. 2. Bei Segelfahrzeugen, die eine Maschine an Bord haben, gehört das Bereithalten der Maschine zu den Regeln guter Seemannschaft.",
          "keywords": [
            "Bedingungen",
            "Bereithalten",
            "Bord",
            "Geschwindigkeit",
            "Maschine"
          ]
        },
        {
          "id": "recht-30",
          "number": 30,
          "subtopic": "",
          "question": "Wie müssen sich Fahrzeuge ohne Radar bei verminderter Sicht verhalten, wenn sie voraus das Schallsignal eines anderen Fahrzeuges hören?",
          "answer": "Jedes Fahrzeug, das anscheinend vorlicher als querab das Schallsignal eines anderen Fahrzeuges hört, muss seine Fahrt auf das für die Erhaltung der Steuerfähigkeit geringstmögliche Maß verringern. Erforderlichenfalls muss es jegliche Fahrt wegnehmen und in jedem Fall mit äußerster Vorsicht manövrieren, bis die Gefahr eines Zusammenstoßes vorüber ist.",
          "keywords": [
            "Erforderlichenfalls",
            "Erhaltung",
            "Fahrt",
            "Fahrzeug",
            "Fahrzeuges"
          ]
        },
        {
          "id": "recht-31",
          "number": 31,
          "subtopic": "",
          "question": "Sie segeln in der Nordsee bei guter Sicht. Ihnen kommt in stehender Peilung ein Maschinenfahrzeug entgegen, das keine Anstalten macht, seiner Ausweichpflicht nachzukommen. Geben Sie in einer sinnvollen Reihenfolge an, was von Ihnen zu unternehmen ist. Welche dieser Maßnahmen sind zwingend vorgeschrieben?",
          "answer": "1. Über Funk versuchen, das andere Fahrzeug auf seine Ausweichpflicht aufmerksam zu machen. 2. Schallsignal: mindestens fünf kurze, rasch aufeinander folgende Pfeifentöne geben. 3. Ggf. Ergänzung zu 2.: Lichtsignal von mindestens fünf kurzen, rasch aufeinander folgenden Blitzen. 4. Manöver des sogenannten \"vorletzten Augenblicks\" fahren. 5. Manöver des sogenannten \"letzten Augenblicks\" fahren. Zwingend vorgeschrieben sind die Maßnahmen nach 2. und 5.",
          "keywords": [
            "Augenblicks",
            "Ausweichpflicht",
            "Blitzen",
            "Ergänzung",
            "Fahrzeug"
          ]
        },
        {
          "id": "recht-32",
          "number": 32,
          "subtopic": "",
          "question": "Auf einem Segelfahrzeug unter Motor sieht man nachts fast recht voraus ein näher kommendes Fahrzeug mit folgender Lichterführung: oben ein weißes Licht, seitlich darunter ein grünes Licht, zeitweise rechts von dem grünen Licht auf gleicher Höhe auch ein rotes Licht. Um was für ein Fahrzeug handelt es sich, was ist von Ihnen und was ist auf dem anderen Fahrzeug zu unternehmen?",
          "answer": "Es handelt sich um ein Maschinenfahrzeug von weniger als 50 m Länge, das im Seegang oder durch schlechtes Steuern giert. Man muss annehmen, dass sich zwei Maschinenfahrzeuge auf entgegengesetzten oder fast entgegengesetzten Kursen nähern und die Möglichkeit der Gefahr eines Zusammenstoßes besteht. Beide Fahrzeuge müssen den Kurs nach Steuerbord ändern und dieses durch einen kurzen Ton anzeigen.",
          "keywords": [
            "Beide",
            "Fahrzeuge",
            "Gefahr",
            "Kurs",
            "Kursen"
          ]
        },
        {
          "id": "recht-33",
          "number": 33,
          "subtopic": "",
          "question": "Wie muss man sich verhalten, wenn man gezwungen ist, ein Verkehrstrennungsgebiet zu queren?",
          "answer": "Kielrichtung (rwK) muss möglichst rechtwinklig zur allgemeinen Verkehrsrichtung zeigen.",
          "keywords": [
            "Kielrichtung",
            "Verkehrsrichtung"
          ]
        },
        {
          "id": "recht-34",
          "number": 34,
          "subtopic": "",
          "question": "Wie muss man sich verhalten, wenn man einen betonnten Schifffahrtsweg (z. B. in der Ostsee) queren will?",
          "answer": "Die Ausweichregeln der KVR beachten.",
          "keywords": [
            "Ausweichregeln"
          ]
        },
        {
          "id": "recht-35",
          "number": 35,
          "subtopic": "",
          "question": "Wie ist die Gefahr eines Zusammenstoßes sicher erkennbar?",
          "answer": "Wenn die Kompasspeilung zu einem anderen Fahrzeug steht und sie sich einander nähern.",
          "keywords": [
            "Fahrzeug",
            "Kompasspeilung"
          ]
        },
        {
          "id": "recht-36",
          "number": 36,
          "subtopic": "",
          "question": "Wie müssen Sie Ausweichmanöver durchführen?",
          "answer": "1. Möglichst frühzeitig, 2. durchgreifend, sodass das andere Fahrzeug rasch Ihre Absicht erkennen kann, und um sich gut klar zu halten.",
          "keywords": [
            "Absicht",
            "Fahrzeug",
            "Ihre",
            "Möglichst"
          ]
        },
        {
          "id": "recht-37",
          "number": 37,
          "subtopic": "",
          "question": "Wie müssen Sie sich verhalten, nachdem Sie ein vorgeschriebenes Ausweichmanöver eingeleitet haben?",
          "answer": "Der Erfolg des Manövers ist laufend zu überprüfen, bis das andere Fahrzeug klar passiert ist.",
          "keywords": [
            "Erfolg",
            "Fahrzeug",
            "Manövers"
          ]
        },
        {
          "id": "recht-38",
          "number": 38,
          "subtopic": "",
          "question": "Sie segeln mit Wind von Steuerbord und sehen nachts in Luv ein einzelnes rotes Licht, das in stehender Peilung näher kommt. 1. Was ist das für ein Licht?",
          "answer": "2. Wer muss ausweichen? (Begründung!) 1. Das Licht ist das Backbordlicht eines Segelfahrzeugs in Fahrt. 2. Das Segelfahrzeug in Luv muss ausweichen, entweder weil es den Wind von Backbord hat oder weil es - wenn mit Wind von Steuerbord segelnd - luvwärts steht.",
          "keywords": [
            "Backbord",
            "Backbordlicht",
            "Begründung",
            "Fahrt",
            "Licht"
          ]
        },
        {
          "id": "recht-39",
          "number": 39,
          "subtopic": "",
          "question": "Sie segeln mit Wind von Backbord und sehen nachts in Luv ein einzelnes grünes Licht, das in stehender Peilung näher kommt. 1. Was ist das für ein Licht?",
          "answer": "2. Wer muss ausweichen? (Begründung!) 1. Das Licht ist das Steuerbordlicht eines Segelfahrzeugs in Fahrt. 2. Ihr Fahrzeug muss als leewärtiges Fahrzeug ausweichen, weil Sie (mit Wind von Backbord segelnd) nicht erkennen können, von welcher Seite das andere Fahrzeug den Wind hat.",
          "keywords": [
            "Backbord",
            "Begründung",
            "Fahrt",
            "Fahrzeug",
            "Licht"
          ]
        },
        {
          "id": "recht-40",
          "number": 40,
          "subtopic": "",
          "question": "Sie segeln nachts mit raumem Wind und machen gute Fahrt. Sie sehen an Steuerbord voraus ein einzelnes weißes Licht in (nahezu) stehender Peilung. Näher kommend verschwindet das weiße Licht gelegentlich und es erscheint stattdessen in etwa gleicher Höhe und links davon ein rotes Licht. Jeweils kurzfristig sind beide Lichter gleichzeitig zu sehen. 1. Worum handelt es sich bei diesen Lichtern?",
          "answer": "2. Wer muss ausweichen? (Begründung!) 1. Man sieht Hecklicht und/oder Backbord-Seitenlicht eines Segelfahrzeugs in Fahrt, das im Seegang giert. 2. Ihr Fahrzeug nähert sich aus dem Hecksektor des anderen Fahrzeugs. Es steht eben auf dessen Sektorengrenze und muss als überholendes Fahrzeug ausweichen. Im Zweifel (hier Sektorengrenze!) muss man sich als Überholer betrachten.",
          "keywords": [
            "Backbord",
            "Begründung",
            "Fahrt",
            "Fahrzeug",
            "Fahrzeugs"
          ]
        },
        {
          "id": "recht-41",
          "number": 41,
          "subtopic": "",
          "question": "Sie segeln nachts mit raumem Wind und sehen nahezu achteraus ein Fahrzeug mit der Lichterführung rot-weiß-rot senkrecht übereinander, das näher kommt. Zusätzlich sehen Sie neben zwei weißen Topplichtern links ein grünes und rechts ein rotes Licht auf gleicher Höhe. 1. Was bedeuten diese Lichter?",
          "answer": "2. Wer muss ausweichen? (Begründung!) 1. Man sieht ein manövrierbehindertes Fahrzeug mit FdW (Topplichter, Seitenlichter). 2. Dieses Fahrzeug nähert sich im Hecklichtsektor und muss deshalb als Überholer ausweichen.",
          "keywords": [
            "Begründung",
            "Dieses",
            "Fahrzeug",
            "Hecklichtsektor",
            "Seitenlichter"
          ]
        },
        {
          "id": "recht-42",
          "number": 42,
          "subtopic": "",
          "question": "Welcher Zeitpunkt ist im freien Seeraum entscheidend für die Verantwortlichkeit (hier = Ausweichpflicht!) der Fahrzeuge untereinander?",
          "answer": "Der Augenblick des ersten Insichtkommens. Eine spätere Änderung der Lage der Fahrzeuge zueinander verändert nicht die Verantwortlichkeit.",
          "keywords": [
            "Augenblick",
            "Fahrzeuge",
            "Insichtkommens",
            "Lage",
            "Verantwortlichkeit"
          ]
        },
        {
          "id": "recht-43",
          "number": 43,
          "subtopic": "",
          "question": "Ein anderes Fahrzeug muss Ihnen ausweichen. Welche Verpflichtung nach KVR haben Sie?",
          "answer": "Was unternehmen Sie, wenn das andere Fahrzeug nicht ausweicht? 1. Mein Fahrzeug ist \"Kurshalter\", d. h. es muss Kurs und Geschwindigkeit beibehalten. 2. Mein Fahrzeug darf zur Abwendung eines Zusammenstoßes manövrieren, sobald erkennbar wird, dass das andere Fahrzeug nicht angemessen (= regelgerecht) manövriert (\"Manöver des vorletzten Augenblicks!\") 3. Mein Fahrzeug muss zweckdienlich manövrieren, wenn ein Manöver des Ausweichpflichtigen allein einen Zusammenstoß nicht mehr vermeiden kann (\"Manöver des letzten Augenblicks!\")",
          "keywords": [
            "Abwendung",
            "Augenblicks",
            "Ausweichpflichtigen",
            "Fahrzeug",
            "Geschwindigkeit"
          ]
        },
        {
          "id": "recht-44",
          "number": 44,
          "subtopic": "",
          "question": "Welchen Fahrzeugen muss ein Segelfahrzeug ausweichen?",
          "answer": "1. Einem manövrierunfähigen Fahrzeug, 2. einem manövrierbehinderten Fahrzeug, 3. einem fischenden Fahrzeug, 4. ggf. einem anderen Segelfahrzeug, abhängig von der Segelstellung in Bezug auf den Wind.",
          "keywords": [
            "Bezug",
            "Fahrzeug",
            "Segelfahrzeug",
            "Segelstellung",
            "Wind"
          ]
        },
        {
          "id": "recht-45",
          "number": 45,
          "subtopic": "",
          "question": "1. Wie muss sich ein Sportfahrzeug gegenüber einem tiefgangbehinderten Fahrzeug verhalten?",
          "answer": "2. Schlagen Sie entsprechende Maßnahmen/Manöver vor. 1. Das Sportfahrzeug muss vermeiden, die sichere Durchfahrt eines tiefgangbehinderten Fahrzeugs zu behindern. 2. Dieses kann durch eine frühzeitige Kursänderung, Geschwindigkeitsänderung oder beides geschehen.",
          "keywords": [
            "Dieses",
            "Durchfahrt",
            "Fahrzeugs",
            "Geschwindigkeitsänderung",
            "Kursänderung"
          ]
        },
        {
          "id": "recht-46",
          "number": 46,
          "subtopic": "",
          "question": "Wo unterliegt Ihr Segelfahrzeug bzw. Ihre Motoryacht unter 20 m Länge einem Behinderungsverbot?",
          "answer": "1. In engen Fahrwassern, 2. auf dem Einbahnweg eines Verkehrstrennungsgebietes (VTG) gegenüber Maschinenfahrzeugen im VTG.",
          "keywords": [
            "Einbahnweg",
            "Fahrwassern",
            "Maschinenfahrzeugen",
            "Verkehrstrennungsgebietes"
          ]
        },
        {
          "id": "recht-47",
          "number": 47,
          "subtopic": "",
          "question": "Welchen Abstand muss man von Minenräumfahrzeugen halten?",
          "answer": "Mindestens 1 000 m.",
          "keywords": [
            "Mindestens"
          ]
        },
        {
          "id": "recht-48",
          "number": 48,
          "subtopic": "",
          "question": "Auf einer Motoryacht A sieht man nachts etwa recht voraus Topplicht und beide Seitenlichter eines Fahrzeugs B. Die Lichter werden rasch heller. 1. Was ist B?",
          "answer": "2. Wie ist die Situation zu klären? 1. B ist ein Maschinenfahrzeug von weniger als 50 m Länge in Fahrt. 2. A und B müssen ihren Kurs so nach Steuerbord ändern, dass sie einander an der Backbord-Seite passieren. Dabei müssen A und B das Signal \"ein kurzer Ton\" geben.",
          "keywords": [
            "Backbord",
            "Dabei",
            "Fahrt",
            "Kurs",
            "Länge"
          ]
        },
        {
          "id": "recht-49",
          "number": 49,
          "subtopic": "",
          "question": "Auf einer Motoryacht A erkennt man nachts etwa 2 Strich an Backbord folgende Lichter des Fahrzeugs B, die rasch näher kommen. Die Kompasspeilung zum Fahrzeug B ändert sich dabei nur geringfügig. 1. Worum handelt es sich bei Fahrzeug B?",
          "answer": "2. Wer muss ausweichen? 3. Was muss Fahrzeug A tun? 1. B ist ein Maschinenfahrzeug von weniger als 50 m Länge in Fahrt, dessen Steuerbord-Seite man sieht. 2. B muss ausweichen, weil es die Motoryacht A an seiner Steuerbord-Seite hat. 3. Die Motoryacht A muss Kurs und Geschwindigkeit beibehalten.",
          "keywords": [
            "Fahrt",
            "Fahrzeug",
            "Geschwindigkeit",
            "Kurs",
            "Länge"
          ]
        },
        {
          "id": "recht-50",
          "number": 50,
          "subtopic": "",
          "question": "Welchen Fahrzeugen muss eine Motoryacht ausweichen?",
          "answer": "1. Manövrierunfähigen Fahrzeugen, 2. manövrierbehinderten Fahrzeugen, 3. fischenden Fahrzeugen, 4. Segelfahrzeugen, 5. ggf. einem anderen Maschinenfahrzeug.",
          "keywords": [
            "Fahrzeugen",
            "Manövrierunfähigen",
            "Maschinenfahrzeug",
            "Segelfahrzeugen"
          ]
        },
        {
          "id": "recht-51",
          "number": 51,
          "subtopic": "",
          "question": "Auf einer Motoryacht A sieht man nachts etwa querab an Steuerbord ein einzelnes weißes Licht in (nahezu) stehender Kompasspeilung. Näher kommend erkennt man unterhalb des weißen Lichtes und etwas rechts davon ein rotes Licht (Fahrzeug B). 1. Worum handelt es sich?",
          "answer": "2. Was müssen jeweils beide Fahrzeuge tun? (Begründung!) 1. Topplicht und später Backbord-Seitenlicht eines Maschinenfahrzeuges B von weniger als 50 m Länge in Fahrt. 2. A muss ausweichen, weil es B an seiner Steuerbord-Seite hat. A muss das Signal \"ein kurzer Ton\" geben. 3. B muss Kurs und Geschwindigkeit beibehalten.",
          "keywords": [
            "Backbord",
            "Begründung",
            "Fahrt",
            "Fahrzeuge",
            "Geschwindigkeit"
          ]
        },
        {
          "id": "recht-52",
          "number": 52,
          "subtopic": "",
          "question": "Eine Motoryacht, Länge 8 m, treibt nachts manövrierunfähig in der Nordsee und sieht ein großes Fahrzeug direkt auf sich zukommen. Welche Maßnahmen hat die Motoryacht zu ergreifen?",
          "answer": "Ein Fahrzeug von weniger als 12 m Länge, das die zwei roten Rundumlichter senkrecht übereinander nicht führt, muss folgende Maßnahmen ergreifen: 1. Durch jedes andere verfügbare Mittel anzeigen, dass es manövrierunfähig ist, z. B. über UKW-Sprechfunk oder durch ein Schallsignal oder das Lichtsignal lang-kurz-kurz. 2. Bei weiterer Annäherung das andere Fahrzeug mit einer starken Handlampe anleuchten und so auf sich aufmerksam machen. 3. Führen eines weißen Rundumlichtes, das mit keinem anderen Licht verwechselt werden kann. 4. Abfeuern eines Signals \"weißer Stern\" oder \"Blitz-Knall\". 5. Sofort bei Eintritt der Manövrierunfähigkeit Verkehrszentrale informieren (wenn vorhanden).",
          "keywords": [
            "Abfeuern",
            "Annäherung",
            "Blitz",
            "Eintritt",
            "Fahrzeug"
          ]
        },
        {
          "id": "recht-53",
          "number": 53,
          "subtopic": "",
          "question": "Wie sind Fahrwasser in der Seeschifffahrtsstraßen-Ordnung im Sinne der KVR eingestuft?",
          "answer": "Fahrwasser der Seeschifffahrtsstraßen gelten als enge Fahrwasser im Sinne der KVR.",
          "keywords": [
            "Fahrwasser",
            "Seeschifffahrtsstraßen",
            "Sinne"
          ]
        },
        {
          "id": "recht-54",
          "number": 54,
          "subtopic": "",
          "question": "Erläutern Sie den Begriff \"durchgehende Schifffahrt\" auf einem Fahrwasser einer",
          "answer": "Seeschifffahrtsstraße. Die durchgehende Schifffahrt umfasst alle Fahrzeuge, die deutlich dem Fahrwasserverlauf einer Seeschifffahrtsstraße folgen. Dies erlaubt nach allgemeiner Verkehrsauffassung ein Abweichen von höchstens ± 10° von der Richtung des Fahrwassers. Dabei ist es gleichgültig, zu welchem Zweck das Fahrzeug betrieben wird.",
          "keywords": [
            "Abweichen",
            "Dabei",
            "Dies",
            "Fahrwassers",
            "Fahrwasserverlauf"
          ]
        },
        {
          "id": "recht-55",
          "number": 55,
          "subtopic": "",
          "question": "Was fordern die Grundregeln für das Verhalten im Verkehr?",
          "answer": "Jeder Verkehrsteilnehmer 1. muss die Sicherheit und Leichtigkeit des Verkehrs gewährleisten, 2. darf andere (nicht nur Verkehrsteilnehmer!) nicht schädigen, gefährden oder mehr als unvermeidbar behindern oder belästigen.",
          "keywords": [
            "Jeder",
            "Leichtigkeit",
            "Sicherheit",
            "Verkehrs",
            "Verkehrsteilnehmer"
          ]
        },
        {
          "id": "recht-56",
          "number": 56,
          "subtopic": "",
          "question": "Welche verkehrsrechtliche Verantwortung hat der Schiffsführer?",
          "answer": "1. Befolgung der Vorschriften im Verkehr, u. a. KVR, SeeSchStrO. 2. Ausrüstung/Einrichtung seines Fahrzeugs zum Führen und Zeigen von Lichtern und Signalkörpern und Geben von Schallsignalen.",
          "keywords": [
            "Ausrüstung",
            "Befolgung",
            "Einrichtung",
            "Fahrzeugs",
            "Führen"
          ]
        },
        {
          "id": "recht-57",
          "number": 57,
          "subtopic": "",
          "question": "Was sind Seeschifffahrtsstraßen im Sinne der SeeSchStrO?",
          "answer": "Seeschifffahrtsstraßen im Sinne dieser Verordnung sind: 1. Wasserflächen zwischen der Küstenlinie bei mittlerem Hochwasser oder der seewärtigen Begrenzung der Binnenwasserstraßen und einer Linie von drei Seemeilen seewärts der Basislinie, 2. die durchgehend durch laterale Zeichen (Tonnen) begrenzten Wasserflächen der seewärtigen Teile der Fahrwasser im Küstenmeer, 3. Wasserflächen zwischen den Ufern bestimmter Binnenwasserstraßen.",
          "keywords": [
            "Basislinie",
            "Begrenzung",
            "Binnenwasserstraßen",
            "Fahrwasser",
            "Hochwasser"
          ]
        },
        {
          "id": "recht-58",
          "number": 58,
          "subtopic": "",
          "question": "Was sind Fahrwasser im Sinne der SeeSchStrO?",
          "answer": "Fahrwasser sind die Teile der Wasserflächen, die durch Tonnen (laterale Zeichen) begrenzt oder gekennzeichnet sind oder die, soweit das nicht der Fall ist, auf den Binnenwasserstraßen für die durchgehende Schifffahrt bestimmt sind.",
          "keywords": [
            "Binnenwasserstraßen",
            "Fahrwasser",
            "Fall",
            "Schifffahrt",
            "Teile"
          ]
        },
        {
          "id": "recht-59",
          "number": 59,
          "subtopic": "",
          "question": "Welche verkehrsrechtlichen Bestimmungen gelten auf deutschen Seeschifffahrtsstraßen?",
          "answer": "Auf deutschen Seeschifffahrtsstraßen gelten: 1. die KVR, 2. die Seeschifffahrtsstraßen-Ordnung, ggf. die Bekanntmachungen der Wasser- und Schifffahrtsdirektionen (WSD) Nord und Nordwest, 3. ggf. die Hafenordnungen.",
          "keywords": [
            "Bekanntmachungen",
            "Hafenordnungen",
            "Nord",
            "Nordwest",
            "Ordnung"
          ]
        },
        {
          "id": "recht-60",
          "number": 60,
          "subtopic": "",
          "question": "Wo und unter welcher Bedingung gelten im Geltungsbereich der SeeSchStrO die KVR?",
          "answer": "Die KVR gelten im gesamten Geltungsbereich der SeeSchStrO innerhalb und außerhalb der Fahrwasser, soweit die SeeSchStrO nicht ausdrücklich etwas anderes bestimmt (z. B. Vorfahrt, Grundsatz des Vorranges der spezielleren Rechtsvorschrift vor der allgemeineren).",
          "keywords": [
            "Fahrwasser",
            "Geltungsbereich",
            "Grundsatz",
            "Rechtsvorschrift",
            "Vorfahrt"
          ]
        },
        {
          "id": "recht-61",
          "number": 61,
          "subtopic": "",
          "question": "Wie haben Segelfahrzeuge in einem Fahrwasser der SeeSchStrO untereinander auszuweichen, wenn sie nicht deutlich der Richtung eines Fahrwassers folgen?",
          "answer": "Sie haben untereinander nach den Regeln der KVR auszuweichen, wenn sie dadurch vorfahrtberechtigte Fahrzeuge nicht gefährden oder behindern.",
          "keywords": [
            "Fahrzeuge",
            "Regeln"
          ]
        },
        {
          "id": "recht-62",
          "number": 62,
          "subtopic": "",
          "question": "Auf der Elbe hören Sie nachts vor sich von einem Fahrzeug, das zusätzlich zu seinen Fahrtlichtern ein rotes Rundumlicht führt, fortwährend das Schallsignal kurz-lang. Um welches Schallsignal handelt es sich, wann ist es zu geben und wie verhalten Sie sich?",
          "answer": "Es handelt sich um das Bleib-weg-Signal, das von einem Fahrzeug gegeben wird, bei dem bestimmte gefährliche Güter oder radioaktive Stoffe frei werden oder drohen frei zu werden oder es besteht Explosionsgefahr. Man hat sich mit seinem Fahrzeug möglichst weit von dem anderen Fahrzeug zu entfernen (sicherer Abstand) und darf keine elektrischen Schalter bedienen. Kein offenes Feuer.",
          "keywords": [
            "Abstand",
            "Bleib",
            "Explosionsgefahr",
            "Fahrzeug",
            "Feuer"
          ]
        },
        {
          "id": "recht-63",
          "number": 63,
          "subtopic": "",
          "question": "Wann ist von einem Fahrzeug auf einer Seeschifffahrtsstraße das \"allgemeine Gefahr- und Warnsignal\" zu geben und wie lautet es?",
          "answer": "Gefährdet ein Fahrzeug ein anderes Fahrzeug oder wird es durch dieses selbst gefährdet, hat es, soweit möglich, rechtzeitig das Schallsignal zu geben: ein langer Ton, vier kurze Töne; ein langer Ton, vier kurze Töne.",
          "keywords": [
            "Fahrzeug",
            "Gefährdet",
            "Schallsignal",
            "Töne"
          ]
        },
        {
          "id": "recht-64",
          "number": 64,
          "subtopic": "",
          "question": "Nennen Sie die speziellen Verhaltensregeln für Sportfahrzeuge im Nord-Ostsee-Kanal (NOK).",
          "answer": "1. Sportfahrzeuge dürfen in der Regel die Zufahrten und den NOK lediglich zur Durchfahrt und ohne Lotsen nur während der Tagfahrzeiten und nicht bei verminderter Sicht benutzen. 2. Sportfahrzeuge müssen ihre Kanalfahrt so einrichten, dass sie vor Ablauf der Tagfahrzeit eine für Sportfahrzeuge bestimmte Liegestelle erreichen können. 3. Bei plötzlich auftretender verminderter Sicht dürfen Sportfahrzeuge in den Weichengebieten hinter den Dalben oder an geeigneten Liegestellen festmachen.",
          "keywords": [
            "Ablauf",
            "Dalben",
            "Durchfahrt",
            "Kanalfahrt",
            "Liegestelle"
          ]
        },
        {
          "id": "recht-65",
          "number": 65,
          "subtopic": "",
          "question": "Welche speziellen Fahrregeln haben Sportfahrzeuge im Nord-Ostsee-Kanal (NOK) einzuhalten?",
          "answer": "1. Das Segeln ist auf dem NOK verboten. 2. Sportfahrzeuge mit Maschinenantrieb dürfen zusätzlich die Segel setzen. 3. Ein motorbetriebenes Sportfahrzeug darf nur ein Sportfahrzeug schleppen.",
          "keywords": [
            "Maschinenantrieb",
            "Segel",
            "Segeln",
            "Sportfahrzeug",
            "Sportfahrzeuge"
          ]
        },
        {
          "id": "recht-66",
          "number": 66,
          "subtopic": "",
          "question": "Während der Durchfahrt durch den Nord-Ostsee-Kanal (NOK) wird man auf einem Sportboot von Nebel überrascht. Was ist zu unternehmen?",
          "answer": "Schnellstmöglich in einem Weichengebiet hinter den Dalben oder an geeigneten Liegestellen festmachen.",
          "keywords": [
            "Dalben",
            "Liegestellen",
            "Schnellstmöglich",
            "Weichengebiet"
          ]
        },
        {
          "id": "recht-67",
          "number": 67,
          "subtopic": "",
          "question": "Sie sehen vor dem Einlaufen in den NOK in Brunsbüttel folgende Lichtsignale:",
          "answer": "1. ein unterbrochenes rotes Licht, 2. ein unterbrochenes weißes Licht über einem unterbrochenen roten Licht, 3. ein unterbrochenes weißes Licht. Geben Sie die Bedeutung dieser Signale an. 1. Einfahren verboten. 2. Freigabe wird vorbereitet. 3. Sportfahrzeuge können einfahren.",
          "keywords": [
            "Bedeutung",
            "Einfahren",
            "Freigabe",
            "Geben",
            "Licht"
          ]
        },
        {
          "id": "recht-68",
          "number": 68,
          "subtopic": "",
          "question": "Erläutern Sie den Begriff \"Vorfahrt beachten\".",
          "answer": "\"Vorfahrt beachten\" begründet eine Wartepflicht. Wer die Vorfahrt zu beachten hat, muss rechtzeitig durch sein Fahrverhalten erkennen lassen, dass er warten wird. Er darf nur weiterfahren, wenn er übersehen kann, dass die Schifffahrt im Fahrwasser nicht beeinträchtigt wird. Ggf. hat der Wartepflichtige seinen Kurs und/oder seine Geschwindigkeit zu ändern (gilt rechtlich nicht als Ausweichen!).",
          "keywords": [
            "Ausweichen",
            "Fahrverhalten",
            "Fahrwasser",
            "Geschwindigkeit",
            "Kurs"
          ]
        },
        {
          "id": "recht-69",
          "number": 69,
          "subtopic": "",
          "question": "Erläutern Sie den Begriff \"Vorfahrt haben\".",
          "answer": "\"Vorfahrt haben\" gilt nur für ein im Fahrwasser fahrendes oder dem Fahrwasserverlauf folgendes Fahrzeug. Das bedeutet, dass andere Fahrzeuge, die in das Fahrwasser einlaufen wollen, dort drehen oder an- und ablegen wollen, mit diesem Vorhaben warten müssen, bis das vorfahrtberechtigte Fahrzeug vorüber ist. \"Vorfahrt haben\" bedeutet aber nicht: Vorfahrt erzwingen! Ggf. muss ein vorfahrtberechtigtes Fahrzeug Maßnahmen zur Verhinderung einer drohenden Kollision ergreifen.",
          "keywords": [
            "Fahrwasser",
            "Fahrwasserverlauf",
            "Fahrzeug",
            "Fahrzeuge",
            "Kollision"
          ]
        },
        {
          "id": "recht-70",
          "number": 70,
          "subtopic": "",
          "question": "Wie hat sich ein in das Fahrwasser einlaufendes Fahrzeug gegenüber im Fahrwasser fahrenden Fahrzeugen zu verhalten?",
          "answer": "Es muss die Vorfahrt der Fahrzeuge im Fahrwasser beachten, d. h., es muss warten, bis das Fahrwasser frei ist. Es muss rechtzeitig durch sein Fahrverhalten erkennen lassen, dass es warten wird.",
          "keywords": [
            "Fahrverhalten",
            "Fahrwasser",
            "Fahrzeuge",
            "Vorfahrt"
          ]
        },
        {
          "id": "recht-71",
          "number": 71,
          "subtopic": "",
          "question": "Wie hat sich ein den Ankerplatz oder Liegeplatz verlassendes Fahrzeug gegenüber im Fahrwasser fahrenden Fahrzeugen zu verhalten?",
          "answer": "Es muss die Vorfahrt der Fahrzeuge im Fahrwasser beachten, d. h. es muss warten, bis das Fahrwasser frei ist. Es muss rechtzeitig durch sein Fahrverhalten erkennen lassen, dass es warten wird.",
          "keywords": [
            "Fahrverhalten",
            "Fahrwasser",
            "Fahrzeuge",
            "Vorfahrt"
          ]
        },
        {
          "id": "recht-72",
          "number": 72,
          "subtopic": "",
          "question": "Welche Fahrregeln muss ein Sportfahrzeug beachten, wenn es der Richtung des Fahrwassers folgt?",
          "answer": "Beim Fahren im Fahrwasser muss das Sportfahrzeug sich so nahe am äußeren Rand des Fahrwassers an seiner Steuerbordseite halten, wie dieses ohne Gefahr möglich ist.",
          "keywords": [
            "Fahren",
            "Fahrwasser",
            "Fahrwassers",
            "Gefahr",
            "Rand"
          ]
        },
        {
          "id": "recht-73",
          "number": 73,
          "subtopic": "",
          "question": "Was muss ein Sportfahrzeug in Bezug auf das Fahrwasser beachten, wenn es außerhalb des Fahrwassers fährt?",
          "answer": "Außerhalb des Fahrwassers ist so zu fahren, dass klar erkennbar ist, dass das Fahrwasser nicht benutzt wird.",
          "keywords": [
            "Außerhalb",
            "Fahrwasser",
            "Fahrwassers"
          ]
        },
        {
          "id": "recht-74",
          "number": 74,
          "subtopic": "",
          "question": "Wie müssen sich Segelfahrzeuge verhalten, die, dem Fahrwasserverlauf folgend, sich auf (nahezu) entgegengesetzten Kursen begegnen?",
          "answer": "Jedes Fahrzeug muss nach Steuerbord ausweichen.",
          "keywords": [
            "Fahrzeug",
            "Jedes",
            "Steuerbord"
          ]
        },
        {
          "id": "recht-75",
          "number": 75,
          "subtopic": "",
          "question": "Was bedeutet \"Queren eines Fahrwassers\" im Sinne der SeeSchStrO?",
          "answer": "Queren bedeutet deutliches Abweichen vom Fahrwasserverlauf, nach allgemeiner Verkehrsmeinung mehr als 10° (z. B. Kreuzen eines Segelfahrzeuges über die gesamte oder auch nur teilweise Fahrwasserbreite).",
          "keywords": [
            "Abweichen",
            "Fahrwasserbreite",
            "Fahrwasserverlauf",
            "Kreuzen",
            "Queren"
          ]
        },
        {
          "id": "recht-76",
          "number": 76,
          "subtopic": "",
          "question": "Wie müssen Sie die Geschwindigkeit Ihres Sportbootes einrichten, wenn Sie außerhalb eines Fahrwassers an Stellen mit erkennbarem Badebetrieb vorbeifahren?",
          "answer": "Höchstgeschwindigkeit 8 km/h im Abstand von weniger als 500 m vom Ufer.",
          "keywords": [
            "Abstand",
            "Höchstgeschwindigkeit",
            "Ufer"
          ]
        },
        {
          "id": "recht-77",
          "number": 77,
          "subtopic": "",
          "question": "Sie sehen auf der Elbe bei Nacht ein Fahrzeug mit der nachfolgenden Lichterführung. Um was für ein Fahrzeug handelt es sich?",
          "answer": "Was bedeuten die beiden roten und die beiden grünen Lichter senkrecht übereinander? Manövrierbehindertes Fahrzeug, Länge wahrscheinlich 50 m oder mehr, von vorn mit Fahrt durchs Wasser, das Unterwasserarbeiten ausführt (z. B. baggert). Passierseite an Steuerbord (zwei grüne Rundumlichter übereinander), Passierbehinderung an Backbord-Seite (zwei rote Rundumlichter übereinander).",
          "keywords": [
            "Backbord",
            "Fahrt",
            "Fahrzeug",
            "Lichter",
            "Länge"
          ]
        },
        {
          "id": "recht-78",
          "number": 78,
          "subtopic": "",
          "question": "Sie sehen auf der Elbe bei Tage ein Fahrzeug mit den nachfolgenden schwarzen Signalkörpern, dessen Bugwelle man klar erkennen kann. Um was für ein Fahrzeug handelt es sich?",
          "answer": "Was bedeuten die beiden schwarzen Bälle und die beiden schwarzen Rhomben senkrecht übereinander? Entgegenkommendes manövrierbehindertes Fahrzeug von vorn, mit Fahrt durchs Wasser, das Unterwasserarbeiten ausführt (z. B. baggert). Passierseite an Backbord des Baggers (zwei schwarze Rhomben übereinander), Passierbehinderung an Steuerbord-Seite des Baggers (zwei schwarze Bälle übereinander).",
          "keywords": [
            "Backbord",
            "Baggers",
            "Bälle",
            "Entgegenkommendes",
            "Fahrt"
          ]
        },
        {
          "id": "recht-79",
          "number": 79,
          "subtopic": "",
          "question": "Beim Passieren von Cuxhaven sichten Sie, elbabwärts segelnd, an Ihrer Steuerbord-Seite die Tonne 32a. Um was für eine Tonne handelt es sich, welche Bezeichnung hat die nächste Tonne an der gleichen Seite?",
          "answer": "Es handelt sich um eine Backbordfahrwassertonne; die nächste Tonne hat die Aufschrift 32.",
          "keywords": [
            "Aufschrift",
            "Backbordfahrwassertonne",
            "Tonne"
          ]
        },
        {
          "id": "recht-80",
          "number": 80,
          "subtopic": "",
          "question": "Welche besondere Lichterführung/Kennzeichnung ist vorgeschrieben, wenn ein Motorsportfahrzeug ein anderes Sportfahrzeug schleppt?",
          "answer": "Motorsportfahrzeuge, die andere Sportfahrzeuge schleppen, gelten nicht als schleppende Maschinenfahrzeuge im Sinne der KVR. Daher keine besondere Lichterführung/Kennzeichnung.",
          "keywords": [
            "Daher",
            "Kennzeichnung",
            "Lichterführung",
            "Maschinenfahrzeuge",
            "Motorsportfahrzeuge"
          ]
        },
        {
          "id": "recht-81",
          "number": 81,
          "subtopic": "",
          "question": "Welche besonderen Bestimmungen gelten auf dem Nord-Ostsee-Kanal (NOK) für Sportfahrzeuge beim Schleppen?",
          "answer": "1. Ein motorbetriebenes Sportfahrzeug darf nur ein Sportfahrzeug schleppen. 2. Das geschleppte Sportfahrzeug darf nur eine Höchstlänge von weniger als 15 m haben. 3. Die Mindestgeschwindigkeit beim Schleppen muss 9 km/h betragen.",
          "keywords": [
            "Höchstlänge",
            "Mindestgeschwindigkeit",
            "Schleppen",
            "Sportfahrzeug"
          ]
        },
        {
          "id": "recht-82",
          "number": 82,
          "subtopic": "",
          "question": "Während einer Revierfahrt erkennen Sie ein Signal an Land, jeweils schwarze Signalkörper:",
          "answer": "1. Was bedeutet dieses Signal? 2. Welches Signal wird stattdessen nachts gezeigt? 1. Außergewöhnliche Schifffahrtsbehinderung. 2. Nachts: Rundumlichter rot-rot-grün senkrecht übereinander.",
          "keywords": [
            "Außergewöhnliche",
            "Nachts",
            "Rundumlichter",
            "Schifffahrtsbehinderung",
            "Signal"
          ]
        },
        {
          "id": "recht-83",
          "number": 83,
          "subtopic": "",
          "question": "Wer darf laut SeeSchStrO ein Fahrzeug nicht führen oder als Mitglied der Crew eine andere Tätigkeit des Brücken- oder Decksdienstes nicht ausüben (allgemein ohne Zahlen zu beantworten)?",
          "answer": "Wer infolge körperlicher oder geistiger Mängel oder des Genusses alkoholischer Getränke oder anderer berauschender Mittel in der sicheren Führung eines Fahrzeugs oder in der sicheren Ausübung einer anderen Tätigkeit des Brücken- oder Decksdienstes behindert ist.",
          "keywords": [
            "Ausübung",
            "Brücken",
            "Decksdienstes",
            "Fahrzeugs",
            "Führung"
          ]
        },
        {
          "id": "recht-84",
          "number": 84,
          "subtopic": "",
          "question": "Welche Atem- bzw. Blutalkoholkonzentration darf laut SeeSchStrO nicht erreicht werden, damit kein Verbot für ein Führen eines Fahrzeugs oder als Mitglied der Crew für ein Ausüben des Brückendienstes besteht?",
          "answer": "0,25 mg/l oder mehr Alkohol in der Atemluft oder 0,5 Promille oder mehr Alkohol im Blut oder eine Alkoholmenge, die zu einer solchen Atem- oder Blutalkoholkonzentration führt.",
          "keywords": [
            "Alkohol",
            "Alkoholmenge",
            "Atem",
            "Atemluft",
            "Blut"
          ]
        },
        {
          "id": "recht-85",
          "number": 85,
          "subtopic": "",
          "question": "Was müssen Sie beim ersten Anlaufen eines ausländischen Hafens beachten?",
          "answer": "Die Einreise-, Gesundheits- und Zollformalitäten sind zu erledigen.",
          "keywords": [
            "Einreise",
            "Gesundheits",
            "Zollformalitäten"
          ]
        },
        {
          "id": "recht-86",
          "number": 86,
          "subtopic": "",
          "question": "Was ist ein Flaggenzertifikat?",
          "answer": "Für welche Fahrzeuge kann es ausgestellt werden? Vom BSH ausgestellter Ausweis, mit dem das Recht und die Pflicht zum Führen der Bundesflagge nachgewiesen wird. Für Fahrzeuge unter 15 m Lüa = \"nicht registerpflichtige Fahrzeuge\".",
          "keywords": [
            "Ausweis",
            "Bundesflagge",
            "Fahrzeuge",
            "Führen",
            "Pflicht"
          ]
        },
        {
          "id": "recht-87",
          "number": 87,
          "subtopic": "",
          "question": "Was ist das Schiffszertifikat, wer stellt es aus, ab welcher Schiffslänge ist es vorgeschrieben?",
          "answer": "Das Schiffszertifikat ist der Nachweis, dass ein Schiff im Seeschiffsregister eingetragen ist. Ausgestellt wird es vom Registergericht, Vorgeschrieben ist es ab 15 m Rumpflänge.",
          "keywords": [
            "Ausgestellt",
            "Nachweis",
            "Registergericht",
            "Rumpflänge",
            "Schiff"
          ]
        },
        {
          "id": "recht-88",
          "number": 88,
          "subtopic": "",
          "question": "Was versteht man unter dem Begriff \"Küstenmeer\"?",
          "answer": "Die seewärts der Küstenlinie bei mittlerem Hochwasser oder der Basislinie gelegenen Meeresgewässer bis zu einer Breite von 12 sm.",
          "keywords": [
            "Basislinie",
            "Breite",
            "Hochwasser",
            "Küstenlinie",
            "Meeresgewässer"
          ]
        },
        {
          "id": "recht-89",
          "number": 89,
          "subtopic": "",
          "question": "Was versteht man unter dem Begriff \"innere Gewässer\"?",
          "answer": "Als \"innere Gewässer\" bezeichnet man die Gewässer landwärts der Basislinien.",
          "keywords": [
            "Basislinien",
            "Gewässer"
          ]
        },
        {
          "id": "recht-90",
          "number": 90,
          "subtopic": "",
          "question": "Was versteht man unter dem Begriff \"Basislinie\" und wo finden Sie diese?",
          "answer": "Als Basislinie bezeichnet man die Grenze zwischen den inneren Gewässern (eines Staates) und dem Küstenmeer. Basislinien sind in Seekarten eingezeichnet.",
          "keywords": [
            "Basislinie",
            "Basislinien",
            "Gewässern",
            "Grenze",
            "Küstenmeer"
          ]
        },
        {
          "id": "recht-91",
          "number": 91,
          "subtopic": "",
          "question": "Welche Aufgaben hat die Bundesstelle für Seeunfalluntersuchung?",
          "answer": "Amtliche Untersuchung eines schaden- oder gefahrverursachenden Vorkommnisses (Seeunfall) im Zusammenhang mit dem Betrieb eines Schiffes (z. B. Kollision zwischen zwei Fahrzeugen) und Ermittlung der Umstände, durch die es zu dem Seeunfall gekommen ist. Herausgabe von Untersuchungsberichten und insbesondere Sicherheitsempfehlungen zur Verhütung von Seeunfällen.",
          "keywords": [
            "Amtliche",
            "Betrieb",
            "Ermittlung",
            "Fahrzeugen",
            "Herausgabe"
          ]
        },
        {
          "id": "recht-92",
          "number": 92,
          "subtopic": "",
          "question": "Wann liegt ein schaden- oder gefahrverursachendes Vorkommnis (Seeunfall) im Sinne des Seesicherheits-Untersuchungs-Gesetzes (SUG) vor?",
          "answer": "Nennen Sie mindestens 3 Merkmale. 1. Schiffsverlust, Aufgrundlaufen, Kollision eines Schiffes, 2. Tod oder Verschollenheit oder schwere Verletzung einer Person, 3. maritimer Umweltschaden oder sonstiger Sachschaden, 4. Gefahr für einen Menschen oder ein Schiff, 5. Gefahr eines schweren Schadens an einem Schiff, einem meerestechnischen Bauwerk oder an der Meeresumwelt.",
          "keywords": [
            "Aufgrundlaufen",
            "Bauwerk",
            "Gefahr",
            "Kollision",
            "Meeresumwelt"
          ]
        },
        {
          "id": "recht-93",
          "number": 93,
          "subtopic": "",
          "question": "Was müssen Sie nach einem Seeunfall veranlassen?",
          "answer": "Wie kann es umgesetzt werden? Den Seeunfall unverzüglich der Bundesstelle für Seeunfalluntersuchung melden. Das kann in einem deutschen Einlaufhafen auch über die Wasserschutzpolizei bzw. im Ausland über die zuständigen Hafenbehörden veranlasst werden.",
          "keywords": [
            "Ausland",
            "Bundesstelle",
            "Einlaufhafen",
            "Hafenbehörden",
            "Seeunfall"
          ]
        },
        {
          "id": "recht-94",
          "number": 94,
          "subtopic": "",
          "question": "Welche Angaben müssen der Bundesstelle für Seeunfalluntersuchung gemeldet werden?",
          "answer": "Nennen Sie mindestens 5 dieser Angaben. Es sind folgende Angaben zu melden: Name und derzeitiger Aufenthalt des Meldenden, Ort (geographische Position) und Zeit des Unfalles, Name, Rufzeichen und Flagge des Schiffes sowie Rufnummer des zu diesem Schiff gehörenden mobilen Seefunkdienstes (MMSI), Typ, Verwendungszweck, Name des Betreibers des Schiffes, Name des verantwortlichen Schiffsführers, Herkunfts- und Zielhafen des Schiffes, Anzahl der Besatzungsmitglieder und weiterer Personen an Bord, Umfang des Personen- und Sachschadens, Darstellung des Verlaufs des Vorkommnisses, Angaben über andere Schiffe, die am Unfall beteiligt sind, Wetterbedingungen, Darstellung der Gefahr einer Meeresverschmutzung.",
          "keywords": [
            "Angaben",
            "Anzahl",
            "Aufenthalt",
            "Besatzungsmitglieder",
            "Betreibers"
          ]
        },
        {
          "id": "recht-95",
          "number": 95,
          "subtopic": "",
          "question": "In welcher Vorschrift ist geregelt, welche Angaben der Bundesstelle für Seeunfalluntersuchung bei einem schaden- oder gefahrverursachenden Vorkommnis (Seeunfall) gemeldet werden müssen?",
          "answer": "Wer ist verantwortlich für die Meldung? Geregelt in der \"Verordnung über die Sicherung der Seefahrt\". Verantwortlich für die Meldung sind der Schiffsführer oder bei dessen Verhinderung ein anderes Besatzungsmitglied bzw. ggf. auch der Betreiber des Schiffes, falls keine der vorgenannten Personen dazu in der Lage ist.",
          "keywords": [
            "Besatzungsmitglied",
            "Betreiber",
            "Geregelt",
            "Lage",
            "Meldung"
          ]
        },
        {
          "id": "recht-96",
          "number": 96,
          "subtopic": "",
          "question": "Was sind Seeämter und was sind ihre Aufgaben?",
          "answer": "Seeämter sind bei den Wasser- und Schifffahrtsdirektionen Nord und Nordwest gebildete Untersuchungsausschüsse zur Untersuchung der Frage, ob gegenüber einem Verfahrensbeteiligten ein Fahrverbot ausgesprochen oder ein Befähigungszeugnis bzw. ein amtlicher Führerschein der Sportschifffahrt entzogen werden muss.",
          "keywords": [
            "Befähigungszeugnis",
            "Fahrverbot",
            "Frage",
            "Führerschein",
            "Nord"
          ]
        },
        {
          "id": "recht-97",
          "number": 97,
          "subtopic": "",
          "question": "Welche behördlichen Veröffentlichungen für Wassersportler geben Ihnen rechtliche Informationen und Hinweise über das Verhalten auf Seeschifffahrtsstraßen?",
          "answer": "\"Sicherheit auf dem Wasser, Leitfaden für Wassersportler\". \"Sicherheit im See- und Küstenbereich, Sorgfaltsregeln für Wassersportler\".",
          "keywords": [
            "Küstenbereich",
            "Leitfaden",
            "Sicherheit",
            "Sorgfaltsregeln",
            "Wasser"
          ]
        },
        {
          "id": "recht-98",
          "number": 98,
          "subtopic": "",
          "question": "Sie sehen von Ihrem Sportfahrzeug aus in der Nordsee nördlich von Helgoland eine noch unbekannte Gefahr, z. B. einen teibenden Container. Was haben Sie zu unternehmen?",
          "answer": "Man muss dies auf dem schnellsten Weg direkt oder über eine Verkehrszentrale bzw. Küstenfunkstelle dem Maritimen Lagezentrum (MLZ) in Cuxhaven als Meldestelle für Unfälle auf See mitteilen.",
          "keywords": [
            "Cuxhaven",
            "Küstenfunkstelle",
            "Lagezentrum",
            "Maritimen",
            "Meldestelle"
          ]
        },
        {
          "id": "recht-99",
          "number": 99,
          "subtopic": "",
          "question": "Wann und wo wird eine Flagge des Gastlandes gehisst?",
          "answer": "Beim Einlaufen in die Küstengewässer des Gastlandes unter der Steuerbordsaling.",
          "keywords": [
            "Einlaufen",
            "Gastlandes",
            "Küstengewässer",
            "Steuerbordsaling"
          ]
        },
        {
          "id": "recht-100",
          "number": 100,
          "subtopic": "",
          "question": "Wann und wo wird die Bundesflagge geführt?",
          "answer": "Auf in Betrieb befindlichen Yachten während der Flaggzeit in den Küstengewässern, auf See und im Hafen am Flaggenstock am Heck, auf segelnden mehrmastigen Yachten auch im Topp des hintersten Mastes (nicht am Achterstag).",
          "keywords": [
            "Achterstag",
            "Betrieb",
            "Flaggenstock",
            "Flaggzeit",
            "Hafen"
          ]
        },
        {
          "id": "recht-101",
          "number": 101,
          "subtopic": "",
          "question": "Welche Befahrensregelungen gelten für die Schutzzonen I in den Nationalparks im Deutschen Wattenmeer außerhalb der speziellen Schutzgebiete?",
          "answer": "Das Verlassen der Fahrwasser zwischen 3 h nach Hochwasser und 3 h vor dem folgenden Hochwasser ist untersagt. In der übrigen Zeit beträgt für Sportfahrzeuge die Höchstgeschwindigkeit außerhalb des Fahrwassers 8 kn und generell im Fahrwasser 12 kn.",
          "keywords": [
            "Fahrwasser",
            "Fahrwassers",
            "Hochwasser",
            "Höchstgeschwindigkeit",
            "Sportfahrzeuge"
          ]
        },
        {
          "id": "recht-102",
          "number": 102,
          "subtopic": "",
          "question": "Wo sind die Grenzen der Schutzzonen I und der speziellen Schutzgebiete in den Nationalparks aufgeführt?",
          "answer": "In den Seekarten.",
          "keywords": [
            "Seekarten"
          ]
        },
        {
          "id": "recht-103",
          "number": 103,
          "subtopic": "",
          "question": "Welchen Zweck soll das MARPOL-Übereinkommen erfüllen?",
          "answer": "Das MARPOL-Übereinkommen soll die Verschmutzung der Meere verhindern.",
          "keywords": [
            "Meere",
            "Verschmutzung",
            "Übereinkommen"
          ]
        },
        {
          "id": "recht-104",
          "number": 104,
          "subtopic": "",
          "question": "Was sind Sondergebiete im Sinne des MARPOL-Übereinkommens in Europa?",
          "answer": "Ostsee, Nordsee und Mittelmeer.",
          "keywords": [
            "Mittelmeer",
            "Nordsee",
            "Ostsee"
          ]
        },
        {
          "id": "recht-105",
          "number": 105,
          "subtopic": "",
          "question": "Was ist nach dem MARPOL-Übereinkommen für die Sportschifffahrt in Sondergebieten grundsätzlich verboten?",
          "answer": "Das Einleiten von Öl, Schiffsabwässern, Schiffsmüll und anderen Schadstoffen.",
          "keywords": [
            "Einleiten",
            "Schadstoffen",
            "Schiffsabwässern",
            "Schiffsmüll"
          ]
        },
        {
          "id": "recht-106",
          "number": 106,
          "subtopic": "",
          "question": "Gilt das MARPOL-Übereinkommen grundsätzlich auch für Sportfahrzeuge?",
          "answer": "Das MARPOL-Übereinkommen gilt grundsätzlich für alle Schiffe, somit auch für Sportfahrzeuge.",
          "keywords": [
            "Schiffe",
            "Sportfahrzeuge",
            "Übereinkommen"
          ]
        },
        {
          "id": "recht-107",
          "number": 107,
          "subtopic": "",
          "question": "Woraus können Sie Informationen über Entsorgungsmöglichkeiten in deutschen Sportboothäfen entnehmen?",
          "answer": "Aus der Broschüre \"Entsorgungsmöglichkeiten für Öl, Schiffsmüll und Schiffsabwässer - eine Übersicht für Sport- und Kleinschifffahrt\" des BSH.",
          "keywords": [
            "Broschüre",
            "Entsorgungsmöglichkeiten",
            "Kleinschifffahrt",
            "Schiffsabwässer",
            "Schiffsmüll"
          ]
        },
        {
          "id": "recht-108",
          "number": 108,
          "subtopic": "",
          "question": "Wie ist auf Sportfahrzeugen mit ölhaltigem Bilgenwasser zu verfahren, wenn die Bedingungen, unter denen nach MARPOL das Lenzen zulässig ist, nicht eingehalten werden können?",
          "answer": "Es muss im Hafen entsorgt werden.",
          "keywords": [
            "Hafen"
          ]
        },
        {
          "id": "recht-109",
          "number": 109,
          "subtopic": "",
          "question": "Was ist hinsichtlich der Entsorgung von Müll in Nord- und Ostsee und im Mittelmeer zu beachten?",
          "answer": "(Begründung!) Da Nord-, Ostsee und Mittelmeer Sondergebiete nach MARPOL sind, darf dort kein Müll in die See entsorgt werden.",
          "keywords": [
            "Begründung",
            "Mittelmeer",
            "Müll",
            "Nord",
            "Ostsee"
          ]
        },
        {
          "id": "recht-110",
          "number": 110,
          "subtopic": "",
          "question": "Welche Müllanteile dürfen in Sondergebieten nicht auf See entsorgt werden?",
          "answer": "Synthetische Seile, Netze, Segel, Kunststofftüten u. Ä., Papiererzeugnisse, Lumpen, Glas, Metall, Steingut, Schalungs- oder Verpackungsmaterial. Stand: 01. Juli 2006 Wetterkunde",
          "keywords": [
            "Glas",
            "Juli",
            "Kunststofftüten",
            "Lumpen",
            "Metall"
          ]
        }
      ]
    },
    {
      "id": "wetterkunde",
      "name": "Wetterkunde",
      "subtopics": [
        "Allgemeine Begriffe aus der Wetterkunde",
        "Wolken",
        "Druckgebilde",
        "Land- und Seewind",
        "Anwenden von Seewetterberichten",
        "Wichtige Wetterregeln",
        "Nebel",
        "Seegang",
        "Meteorologische Messinstrumente"
      ],
      "questions": [
        {
          "id": "wetter-1",
          "number": 1,
          "subtopic": "",
          "question": "Was ist Wind und wie entsteht er?",
          "answer": "Wind ist bewegte Luft. Die Bewegung entsteht durch die Druckunterschiede zwischen Hoch- und Tiefdruckgebieten.",
          "keywords": [
            "Bewegung",
            "Druckunterschiede",
            "Hoch",
            "Luft",
            "Tiefdruckgebieten"
          ]
        },
        {
          "id": "wetter-2",
          "number": 2,
          "subtopic": "",
          "question": "Was ist der Taupunkt?",
          "answer": "Der Taupunkt ist die Temperatur, auf die Luft abgekühlt werden muss, damit sie mit Feuchtigkeit gesättigt ist. Es setzt Kondensation (Taubildung) ein.",
          "keywords": [
            "Feuchtigkeit",
            "Kondensation",
            "Luft",
            "Taubildung",
            "Taupunkt"
          ]
        },
        {
          "id": "wetter-3",
          "number": 3,
          "subtopic": "",
          "question": "In welcher Größe wird in der Schifffahrt die Luftfeuchtigkeit allgemein angegeben?",
          "answer": "Relative Feuchtigkeit in Prozent.",
          "keywords": [
            "Feuchtigkeit",
            "Prozent",
            "Relative"
          ]
        },
        {
          "id": "wetter-4",
          "number": 4,
          "subtopic": "",
          "question": "Nennen Sie mindestens 6 Parameter, aus denen sich eine Wetterbeobachtung an Bord zusammensetzt.",
          "answer": "Windrichtung, Windstärke, Luftdruck, aktuelles Wetter, Bedeckungsgrad, Wolken, Seegang, Strom, Temperatur und ggf. Luftfeuchte.",
          "keywords": [
            "Bedeckungsgrad",
            "Luftdruck",
            "Luftfeuchte",
            "Seegang",
            "Strom"
          ]
        },
        {
          "id": "wetter-5",
          "number": 5,
          "subtopic": "",
          "question": "1. In welcher Maßeinheit wird die Windstärke angegeben?",
          "answer": "2. In welchen Maßeinheiten wird die Windgeschwindigkeit angegeben? 1. Nach der Beaufortskala (Bft). 2. In kn, m/s und km/h.",
          "keywords": [
            "Beaufortskala",
            "Maßeinheiten",
            "Windgeschwindigkeit"
          ]
        },
        {
          "id": "wetter-6",
          "number": 6,
          "subtopic": "",
          "question": "1. Wie heißen die Linien gleichen Luftdrucks?",
          "answer": "2. In welcher Maßeinheit wird der Luftdruck angegeben? 1. Isobaren. 2. Hektopascal (hPa) oder vereinzelt auch noch Millibar (mb, teilweise auch mbar).",
          "keywords": [
            "Hektopascal",
            "Isobaren",
            "Luftdruck",
            "Maßeinheit",
            "Millibar"
          ]
        },
        {
          "id": "wetter-7",
          "number": 7,
          "subtopic": "",
          "question": "Welche Gefahren kann ein Gewitter mit sich bringen?",
          "answer": "1. Böen bis Orkanstärke, 2. plötzliche Winddrehungen, 3. Regen- oder Hagelschauer mit zum Teil starker Sichtminderung, 4. Blitzschlag.",
          "keywords": [
            "Blitzschlag",
            "Böen",
            "Hagelschauer",
            "Orkanstärke",
            "Regen"
          ]
        },
        {
          "id": "wetter-8",
          "number": 8,
          "subtopic": "",
          "question": "Wann entstehen besonders starke Gewitter?",
          "answer": "Besonders zum Ende einer hochsommerlichen Schönwetterperiode im Zusammenhang mit Kaltfronten.",
          "keywords": [
            "Besonders",
            "Ende",
            "Kaltfronten",
            "Schönwetterperiode",
            "Zusammenhang"
          ]
        },
        {
          "id": "wetter-9",
          "number": 9,
          "subtopic": "",
          "question": "Welche Skala wird verwendet für die Angabe der Windrichtung in Seewetterberichten bei 1. den Vorhersagen und Aussichten, 2. den Stationsmeldungen?",
          "answer": "1. Die 8-teilige mit Auflösung in 45°-Stufen. 2. Die 16-teilige mit Auflösung in 22,5°-Stufen.",
          "keywords": [
            "Auflösung",
            "Stufen"
          ]
        },
        {
          "id": "wetter-10",
          "number": 10,
          "subtopic": "",
          "question": "Ab welcher Windstärke werden Orkanwarnungen ausgegeben?",
          "answer": "Ab Windstärke 10 Bft, erfahrungsgemäß mit Böen über Bft 12.",
          "keywords": [
            "Böen",
            "Windstärke"
          ]
        },
        {
          "id": "wetter-11",
          "number": 11,
          "subtopic": "",
          "question": "1. Welche Skala wird für die Schätzung der Windstärke verwendet?",
          "answer": "2. Was verstehen Sie unter mäßigem Wind, was unter Starkwind? 1. Die 12-teilige Beaufortskala. 2. Mäßiger Wind bedeutet Stärke 4 der Beaufortskala, Starkwind 6 und 7 Beaufort.",
          "keywords": [
            "Beaufort",
            "Beaufortskala",
            "Mäßiger",
            "Starkwind",
            "Stärke"
          ]
        },
        {
          "id": "wetter-12",
          "number": 12,
          "subtopic": "",
          "question": "Welche amtlichen Veröffentlichungen enthalten Sendezeiten und Frequenzen für Seewetterberichte 1. für Europa, 2. Europa und weltweit?",
          "answer": "1. Das \"Handbuch Nautischer Funkdienst\" und der \"Jachtfunkdienst\". 2. Die \"Admiralty List of Radio Signals\".",
          "keywords": [
            "Admiralty",
            "Funkdienst",
            "Handbuch",
            "Jachtfunkdienst",
            "List"
          ]
        },
        {
          "id": "wetter-13",
          "number": 13,
          "subtopic": "",
          "question": "Nennen Sie 6 Möglichkeiten, um Wetterinformationen an Bord zu erhalten.",
          "answer": "Hörfunksender (UKW, KW, MW, LW), Küstenfunkstellen, Verkehrszentralen, NAVTEX, SafetyNet (Satcom), Online-Dienste (z. B. SEEWIS-Online des Deutschen Wetterdienstes, T-Online), RTTY (Funkfernschreiben), Faskimile (Wetterfax), Faxpolling (z. B. SEEWIS-Fax des Deutschen Wetterdienstes), Telefonabruf, Törnberatung.",
          "keywords": [
            "Deutschen",
            "Dienste",
            "Faskimile",
            "Faxpolling",
            "Funkfernschreiben"
          ]
        },
        {
          "id": "wetter-14",
          "number": 14,
          "subtopic": "",
          "question": "Welche Bedeutung für die Wetterentwicklung hat ein Halo um die Sonne und ein Hof um den Mond?",
          "answer": "Wolkenaufzug, meist Cirrostratus. Ggf. Niederschlag und Wetterverschlechterung.",
          "keywords": [
            "Cirrostratus",
            "Niederschlag",
            "Wetterverschlechterung",
            "Wolkenaufzug"
          ]
        },
        {
          "id": "wetter-15",
          "number": 15,
          "subtopic": "",
          "question": "Bei welchen Wolkenformen müssen Sie mit erhöhter Böigkeit rechnen?",
          "answer": "Bei Haufenwolken, besonders beim Cumulonimbus (Schauer- und Gewitterwolke).",
          "keywords": [
            "Cumulonimbus",
            "Gewitterwolke",
            "Haufenwolken",
            "Schauer"
          ]
        },
        {
          "id": "wetter-16",
          "number": 16,
          "subtopic": "",
          "question": "1. Welche Formen von Wolken gibt es?",
          "answer": "2. Nennen Sie 6 der 10 Haupttypen! 1. Es gibt Haufenwolken und Schichtwolken. 2. Cirrus, Cirrostratus, Cirrocumulus, Altostratus, Altocumulus, Nimbostratus, Stratocumulus, Stratus, Cumulus, Cumulonimbus.",
          "keywords": [
            "Altocumulus",
            "Altostratus",
            "Cirrocumulus",
            "Cirrostratus",
            "Cirrus"
          ]
        },
        {
          "id": "wetter-17",
          "number": 17,
          "subtopic": "",
          "question": "1. Welche Höhen unterscheidet man bei Wolken?",
          "answer": "2. Welche Höhen haben sie etwa in den gemäßigten Breiten? 1. Tiefe, mittelhohe und hohe Wolken. 2. Tiefe Wolken zwischen 0 und 2 km, mittelhohe Wolken zwischen 2 und 7 km und hohe Wolken zwischen 7 und 13 km.",
          "keywords": [
            "Breiten",
            "Höhen",
            "Tiefe",
            "Welche",
            "Wolken"
          ]
        },
        {
          "id": "wetter-18",
          "number": 18,
          "subtopic": "",
          "question": "Woraus bestehen hohe Wolken?",
          "answer": "Aus kleinen Eiskristallen.",
          "keywords": [
            "Eiskristallen"
          ]
        },
        {
          "id": "wetter-19",
          "number": 19,
          "subtopic": "",
          "question": "Woran erkennt man bei Wolkenbildung eine kräftige Gewitterentwicklung?",
          "answer": "Am Cumulonimbus, wenn er in großer Höhe einen ambossförmigen Schirm hat.",
          "keywords": [
            "Cumulonimbus",
            "Höhe",
            "Schirm"
          ]
        },
        {
          "id": "wetter-20",
          "number": 20,
          "subtopic": "",
          "question": "Welche Wolken kündigen oft schon vormittags kräftige Wärmegewitter an?",
          "answer": "Altocumulus castellanus (mittelhohe türmchenartige Haufenwolken).",
          "keywords": [
            "Altocumulus",
            "Haufenwolken"
          ]
        },
        {
          "id": "wetter-21",
          "number": 21,
          "subtopic": "",
          "question": "Wie verhält sich der Wind in Bodennähe auf der Nordhalbkugel zwischen Hoch- und Tiefdruckgebieten?",
          "answer": "Er weht rechtsherum aus dem Hochdruckzentrum heraus und linksherum in den Tiefdruckkern hinein.",
          "keywords": [
            "Hochdruckzentrum",
            "Tiefdruckkern"
          ]
        },
        {
          "id": "wetter-22",
          "number": 22,
          "subtopic": "",
          "question": "1. Was ist eine Front?",
          "answer": "2. Welche Fronten unterscheidet man im Allgemeinen? 1. Front ist die vordere Grenze einer Luftmasse in Bewegungsrichtung. 2. Warm-, Kalt- und Okklusionsfronten.",
          "keywords": [
            "Allgemeinen",
            "Bewegungsrichtung",
            "Front",
            "Fronten",
            "Grenze"
          ]
        },
        {
          "id": "wetter-23",
          "number": 23,
          "subtopic": "",
          "question": "Wie verhält sich typischerweise der Luftdruck 1. vor, 2. während und 3. nach dem Durchzuug einer Kaltfront?",
          "answer": "1. Der Luftdruck ist gleichbleibend oder fälllt nur wenig. 2. Während des Durchgangs der Front erreicht der Luftdruck seinen tiefsten Wert. 3. Der Luftdruck steigt wieder deutlich an.",
          "keywords": [
            "Durchgangs",
            "Front",
            "Luftdruck",
            "Wert",
            "Während"
          ]
        },
        {
          "id": "wetter-24",
          "number": 24,
          "subtopic": "",
          "question": "Was lässt sich aus der Darstellung der Isobaren in einer Wetterkarte erkennen?",
          "answer": "Windrichtung und Druckgefälle; je enger sie liegen, desto größer ist das Druckgefälle und desto stärker ist der Wind.",
          "keywords": [
            "Druckgefälle",
            "Wind",
            "Windrichtung"
          ]
        },
        {
          "id": "wetter-25",
          "number": 25,
          "subtopic": "",
          "question": "Warum weht der Wind nicht parallel zu den Isobaren? (Begründung)",
          "answer": "Durch die Bodenreibung ist der Wind rückgedreht (gegen den Uhrzeigersinn).",
          "keywords": [
            "Bodenreibung",
            "Uhrzeigersinn",
            "Wind"
          ]
        },
        {
          "id": "wetter-26",
          "number": 26,
          "subtopic": "",
          "question": "1. Wie weht der Wind über See in Bodennähe um ein Tiefdruckgebiet?",
          "answer": "2. Mit wie viel Grad Änderung in der Windrichtung müssen Sie etwa rechnen? 1. Der Wind weht nicht parallel zu den Isobaren, er ist rückgedreht und weht in das Tief hinein. 2. Ein bis zwei Strich bzw. ca. 10° bis 20°.",
          "keywords": [
            "Grad",
            "Isobaren",
            "Strich",
            "Tief",
            "Wind"
          ]
        },
        {
          "id": "wetter-27",
          "number": 27,
          "subtopic": "",
          "question": "1. Wie weht der Wind über See in Bodennähe um ein Hochdruckgebiet?",
          "answer": "2. Mit wie viel Grad Änderung in der Windrichtung müssen Sie etwa rechnen? 1. Der Wind weht nicht parallel zu den Isobaren, er ist rückgedreht und weht aus dem Hoch hinaus. 2. Ein bis zwei Strich bzw. 10° bis 20°.",
          "keywords": [
            "Grad",
            "Hoch",
            "Isobaren",
            "Strich",
            "Wind"
          ]
        },
        {
          "id": "wetter-28",
          "number": 28,
          "subtopic": "",
          "question": "Welche Verlagerungsgeschwindigkeiten haben Tiefdruckgebiete:",
          "answer": "1. schnelle, 2. mittlere, 3. langsame? 1. Schnelle: 30 bis 50 kn. 2. Mittlere: 15 bis 30 kn. 3. Langsame: bis 15 kn.",
          "keywords": [
            "Langsame",
            "Mittlere",
            "Schnelle"
          ]
        },
        {
          "id": "wetter-29",
          "number": 29,
          "subtopic": "",
          "question": "Wie entstehen Tiefdruckgebiete?",
          "answer": "Durch das Aufeinandertreffen von kalten Luftmassen aus hohen Breiten und subtropischen warmen Luftmassen.",
          "keywords": [
            "Aufeinandertreffen",
            "Breiten",
            "Luftmassen"
          ]
        },
        {
          "id": "wetter-30",
          "number": 30,
          "subtopic": "",
          "question": "Welche Windverhältnisse herrschen in der Nähe des Zentrums eines Hochdruckgebiets?",
          "answer": "Meist schwache umlaufende Winde.",
          "keywords": [
            "Meist",
            "Winde"
          ]
        },
        {
          "id": "wetter-31",
          "number": 31,
          "subtopic": "",
          "question": "In welchem Abstand werden Isobaren international dargestellt oder gezeichnet?",
          "answer": "Im Abstand von 5 hPa oder im Abstand von 5 mbar.",
          "keywords": [
            "Abstand"
          ]
        },
        {
          "id": "wetter-32",
          "number": 32,
          "subtopic": "",
          "question": "Welche Sicht- und Wetterverhältnisse erwarten Sie typischerweise 1. vor oder nahe der Warmfront, 2. im Warmsektor, 3. hinter der Kaltfront?",
          "answer": "1. Sichtverschlechterung durch Niederschlag, bedeckt, länger andauernder Regen. 2. Diesig oder mäßige Sicht, Wolkenauflockerung, zeitweise Regen 3. Sichtbesserung, meist gute Sicht. Schauer mit zum Teil kräftigen Böen.",
          "keywords": [
            "Böen",
            "Diesig",
            "Niederschlag",
            "Regen",
            "Schauer"
          ]
        },
        {
          "id": "wetter-33",
          "number": 33,
          "subtopic": "",
          "question": "Welche Windrichtungen erwarten Sie an den Punkten 1, 2, 3, 4, 5 eines Tiefdruckgebiets auf der Nordhalbkugel?",
          "answer": "1. Nordost. 2. Süd. 3. Südwest. 4. Nordwest. 5. Umlaufender Wind.",
          "keywords": [
            "Nordost",
            "Nordwest",
            "Südwest",
            "Umlaufender",
            "Wind"
          ]
        },
        {
          "id": "wetter-34",
          "number": 34,
          "subtopic": "",
          "question": "Um welche Arten von Fronten handelt es sich in der Abbildung, die mit 1, 2 und 3 bezeichnet sind?",
          "answer": "1. Okklusionsfront (Tiefausläufer). 2. Warmfront. 3. Kaltfront.",
          "keywords": [
            "Kaltfront",
            "Okklusionsfront",
            "Tiefausläufer",
            "Warmfront"
          ]
        },
        {
          "id": "wetter-35",
          "number": 35,
          "subtopic": "",
          "question": "1. Was sind Luftmassengrenzen?",
          "answer": "2. Welche Luftmassengrenzen kennen Sie? Nennen Sie mindestens 2 Beispiele. 1. Luftmassengrenzen sind Fronten. Sie trennen Luftmassen mit unterschiedlicher Temperatur und Luftfeuchtigkeit. 2. Kaltfront, Warmfront, Okklusion.",
          "keywords": [
            "Beispiele",
            "Fronten",
            "Kaltfront",
            "Luftfeuchtigkeit",
            "Luftmassen"
          ]
        },
        {
          "id": "wetter-36",
          "number": 36,
          "subtopic": "",
          "question": "Mit welchen lokalen Windsystemen müssen Sie insbesondere im Mittelmeer rechnen?",
          "answer": "Mit der Land-/Seewind-Zirkulation.",
          "keywords": [
            "Land",
            "Seewind",
            "Zirkulation"
          ]
        },
        {
          "id": "wetter-37",
          "number": 37,
          "subtopic": "",
          "question": "Nennen Sie mindestens 3 regionale Windsysteme im Mittelmeer, die beim küstennahen Segeln im",
          "answer": "Mittelmeer besonders beachtet werden müssen. Mistral, Scirocco, Bora und Etesien/Meltemi.",
          "keywords": [
            "Bora",
            "Etesien",
            "Meltemi",
            "Mistral",
            "Mittelmeer"
          ]
        },
        {
          "id": "wetter-38",
          "number": 38,
          "subtopic": "",
          "question": "Mit welchem regionalen Windsystem muss in der Adria gerechnet werden?",
          "answer": "Mit Bora.",
          "keywords": [
            "Bora"
          ]
        },
        {
          "id": "wetter-39",
          "number": 39,
          "subtopic": "",
          "question": "Mit welchem regionalen Windsystem muss in der Ägäis gerechnet werden?",
          "answer": "Mit den Etesien/dem Meltemi.",
          "keywords": [
            "Etesien",
            "Meltemi"
          ]
        },
        {
          "id": "wetter-40",
          "number": 40,
          "subtopic": "",
          "question": "Wo bilden sich Tröge um ein Tiefdruckgebiet?",
          "answer": "Auf der Rückseite von Tiefdruckgebieten in hochreichender Kaltluft. Ein Trog folgt typischerweise einer Kaltfront.",
          "keywords": [
            "Kaltfront",
            "Kaltluft",
            "Rückseite",
            "Tiefdruckgebieten",
            "Trog"
          ]
        },
        {
          "id": "wetter-41",
          "number": 41,
          "subtopic": "",
          "question": "Welche Front wird auch als \"Ausläufer\" bezeichnet?",
          "answer": "Die Okklusion.",
          "keywords": [
            "Okklusion"
          ]
        },
        {
          "id": "wetter-42",
          "number": 42,
          "subtopic": "",
          "question": "Wodurch und wie entsteht am Tage Seewind?",
          "answer": "Das Land erwärmt sich bei Sonneneinstrahlung tagsüber stärker als das Wasser. Über Land steigt die erwärmte Luft auf. Das dabei entstehende Bodentief wird durch Seewind (Wind von See) aufgefüllt.",
          "keywords": [
            "Bodentief",
            "Land",
            "Luft",
            "Seewind",
            "Sonneneinstrahlung"
          ]
        },
        {
          "id": "wetter-43",
          "number": 43,
          "subtopic": "",
          "question": "Welche Wolkenform zeigt sich am späten Vormittag über Land am Himmel und kündigt Seewind an?",
          "answer": "Haufenwolke (Cumulus).",
          "keywords": [
            "Cumulus",
            "Haufenwolke"
          ]
        },
        {
          "id": "wetter-44",
          "number": 44,
          "subtopic": "",
          "question": "Welche Windgeschwindigkeiten in Knoten oder Beaufort erreicht der Seewind etwa 1. im Mittelmeer, 2. in Nord- und Ostsee?",
          "answer": "1. Bis zu 25 kn oder Bft 6. 2. Bis 15 kn, in Einzelfällen bis 20 kn oder Bft 4/5, in Einzelfällen Bft 5/6.",
          "keywords": [
            "Einzelfällen"
          ]
        },
        {
          "id": "wetter-45",
          "number": 45,
          "subtopic": "",
          "question": "Zu welcher Tageszeit müssen Sie mit Seewind rechnen?",
          "answer": "Von Mittag bis zum frühen Abend.",
          "keywords": [
            "Abend",
            "Mittag"
          ]
        },
        {
          "id": "wetter-46",
          "number": 46,
          "subtopic": "",
          "question": "Welche Windänderung kann der einsetzende Seewind bewirken?",
          "answer": "Er verändert den vorher wehenden Wind zum Teil erheblich in Richtung und Stärke.",
          "keywords": [
            "Richtung",
            "Stärke",
            "Teil",
            "Wind"
          ]
        },
        {
          "id": "wetter-47",
          "number": 47,
          "subtopic": "",
          "question": "Wodurch und wie entsteht nachts Landwind?",
          "answer": "Das Land kühlt sich bei geringer Bewölkung stark ab. Das Wasser ändert seine Temperatur an der Oberfläche dagegen nur geringfügig. Über dem Wasser steigt daher erwärmte Luft auf. Das dabei entstehende Bodentief wird durch Landwind (Wind von Land) aufgefüllt.",
          "keywords": [
            "Bewölkung",
            "Bodentief",
            "Land",
            "Landwind",
            "Luft"
          ]
        },
        {
          "id": "wetter-48",
          "number": 48,
          "subtopic": "",
          "question": "Welche Windgeschwindigkeiten erreicht nachts der Landwind?",
          "answer": "Er weht allgemein schwächer als der Seewind, etwa 1 bis 10 kn oder Bft 1-3.",
          "keywords": [
            "Seewind"
          ]
        },
        {
          "id": "wetter-49",
          "number": 49,
          "subtopic": "",
          "question": "Wann müssen Sie im Laufe eines Tages mit Landwind rechnen?",
          "answer": "Von Mitternacht bis zum frühen Morgen.",
          "keywords": [
            "Mitternacht",
            "Morgen"
          ]
        },
        {
          "id": "wetter-50",
          "number": 50,
          "subtopic": "",
          "question": "Im Internet finden Sie auf einer \"Wetterseite\" eine Vorhersagekarte mit Windpfeilen. In welcher Höhe über dem Erdboden/der Wasseroberfläche gelten die vorhergesagten Windgeschwindigkeiten?",
          "answer": "Meistens etwa 10 Meter über dem Erdboden/der Wasseroberfläche.",
          "keywords": [
            "Erdboden",
            "Meistens",
            "Meter",
            "Wasseroberfläche"
          ]
        },
        {
          "id": "wetter-51",
          "number": 51,
          "subtopic": "",
          "question": "Sie segeln mit Ihrer Yacht \"raumschots\". Nach der nächsten Tonne müssen Sie anluven. Wie wird sich die wahre Windgeschwindigkeit auf Ihrem Windmesser/Anemometer entwickeln?",
          "answer": "Sie bleib unverändert.",
          "keywords": []
        },
        {
          "id": "wetter-52",
          "number": 52,
          "subtopic": "",
          "question": "Welche Windsituation ist mit der Formulierung \"Nordwest 6\" bezüglich 1. der Schwankungsbreite in Windrichtung und 2. der Schwankungsbreite in der Windstärke (Böen) verbunden?",
          "answer": "1. Die Schwankung in der Windrichtung kann bis zu 45° um die Hauptwindrichtung betragen, also von Westnordwest (WNW) bis Nordnordwest (NNW). 2. Es können Böen auftreten, die etwa 1 bis 2 Bft über dem Mittelwind liegen.",
          "keywords": [
            "Böen",
            "Hauptwindrichtung",
            "Mittelwind",
            "Nordnordwest",
            "Schwankung"
          ]
        },
        {
          "id": "wetter-53",
          "number": 53,
          "subtopic": "",
          "question": "Was ist mit dem Zusatz \"Schauerböen\" bei der Windvorhersage verbunden?",
          "answer": "Besonders während der Passage und auf der Rückseite von Kaltfronten treten in der näheren Umgebung von Schauern Böen auf, die den Mittelwind um 2 Bft überschreiten können.",
          "keywords": [
            "Besonders",
            "Böen",
            "Kaltfronten",
            "Mittelwind",
            "Passage"
          ]
        },
        {
          "id": "wetter-54",
          "number": 54,
          "subtopic": "",
          "question": "Warum werden Gewitterböen in der Windvorhersage zusätzlich angegeben?",
          "answer": "Besonders im Sommer können bei Schwachwindlagen Gewitter mit Böen auftreten, die Sturm- oder Orkanstärke erreichen können.",
          "keywords": [
            "Besonders",
            "Böen",
            "Gewitter",
            "Orkanstärke",
            "Schwachwindlagen"
          ]
        },
        {
          "id": "wetter-55",
          "number": 55,
          "subtopic": "",
          "question": "Wie ist der Aufbau von Seewetterberichten?",
          "answer": "Hinweise auf Starkwind oder Sturm, Wetterlage, Vorhersagen, Aussichten und Stationsmeldungen.",
          "keywords": [
            "Aussichten",
            "Hinweise",
            "Starkwind",
            "Stationsmeldungen",
            "Sturm"
          ]
        },
        {
          "id": "wetter-56",
          "number": 56,
          "subtopic": "",
          "question": "Welche lokalen Effekte, die das vorherrschende Windfeld stark verändern, können in Seewetterberichten nur eingeschränkt berücksichtigt werden?",
          "answer": "U. a. Land-/Seewind-Zirkulation, Düsen- und Kapeffekte.",
          "keywords": [
            "Düsen",
            "Kapeffekte",
            "Land",
            "Seewind",
            "Zirkulation"
          ]
        },
        {
          "id": "wetter-57",
          "number": 57,
          "subtopic": "",
          "question": "1. Wann werden Starkwindwarnungen verbreitet?",
          "answer": "2. Welche Bezeichnung hat die Starkwindwarnung im internationalen Sprachgebrauch? 1. Bei erwarteten oder noch andauernden Windstärken zwischen 6 und 7 Bft. 2. Near-gale warning.",
          "keywords": [
            "Bezeichnung",
            "Near",
            "Sprachgebrauch",
            "Starkwindwarnung",
            "Welche"
          ]
        },
        {
          "id": "wetter-58",
          "number": 58,
          "subtopic": "",
          "question": "1. Wann werden Sturmwarnungen verbreitet?",
          "answer": "2. Welche Bezeichnung hat die Sturmwarnung im internationalen Sprachgebrauch? 1. Bei zu erwartenden oder noch andauernden Windstärken von mindestens 8 Bft. 2. Gale warning.",
          "keywords": [
            "Bezeichnung",
            "Gale",
            "Sprachgebrauch",
            "Sturmwarnung",
            "Welche"
          ]
        },
        {
          "id": "wetter-59",
          "number": 59,
          "subtopic": "",
          "question": "Welche Wellenhöhe wird bei der Angabe des Seegangs in Seewetterberichten verwendet?",
          "answer": "Die kennzeichnende (charakteristische) Wellenhöhe.",
          "keywords": [
            "Wellenhöhe"
          ]
        },
        {
          "id": "wetter-60",
          "number": 60,
          "subtopic": "",
          "question": "1. Wie ist die kennzeichnende (charakteristische) Wellenhöhe definiert?",
          "answer": "2. Womit müssen Sie rechnen? 1. Mittlere Höhe der gut ausgeprägten (Mittel des oberen Drittels) - nicht extremen - Wellen. 2. Einzelne Wellen können das 1,5fache der kennzeichnenden Wellenhöhe erreichen.",
          "keywords": [
            "Drittels",
            "Einzelne",
            "Höhe",
            "Mittel",
            "Mittlere"
          ]
        },
        {
          "id": "wetter-61",
          "number": 61,
          "subtopic": "",
          "question": "Was bedeutet rechtdrehender bzw. rückdrehender Wind?",
          "answer": "Rechtdrehend bedeutet Änderung der Windrichtung im Uhrzeigersinn. Rückdrehend bedeutet Änderung der Windrichtung gegen den Uhrzeigersinn um mindestens 45°.",
          "keywords": [
            "Rechtdrehend",
            "Rückdrehend",
            "Uhrzeigersinn",
            "Windrichtung",
            "Änderung"
          ]
        },
        {
          "id": "wetter-62",
          "number": 62,
          "subtopic": "",
          "question": "Sie hören am Ende eines Seewetterberichts die Stationsmeldungen. Was sagen Windrichtung und Windgeschwindigkeit gegenüber den Verhältnissen auf See aus?",
          "answer": "Durch die Umgebung der Wetterstation kann die Windrichtung verfälscht werden. Die Windgeschwindigkeit ist meist reduziert, in Einzelfällen auch erhöht.",
          "keywords": [
            "Einzelfällen",
            "Umgebung",
            "Wetterstation",
            "Windgeschwindigkeit",
            "Windrichtung"
          ]
        },
        {
          "id": "wetter-63",
          "number": 63,
          "subtopic": "",
          "question": "Welche Sichtweiten umfasst der Begriff \"diesig\"?",
          "answer": "Sichtweiten über 1 km bis 10 km (bzw. ca. 0,5 bis 6 Seemeilen).",
          "keywords": [
            "Seemeilen",
            "Sichtweiten"
          ]
        },
        {
          "id": "wetter-64",
          "number": 64,
          "subtopic": "",
          "question": "Seegebiete sind international festgelegt. In welchen amtlichen Veröffentlichungen können Sie nachlesen, wo sich das Seegebiet \"Fischer\" befindet?",
          "answer": "Im \"Handbuch Nautischer Funkdienst\", im \"Jachtfunkdienst für Nord- und Ostsee\" oder in der \"Admiralty List of Radio Signals\".",
          "keywords": [
            "Admiralty",
            "Funkdienst",
            "Handbuch",
            "Jachtfunkdienst",
            "List"
          ]
        },
        {
          "id": "wetter-65",
          "number": 65,
          "subtopic": "",
          "question": "Sie wollen einen Törn in einem für Sie fremden Küstenrevier fahren. Wie können Sie sich über mittlere Windverhältnisse für bestimmte Jahreszeiten oder Monate informieren?",
          "answer": "In den entsprechenden Hafen-, Revierführern. Außerdem z. B. in Monatskarten.",
          "keywords": [
            "Außerdem",
            "Hafen",
            "Monatskarten",
            "Revierführern"
          ]
        },
        {
          "id": "wetter-66",
          "number": 66,
          "subtopic": "",
          "question": "1. Was für Wetter muss meistens erwartet werden, wenn der Luftdruck über einen Zeitraum von 3 Stunden um 10 hPa fällt?",
          "answer": "2. Was muss bei einem an Bord beobachteten starken Luftdruckfall beachtet werden? 1. Schwerer Sturm. 2. Der Kurs und die Fahrt des Schiffes in Bezug auf das Tiefdruckgebiet.",
          "keywords": [
            "Bezug",
            "Bord",
            "Fahrt",
            "Kurs",
            "Luftdruckfall"
          ]
        },
        {
          "id": "wetter-67",
          "number": 67,
          "subtopic": "",
          "question": "Wie verändert sich der an Bord beobachtete Luftdruckfall, wenn sich ein Fahrzeug mit Westkurs dem Zentrum eines ostwärts ziehenden Tiefdruckgebiets nähert?",
          "answer": "Der Luftdruckfall wird verstärkt.",
          "keywords": [
            "Luftdruckfall"
          ]
        },
        {
          "id": "wetter-68",
          "number": 68,
          "subtopic": "",
          "question": "Mit welchen Windverhältnissen müssen Sie rechnen, wenn Sie im Hafen liegen und der Wind ablandig weht?",
          "answer": "Die im Hafen vorherrschenden Windgeschwindigkeiten entsprechen nicht den Verhältnissen auf der freien See.",
          "keywords": [
            "Hafen",
            "Verhältnissen",
            "Windgeschwindigkeiten"
          ]
        },
        {
          "id": "wetter-69",
          "number": 69,
          "subtopic": "",
          "question": "Mit welchen Windverhältnissen müssen Sie rechnen, wenn Sie in einem relativ ungeschützten Hafen liegen und der Wind auflandig weht?",
          "answer": "Die im Hafen vorherrschenden Windgeschwindigkeiten entsprechen etwa den Verhältnissen auf der freien See.",
          "keywords": [
            "Hafen",
            "Verhältnissen",
            "Windgeschwindigkeiten"
          ]
        },
        {
          "id": "wetter-70",
          "number": 70,
          "subtopic": "",
          "question": "Warum verstärkt sich der Wind in engen Durchfahrten?",
          "answer": "Durch den Düseneffekt (Trichtereffekt) in Durchfahrten. Dabei wird die Luftströmung \"zusammengepresst\" und beschleunigt.",
          "keywords": [
            "Dabei",
            "Durchfahrten",
            "Düseneffekt",
            "Luftströmung",
            "Trichtereffekt"
          ]
        },
        {
          "id": "wetter-71",
          "number": 71,
          "subtopic": "",
          "question": "Mit welcher Windentwicklung ist zu rechnen 1. in Luv und 2. in Lee von Kaps oder Inseln?",
          "answer": "1. Die Windrichtung ändert sich in Luv des Kaps zum Teil stark und verläuft oft parallel zum Kap. Die Windgeschwindigkeit nimmt zu. 2. Die Windrichtung kann bei besonders hohen Gebirgen auch umlaufend werden. Die Windgeschwindigkeit ist meist schwach, kann dafür örtlich aber sehr böig sein (Fallwinde).",
          "keywords": [
            "Fallwinde",
            "Gebirgen",
            "Kaps",
            "Teil",
            "Windgeschwindigkeit"
          ]
        },
        {
          "id": "wetter-72",
          "number": 72,
          "subtopic": "",
          "question": "Welche Windverhältnisse erwarten Sie in der Nähe von Steilküsten 1. bei auflandigem und 2. bei ablandigem Wind?",
          "answer": "1. Der Wind wird durch Küstenführung zum Teil beschleunigt, wenn er nahezu auflandig oder parallel zur Küste weht. 2. Weht der Wind ablandig, muss örtlich mit umlaufenden Winden und erhöhter Böigkeit (Fallwinden) gerechnet werden.",
          "keywords": [
            "Böigkeit",
            "Fallwinden",
            "Küste",
            "Küstenführung",
            "Teil"
          ]
        },
        {
          "id": "wetter-73",
          "number": 73,
          "subtopic": "",
          "question": "Wie wird sich das Wetter wahrscheinlich entwickeln, wenn der Wind am Abend 1. abflaut oder 2. zunimmt?",
          "answer": "1. Langsames Abflauen des Windes ist oft ein Zeichen für gutes Wetter. 2. Windzunahme am Abend kündigt häufig Starkwind, Sturm und Regen an.",
          "keywords": [
            "Abend",
            "Abflauen",
            "Langsames",
            "Regen",
            "Starkwind"
          ]
        },
        {
          "id": "wetter-74",
          "number": 74,
          "subtopic": "",
          "question": "1. Womit müssen Sie auf der Nordhalbkugel rechnen, wenn nach Durchzug einer Kaltfront der Wind rückdreht und der Luftdruck wieder fällt?",
          "answer": "2. Wie nennt man die Wetterlage? 1. Meist deutliche Wetterverschlechterung mit erneut auffrischendem Wind bis Sturmstärke. 2. Troglage.",
          "keywords": [
            "Meist",
            "Sturmstärke",
            "Troglage",
            "Wetterlage",
            "Wetterverschlechterung"
          ]
        },
        {
          "id": "wetter-75",
          "number": 75,
          "subtopic": "",
          "question": "Welche Windverhältnisse erwarten Sie auf der Nordhalbkugel während der unmittelbaren Passage eines markanten Troges?",
          "answer": "Der Wind dreht recht, meist über 60 bis 90°. Winde bis Orkanstärke besonders auf der Rückseite eines Troges.",
          "keywords": [
            "Orkanstärke",
            "Rückseite",
            "Troges",
            "Wind",
            "Winde"
          ]
        },
        {
          "id": "wetter-76",
          "number": 76,
          "subtopic": "",
          "question": "Wie entsteht Nebel?",
          "answer": "Zufuhr von Feuchte, Mischung von Luftmassen mit hoher Feuchtigkeit und verschiedener Temperatur, Abkühlung der Luftmasse.",
          "keywords": [
            "Abkühlung",
            "Feuchte",
            "Feuchtigkeit",
            "Luftmasse",
            "Luftmassen"
          ]
        },
        {
          "id": "wetter-77",
          "number": 77,
          "subtopic": "",
          "question": "Wie ist Nebel definiert?",
          "answer": "Sichtweite unter 1 000 Meter.",
          "keywords": [
            "Meter",
            "Sichtweite"
          ]
        },
        {
          "id": "wetter-78",
          "number": 78,
          "subtopic": "",
          "question": "1. Wie entsteht Kaltwassernebel?",
          "answer": "2. Zu welcher Jahreszeit tritt diese Nebelart in europäischen Gewässern bevorzugt auf? 1. Warme und feuchte Luftmassen werden durch den kalten Untergrund (Meer) unter den Taupunkt abgekühlt. 2. Überwiegend im Frühjahr.",
          "keywords": [
            "Frühjahr",
            "Gewässern",
            "Jahreszeit",
            "Luftmassen",
            "Meer"
          ]
        },
        {
          "id": "wetter-79",
          "number": 79,
          "subtopic": "",
          "question": "1. Wie entsteht Warmwassernebel?",
          "answer": "2. Zu welcher Jahreszeit tritt diese Nebelart in europäischen Gewässern bevorzugt auf? 1. Kalte Luft strömt über warmes Wasser. Durch Verdunstung an der Wasseroberfläche kommt es bei hoher Differenz zwischen der Luft- und Wassertemperatur zur Feuchtesättigung. 2. Überwiegend im Herbst.",
          "keywords": [
            "Differenz",
            "Feuchtesättigung",
            "Gewässern",
            "Herbst",
            "Jahreszeit"
          ]
        },
        {
          "id": "wetter-80",
          "number": 80,
          "subtopic": "",
          "question": "1. Wie entsteht Strahlungsnebel?",
          "answer": "2. Wo ist diese Nebelart anzutreffen? 1. Nach Sonnenuntergang kann sich bei klarem Himmel die bodennahe Luftschicht über Land unter den Taupunkt abkühlen. 2. Besonders auf Flüssen und engen Durchfahrten, außerdem durch seewärtige Windverdriftung in Küstennähe.",
          "keywords": [
            "Besonders",
            "Durchfahrten",
            "Flüssen",
            "Himmel",
            "Küstennähe"
          ]
        },
        {
          "id": "wetter-81",
          "number": 81,
          "subtopic": "",
          "question": "Wodurch kann es im Mittelmeerraum in besonderen Fällen zur Sichtreduktion kommen?",
          "answer": "Bei bestimmten Wetterlagen kann mit der Luftmasse transportierter Saharastaub die Sicht stark vermindern.",
          "keywords": [
            "Luftmasse",
            "Saharastaub",
            "Sicht",
            "Wetterlagen"
          ]
        },
        {
          "id": "wetter-82",
          "number": 82,
          "subtopic": "",
          "question": "Woraus besteht Seegang?",
          "answer": "Aus Windsee und Dünung.",
          "keywords": [
            "Dünung",
            "Windsee"
          ]
        },
        {
          "id": "wetter-83",
          "number": 83,
          "subtopic": "",
          "question": "Was verstehen Sie unter Windsee?",
          "answer": "Seegang, der durch den Wind am Ort oder in der näheren Umgebung angefacht wird.",
          "keywords": [
            "Seegang",
            "Umgebung",
            "Wind"
          ]
        },
        {
          "id": "wetter-84",
          "number": 84,
          "subtopic": "",
          "question": "Wovon hängt die Höhe der Windsee ab?",
          "answer": "Windgeschwindigkeit, Fetch (Windwirklänge) und Wirkdauer des Windes.",
          "keywords": [
            "Fetch",
            "Windes",
            "Windgeschwindigkeit",
            "Windwirklänge",
            "Wirkdauer"
          ]
        },
        {
          "id": "wetter-85",
          "number": 85,
          "subtopic": "",
          "question": "1. Was verstehen Sie unter Dünung?",
          "answer": "2. Was kann einsetzende hohe Dünung andeuten? 1. Seegang, der dem erzeugenden Windfeld vorausläuft, sowie abklingender (alter) Seegang. 2. Einen eventuell aufziehenden Sturm.",
          "keywords": [
            "Dünung",
            "Seegang",
            "Sturm",
            "Windfeld"
          ]
        },
        {
          "id": "wetter-86",
          "number": 86,
          "subtopic": "",
          "question": "Was verstehen Sie unter der Wellenhöhe?",
          "answer": "Der senkrechte Abstand zwischen Wellenberg und Wellental.",
          "keywords": [
            "Abstand",
            "Wellenberg",
            "Wellental"
          ]
        },
        {
          "id": "wetter-87",
          "number": 87,
          "subtopic": "",
          "question": "Was verstehen Sie unter der Wellenlänge?",
          "answer": "Der horizontale Abstand zwischen zwei Wellenbergen.",
          "keywords": [
            "Abstand",
            "Wellenbergen"
          ]
        },
        {
          "id": "wetter-88",
          "number": 88,
          "subtopic": "",
          "question": "Welchen Seegang müssen Sie erwarten, wenn Sie küstennah bei ablandigem Wind fahren?",
          "answer": "Der Seegang wird nicht so hoch sein wie auf der freien See, da der Fetch (Windwirklänge) nur sehr kurz ist.",
          "keywords": [
            "Fetch",
            "Seegang",
            "Windwirklänge"
          ]
        },
        {
          "id": "wetter-89",
          "number": 89,
          "subtopic": "",
          "question": "1. Welchen Seegang müssen Sie erwarten, wenn Sie küstennah bei auflandigem Wind fahren?",
          "answer": "2. Welche Gefahr besteht bezüglich der Entwicklung des Seegangs außerdem? 1. Der Seegang wird ähnlich ausgeprägt sein wie auf der freien See, da genügend Fetch (Windwirklänge) vorhanden ist. 2. Dort, wo das Wasser flacher wird, oder im Bereich von Untiefen muss mit Brechern und Grundseen gerechnet werden.",
          "keywords": [
            "Bereich",
            "Brechern",
            "Dort",
            "Entwicklung",
            "Fetch"
          ]
        },
        {
          "id": "wetter-90",
          "number": 90,
          "subtopic": "",
          "question": "1. Was verstehen Sie unter einer Grundsee?",
          "answer": "2. Welche Höhen kann sie erreichen? 1. Meereswellen mit besonders hohen Brechern, die durch Untiefen oder Küstennähe bzw. durch ansteigenden Meeresboden entstehen. 2. Etwa das 2,5fache der kennzeichnenden (charakteristischen) Wellenhöhe.",
          "keywords": [
            "Brechern",
            "Etwa",
            "Höhen",
            "Küstennähe",
            "Meeresboden"
          ]
        },
        {
          "id": "wetter-91",
          "number": 91,
          "subtopic": "",
          "question": "Wie verändert sich Seegang, wenn Wind und Meeresströmungen (z. B. Gezeitenstrom) entgegengesetzte Richtungen haben?",
          "answer": "Die Wellen werden kürzer und steiler.",
          "keywords": [
            "Wellen"
          ]
        },
        {
          "id": "wetter-92",
          "number": 92,
          "subtopic": "",
          "question": "Wie verändert sich Seegang, wenn Wind und Meeresströmungen (z. B. Gezeitenstrom) die gleiche Richtung haben?",
          "answer": "Die Wellen werden länger und flacher.",
          "keywords": [
            "Wellen"
          ]
        },
        {
          "id": "wetter-93",
          "number": 93,
          "subtopic": "",
          "question": "1. Was verstehen Sie unter einer Kreuzsee?",
          "answer": "2. Geben Sie 3 Beispiele an, wo mit Kreuzsee zu rechnen ist. 1. Windsee und Dünung laufen aus unterschiedlichen Richtungen heran. 2. Kurz vor und bei dem Durchzug einer Kaltfront oder eines Troges sowie in der Nähe des Tiefkerns.",
          "keywords": [
            "Beispiele",
            "Durchzug",
            "Dünung",
            "Geben",
            "Kaltfront"
          ]
        },
        {
          "id": "wetter-94",
          "number": 94,
          "subtopic": "",
          "question": "Welcher Seegang ist in Lee kleiner Inseln zu erwarten?",
          "answer": "Kreuzlaufende See, die meist kurz und kabbelig ist.",
          "keywords": [
            "Kreuzlaufende"
          ]
        },
        {
          "id": "wetter-95",
          "number": 95,
          "subtopic": "",
          "question": "Welche Faktoren können die Länge und Höhe des Seegangs erheblich verändern?",
          "answer": "Wassertiefe sowie Meeres- und Gezeitenströmungen.",
          "keywords": [
            "Gezeitenströmungen",
            "Meeres",
            "Wassertiefe"
          ]
        },
        {
          "id": "wetter-96",
          "number": 96,
          "subtopic": "",
          "question": "Im Internet finden Sie auf einer \"Wetterseite\" eine Vorhersagekarte für die Dünung. Können Sie daraus ungefähr den vorherrschenden Wind über See ableiten?",
          "answer": "Nein. Dünung kann vorhanden sein, auch wenn kein Windfeld unmittelbar vorhanden ist.",
          "keywords": [
            "Dünung",
            "Nein",
            "Windfeld"
          ]
        },
        {
          "id": "wetter-97",
          "number": 97,
          "subtopic": "",
          "question": "Mit welchem Messinstrument wird an Bord die Windgeschwindigkeit gemessen?",
          "answer": "Mit einem Anemometer.",
          "keywords": [
            "Anemometer"
          ]
        },
        {
          "id": "wetter-98",
          "number": 98,
          "subtopic": "",
          "question": "Welche Windgeschwindigkeit zeigt das Anemometer an, wenn das Fahrzeug Fahrt durchs Wasser macht?",
          "answer": "Die scheinbare Windgeschwindigkeit.",
          "keywords": [
            "Windgeschwindigkeit"
          ]
        },
        {
          "id": "wetter-99",
          "number": 99,
          "subtopic": "",
          "question": "1. Warum sollten Luftdrucktendenzen an Bord beobachtet und aufgezeichnet werden?",
          "answer": "2. In welchem zeitlichen Abstand sollte man den Luftdruck aufzeichnen? 1. Eventuelle Wetterveränderungen (z. B. Trog, Annäherung eines Tiefdruckgebiets) können registriert werden. 2. Mindestens alle 4 Stunden.",
          "keywords": [
            "Abstand",
            "Annäherung",
            "Eventuelle",
            "Luftdruck",
            "Mindestens"
          ]
        },
        {
          "id": "wetter-100",
          "number": 100,
          "subtopic": "",
          "question": "Mit welchem Messinstrument wird an Bord der Luftdruck gemessen?",
          "answer": "Mit dem Barometer oder Barographen.",
          "keywords": [
            "Barographen",
            "Barometer"
          ]
        },
        {
          "id": "wetter-101",
          "number": 101,
          "subtopic": "",
          "question": "1. Wie bestimmen Sie an Bord die Windstärke, wenn keine Windmessanlage vorhanden ist?",
          "answer": "2. Wie bestimmen Sie an Bord die Windrichtung, wenn keine Windmessanlage vorhanden ist? 1. Die Windstärke wird geschätzt mit Hilfe der Beaufortskala in Anlehnung an das Seegangsbild. 2. Die Windrichtung wird anhand der Verlagerung der Wellenkämme geschätzt. Stand: 01. Juli 2006",
          "keywords": [
            "Anlehnung",
            "Beaufortskala",
            "Bord",
            "Hilfe",
            "Juli"
          ]
        }
      ]
    },
    {
      "id": "seemannschaft1",
      "name": "Seemannschaft I",
      "subtopics": [
        "Yacht- und Bootsbau",
        "Takelung, stehendes und laufendes Gut",
        "Segel",
        "Ausrüstung (allgemein)",
        "Kenntnisse über Segelstellung, Stabilität und Rumpfgeschwindigkeit",
        "Antriebsmaschine (Betrieb und Wartung)",
        "Umgang mit Tauwerk",
        "Bootspflege, Instandhaltung",
        "Führen einer Segelyacht, Vorbereitung, Allgemeines",
        "Manöver im Hafen und auf See",
        "Manöver bei schwerem Wetter",
        "Manöver in strömenden Gewässern",
        "Mensch-über-Bord-Manöver",
        "Sicherheitsausrüstung",
        "Seetüchtigkeit",
        "Maßnahmen bei Notfällen",
        "Ankern",
        "Seeschiffe, Manövrierverhalten/Eingeschränkte Sicht"
      ],
      "questions": [
        {
          "id": "seem1-1",
          "number": 1,
          "subtopic": "",
          "question": "Was versteht man im Bootsbau unter Gelcoat?",
          "answer": "Die äußere Schutzschicht eines Bauteils aus glasfaserverstärktem Kunststoff.",
          "keywords": [
            "Bauteils",
            "Kunststoff",
            "Schutzschicht"
          ]
        },
        {
          "id": "seem1-2",
          "number": 2,
          "subtopic": "",
          "question": "Was versteht man beim GFK-Bootsbau unter Sandwichverfahren (GFK = glasfaserverstärkter Kunststoff)?",
          "answer": "Zwischen zwei GFK-Schichten wird eine Zwischenlage zur Versteifung einlaminiert, z. B. aus Balsaholz.",
          "keywords": [
            "Balsaholz",
            "Schichten",
            "Versteifung",
            "Zwischen",
            "Zwischenlage"
          ]
        },
        {
          "id": "seem1-3",
          "number": 3,
          "subtopic": "",
          "question": "Welchen Vorteil hat die Sandwichbauweise gegenüber der Massivbauweise bei GFK-Yachten (GFK = glasfaserverstärkter Kunststoff)?",
          "answer": "Große Steifheit, Verwindungsfestigkeit, geringes Gewicht, gute Isolierung.",
          "keywords": [
            "Gewicht",
            "Große",
            "Isolierung",
            "Steifheit",
            "Verwindungsfestigkeit"
          ]
        },
        {
          "id": "seem1-4",
          "number": 4,
          "subtopic": "",
          "question": "Beschreiben Sie die Vor- und Nachteile von Stahl als Baumaterial für Yachten. Vorteile:",
          "answer": "zuverlässiges, problemloses Baumaterial mit sehr hoher Festigkeit und langer Lebensdauer. Nachteile: hohes Gewicht, Rostanfälligkeit.",
          "keywords": [
            "Baumaterial",
            "Festigkeit",
            "Gewicht",
            "Lebensdauer",
            "Nachteile"
          ]
        },
        {
          "id": "seem1-5",
          "number": 5,
          "subtopic": "",
          "question": "Was bedeutet der Begriff \"Kategorie\" im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge?",
          "answer": "Mit der Kategorie legt der Hersteller fest, in welchem Fahrgebiet, bis zu welcher Windstärke und bis zu welcher charakteristischen Wellenhöhe das Fahrzeug sicher betrieben werden kann.",
          "keywords": [
            "Fahrgebiet",
            "Fahrzeug",
            "Hersteller",
            "Kategorie",
            "Wellenhöhe"
          ]
        },
        {
          "id": "seem1-6",
          "number": 6,
          "subtopic": "",
          "question": "Welche Kategorien können im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge vergeben werden?",
          "answer": "1. A Hochsee, 2. B Außerhalb von Küstengewässern, 3. C Küstennahe Gewässer, 4. D Geschützte Gewässer.",
          "keywords": [
            "Außerhalb",
            "Geschützte",
            "Gewässer",
            "Hochsee",
            "Küstengewässern"
          ]
        },
        {
          "id": "seem1-7",
          "number": 7,
          "subtopic": "",
          "question": "Was bedeutet die im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge angegebene Kategorie \"B Außerhalb von Küstengewässern\"?",
          "answer": "Das Fahrzeug ist ausgelegt für Fahrten außerhalb von Küstengewässern, in denen Windstärken bis einschließlich 8 Bft und signifikante Wellenhöhen bis einschließlich 4 m auftreten können.",
          "keywords": [
            "Fahrten",
            "Fahrzeug",
            "Küstengewässern",
            "Wellenhöhen",
            "Windstärken"
          ]
        },
        {
          "id": "seem1-8",
          "number": 8,
          "subtopic": "",
          "question": "Beschreiben Sie den Aufbau einer Radsteuerung mit Seilzügen.",
          "answer": "Das Rad dreht ein Zahnrad, über das eine Kette in der Steuersäule nach unten verläuft. Die Kette ist mit den Steuerseilen verbunden, welche über Umlenkrollen zum Ruderquadranten führen.",
          "keywords": [
            "Kette",
            "Ruderquadranten",
            "Steuerseilen",
            "Steuersäule",
            "Umlenkrollen"
          ]
        },
        {
          "id": "seem1-9",
          "number": 9,
          "subtopic": "",
          "question": "Wie nennt man die Teile des \"stehenden Gutes\", die den Mast nach vorn, achtern und seitlich verankern?",
          "answer": "Stagen und Wanten.",
          "keywords": [
            "Stagen",
            "Wanten"
          ]
        },
        {
          "id": "seem1-10",
          "number": 10,
          "subtopic": "",
          "question": "1. Wozu dienen Backstagen?",
          "answer": "2. Bei welchen Takelungen werden sie vor allem gefahren? 1. Zum zusätzlichen Abstagen des Mastes nach achtern. 2. Bei 7/8-Takelung und anderen nicht toppgetakelten Yachten.",
          "keywords": [
            "Abstagen",
            "Mastes",
            "Takelung",
            "Takelungen",
            "Yachten"
          ]
        },
        {
          "id": "seem1-11",
          "number": 11,
          "subtopic": "",
          "question": "Was ist das \"laufende Gut\"?",
          "answer": "Tauwerk, das zum Setzen, Bergen oder Bedienen der Segel oder anderer Teile der Takelage dient.",
          "keywords": [
            "Bedienen",
            "Bergen",
            "Segel",
            "Setzen",
            "Takelage"
          ]
        },
        {
          "id": "seem1-12",
          "number": 12,
          "subtopic": "",
          "question": "Was gehört zur regelmäßigen Pflege der Segel?",
          "answer": "1. Nasse Segel trocknen, 2. Segel vor Sonnenlicht schützen, 3. Salzwasserreste abspülen und 4. Beschädigungen umgehend beseitigen.",
          "keywords": [
            "Beschädigungen",
            "Nasse",
            "Salzwasserreste",
            "Segel",
            "Sonnenlicht"
          ]
        },
        {
          "id": "seem1-13",
          "number": 13,
          "subtopic": "",
          "question": "Warum sollten Vorsegel für schweres Wetter im Unterliek hoch geschnitten sein?",
          "answer": "Damit überkommende Seen nicht ins Segel schlagen und so Rigg und Segel belasten.",
          "keywords": [
            "Damit",
            "Rigg",
            "Seen",
            "Segel"
          ]
        },
        {
          "id": "seem1-14",
          "number": 14,
          "subtopic": "",
          "question": "Was ist ein Trysegel und wie wird es gefahren?",
          "answer": "Ein Schwerwettersegel, das anstelle des Großsegels mit losem Unterliek gefahren wird.",
          "keywords": [
            "Großsegels",
            "Schwerwettersegel",
            "Unterliek"
          ]
        },
        {
          "id": "seem1-15",
          "number": 15,
          "subtopic": "",
          "question": "Warum soll man das Schlagen eines Segels vermeiden, vor allem bei stärkerem Wind?",
          "answer": "Um Beschädigungen zu vermeiden.",
          "keywords": [
            "Beschädigungen"
          ]
        },
        {
          "id": "seem1-16",
          "number": 16,
          "subtopic": "",
          "question": "Wozu dienen Segellatten?",
          "answer": "Zur Profilierung des Segels, damit das Achterliek nicht einklappt.",
          "keywords": [
            "Achterliek",
            "Profilierung",
            "Segels"
          ]
        },
        {
          "id": "seem1-17",
          "number": 17,
          "subtopic": "",
          "question": "Wozu dient ein \"Cunningham-Stropp\"?",
          "answer": "Zur Regulierung der Vorliekspannung des Großsegels, um es so zu trimmen.",
          "keywords": [
            "Großsegels",
            "Regulierung",
            "Vorliekspannung"
          ]
        },
        {
          "id": "seem1-18",
          "number": 18,
          "subtopic": "",
          "question": "Welche Segel sollte eine Segelyacht in der Küstenfahrt mindestens an Bord haben?",
          "answer": "1. Reffbares Großsegel, 2. reffbare Rollfock oder Vorsegel verschiedener Größen, 3. Sturmfock.",
          "keywords": [
            "Großsegel",
            "Größen",
            "Reffbares",
            "Rollfock",
            "Sturmfock"
          ]
        },
        {
          "id": "seem1-19",
          "number": 19,
          "subtopic": "",
          "question": "Wozu dient eine Vorsegel-Rollreffeinrichtung?",
          "answer": "Mit ihr wird das Vorsegel um das Vorstag gerollt und kann so stufenlos verkleinert werden.",
          "keywords": [
            "Vorsegel",
            "Vorstag"
          ]
        },
        {
          "id": "seem1-20",
          "number": 20,
          "subtopic": "",
          "question": "Wozu dient eine Großsegel-Rollreffeinrichtung?",
          "answer": "Mit ihr wird das Großsegel entweder im Mast oder im Baum aufgerollt und kann stufenlos verkleinert werden.",
          "keywords": [
            "Baum",
            "Großsegel",
            "Mast"
          ]
        },
        {
          "id": "seem1-21",
          "number": 21,
          "subtopic": "",
          "question": "Wozu dient der Lenzkorb am Ansaugstutzen einer Lenzpumpe und wie erhalten Sie damit ihre Funktionsfähigkeit?",
          "answer": "Der Lenzkorb verhindert Verunreinigungen und Verstopfungen der Lenzpumpe. Er muss regelmäßig überprüft und gereinigt werden.",
          "keywords": [
            "Lenzkorb",
            "Lenzpumpe",
            "Verstopfungen",
            "Verunreinigungen"
          ]
        },
        {
          "id": "seem1-22",
          "number": 22,
          "subtopic": "",
          "question": "Welche Lenzvorrichtungen und -möglichkeiten sollten auf jeder seegehenden Yacht vorhanden sein?",
          "answer": "Zwei voneinander unabhängige Bilgenpumpen, von denen eine über Deck und eine unter Deck bedienbar ist, sowie 2 Pützen mit Leinen.",
          "keywords": [
            "Bilgenpumpen",
            "Deck",
            "Leinen",
            "Pützen"
          ]
        },
        {
          "id": "seem1-23",
          "number": 23,
          "subtopic": "",
          "question": "Warum sollten Sie mehr als einen Anker an Bord haben, möglichst unterschiedlicher Art?",
          "answer": "1. Als Ersatz bei Verlust, 2. zum Verwarpen oder Verkatten, 3. um unterschiedliche Ankergründe berücksichtigen zu können, 4. um bei schwerem Wetter oder in Tidengewässern vor 2 Ankern liegen zu können.",
          "keywords": [
            "Ankergründe",
            "Ankern",
            "Ersatz",
            "Tidengewässern",
            "Verkatten"
          ]
        },
        {
          "id": "seem1-24",
          "number": 24,
          "subtopic": "",
          "question": "Wie viele Fender und Festmacherleinen sollten Sie mindestens an Bord haben?",
          "answer": "4 Festmacherleinen und 4 Fender.",
          "keywords": [
            "Fender",
            "Festmacherleinen"
          ]
        },
        {
          "id": "seem1-25",
          "number": 25,
          "subtopic": "",
          "question": "Was sollte auf jeder Yacht außer Festmacherleinen, Fallen und Schoten an Tauwerk vorhanden sein?",
          "answer": "Reservetauwerk, Wurfleine, Schlepptrosse und Ankerleine.",
          "keywords": [
            "Ankerleine",
            "Reservetauwerk",
            "Schlepptrosse",
            "Wurfleine"
          ]
        },
        {
          "id": "seem1-26",
          "number": 26,
          "subtopic": "",
          "question": "Für welche unterschiedlichen Reparaturbereiche sollten Sie Ersatzteile und Werkzeug an Bord haben?",
          "answer": "1. Segelreparaturen, 2. Reparaturen an Rumpf und Rigg, 3. Motorreparaturen, 4. Elektroreparaturen und 5. Reparaturen an Schlauchleitungen.",
          "keywords": [
            "Elektroreparaturen",
            "Motorreparaturen",
            "Reparaturen",
            "Rigg",
            "Rumpf"
          ]
        },
        {
          "id": "seem1-27",
          "number": 27,
          "subtopic": "",
          "question": "Welches Werkzeug sollten Sie zur Segelreparatur an Bord haben?",
          "answer": "Segelhandschuh, Segelnadeln, Segelgarn, Wachs, Zange und selbstklebendes Segeltuch.",
          "keywords": [
            "Segelgarn",
            "Segelhandschuh",
            "Segelnadeln",
            "Segeltuch",
            "Wachs"
          ]
        },
        {
          "id": "seem1-28",
          "number": 28,
          "subtopic": "",
          "question": "Ihr Mast ist gebrochen, eine Bergung ist nicht möglich. Welche Werkzeuge benötigen Sie, um die Takelage zu kappen?",
          "answer": "Bolzenschneider, Metallsäge mit Ersatzblättern, Schraubenschlüssel und verschiedene Zangen.",
          "keywords": [
            "Bolzenschneider",
            "Ersatzblättern",
            "Metallsäge",
            "Schraubenschlüssel",
            "Zangen"
          ]
        },
        {
          "id": "seem1-29",
          "number": 29,
          "subtopic": "",
          "question": "Welches Kleinmaterial und Kleinwerkzeug muss an Bord jederzeit greifbar sein?",
          "answer": "Zeisinge, Bändselwerk, Tape, Reserveschäkel, Schäkelöffner, Bordmesser und Kombizange.",
          "keywords": [
            "Bordmesser",
            "Bändselwerk",
            "Kombizange",
            "Reserveschäkel",
            "Schäkelöffner"
          ]
        },
        {
          "id": "seem1-30",
          "number": 30,
          "subtopic": "",
          "question": "Womit muss insbesondere eine Yacht mit Radsteuerung zusätzlich ausgerüstet sein, und warum sollten alle Mitsegler mit dieser Einrichtung vertraut sein?",
          "answer": "Mit einer Notpinne. Sie muss ggf. in kürzester Zeit einsatzbereit sein.",
          "keywords": [
            "Notpinne",
            "Zeit"
          ]
        },
        {
          "id": "seem1-31",
          "number": 31,
          "subtopic": "",
          "question": "Wo finden Sie amtliche Informationen über die Ausrüstung und Sicherheit von Sportbooten, die auch bei der Beurteilung von Sportbootunfällen herangezogen werden?",
          "answer": "1. \"Sicherheit im See- und Küstenbereich, Sorgfaltsregeln für Wassersportler\", herausgegeben vom BSH, 2. \"Sicherheit auf dem Wasser, Leitfaden für Wassersportler\", herausgegeben vom Bundesministerium für Verkehr, Bau und Stadtentwicklung.",
          "keywords": [
            "Bundesministerium",
            "Küstenbereich",
            "Leitfaden",
            "Sicherheit",
            "Sorgfaltsregeln"
          ]
        },
        {
          "id": "seem1-32",
          "number": 32,
          "subtopic": "",
          "question": "Warum müssen auf Yachten zusätzlich zu elektrisch oder motorgetriebenen Lenzpumpen auch Handlenzpumpen vorhanden sein?",
          "answer": "Weil sie auch bei Strom- oder Motorausfall betätigt werden können.",
          "keywords": [
            "Motorausfall",
            "Strom",
            "Weil"
          ]
        },
        {
          "id": "seem1-33",
          "number": 33,
          "subtopic": "",
          "question": "Warum ist Flüssiggas (Propan, Butan) an Bord einer Yacht besonders gefährlich?",
          "answer": "Es ist schwerer als Luft, sinkt nach unten und bildet mit Luft ein explosives Gemisch; es kann sich im Schiffsinneren (z. B. in der Bilge) sammeln.",
          "keywords": [
            "Bilge",
            "Gemisch",
            "Luft",
            "Schiffsinneren"
          ]
        },
        {
          "id": "seem1-34",
          "number": 34,
          "subtopic": "",
          "question": "Welche 4 Bedienelemente besitzt ein mit Handpumpe betriebenes Bord-WC auf einer Yacht?",
          "answer": "1. Seeventil und Spülwasserschlauch (Seewasser), 2. Handpumpe für Toilettenspülung, 3. Hebel zur Unterbrechung der Seewasserzufuhr (Handpumpe dient dann nur noch zum Abpumpen), 4. Abwasserschlauch (via Fäkalientank) zum Seeventil.",
          "keywords": [
            "Abpumpen",
            "Abwasserschlauch",
            "Fäkalientank",
            "Handpumpe",
            "Hebel"
          ]
        },
        {
          "id": "seem1-35",
          "number": 35,
          "subtopic": "",
          "question": "Beschreiben Sie in 5 Schritten die Bedienung eines Bord-WC auf einer Yacht.",
          "answer": "1. Seeventil für Seewasserspülung öffnen, 2. Handpumpe betätigen, sodass das Becken gespült wird und gleichzeitig die Fäkalien abfließen - ausgiebig spülen, 3. Seewasserzufuhr unterbrechen (Hebel umlegen), 4. Becken mit Handpumpe leer pumpen, 5. Seeventile für Zu- und Abfluss schließen.",
          "keywords": [
            "Abfluss",
            "Becken",
            "Fäkalien",
            "Handpumpe",
            "Hebel"
          ]
        },
        {
          "id": "seem1-36",
          "number": 36,
          "subtopic": "",
          "question": "Was versteht man unter der \"Stabilität\" eines Schiffes?",
          "answer": "Unter Stabilität eines Schiffes versteht man seine Eigenschaft, in aufrechter Lage zu schwimmen und sich aus einer Krängung wieder aufzurichten.",
          "keywords": [
            "Eigenschaft",
            "Krängung",
            "Lage",
            "Schiffes",
            "Stabilität"
          ]
        },
        {
          "id": "seem1-37",
          "number": 37,
          "subtopic": "",
          "question": "Wovon hängt die Stabilität eines Schiffes in ruhigem Wasser ab?",
          "answer": "Nennen Sie Beispiele für äußere Momente, welche die Stabilität beanspruchen. Die Stabilität eines Schiffes hängt ab von: 1. seiner Geometrie (Form), 2. der Gewichtsverteilung im Schiff (Ausrüstung, Crew, Ballast). Beispiele für eine Beanspruchung der Stabilität sind krängende Momente durch Seitenwind, Trossenzug oder Drehkreisfahrt bei schnellen Motoryachten.",
          "keywords": [
            "Ausrüstung",
            "Ballast",
            "Beanspruchung",
            "Beispiele",
            "Crew"
          ]
        },
        {
          "id": "seem1-38",
          "number": 38,
          "subtopic": "",
          "question": "Wovon hängt eine in ruhigem Wasser vorhandene Stabilität zusätzlich in schwerem Wetter ab?",
          "answer": "Die Stabilität in schwerem Wetter hängt zusätzlich von Wind und Seegang, besonders von brechenden Wellen ab.",
          "keywords": [
            "Seegang",
            "Stabilität",
            "Wellen",
            "Wetter",
            "Wind"
          ]
        },
        {
          "id": "seem1-39",
          "number": 39,
          "subtopic": "",
          "question": "Was versteht man unter 1. Formschwerpunkt (F)?",
          "answer": "2. Massenschwerpunkt (Gewichtsschwerpunkt, G)? Welche Kräfte wirken in den beiden Punkten? 1. Im Formschwerpunkt F kann man sich die Masse des vom Schiff verdrängten Wassers vereinigt denken. In F wirkt die Auftriebskraft senkrecht zur Wasseroberfläche nach oben. 2. Im Massenschwerpunkt G kann man sich die Masse des Schiffes einschließlich Ausrüstung und Besatzung vereinigt denken. In G wirkt die Gewichtskraft senkrecht zur Wasseroberfläche nach unten.",
          "keywords": [
            "Auftriebskraft",
            "Ausrüstung",
            "Besatzung",
            "Formschwerpunkt",
            "Gewichtskraft"
          ]
        },
        {
          "id": "seem1-40",
          "number": 40,
          "subtopic": "",
          "question": "Was geschieht bei einer Neigung des Schiffes, z. B. durch seitlichen Winddruck, solange sich die Lage",
          "answer": "des Massenschwerpunktes (Gewichtsschwerpunktes) nicht verändert? (Begründung!) Der Formschwerpunkt F wandert zur geneigten Seite aus, weil dort ein größerer Teil des Bootskörpers unter Wasser gelangt. Die Wirklinie der Auftriebskraft bekommt dadurch einen seitlichen Abstand zur Wirklinie der Gewichtskraft. Es entsteht ein Kräftepaar, der seitliche Abstand zwischen den Wirklinien ist der Hebelarm. Es entsteht ein aufrichtendes Moment, welches gleich dem Produkt aus Gewichtskraft und Hebelarm ist.",
          "keywords": [
            "Abstand",
            "Auftriebskraft",
            "Begründung",
            "Bootskörpers",
            "Formschwerpunkt"
          ]
        },
        {
          "id": "seem1-41",
          "number": 41,
          "subtopic": "",
          "question": "Erklären Sie mit Hilfe eines Vektorparallelogramms aus \"wahrem Wind (wW)\", \"Fahrtwind (Fw)\" und \"scheinbarem Wind (sW)\", warum beim Einfallen einer Bö (Windzunahme) der \"scheinbare Wind\" raumt. Welcher Vorteil ergibt sich dadurch beim Kreuzen?",
          "answer": "(Zeichnung!) Verhältnisse vor Einfall der Bö Verhältnisse bei Einfall der Bö: Der \"scheinbare Wind\" fällt etwas achterlicher ein, er \"raumt\", und das Segelboot kann etwas höher an den \"wahren Wind\" gehen.",
          "keywords": [
            "Einfall",
            "Segelboot",
            "Verhältnisse",
            "Wind",
            "Zeichnung"
          ]
        },
        {
          "id": "seem1-42",
          "number": 42,
          "subtopic": "",
          "question": "Auf Amwindkurs mussten Sie reffen. Ein entgegenkommendes Boot gleicher Größe segelt ungerefft. Wie erklären Sie das?",
          "answer": "Der \"scheinbare Wind\" ist unterschiedlich stark. Er ist auf Amwindkursen stärker und auf Raumschot- oder Vorwindkursen schwächer als der \"wahre Wind\".",
          "keywords": [
            "Amwindkursen",
            "Raumschot",
            "Vorwindkursen",
            "Wind"
          ]
        },
        {
          "id": "seem1-43",
          "number": 43,
          "subtopic": "",
          "question": "Warum wird die Versetzung einer Yacht durch den Wind mit zunehmender Krängung größer?",
          "answer": "Der Lateralplan wird kleiner, dadurch verringert sich der seitliche Widerstand des Schiffes im Wasser.",
          "keywords": [
            "Lateralplan",
            "Schiffes",
            "Wasser",
            "Widerstand"
          ]
        },
        {
          "id": "seem1-44",
          "number": 44,
          "subtopic": "",
          "question": "Welchen Einfluss hat zunehmende Krängung auf den Trimm eines Segelbootes?",
          "answer": "(Begründung!) Die Luvgierigkeit nimmt zu, weil der Segeldruckpunkt nach Lee auswandert.",
          "keywords": [
            "Begründung",
            "Luvgierigkeit",
            "Segeldruckpunkt"
          ]
        },
        {
          "id": "seem1-45",
          "number": 45,
          "subtopic": "",
          "question": "Sie segeln am Wind, Krängung und Ruderdruck nehmen stark zu. 1. Wie bezeichnet man das Verhalten des Bootes?",
          "answer": "2. Mit welchen Mitteln können Sie die Krängung und den Ruderdruck vermindern? 1. Luvgierigkeit. 2. Traveller nach Lee setzen und/oder Großschot (etwas) fieren, Großsegel reffen.",
          "keywords": [
            "Großschot",
            "Großsegel",
            "Krängung",
            "Luvgierigkeit",
            "Mitteln"
          ]
        },
        {
          "id": "seem1-46",
          "number": 46,
          "subtopic": "",
          "question": "Welche Funktion hat ein Unterliekstrecker und wie kann mit dem Unterliekstrecker der Trimm des Großsegels beeinflusst werden?",
          "answer": "Er reguliert die Spannung der Unterlieks. Je nach Zugkraft wird der untere Teil des Großsegels flacher oder bauchiger.",
          "keywords": [
            "Großsegels",
            "Spannung",
            "Teil",
            "Unterlieks",
            "Zugkraft"
          ]
        },
        {
          "id": "seem1-47",
          "number": 47,
          "subtopic": "",
          "question": "Das Vorliek der Fock wirft Falten. Welches ist die häufigste Ursache?",
          "answer": "Das Fall ist nicht genügend durchgesetzt.",
          "keywords": [
            "Fall"
          ]
        },
        {
          "id": "seem1-48",
          "number": 48,
          "subtopic": "",
          "question": "Das Unterliek Ihres Vorsegels killt. Was ist die Ursache?",
          "answer": "Der Holepunkt der Schot liegt zu weit vorne.",
          "keywords": [
            "Holepunkt",
            "Schot"
          ]
        },
        {
          "id": "seem1-49",
          "number": 49,
          "subtopic": "",
          "question": "Das Achterliek Ihres Vorsegels killt. Was ist die Ursache?",
          "answer": "Der Holepunkt der Schot liegt zu weit achtern.",
          "keywords": [
            "Holepunkt",
            "Schot"
          ]
        },
        {
          "id": "seem1-50",
          "number": 50,
          "subtopic": "",
          "question": "Wozu dienen Windfäden am Segel?",
          "answer": "Sie machen den Strömungsverlauf am Segel sichtbar, um das Segel optimal trimmen zu können.",
          "keywords": [
            "Segel",
            "Strömungsverlauf"
          ]
        },
        {
          "id": "seem1-51",
          "number": 51,
          "subtopic": "",
          "question": "1. Wann sollte ein Großsegel flach getrimmt sein?",
          "answer": "2. Wie kann ein Großsegel flach getrimmt werden? 1. Bei Starkwind. 2. Dichtholen von Unterliek- und Vorliekstrecker, Dichtholen der Großschot, Durchsetzen des Großfalls, Spannung des Achterstags erhöhen, Traveller nach Lee.",
          "keywords": [
            "Achterstags",
            "Dichtholen",
            "Durchsetzen",
            "Großfalls",
            "Großschot"
          ]
        },
        {
          "id": "seem1-52",
          "number": 52,
          "subtopic": "",
          "question": "Mit welchen 6 Teilen des laufenden und stehenden Guts können Sie ein Großsegel trimmen?",
          "answer": "Großschot, Traveller, Unterliekstrecker, Cunninghamstrecker, Großfall, Achterstagspanner.",
          "keywords": [
            "Achterstagspanner",
            "Cunninghamstrecker",
            "Großfall",
            "Großschot",
            "Traveller"
          ]
        },
        {
          "id": "seem1-53",
          "number": 53,
          "subtopic": "",
          "question": "Wozu dienen \"Opferanoden\" und wann sollten sie ausgewechselt werden?",
          "answer": "Sie dienen dem Schutz gegen Schäden durch Elektrolyse. Verbrauchte Anoden müssen nach einer Saison ersetzt werden, nicht erst wenn sie verbraucht sind.",
          "keywords": [
            "Anoden",
            "Elektrolyse",
            "Saison",
            "Schutz",
            "Schäden"
          ]
        },
        {
          "id": "seem1-54",
          "number": 54,
          "subtopic": "",
          "question": "Wie schützt man auf Kunststoffyachten den Propeller gegen Elektrolyse?",
          "answer": "Durch eine Zinkanode auf der Propellerwelle.",
          "keywords": [
            "Propellerwelle",
            "Zinkanode"
          ]
        },
        {
          "id": "seem1-55",
          "number": 55,
          "subtopic": "",
          "question": "Welche Sicherheitsmaßnahmen sind vor und beim Tanken von Diesel zu treffen?",
          "answer": "1. Maschine abstellen, 2. offenes Feuer löschen (Rauchen einstellen), 3. Maßnahmen gegen Überlaufen treffen.",
          "keywords": [
            "Feuer",
            "Maschine",
            "Maßnahmen",
            "Rauchen",
            "Überlaufen"
          ]
        },
        {
          "id": "seem1-56",
          "number": 56,
          "subtopic": "",
          "question": "Wie können Sie beim Tanken Umweltverschmutzungen vermeiden?",
          "answer": "1. Tanköffnung mit Ölbindetüchern umlegen, 2. möglichst an Zapfsäulen mit Zapfhahn tanken, 3. beim Tanken aus Kanistern großen Trichter mit Schlauch benutzen, 4. Nachfüllen aus Kanistern bei Wind und bewegter See möglichst vermeiden.",
          "keywords": [
            "Kanistern",
            "Nachfüllen",
            "Schlauch",
            "Tanken",
            "Tanköffnung"
          ]
        },
        {
          "id": "seem1-57",
          "number": 57,
          "subtopic": "",
          "question": "Wozu dient das Wendegetriebe eines Motors?",
          "answer": "1. Zum Ein- und Auskuppeln des Propellers, 2. zum Umsteuern des Propellers auf Rückwärtsfahrt, 3. zur Drehzahluntersetzung.",
          "keywords": [
            "Auskuppeln",
            "Drehzahluntersetzung",
            "Propellers",
            "Rückwärtsfahrt",
            "Umsteuern"
          ]
        },
        {
          "id": "seem1-58",
          "number": 58,
          "subtopic": "",
          "question": "Welche Maßnahmen sind vor dem Anlassen eines eingebauten Motors zu treffen?",
          "answer": "1. Hauptstromschalter einschalten, 2. Kraftstoff- und Kühlwasserventile öffnen, 3. Getriebe auf \"neutral\" stellen.",
          "keywords": [
            "Getriebe",
            "Hauptstromschalter",
            "Kraftstoff",
            "Kühlwasserventile"
          ]
        },
        {
          "id": "seem1-59",
          "number": 59,
          "subtopic": "",
          "question": "Was sollte nach dem Anlassen der Maschine kontrolliert werden?",
          "answer": "1. Kühlwasserdurchlauf, 2. Öldruck und Ladung, 3. Motorengeräusche und 4. Auspuffgase.",
          "keywords": [
            "Auspuffgase",
            "Kühlwasserdurchlauf",
            "Ladung",
            "Motorengeräusche",
            "Öldruck"
          ]
        },
        {
          "id": "seem1-60",
          "number": 60,
          "subtopic": "",
          "question": "Was können erste Störungsanzeichen im Motorbetrieb sein?",
          "answer": "Ungewöhnliche und fremde Motorengeräusche, Vibrationen, Verfärbung der Abgase, Aufleuchten der Ladekontrolle bzw. Öldruckkontrolle und die entsprechenden akustischen Warnungen.",
          "keywords": [
            "Abgase",
            "Aufleuchten",
            "Ladekontrolle",
            "Motorengeräusche",
            "Ungewöhnliche"
          ]
        },
        {
          "id": "seem1-61",
          "number": 61,
          "subtopic": "",
          "question": "Wie können Sie einen Dieselmotor abstellen, wenn die vorgesehene Abstellvorrichtung defekt ist?",
          "answer": "1. Kraftstoffzufuhr unterbrechen. 2. Verschließen des Luftansaugrohres/der Luftansaugrohre.",
          "keywords": [
            "Kraftstoffzufuhr",
            "Luftansaugrohre",
            "Luftansaugrohres",
            "Verschließen"
          ]
        },
        {
          "id": "seem1-62",
          "number": 62,
          "subtopic": "",
          "question": "Der Dieselmotor Ihres Bootes startet nicht. Welche Fehler, die Sie selber überprüfen können, könnten die Ursache sein?",
          "answer": "1. Anlasserdrehzahl zu gering (Batterie zu schwach), 2. kein Kraftstoff im Tank, 3. Luft in der Kraftstoffleitung, 4. falsche Bedienung der Kaltstarthilfe (eventuell Vorglühen zu kurz), 5. Anlasser defekt.",
          "keywords": [
            "Anlasser",
            "Anlasserdrehzahl",
            "Batterie",
            "Bedienung",
            "Kaltstarthilfe"
          ]
        },
        {
          "id": "seem1-63",
          "number": 63,
          "subtopic": "",
          "question": "Der Motor Ihres Bootes bleibt beim Einkuppeln stehen.",
          "answer": "Nennen Sie mögliche Ursachen. 1. Propellerwelle durch Tauwerk o. Ä. blockiert, 2. Schwerlauf des Getriebes wegen defekter Zahnräder, Lagerschaden, dicken Öls oder 3. verbogene Propellerwelle.",
          "keywords": [
            "Getriebes",
            "Lagerschaden",
            "Nennen",
            "Propellerwelle",
            "Schwerlauf"
          ]
        },
        {
          "id": "seem1-64",
          "number": 64,
          "subtopic": "",
          "question": "Während Sie unter Maschine laufen, steigt plötzlich die Kühlwassertemperatur stark an. Ihre Yacht ist mit einem Saildrive-Antrieb ausgestattet. 1. Welche typische Ursache hat der Temperaturanstieg, wenn eine technische Störung unwahrscheinlich ist?",
          "answer": "2. Wie können Sie die Störung einfach beheben? 1. Fremdkörper (Folienstücke, Plastiktüten, Pflanzenteile o. Ä.) haben den Kühlwassereinlass verstopft. 2. Mehrmals abwechselnd vor- und zurückfahren, sodass sich die Fremdkörper vom Kühlwassereinlass lösen.",
          "keywords": [
            "Folienstücke",
            "Fremdkörper",
            "Kühlwassereinlass",
            "Mehrmals",
            "Pflanzenteile"
          ]
        },
        {
          "id": "seem1-65",
          "number": 65,
          "subtopic": "",
          "question": "Welche Propeller werden auf Yachten mit Einbaumotor eingesetzt?",
          "answer": "Festflügelpropeller, Faltpropeller, Drehflügelpropeller und Verstellpropeller.",
          "keywords": [
            "Drehflügelpropeller",
            "Faltpropeller",
            "Festflügelpropeller",
            "Verstellpropeller"
          ]
        },
        {
          "id": "seem1-66",
          "number": 66,
          "subtopic": "",
          "question": "Was müssen Sie beim Aufstoppen unter Maschine mit einem Faltpropeller beachten?",
          "answer": "Der Propeller entfaltet sich eventuell erst bei relativ hoher Drehzahl und der Wirkungsgrad ist geringer als beim Festflügelpropeller.",
          "keywords": [
            "Drehzahl",
            "Festflügelpropeller",
            "Propeller",
            "Wirkungsgrad"
          ]
        },
        {
          "id": "seem1-67",
          "number": 67,
          "subtopic": "",
          "question": "Mit welchen 4 Angaben werden Propeller auf Yachten beschrieben?",
          "answer": "Anzahl der Flügel, Größe ihrer Fläche, Durchmesser und Steigung.",
          "keywords": [
            "Anzahl",
            "Durchmesser",
            "Fläche",
            "Flügel",
            "Größe"
          ]
        },
        {
          "id": "seem1-68",
          "number": 68,
          "subtopic": "",
          "question": "Was sollten Sie beachten, wenn Sie den kleinen Außenborder mit eingebautem Tank Ihres Beibootes an Bord verstauen?",
          "answer": "(Begründung!) 1. Tank und Vergaser müssen leer sein. 2. Lagerung an Deck oder in einer Backskiste mit Außenentlüftung, niemals unter Deck. 3. Restbenzin und entweichende Benzingase bilden mit Luft ein leicht entzündliches Gemisch.",
          "keywords": [
            "Außenentlüftung",
            "Backskiste",
            "Begründung",
            "Benzingase",
            "Deck"
          ]
        },
        {
          "id": "seem1-69",
          "number": 69,
          "subtopic": "",
          "question": "Wozu dient ein Wasserabscheider in der Kraftstoffleitung?",
          "answer": "In ihm sammelt sich das Kondenswasser aus dem Tank; dadurch werden Startschwierigkeiten vermieden.",
          "keywords": [
            "Kondenswasser",
            "Startschwierigkeiten",
            "Tank"
          ]
        },
        {
          "id": "seem1-70",
          "number": 70,
          "subtopic": "",
          "question": "Warum sollten Sie bei seltener Motorbenutzung den eingebauten Tank eines Dieselmotors möglichst voll getankt halten?",
          "answer": "Um Kondenswasserbildung zu verringern, was zu Startschwierigkeiten führen kann.",
          "keywords": [
            "Kondenswasserbildung",
            "Startschwierigkeiten"
          ]
        },
        {
          "id": "seem1-71",
          "number": 71,
          "subtopic": "",
          "question": "Welche Motor-Ersatzteile bzw. Schmierstoffe sollten Sie mindestens an Bord haben?",
          "answer": "1. Impeller für die Wasserpumpe, 2. Reservekeilriemen, 3. Motorenöl, 4. Dichtungsmaterial.",
          "keywords": [
            "Dichtungsmaterial",
            "Impeller",
            "Motorenöl",
            "Reservekeilriemen",
            "Wasserpumpe"
          ]
        },
        {
          "id": "seem1-72",
          "number": 72,
          "subtopic": "",
          "question": "1. Was bedeutet die Angabe einer Batteriekapazität \"2 x 60 Ah\"?",
          "answer": "(Begründung!) 2. Welche Nettokapazität steht in dem Fall zur Verfügung? (Begründung!) 1. Es handelt sich um 2 Batterien (Akkus) mit jeweils 60 Amperestunden, insgesamt also 120 Ah Nennkapazität. 2. Dem entspricht eine Nettokapazität von etwa 72 Ah, da ein Akku kaum über 80 % seiner Nennkapazität geladen werden kann.",
          "keywords": [
            "Akku",
            "Akkus",
            "Amperestunden",
            "Batterien",
            "Begründung"
          ]
        },
        {
          "id": "seem1-73",
          "number": 73,
          "subtopic": "",
          "question": "Geben Sie die benötigte Strommenge (in Amperestunden) an, um bei einer 12-Volt-Anlage zwei Verbraucher mit je 24 Watt 10 Stunden betreiben zu können (mit Angabe der Berechnung)! Benötigte Strommenge je Verbraucher:",
          "answer": "24 : 12 = 2 Ampere mal Anzahl der Verbraucher mal Stunden ergibt: 2 x 2 A x 10 h = 40 Ah.",
          "keywords": [
            "Ampere",
            "Anzahl",
            "Stunden",
            "Verbraucher"
          ]
        },
        {
          "id": "seem1-74",
          "number": 74,
          "subtopic": "",
          "question": "Wie muss Tauwerk beschaffen sein, das für Festmacherleinen, Anker- und Schlepptrossen verwendet wird?",
          "answer": "Es muss bruchfest und elastisch sein.",
          "keywords": []
        },
        {
          "id": "seem1-75",
          "number": 75,
          "subtopic": "",
          "question": "Wodurch können Sie verhindern, dass Festmacherleinen durch Schamfilen in Klüsen oder an Kanten an der Pier beschädigt werden?",
          "answer": "Durch einen gegen Verrutschen gesicherten Plastikschlauch, der über den Festmacher an der Scheuerstelle gezogen wird, hilfsweise mit Tuchstreifen.",
          "keywords": [
            "Festmacher",
            "Plastikschlauch",
            "Scheuerstelle",
            "Tuchstreifen",
            "Verrutschen"
          ]
        },
        {
          "id": "seem1-76",
          "number": 76,
          "subtopic": "",
          "question": "Was müssen Sie hinsichtlich der Festigkeit bedenken, wenn Sie Leinen zusammenknoten?",
          "answer": "Beim Knoten können Festigkeitsverluste bis zu 50 % auftreten.",
          "keywords": [
            "Festigkeitsverluste",
            "Knoten"
          ]
        },
        {
          "id": "seem1-77",
          "number": 77,
          "subtopic": "",
          "question": "Wodurch können Sie verhindern, dass bei Tauwerk aus unterschiedlichem Innen- und Außenmaterial die Seele in den Mantel rutscht?",
          "answer": "Durch einen genähten Takling.",
          "keywords": [
            "Takling"
          ]
        },
        {
          "id": "seem1-78",
          "number": 78,
          "subtopic": "",
          "question": "Wie sind längsseits liegende Fahrzeuge festzumachen?",
          "answer": "Ergänzen Sie die Skizze und benennen Sie die Leinen. 1. Achterleine, 2. Achterspring, 3. Vorspring, 4. Vorleine.",
          "keywords": [
            "Achterleine",
            "Achterspring",
            "Ergänzen",
            "Leinen",
            "Skizze"
          ]
        },
        {
          "id": "seem1-79",
          "number": 79,
          "subtopic": "",
          "question": "Wie können Sie mit Hilfe von zwei Fendern und einem Fenderbrett Ihr Boot festmachen, wenn die Pier mit vorspringenden Pfählen versehen ist?",
          "answer": "Ergänzen Sie die Skizze mit Leinen.",
          "keywords": [
            "Ergänzen",
            "Leinen",
            "Skizze"
          ]
        },
        {
          "id": "seem1-80",
          "number": 80,
          "subtopic": "",
          "question": "Was ist an Land beim Reinigen eines mit Antifouling behandelten Unterwasserschiffes zu beachten?",
          "answer": "Umweltschutzbestimmungen beachten, d. h., das Schiff nur auf einem entsprechend ausgerüsteten Reinigungsplatz abspritzen und Wasser und Schmutz auffangen, also nicht in die Kanalisation leiten.",
          "keywords": [
            "Kanalisation",
            "Reinigungsplatz",
            "Schiff",
            "Schmutz",
            "Umweltschutzbestimmungen"
          ]
        },
        {
          "id": "seem1-81",
          "number": 81,
          "subtopic": "",
          "question": "Ein funktionsfähiges elektrisches Gerät arbeitet an Bord nicht. Nennen Sie häufige Ursachen und was kann zur Behebung getan werden?",
          "answer": "1. Schlechte Kontakte und Korrosion. 2. Kontakte fest anziehen, korrodierte Stellen mit feinstem Schleifpapier säubern, Kontaktspray verwenden.",
          "keywords": [
            "Kontakte",
            "Kontaktspray",
            "Korrosion",
            "Schlechte",
            "Schleifpapier"
          ]
        },
        {
          "id": "seem1-82",
          "number": 82,
          "subtopic": "",
          "question": "Warum müssen Schäden im Gelcoat unverzüglich beseitigt werden?",
          "answer": "Das Laminat unter der Gelcoatschicht nimmt sonst Wasser auf und wird dadurch geschädigt.",
          "keywords": [
            "Gelcoatschicht",
            "Laminat",
            "Wasser"
          ]
        },
        {
          "id": "seem1-83",
          "number": 83,
          "subtopic": "",
          "question": "Welche Daten sollten mindestens an Bord im Logbuch dokumentiert werden?",
          "answer": "1. Namen und Funktionen der Crewmitglieder, 2. Beginn und Ende einer Fahrt und 3. in angemessenen Zeitabständen: Position, Kurs, Geschwindigkeit, Strömung, Wetter, Luftdruck.",
          "keywords": [
            "Beginn",
            "Crewmitglieder",
            "Ende",
            "Fahrt",
            "Funktionen"
          ]
        },
        {
          "id": "seem1-84",
          "number": 84,
          "subtopic": "",
          "question": "Worauf müssen Sie vor dem Setzen des Großsegels achten?",
          "answer": "Welche Gefahr besteht nach dem Setzen des Großsegels, solange der Wind von vorne kommt? 1. Großschot und Baumniederholer müssen ausreichend Lose haben. 2. Das Großfall muss frei laufen und darf nicht vertörnt sein. 3. Verletzungsgefahr durch schlagenden Großbaum.",
          "keywords": [
            "Baumniederholer",
            "Gefahr",
            "Großbaum",
            "Großfall",
            "Großschot"
          ]
        },
        {
          "id": "seem1-85",
          "number": 85,
          "subtopic": "",
          "question": "Was tun Sie, wenn Ihr Großsegel unter der untersten Lattentasche einreißt?",
          "answer": "1. Untere Latte entfernen. 2. Segel bis über den Riss reffen.",
          "keywords": [
            "Latte",
            "Riss",
            "Segel",
            "Untere"
          ]
        },
        {
          "id": "seem1-86",
          "number": 86,
          "subtopic": "",
          "question": "Beschreiben Sie die Schritte für den Reffvorgang mit dem Bindereff.",
          "answer": "1. Sicherstellen, dass Dirk angeschlagen oder Baum durch stützenden Baumniederholer in der Höhe gehalten wird, 2. Fall fieren und Segel etwas herunterholen, 3. Segelhals in Reffhaken am Lümmelbeschlag einhaken und festsetzen, 4. Fall wieder dichtholen, 5. Segelschothorn (hintere Reffkausch) mit Schmeerreep oder Reffleine nach achtern auf den Baum holen und 6. eventuell loses Segeltuch auftuchen und mit Reffbändseln/Reffleine einbinden.",
          "keywords": [
            "Baum",
            "Baumniederholer",
            "Dirk",
            "Fall",
            "Höhe"
          ]
        },
        {
          "id": "seem1-87",
          "number": 87,
          "subtopic": "",
          "question": "1. Wozu dient ein \"Bullenstander\"?",
          "answer": "2. Wie wird er gefahren? 1. Er soll das ungewollte Überkommen des Großbaums bei achterlichen Winden verhindern. 2. Von der Baumnock zum Vorschiff.",
          "keywords": [
            "Baumnock",
            "Großbaums",
            "Vorschiff",
            "Winden",
            "Überkommen"
          ]
        },
        {
          "id": "seem1-88",
          "number": 88,
          "subtopic": "",
          "question": "Warum muss beim Segeln vor dem Wind oder mit raumem Wind der Baumniederholer entsprechend der Windstärke durchgesetzt werden?",
          "answer": "Um das Steigen des Baumes zu verhindern.",
          "keywords": [
            "Baumes",
            "Steigen"
          ]
        },
        {
          "id": "seem1-89",
          "number": 89,
          "subtopic": "",
          "question": "Wenn gleich große Boote im Päckchen oder in der Box zusammenliegen, kann es zu Berührungen und Schäden in der Takelage kommen. Wie ist das zu verhindern?",
          "answer": "Boote versetzt legen, damit Masten nicht auf gleicher Höhe sind oder im Wechsel Heck-Bug zur Pier legen.",
          "keywords": [
            "Boote",
            "Heck",
            "Höhe",
            "Masten",
            "Pier"
          ]
        },
        {
          "id": "seem1-90",
          "number": 90,
          "subtopic": "",
          "question": "Worauf ist beim Liegen in einer Box in Bezug auf benachbarte Boote zu achten, wenn Schwell in den Hafen läuft?",
          "answer": "Dass benachbarte Boote mit ihren Masten versetzt liegen und nicht gegeneinander schlagen.",
          "keywords": [
            "Boote",
            "Dass",
            "Masten"
          ]
        },
        {
          "id": "seem1-91",
          "number": 91,
          "subtopic": "",
          "question": "Sie sind mit Ihrer Segelyacht auf See. Was veranlassen Sie bei einem Gewitteraufzug?",
          "answer": "1. Vorsegel rechtzeitig verkleinern, 2. Großsegel klar zum Reffen oder Bergen, 3. Schlechtwetterkleidung, Sicherheitsgurte und Rettungswesten anlegen, 4. Position in Karte eintragen.",
          "keywords": [
            "Bergen",
            "Großsegel",
            "Karte",
            "Position",
            "Reffen"
          ]
        },
        {
          "id": "seem1-92",
          "number": 92,
          "subtopic": "",
          "question": "Sie übernehmen in einem Hafen eine Ihnen unbekannte Yacht. Wie machen Sie sich zu Reisebeginn mit den Segeleigenschaften vertraut?",
          "answer": "Ich fahre diverse Manöver - Wende, Halse, Q-Wende, verschiedene Rettungsmanöver - mit unterschiedlicher Geschwindigkeit und Besegelung.",
          "keywords": [
            "Besegelung",
            "Geschwindigkeit",
            "Halse",
            "Manöver",
            "Rettungsmanöver"
          ]
        },
        {
          "id": "seem1-93",
          "number": 93,
          "subtopic": "",
          "question": "Wie verhalten Sie sich nach einem Mastbruch, was müssen Sie veranlassen?",
          "answer": "1. Nach Möglichkeit den Mast an Bord nehmen und sichern. 2. Falls nicht möglich, Mast und Wanten kappen, um Rumpfschäden zu vermeiden.",
          "keywords": [
            "Bord",
            "Falls",
            "Mast",
            "Möglichkeit",
            "Rumpfschäden"
          ]
        },
        {
          "id": "seem1-94",
          "number": 94,
          "subtopic": "",
          "question": "Von welchen Faktoren ist die Länge eines Nahezu-Aufschießers zu einer im Wasser treibenden Person abhängig?",
          "answer": "Geschwindigkeit, Wind, Seegang, Strömung und Form und Gewicht des Bootes.",
          "keywords": [
            "Bootes",
            "Form",
            "Geschwindigkeit",
            "Gewicht",
            "Seegang"
          ]
        },
        {
          "id": "seem1-95",
          "number": 95,
          "subtopic": "",
          "question": "Sie wollen in eine Box einlaufen. Wie bereiten Sie die Achterleinen vor und machen sie fest?",
          "answer": "Achterleinen mit Auge versehen (z. B. Palstek), möglichst früh über die Pfähle legen, bei seitlichem Wind zuerst über den Luvpfahl.",
          "keywords": [
            "Achterleinen",
            "Auge",
            "Luvpfahl",
            "Palstek",
            "Pfähle"
          ]
        },
        {
          "id": "seem1-96",
          "number": 96,
          "subtopic": "",
          "question": "Welche Vorbereitung haben Sie für ein Anlegemanöver zu treffen?",
          "answer": "1. Crew für Manöver einteilen. 2. Leinen und Fender bereitlegen.",
          "keywords": [
            "Crew",
            "Fender",
            "Leinen",
            "Manöver"
          ]
        },
        {
          "id": "seem1-97",
          "number": 97,
          "subtopic": "",
          "question": "Welchen Nachteil hat ein \"Saildrive-Antrieb\" insbesondere bei Hafenmanövern?",
          "answer": "Durch den großen Abstand zwischen Propeller und Ruder wird dieses nicht direkt angeströmt. Das kann die Manövrierfähigkeit beim Anfahren etwas verschlechtern.",
          "keywords": [
            "Abstand",
            "Anfahren",
            "Manövrierfähigkeit",
            "Propeller",
            "Ruder"
          ]
        },
        {
          "id": "seem1-98",
          "number": 98,
          "subtopic": "",
          "question": "Was ist ein Bugstrahlruder und wozu dient es?",
          "answer": "Eine im Bug einer Yacht befindliche Röhre mit einem Propeller, mit dem ein Querschub und damit ein Drehen des Buges bei geringen Vorausgeschwindigkeiten erreicht werden kann.",
          "keywords": [
            "Buges",
            "Drehen",
            "Propeller",
            "Querschub",
            "Röhre"
          ]
        },
        {
          "id": "seem1-99",
          "number": 99,
          "subtopic": "",
          "question": "Bei welchen Manövern können Sie ein Bugstrahlruder sinnvoll einsetzen?",
          "answer": "1. Beim An- und Ablegen. 2. Beim Drehen auf engem Raum.",
          "keywords": [
            "Ablegen",
            "Drehen",
            "Raum"
          ]
        },
        {
          "id": "seem1-100",
          "number": 100,
          "subtopic": "",
          "question": "Sie liegen längsseits mit der Steuerbordseite an einer Pier.",
          "answer": "Beschreiben Sie ein Ablegemanöver unter gleichzeitigem Einsatz von Bugstrahlruder und Maschine. 1. Hebel für Bugstrahlruder nach Backbord legen, sodass der Bug von der Pier weggedrückt wird (nach Backbord schwenkt) und gleichzeitig 2. Ruderlage deutlich nach Steuerbord und langsame Fahrt voraus, sodass das Heck nach Backbord ausschwenkt. So wird das Schiff fast parallel von der Pier abgedrückt.",
          "keywords": [
            "Ablegemanöver",
            "Backbord",
            "Beschreiben",
            "Bugstrahlruder",
            "Einsatz"
          ]
        },
        {
          "id": "seem1-101",
          "number": 101,
          "subtopic": "",
          "question": "Wie können Sie im freien Seeraum auf einer Segelyacht einen Sturm abwettern?",
          "answer": "1. Durch Beiliegen; Lenzen vor Topp und Takel, dabei Leinen achteraus schleppen; Liegen vor Treibanker oder 2. unter Sturmbesegelung aktiv segelnd und nach Möglichkeit brechende Seen aussteuernd.",
          "keywords": [
            "Beiliegen",
            "Leinen",
            "Lenzen",
            "Liegen",
            "Möglichkeit"
          ]
        },
        {
          "id": "seem1-102",
          "number": 102,
          "subtopic": "",
          "question": "Warum kann das Anlaufen eines Hafens bei auflandigem Starkwind bzw. schwerem Wetter gefährlich werden?",
          "answer": "Gefahr durch Grundseen bzw. Kreuzseen. Möglichkeit von Querstrom.",
          "keywords": [
            "Gefahr",
            "Grundseen",
            "Kreuzseen",
            "Möglichkeit",
            "Querstrom"
          ]
        },
        {
          "id": "seem1-103",
          "number": 103,
          "subtopic": "",
          "question": "Warum kann eine Leeküste bei schwerem Wetter einer Segelyacht gefährlich werden?",
          "answer": "Wenn die Yacht sich nicht freikreuzen kann, droht Strandung.",
          "keywords": [
            "Strandung",
            "Yacht"
          ]
        },
        {
          "id": "seem1-104",
          "number": 104,
          "subtopic": "",
          "question": "Mit welchem Manöver können Sie bei Starkwind das Halsen vermeiden (Name)?",
          "answer": "Vervollständigen Sie die Skizze durch Einzeichnen der Kurslinie und geben Sie die erforderlichen Manöver an.",
          "keywords": [
            "Einzeichnen",
            "Kurslinie",
            "Manöver",
            "Skizze",
            "Vervollständigen"
          ]
        },
        {
          "id": "seem1-105",
          "number": 105,
          "subtopic": "",
          "question": "Was erreicht man mit dem Ausbringen eines Treibankers bei schwerer See?",
          "answer": "Man hält bei richtiger Leinenlänge den Bug im Wind und verringert die Driftgeschwindigkeit.",
          "keywords": [
            "Driftgeschwindigkeit",
            "Leinenlänge",
            "Wind"
          ]
        },
        {
          "id": "seem1-106",
          "number": 106,
          "subtopic": "",
          "question": "Worauf müssen Sie achten, wenn Sie in Tidengewässern längsseits einer Pier festgemacht haben?",
          "answer": "1. Die Wassertiefe muss auch bei Niedrigwasser ausreichen oder sicheres Aufsetzen muss gewährleistet sein. 2. Die Leinen müssen für den Tidenstieg oder -fall ausreichend lang sein. Bei größerem Tidenhub darf das Fahrzeug keinesfalls unbeaufsichtigt bleiben.",
          "keywords": [
            "Aufsetzen",
            "Fahrzeug",
            "Leinen",
            "Niedrigwasser",
            "Tidenhub"
          ]
        },
        {
          "id": "seem1-107",
          "number": 107,
          "subtopic": "",
          "question": "Sie kreuzen bei frischem Wind und mitlaufendem Strom (Wind gegen Strom) nach Luv auf. Welche Auswirkungen hat ein gegen den Wind setzender Strom auf den Seegang?",
          "answer": "Durch den Strom entsteht eine kurze, steile und kabbelige See.",
          "keywords": [
            "Strom"
          ]
        },
        {
          "id": "seem1-108",
          "number": 108,
          "subtopic": "",
          "question": "Wie wirkt sich mitlaufender Strom auf die Fahrt eines Fahrzeugs und die Loganzeige aus?",
          "answer": "1. Der Strom erhöht die Fahrt über Grund. 2. Das Log zeigt dies nicht an.",
          "keywords": [
            "Fahrt",
            "Grund",
            "Strom"
          ]
        },
        {
          "id": "seem1-109",
          "number": 109,
          "subtopic": "",
          "question": "Welche Hilfsmittel können Sie einsetzen, um einen Überbordgefallenen an Deck zu bekommen?",
          "answer": "Bewegliche (und gesicherte) Badeleiter, eventuell Großschot, beschwerte Trittschlinge, Rettungstalje, Unterfangen mit kleinem Segel, Bergegurt, Dingi.",
          "keywords": [
            "Badeleiter",
            "Bergegurt",
            "Bewegliche",
            "Dingi",
            "Großschot"
          ]
        },
        {
          "id": "seem1-110",
          "number": 110,
          "subtopic": "",
          "question": "Welche Sofortmaßnahmen sind einzuleiten, wenn jemand über Bord gefallen ist?",
          "answer": "1. Ruf \"Mensch über Bord!\" 2. Rettungsmittel zuwerfen, 3. Ausguck halten, Mensch im Auge behalten, 4. Maschine starten, 5. \"Mensch-über-Bord-Manöver\" einleiten, 6. Notmeldung abgeben, 7. ggf. Markierungsblitzboje werfen, 8. ggf. MOB-Taste eines satellitengestützten Navigationsgerätes drücken, 9. Bergung durchführen.",
          "keywords": [
            "Auge",
            "Ausguck",
            "Bergung",
            "Bord",
            "Manöver"
          ]
        },
        {
          "id": "seem1-111",
          "number": 111,
          "subtopic": "",
          "question": "Welche Maßnahmen können gegen das Überbordfallen getroffen werden?",
          "answer": "1. Sicherheitsgurte anlegen und einpicken. 2. Anbringen von \"Streck-\" oder Laufleinen vom Bug zum Heck. 3. Crew auf Befestigungspunkte (Einpickpunkte für Karabinerhaken) hinweisen.",
          "keywords": [
            "Anbringen",
            "Befestigungspunkte",
            "Crew",
            "Einpickpunkte",
            "Heck"
          ]
        },
        {
          "id": "seem1-112",
          "number": 112,
          "subtopic": "",
          "question": "Nennen Sie die grundsätzlichen Schritte und ihre Ziele zur Rettung einer über Bord gegangenen Person.",
          "answer": "1. Maschine starten, 2. Suche, Herstellung eines Sichtkontaktes zur über Bord gegangenen Person, 3. \"Mensch-über-Bord-Manöver\", Annäherung an die im Wasser treibende Person und Herstellung einer ersten Leinenverbindung, 4. Bergung, sicheres und schnelles Anbordnehmen der Person, 5. Erste Hilfe, Betreuung, 6. ggf. Notalarm abgeben.",
          "keywords": [
            "Anbordnehmen",
            "Annäherung",
            "Bergung",
            "Betreuung",
            "Bord"
          ]
        },
        {
          "id": "seem1-113",
          "number": 113,
          "subtopic": "",
          "question": "Mit welchen Hilfsmitteln können Sie den Bezugspunkt (internationaler Begriff: Datum) für die Suche nach einem Überbordgefallenen sichern?",
          "answer": "1. Markierungsblitzboje, 2. MOB-Taste eines satellitengestützten Navigationsgerätes (z. B. GPS).",
          "keywords": [
            "Markierungsblitzboje",
            "Navigationsgerätes",
            "Taste"
          ]
        },
        {
          "id": "seem1-114",
          "number": 114,
          "subtopic": "",
          "question": "Was gehört u. a. zur Sicherheitsausrüstung z. B. einer 10-m-Yacht?",
          "answer": "Nennen Sie mindestens 6 Ausrüstungsgegenstände. 1. Lenzpumpen und Pützen, 2. Lecksicherungsmaterial, 3. Feuerlöscher, 4. Werkzeuge und Ersatzteile, 5. Seenotsignalmittel, 6. Handlampen, 7. Funkeinrichtung, 8. Anker, 9. Erste-Hilfe-Ausrüstung, 10. Radarreflektor und 11. Rettungsmittel.",
          "keywords": [
            "Anker",
            "Ausrüstung",
            "Ausrüstungsgegenstände",
            "Ersatzteile",
            "Erste"
          ]
        },
        {
          "id": "seem1-115",
          "number": 115,
          "subtopic": "",
          "question": "Was gehört zur Sicherheitsausrüstung der Besatzung in der Küstenfahrt?",
          "answer": "1. Rettungsweste und Sicherheitsgurt (Lifebelt) für jedes Besatzungsmitglied, 2. Rettungsfloß (Rettungsinsel), 3. Rettungskragen mit Tag- und Nachtsignal und 4. Erste-Hilfe-Ausrüstung mit Anleitung.",
          "keywords": [
            "Anleitung",
            "Ausrüstung",
            "Besatzungsmitglied",
            "Erste",
            "Hilfe"
          ]
        },
        {
          "id": "seem1-116",
          "number": 116,
          "subtopic": "",
          "question": "Wie erhalten Sie Kenntnis über das nächste Wartungsdatum eines Rettungsfloßes?",
          "answer": "Die runde, auf der Insel klebende farbige Serviceplakette oder das bei der letzten Wartung mitgelieferte Zertifikat geben Auskunft über den nächsten Wartungstermin.",
          "keywords": [
            "Auskunft",
            "Insel",
            "Serviceplakette",
            "Wartung",
            "Wartungstermin"
          ]
        },
        {
          "id": "seem1-117",
          "number": 117,
          "subtopic": "",
          "question": "Worauf müssen Sie bei Ihren Automatikrettungswesten hinsichtlich der Funktionssicherheit achten?",
          "answer": "Auf regelmäßige Wartung. Wartungsfälligkeit erkennbar an der farbigen Serviceplakette.",
          "keywords": [
            "Serviceplakette",
            "Wartung",
            "Wartungsfälligkeit"
          ]
        },
        {
          "id": "seem1-118",
          "number": 118,
          "subtopic": "",
          "question": "Was ist auf Deck einer Yacht ein Strecktau (auch Laufleine genannt) und wozu dient es?",
          "answer": "Ein neben der Fußreling verlaufender Draht, Gurt oder eine starke Leine zwischen Cockpit und Vorschiff straff gespannt zum Einpicken der Sicherheitsleine (Lifebelt).",
          "keywords": [
            "Cockpit",
            "Draht",
            "Einpicken",
            "Fußreling",
            "Gurt"
          ]
        },
        {
          "id": "seem1-119",
          "number": 119,
          "subtopic": "",
          "question": "Welche Seenotsignalmittel sollten Sie an Bord haben?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Handfackeln, rot, 2. Handraketen, rot, 3. Rauchfackeln oder Rauchtopf, orange, 4. Signalpistole mit Munition, 5. Seewasserfärber, 6. Signalflaggen N und C, 7. Signallampe, 8. Seenotfunkboje.",
          "keywords": [
            "Beispiele",
            "Handfackeln",
            "Handraketen",
            "Munition",
            "Nennen"
          ]
        },
        {
          "id": "seem1-120",
          "number": 120,
          "subtopic": "",
          "question": "Welche Feuerlöscheinrichtungen sollten an Bord vorhanden sein?",
          "answer": "1. Feuerlöscher (ABC-Pulverlöscher und eventuell CO22-Löscher), 2. Pütz zum Löschen von Bränden fester Stoffe, 3. Feuerlöschdecke, 4. Löschdurchlass für geschlossene Motorräume, der das Löschen von Bränden mit CO -Löschern ohne Sauerstoffzutritt 2 ermöglicht.",
          "keywords": [
            "Bränden",
            "Feuerlöschdecke",
            "Feuerlöscher",
            "Löschdurchlass",
            "Löschen"
          ]
        },
        {
          "id": "seem1-121",
          "number": 121,
          "subtopic": "",
          "question": "Welche Feuerlöscharten sind für Sportboote geeignet?",
          "answer": "Wie und wo sind sie an Bord unterzubringen? 1. Der ABC-Pulverlöscher, für geschlossene Motorräume der CO -Löscher, 2 2. Der Feuerlöscher muss gebrauchsfertig und leicht erreichbar sein, CO -Löscher nicht im Schiffsinneren unterbringen 2 (Erstickungsgefahr bei Leckage). 3. Er soll in der Nähe der Maschinenräume, der Kombüse bzw. der Koch- oder Heizstelle montiert sein.",
          "keywords": [
            "Bord",
            "Erstickungsgefahr",
            "Feuerlöscher",
            "Heizstelle",
            "Koch"
          ]
        },
        {
          "id": "seem1-122",
          "number": 122,
          "subtopic": "",
          "question": "Wie wird die ständige Funktionssicherheit eines Feuerlöschers sichergestellt?",
          "answer": "1. Durch Einhaltung des vorgeschriebenen Prüftermins, ersichtlich aus der Prüfplakette. 2. Der Feuerlöscher muss vor Feuchtigkeit und Korrosion geschützt werden.",
          "keywords": [
            "Einhaltung",
            "Feuchtigkeit",
            "Feuerlöscher",
            "Korrosion",
            "Prüfplakette"
          ]
        },
        {
          "id": "seem1-123",
          "number": 123,
          "subtopic": "",
          "question": "Wie wird ein Brand an Bord wirksam bekämpft?",
          "answer": "1. Alle Öffnungen schließen, 2. Brennstoffzufuhr (Hauptschalter) unterbrechen, 3. Feuerlöscher erst am Brandherd betätigen, 4. Feuer von unten und von vorn bekämpfen, 5. Löschdecke einsetzen, 6. Flüssigkeitsbrände nicht mit Wasser bekämpfen.",
          "keywords": [
            "Brandherd",
            "Brennstoffzufuhr",
            "Feuer",
            "Feuerlöscher",
            "Flüssigkeitsbrände"
          ]
        },
        {
          "id": "seem1-124",
          "number": 124,
          "subtopic": "",
          "question": "Was ist vor Reisebeginn beim Seeklarmachen zu überprüfen und zu beachten?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Seetüchtigkeit der Yacht, 2. Zahl und Zustand der Segel, 3. Treibstoffvorrat, 4. Navigationsunterlagen, 5. Sicherheitseinweisung der Besatzung, 6. Rettungsmittel, 7. Seenotsignale, 8. Trinkwasser- und Proviantvorräte, 9. Funktionsfähigkeit des Motors, 10. Funktionsfähigkeit der elektronischen Navigationsgeräte, 11. Lenzeinrichtungen, 12. Feuerlöscher, 13. Boots- und Personalpapiere, 14. Betriebsfähigkeit der UKW-Seefunkanlage.",
          "keywords": [
            "Beispiele",
            "Besatzung",
            "Betriebsfähigkeit",
            "Boots",
            "Feuerlöscher"
          ]
        },
        {
          "id": "seem1-125",
          "number": 125,
          "subtopic": "",
          "question": "Was gehört zur Sicherheitseinweisung der gesamten Besatzung vor Reisebeginn?",
          "answer": "Nennen Sie mindestens 6 Beispiele. Einweisung in Gebrauch und Bedienung 1. der Rettungswesten und Sicherheitsgurte, 2. des Rettungsfloßes, 3. der Signalmittel, 4. der Lenzpumpen, 5. der Seeventile und des Bord-WC, 6. der Kocheinrichtung, 7. der Feuerlöscher, 8. der Motoranlage, 9. der Elektroanlage, 10. des Rundfunkgerätes und der UKW-Seefunkanlage, 11. Verhalten bei \"Mensch-über-Bord\", 12. Erkennen und Verhalten bei Seekrankheit.",
          "keywords": [
            "Bedienung",
            "Beispiele",
            "Bord",
            "Einweisung",
            "Elektroanlage"
          ]
        },
        {
          "id": "seem1-126",
          "number": 126,
          "subtopic": "",
          "question": "In welche technischen Einrichtungen/Ausrüstungen muss der Schiffsführer die Besatzung vor Reiseantritt unbedingt einweisen?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Ankergeschirr, 2. Lenzeinrichtung, 3. Feuerlöscheinrichtungen, 4. Motoranlage, 5. Seeventile, 6. UKW-Seefunkanlage, 7. MOB-Taste von satellitengestützten Navigationsgerät (z. B. GPS), 8. Seenotsignalmittel, 9. Notrudereinrichtung.",
          "keywords": [
            "Ankergeschirr",
            "Beispiele",
            "Feuerlöscheinrichtungen",
            "Lenzeinrichtung",
            "Motoranlage"
          ]
        },
        {
          "id": "seem1-127",
          "number": 127,
          "subtopic": "",
          "question": "Welche Sicherheitsmaßnahmen sind vor jedem Auslaufen durchzuführen?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Wetterbericht einholen, 2. Kontrolle der Sicherheitseinrichtung, 3. Kontrolle von Motor und Schaltung, 4. Kontrolle der nautischen Geräte, 5. Kontrolle der Bilge, 6. Überprüfen des Wasser- und Kraftstoffvorrats, 7. Kontrolle der Schall- und Lichtsignaleinrichtung, 8. Kontrolle der Navigationslichter, 9. Bereitlegen der aktuellen Seekarten und nautischen Veröffentlichungen.",
          "keywords": [
            "Beispiele",
            "Bereitlegen",
            "Bilge",
            "Geräte",
            "Kontrolle"
          ]
        },
        {
          "id": "seem1-128",
          "number": 128,
          "subtopic": "",
          "question": "Warum sollten alle Crewmitglieder Lage und Funktion sämtlicher Pumpen und Ventile kennen?",
          "answer": "Damit im Bedarfsfall sie jeder bedienen kann.",
          "keywords": [
            "Bedarfsfall",
            "Damit"
          ]
        },
        {
          "id": "seem1-129",
          "number": 129,
          "subtopic": "",
          "question": "Warum sollte die Crew in die Funktion des Bord-WC eingewiesen werden?",
          "answer": "Weil durch unsachgemäße Bedienung Wasser ins Bootsinnere gelangen kann.",
          "keywords": [
            "Bedienung",
            "Bootsinnere",
            "Wasser",
            "Weil"
          ]
        },
        {
          "id": "seem1-130",
          "number": 130,
          "subtopic": "",
          "question": "Warum sollte die Crew vor Reisebeginn in die Funktion des Ankergeschirrs und die Durchführung eines Ankermanövers eingewiesen werden?",
          "answer": "Damit jeder den Anker sicher ausbringen und einholen kann.",
          "keywords": [
            "Anker",
            "Damit"
          ]
        },
        {
          "id": "seem1-131",
          "number": 131,
          "subtopic": "",
          "question": "Wie verhalten Sie sich, wenn Ihr Schiff leckgeschlagen ist?",
          "answer": "1. Meldung abgeben. 2. Je nach Erfordernissen Fahrt aus dem Schiff nehmen. 3. Lenzpumpen betätigen, Lecksuche, Leck mit Bordmitteln abdichten. 4. Küste bzw. flaches Wasser ansteuern. 5. Fahrzeug so trimmen, dass Leckstelle aus dem Wasser kommt bzw. möglichst wenig unter Wasser ist.",
          "keywords": [
            "Bordmitteln",
            "Erfordernissen",
            "Fahrt",
            "Fahrzeug",
            "Küste"
          ]
        },
        {
          "id": "seem1-132",
          "number": 132,
          "subtopic": "",
          "question": "Was tun Sie, wenn Ihr Schiff leckgeschlagen ist und das Wasser im Schiff trotz aller Maßnahmen weiter steigt?",
          "answer": "1. Notzeichen geben, Funkmeldung abgeben, ggf. Radartransponder einschalten. 2. Verlassen des Bootes vorbereiten, Rettungswesten anlegen, Rettungsfloß klarmachen. 3. Wenn möglich, ruhiges Flachwasser anlaufen und Schiff auf Grund setzen.",
          "keywords": [
            "Bootes",
            "Flachwasser",
            "Funkmeldung",
            "Grund",
            "Notzeichen"
          ]
        },
        {
          "id": "seem1-133",
          "number": 133,
          "subtopic": "",
          "question": "Welche Folgen können Grundberührungen und harte Stöße, z. B. bei Anlegemanövern oder Kollisionen mit treibenden Gegenständen haben?",
          "answer": "1. Eine Beschädigung der Bordwand kann eintreten. 2. Es kann Sinkgefahr entstehen.",
          "keywords": [
            "Beschädigung",
            "Bordwand",
            "Sinkgefahr"
          ]
        },
        {
          "id": "seem1-134",
          "number": 134,
          "subtopic": "",
          "question": "Welche grundsätzliche Verhaltensweise sollte beachtet und welche Maßnahmen sollten ergriffen werden, wenn Ihr Schiff in Seenot kommt?",
          "answer": "1. Ruhe bewahren und überlegt handeln. 2. Notalarm abgeben, ggf. Radartransponder einschalten. 3. Rettungsfloß klarmachen. 4. Rettungsweste und Sicherheitsgurt anlegen. 5. So lange wie möglich an Bord bleiben. 6. Wärmende Kleidung anziehen.",
          "keywords": [
            "Bord",
            "Kleidung",
            "Notalarm",
            "Radartransponder",
            "Rettungsfloß"
          ]
        },
        {
          "id": "seem1-135",
          "number": 135,
          "subtopic": "",
          "question": "Welche Maßnahmen treffen Sie, bevor Sie von Ihrem Fahrzeug in ein Rettungsfloß übersteigen?",
          "answer": "1. Rettungsweste und Sicherheitsgurt anlegen. 2. Wärmende Kleidung anziehen. 3. Nach Möglichkeit vorher reichlich warme Flüssigkeit trinken. 4. Soweit noch nicht geschehen, Proviant, Wasser, Seenotsignalmittel und ggf. Seenotfunkbake, Radartransponder und UKW- Handsprechfunkgeräte in das Rettungsfloß bringen.",
          "keywords": [
            "Flüssigkeit",
            "Handsprechfunkgeräte",
            "Kleidung",
            "Möglichkeit",
            "Proviant"
          ]
        },
        {
          "id": "seem1-136",
          "number": 136,
          "subtopic": "",
          "question": "Warum sollte ein sinkendes Schiff im Notfall so spät wie möglich verlassen werden?",
          "answer": "1. Die Überlebensmöglichkeiten sind auf dem Schiff größer. 2. Ein Schiff ist besser zu orten. 3. Einstieg in das Rettungsfloß und Aufenthalt können sehr schwierig sein.",
          "keywords": [
            "Aufenthalt",
            "Einstieg",
            "Rettungsfloß",
            "Schiff",
            "Überlebensmöglichkeiten"
          ]
        },
        {
          "id": "seem1-137",
          "number": 137,
          "subtopic": "",
          "question": "Erklären Sie die Handhabung der Hubschrauberrettungsschlinge im Einsatz!",
          "answer": "1. Bei offener Rettungsschlinge: zuerst den Karabinerhaken einpicken. 2. Mit dem Kopf und beiden Armen in die Rettungsschlinge einsteigen. 3. Die Arme müssen nach unten gedrückt werden und die Hände sind zu schließen. 4. Das Windenseil muss frei hängen, es darf nicht an Bord befestigt werden.",
          "keywords": [
            "Arme",
            "Armen",
            "Bord",
            "Hände",
            "Karabinerhaken"
          ]
        },
        {
          "id": "seem1-138",
          "number": 138,
          "subtopic": "",
          "question": "Wann dürfen Notzeichen gegeben werden?",
          "answer": "Nach Feststellung des Notfalls auf Anordnung des Schiffsführers; bei unmittelbarer Gefahr für das Schiff oder die Besatzung, die ohne fremde Hilfe nicht überwunden werden kann.",
          "keywords": [
            "Anordnung",
            "Besatzung",
            "Feststellung",
            "Gefahr",
            "Hilfe"
          ]
        },
        {
          "id": "seem1-139",
          "number": 139,
          "subtopic": "",
          "question": "Wann darf ein UKW-Sprechfunkgerät auch ohne entsprechenden Befähigungsnachweis benutzt werden?",
          "answer": "In Notfällen.",
          "keywords": [
            "Notfällen"
          ]
        },
        {
          "id": "seem1-140",
          "number": 140,
          "subtopic": "",
          "question": "Worauf ist zu achten, wenn Crewmitglieder seekrank sind?",
          "answer": "1. Aufenthalt im Cockpit beaufsichtigen und Crewmitglieder gegen Überbordfallen sichern, 2. Flüssigkeitsverlust ausgleichen (Wasser), 3. Crewmitglied anhalten, zur Küste oder zum Horizont zu schauen, 4. mit Arbeiten beschäftigen.",
          "keywords": [
            "Arbeiten",
            "Aufenthalt",
            "Cockpit",
            "Crewmitglied",
            "Crewmitglieder"
          ]
        },
        {
          "id": "seem1-141",
          "number": 141,
          "subtopic": "",
          "question": "Wozu dient ein Reitgewicht (Gleitgewicht, Ankergewicht) beim Ankern?",
          "answer": "Es soll die Ankertrosse auf den Grund ziehen, damit der Anker nicht durch einen zu steilen Winkel aus dem Grund gebrochen wird. Es wirkt ruckdämpfend.",
          "keywords": [
            "Anker",
            "Ankertrosse",
            "Grund",
            "Winkel"
          ]
        },
        {
          "id": "seem1-142",
          "number": 142,
          "subtopic": "",
          "question": "Warum sollte beim Verwenden einer Ankertrosse ein Kettenvorlauf benutzt werden?",
          "answer": "Damit der Zug auf den Anker nicht zu steil wird.",
          "keywords": [
            "Anker",
            "Damit"
          ]
        },
        {
          "id": "seem1-143",
          "number": 143,
          "subtopic": "",
          "question": "Welcher Ankergrund ist für die üblichen Leichtgewichtsanker 1. gut geeignet?",
          "answer": "2. mäßig geeignet? 3. ungeeignet? 1. Sand, Schlick, weicher Ton und Lehm, 2. harter Ton und Lehm, 3. steinige, verkrautete und stark schlammige Böden.",
          "keywords": [
            "Böden",
            "Lehm",
            "Sand",
            "Schlick"
          ]
        },
        {
          "id": "seem1-144",
          "number": 144,
          "subtopic": "",
          "question": "Was müssen Sie bei der Auswahl eines Ankerplatzes beachten?",
          "answer": "1. Der Ankerplatz sollte Schutz vor Wind und Wellen bieten. 2. Auf ausreichenden Platz zum Schwojen achten. 3. Mögliche Winddrehungen einplanen.",
          "keywords": [
            "Ankerplatz",
            "Mögliche",
            "Platz",
            "Schutz",
            "Schwojen"
          ]
        },
        {
          "id": "seem1-145",
          "number": 145,
          "subtopic": "",
          "question": "Welchen Ankergrund sollten Sie nach Möglichkeit meiden?",
          "answer": "Steinige, verkrautete und stark schlammige Böden.",
          "keywords": [
            "Böden",
            "Steinige"
          ]
        },
        {
          "id": "seem1-146",
          "number": 146,
          "subtopic": "",
          "question": "Wie können Sie die Haltekraft eines Ankers erhöhen, wenn Sie auf engem Raum (z. B. zwischen zwei Stegen) nicht die erforderliche Kettenlänge stecken können?",
          "answer": "Mit einem Reitgewicht, um so den Anker besser am Boden zu halten.",
          "keywords": [
            "Anker",
            "Boden",
            "Reitgewicht"
          ]
        },
        {
          "id": "seem1-147",
          "number": 147,
          "subtopic": "",
          "question": "Sie ankern in einer Bucht. Wie können Sie bei zunehmendem Wind die Haltekraft Ihres Ankers verbessern?",
          "answer": "1. Mehr Trosse oder Kette stecken, 2. Reitgewicht verwenden.",
          "keywords": [
            "Kette",
            "Mehr",
            "Reitgewicht",
            "Trosse"
          ]
        },
        {
          "id": "seem1-148",
          "number": 148,
          "subtopic": "",
          "question": "Sie wollen auf verkrautetem Grund ankern. Ihnen steht ein Leichtgewichtsanker und ein Stockanker zur Verfügung. Welchen benutzen Sie und warum?",
          "answer": "Den Stockanker, weil er sich insbesondere auch aufgrund seines höheren Gewichtes besser eingräbt.",
          "keywords": [
            "Gewichtes",
            "Stockanker"
          ]
        },
        {
          "id": "seem1-149",
          "number": 149,
          "subtopic": "",
          "question": "Wozu dient eine Ankerboje?",
          "answer": "1. Sie zeigt die Lage des Ankers an. 2. Mit der Trippleine kann das Bergen eines unklaren Ankers unterstützt werden.",
          "keywords": [
            "Ankers",
            "Bergen",
            "Lage",
            "Trippleine"
          ]
        },
        {
          "id": "seem1-150",
          "number": 150,
          "subtopic": "",
          "question": "Wie erkennen Sie, ob der Anker hält?",
          "answer": "1. Vibration von Kette oder Trosse prüfen, 2. Einrucken des Ankers prüfen, 3. durch wiederholte Peilungen und ggf. Schätzungen des Abstands zu anderen Schiffen oder zu Landmarken, 4. falls GPS vorhanden ist, die Ankeralarmfunktion einschalten.",
          "keywords": [
            "Abstands",
            "Ankeralarmfunktion",
            "Ankers",
            "Einrucken",
            "Kette"
          ]
        },
        {
          "id": "seem1-151",
          "number": 151,
          "subtopic": "",
          "question": "Welche Ankerarten finden überwiegend auf Sportbooten Verwendung?",
          "answer": "Nennen Sie 3. 1. Patentanker, 2. Stockanker (einklappbarer Stock), 3. Draggen (klappbare Flunken), 4. Pflugscharanker.",
          "keywords": [
            "Draggen",
            "Flunken",
            "Nennen",
            "Patentanker",
            "Pflugscharanker"
          ]
        },
        {
          "id": "seem1-152",
          "number": 152,
          "subtopic": "",
          "question": "Nennen Sie 3 Ankertypen, die vom Germanischen Lloyd als Anker mit hoher Haltekraft anerkannt sind.",
          "answer": "Bruce-Anker, CQR-Anker, Danforth-Anker, D'Hone-Anker.",
          "keywords": [
            "Anker",
            "Bruce",
            "Danforth",
            "Hone"
          ]
        },
        {
          "id": "seem1-153",
          "number": 153,
          "subtopic": "",
          "question": "1. Welches sind die Vorteile einer Ankerkette gegenüber einer Ankerleine?",
          "answer": "2. Wie kombiniert man auf Yachten häufig die Systeme? 1. Die Kette unterstützt das Eingraben, verkleinert den Schwojeraum, wirkt ruckdämpfend, kann nicht an Steinen durchscheuern und erhöht die Haltekraft des Ankers. 2. Es wird zwischen Anker und Leine ein Kettenvorlauf von 3 bis 5 m gefahren.",
          "keywords": [
            "Anker",
            "Ankers",
            "Eingraben",
            "Haltekraft",
            "Kette"
          ]
        },
        {
          "id": "seem1-154",
          "number": 154,
          "subtopic": "",
          "question": "1. Warum soll eine Ankerleine nicht an den Anker geknotet werden?",
          "answer": "2. Warum muss die Ankerkette mit einem Taustropp am Schiff bzw. im Kettenkasten befestigt werden? 1. Knoten reduzieren die Bruchlast einer Leine um bis zu 50 %. 2. Damit die Kette im Notfall schnell gekappt werden kann.",
          "keywords": [
            "Ankerkette",
            "Bruchlast",
            "Damit",
            "Kette",
            "Kettenkasten"
          ]
        },
        {
          "id": "seem1-155",
          "number": 155,
          "subtopic": "",
          "question": "Sie wollen in einer Bucht ankern, in der das (ausreichend tiefe) Wasser unterschiedliche Färbungen zeigt. Wo wählen Sie den Akerplatz?",
          "answer": "(Begründung!) Ich ankere auf hellem Wasser. Begründung: Der Grund ist hier sandig, der Anker hält gut. Dunkler Grund weist auf Bewuchs hin, wo der Anker schlecht hält.",
          "keywords": [
            "Anker",
            "Begründung",
            "Bewuchs",
            "Dunkler",
            "Grund"
          ]
        },
        {
          "id": "seem1-156",
          "number": 156,
          "subtopic": "",
          "question": "Warum darf der Anker nicht zusammen mit seiner Leine am Ankerplatz über Bord geworfen werden?",
          "answer": "Die Leine könnte mit dem Anker vertörnen und dadurch das Eingraben des Ankers verhindern. Der Anker würde dann nicht halten.",
          "keywords": [
            "Anker",
            "Ankers",
            "Eingraben",
            "Leine"
          ]
        },
        {
          "id": "seem1-157",
          "number": 157,
          "subtopic": "",
          "question": "Was müssen Sie bedenken, wenn ein großes Schiff auf Ihr Sportboot zukommt?",
          "answer": "1. Andere Manövrierfähigkeit (größere Drehkreise, längere Stoppstrecken), 2. u. U. eingeschränkte Sicht des anderen Fahrzeugs, insbesondere nach voraus, 3. Möglichkeit des Übersehenwerdens, weil man sich im Radarschatten befindet, 4. Beeinträchtigung durch Bugwellen des großen Schiffes, 5. mögliche Beeinträchtigung der Manövrierfähigkeit des eigenen Bootes durch Windabdeckung.",
          "keywords": [
            "Beeinträchtigung",
            "Bootes",
            "Bugwellen",
            "Drehkreise",
            "Fahrzeugs"
          ]
        },
        {
          "id": "seem1-158",
          "number": 158,
          "subtopic": "",
          "question": "Warum sollten Sie nicht zu dicht hinter dem Heck eines vorbeifahrenden Schiffes durchfahren?",
          "answer": "Sog und Hecksee können das eigene Boot erheblich gefährden.",
          "keywords": [
            "Boot",
            "Hecksee"
          ]
        },
        {
          "id": "seem1-159",
          "number": 159,
          "subtopic": "",
          "question": "Was müssen Sie beim Passieren eines großen Schiffes bei dessen Kursänderungen, z. B. in einem kurvenreichen Fahrwasser, beachten?",
          "answer": "Bei einer Kursänderung schwenkt das Heck deutlich in die entgegengesetzte Richtung aus, also nach Backbord bei einer Kursänderung nach Steuerbord und umgekehrt.",
          "keywords": [
            "Backbord",
            "Heck",
            "Kursänderung",
            "Richtung",
            "Steuerbord"
          ]
        },
        {
          "id": "seem1-160",
          "number": 160,
          "subtopic": "",
          "question": "Mit welchen Stoppstrecken und Stoppzeiten müssen Sie bei großen Schiffen in voller Fahrt rechnen und wovon hängen sie ab?",
          "answer": "Abhängig von Schiffstyp und -größe, Beladungszustand und Ausgangsgeschwindigkeit ist mit der 8- bis 12fachen Schiffslänge und bis zu 8 bis 12 Minuten Dauer (z. B. ein 300 m langes Containerschiff voll abgeladen mit 24 kn: Stoppstrecke ca. 2 sm, Stoppzeit ca. 12 Minuten) zu rechnen.",
          "keywords": [
            "Abhängig",
            "Ausgangsgeschwindigkeit",
            "Beladungszustand",
            "Containerschiff",
            "Dauer"
          ]
        },
        {
          "id": "seem1-161",
          "number": 161,
          "subtopic": "",
          "question": "Wie reagiert ein großes Schiff, wenn bei ca. 20 kn Fahrt ein Ausweichmanöver durch Hartruderlage eingeleitet wird?",
          "answer": "Nach welcher Distanz verlässt es in etwa die alte Kurslinie? Der Steven bewegt sich in Richtung der Hartruderlage, das Heck schlägt relativ weit zur entgegengesetzten Richtung aus. Das Schiff verlässt mit seinem Heck erst nach mehreren Schiffslängen seine bisherige Kurslinie, bewegt sich also zunächst in der alten Kursrichtung fort. Diese Strecke kann bei 300 m langen Containerschiffen 1,5 bis 2,5 Schiffslängen, d. h. ca. 500 bis 600 m betragen.",
          "keywords": [
            "Containerschiffen",
            "Distanz",
            "Hartruderlage",
            "Heck",
            "Kurslinie"
          ]
        },
        {
          "id": "seem1-162",
          "number": 162,
          "subtopic": "",
          "question": "Auf vielen großen Schiffen ist die Sicht nach vorne eingeschränkt. Welchen Abstand vor einem Schiff müssen Sie als nicht einsehbar mindestens berücksichtigen?",
          "answer": "Sichtbeschränkung nach voraus maximal 2 Schiffslängen oder 500 m.",
          "keywords": [
            "Schiffslängen",
            "Sichtbeschränkung"
          ]
        },
        {
          "id": "seem1-163",
          "number": 163,
          "subtopic": "",
          "question": "Wie können Sie die Wahrscheinlichkeit erhöhen, im Radar von anderen Fahrzeugen gesehen zu werden?",
          "answer": "Durch einen möglichst hoch und fest angebrachten passiven Radarreflektor bzw. besser noch durch einen \"aktiven\" Radarreflektor. Stand: 01. Juli 2006",
          "keywords": [
            "Juli",
            "Radarreflektor",
            "Stand"
          ]
        }
      ]
    },
    {
      "id": "seemannschaft2",
      "name": "Seemannschaft II",
      "subtopics": [
        "Yacht- und Bootsbau",
        "Ausrüstung (allgemein)",
        "Kenntnisse über Stabilität, Trimm und Rumpfgeschwindigkeit",
        "Antriebsmaschine (Betrieb und Wartung)",
        "Umgang mit Tauwerk",
        "Bootspflege, Instandhaltung",
        "Führen einer Motoryacht, Vorbereitung, Allgemeines",
        "Manöver im Hafen und auf See",
        "Manöver bei schwerem Wetter",
        "Manöver in strömenden Gewässern",
        "Mensch-über-Bord-Manöver",
        "Sicherheitsausrüstung",
        "Seetüchtigkeit",
        "Maßnahmen bei Notfällen",
        "Ankern",
        "Seeschiffe, Manövrierverhalten/Eingeschränkte Sicht"
      ],
      "questions": [
        {
          "id": "seem2-1",
          "number": 1,
          "subtopic": "",
          "question": "Welche Bootsbau-Werkstoffe finden im Sportbootbau für den Rumpf überwiegend Verwendung?",
          "answer": "1. GFK = glasfaserverstärkter Kunststoff, 2. Stahl, 3. Aluminium, 4. wasserfest verleimtes Sperrholz, 5. Massivholz.",
          "keywords": [
            "Aluminium",
            "Kunststoff",
            "Massivholz",
            "Sperrholz",
            "Stahl"
          ]
        },
        {
          "id": "seem2-2",
          "number": 2,
          "subtopic": "",
          "question": "Was versteht man unter einem Gleiter (schnelle Schiffe) und welche Fahreigenschaften hat solch ein Motorboot?",
          "answer": "Schnelle Schiffe, deren Gewicht überwiegend von Antriebskomponenten getragen wird (flache und breite Konstruktion) und die auf glattem Wasser bei höherer Geschwindigkeit in Gleitfahrt kommen. Bei Seegang können die Boote hart aufschlagen, sodass die Konstruktionen stark beansprucht werden.",
          "keywords": [
            "Antriebskomponenten",
            "Boote",
            "Geschwindigkeit",
            "Gewicht",
            "Gleitfahrt"
          ]
        },
        {
          "id": "seem2-3",
          "number": 3,
          "subtopic": "",
          "question": "Was versteht man unter einem \"Verdränger\" und welche Fahreigenschaften hat solch ein Motorboot?",
          "answer": "Konventionelle Schiffe - unabhängig vom Tiefgang -, deren Gewicht ausschließlich vom hydrostatischen Auftrieb getragen wird und deren Geschwindigkeit dementsprechend beschränkt ist (Rumpfgeschwindigkeit).",
          "keywords": [
            "Auftrieb",
            "Geschwindigkeit",
            "Gewicht",
            "Konventionelle",
            "Rumpfgeschwindigkeit"
          ]
        },
        {
          "id": "seem2-4",
          "number": 4,
          "subtopic": "",
          "question": "Was versteht man unter einem \"Halbgleiter\" und welche Fahreigenschaften hat solch ein Motorboot?",
          "answer": "Halbgleiter sind Motorboote mit geringem Tiefgang, sehr hoher Formstabilität und schneller Fahrweise bei starker Motorisierung.",
          "keywords": [
            "Fahrweise",
            "Formstabilität",
            "Halbgleiter",
            "Motorboote",
            "Motorisierung"
          ]
        },
        {
          "id": "seem2-5",
          "number": 5,
          "subtopic": "",
          "question": "Was versteht man im Bootsbau unter Gelcoat?",
          "answer": "Die äußere Schutzschicht eines Bauteils aus glasfaserverstärktem Kunststoff.",
          "keywords": [
            "Bauteils",
            "Kunststoff",
            "Schutzschicht"
          ]
        },
        {
          "id": "seem2-6",
          "number": 6,
          "subtopic": "",
          "question": "Was versteht man beim GFK-Bootsbau unter Sandwichverfahren (GFK = glasfaserverstärkter Kunststoff)?",
          "answer": "Zwischen zwei GFK-Schichten wird eine Zwischenlage zur Versteifung einlaminiert, z. B. aus Balsaholz.",
          "keywords": [
            "Balsaholz",
            "Schichten",
            "Versteifung",
            "Zwischen",
            "Zwischenlage"
          ]
        },
        {
          "id": "seem2-7",
          "number": 7,
          "subtopic": "",
          "question": "Welchen Vorteil hat die Sandwichbauweise gegenüber der Massivbauweise bei GFK-Yachten (GFK = glasfaserverstärkter Kunststoff)?",
          "answer": "Große Steifheit, Verwindungsfestigkeit, geringes Gewicht, gute Isolierung.",
          "keywords": [
            "Gewicht",
            "Große",
            "Isolierung",
            "Steifheit",
            "Verwindungsfestigkeit"
          ]
        },
        {
          "id": "seem2-8",
          "number": 8,
          "subtopic": "",
          "question": "Beschreiben Sie die Vor- und Nachteile von Stahl als Baumaterial für Yachten. Vorteile:",
          "answer": "zuverlässiges, problemloses Baumaterial mit sehr hoher Festigkeit und langer Lebensdauer. Nachteile: hohes Gewicht, Rostanfälligkeit.",
          "keywords": [
            "Baumaterial",
            "Festigkeit",
            "Gewicht",
            "Lebensdauer",
            "Nachteile"
          ]
        },
        {
          "id": "seem2-9",
          "number": 9,
          "subtopic": "",
          "question": "Was bedeutet der Betriff \"Kategorie\" im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge?",
          "answer": "Mit der Kategorie legt der Hersteller fest, in welchem Fahrgebit, bis zu welcher Windstärke und bis zu welcher charakteristischen Wellenhöhe das Fahrzeug sicher betrieben werden kann.",
          "keywords": [
            "Fahrgebit",
            "Fahrzeug",
            "Hersteller",
            "Kategorie",
            "Wellenhöhe"
          ]
        },
        {
          "id": "seem2-10",
          "number": 10,
          "subtopic": "",
          "question": "Welche Kategorien können im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge vergeben werden?",
          "answer": "1. A Hochsee, 2. B Außerhalb von Küstengewässern, 3. C Küstennahe Gewässer, 4. D Geschützte Gewässer.",
          "keywords": [
            "Außerhalb",
            "Geschützte",
            "Gewässer",
            "Hochsee",
            "Küstengewässern"
          ]
        },
        {
          "id": "seem2-11",
          "number": 11,
          "subtopic": "",
          "question": "Was bedeutet die im Zusammenhang mit dem CE-Zeichen für Wassersportfahrzeuge angegebene Kategorie \"B Außerhalb von Küstengewässern\"?",
          "answer": "Das Fahrzeug ist ausgelegt für Fahrten außerhalb von Küstengewässern, in denen Windstärken bis einschließlich 8 Bft und signifikante Wellenhöhen bis einschließlich 4 m auftreten können.",
          "keywords": [
            "Fahrten",
            "Fahrzeug",
            "Küstengewässern",
            "Wellenhöhen",
            "Windstärken"
          ]
        },
        {
          "id": "seem2-12",
          "number": 12,
          "subtopic": "",
          "question": "Beschreiben Sie den Aufbau einer Radsteuerung mit Seilzügen.",
          "answer": "Das Rad dreht ein Zahnrad, über das eine Kette in der Steuersäule nach unten verläuft. Die Kette ist mit den Steuerseilen verbunden, welche über Umlenkrollen zum Ruderquadranten führen.",
          "keywords": [
            "Kette",
            "Ruderquadranten",
            "Steuerseilen",
            "Steuersäule",
            "Umlenkrollen"
          ]
        },
        {
          "id": "seem2-13",
          "number": 13,
          "subtopic": "",
          "question": "Wozu dient der Lenzkorb am Ansaugstutzen einer Lenzpumpe und wie erhalten Sie seine Funktionsfähigkeit?",
          "answer": "Der Lenzkorb verhindert Verunreinigungen und Verstopfungen der Lenzpumpe. Er muss regelmäßig überprüft und gereinigt werden.",
          "keywords": [
            "Lenzkorb",
            "Lenzpumpe",
            "Verstopfungen",
            "Verunreinigungen"
          ]
        },
        {
          "id": "seem2-14",
          "number": 14,
          "subtopic": "",
          "question": "Welche Lenzvorrichtungen und -möglichkeiten sollten auf jeder seegehenden Yacht vorhanden sein?",
          "answer": "Zwei voneinander unabhängige Bilgepumpen, von denen eine über Deck bedienbar ist, sowie 2 Pützen mit Leinen.",
          "keywords": [
            "Bilgepumpen",
            "Deck",
            "Leinen",
            "Pützen"
          ]
        },
        {
          "id": "seem2-15",
          "number": 15,
          "subtopic": "",
          "question": "Warum sollten Sie mehr als einen Anker an Bord haben, möglichst unterschiedlicher Art?",
          "answer": "1. Als Ersatz bei Verlust, 2. zum Verwarpen oder Verkatten, 3. um unterschiedliche Ankergründe berücksichtigen zu können, 4. um bei schwerem Wetter oder in Tidengewässern vor 2 Ankern liegen zu können.",
          "keywords": [
            "Ankergründe",
            "Ankern",
            "Ersatz",
            "Tidengewässern",
            "Verkatten"
          ]
        },
        {
          "id": "seem2-16",
          "number": 16,
          "subtopic": "",
          "question": "Wie viele Fender und Festmacherleinen sollten Sie mindestens an Bord haben?",
          "answer": "4 Festmacherleinen und 4 Fender.",
          "keywords": [
            "Fender",
            "Festmacherleinen"
          ]
        },
        {
          "id": "seem2-17",
          "number": 17,
          "subtopic": "",
          "question": "Was sollte auf jeder Motoryacht außer Festmacherleinen an Tauwerk vorhanden sein?",
          "answer": "Reservetauwerk, Wurfleine, Schlepptrosse und Ankerleine.",
          "keywords": [
            "Ankerleine",
            "Reservetauwerk",
            "Schlepptrosse",
            "Wurfleine"
          ]
        },
        {
          "id": "seem2-18",
          "number": 18,
          "subtopic": "",
          "question": "In welchen Publikationen finden Sie amtliche Informationen über die Ausrüstung und Sicherheit von Sportbooten, die auch bei der Beurteilung von Sportbootunfällen herangezogen werden?",
          "answer": "1. \"Sicherheit im See- und Küstenbereich, Sorgfaltsregeln für Wassersportler\", herausgegeben vom BSH, 2. \"Sicherheit auf dem Wasser, Leitfaden für Wassersportler\", herausgegeben vom Bundesministerium für Verkehr, Bau und Stadtentwicklung.",
          "keywords": [
            "Bundesministerium",
            "Küstenbereich",
            "Leitfaden",
            "Sicherheit",
            "Sorgfaltsregeln"
          ]
        },
        {
          "id": "seem2-19",
          "number": 19,
          "subtopic": "",
          "question": "Warum müssen auf Yachten zusätzlich zu elektrisch oder motorgetriebenen Lenzpumpen auch Handlenzpumpen vorhanden sein?",
          "answer": "Weil sie auch bei Strom- und Motorausfall betätigt werden können.",
          "keywords": [
            "Motorausfall",
            "Strom",
            "Weil"
          ]
        },
        {
          "id": "seem2-20",
          "number": 20,
          "subtopic": "",
          "question": "Warum ist Flüssiggas (Propan, Butan) auf einer Yacht besonders gefährlich?",
          "answer": "Es ist schwerer als Luft, sinkt nach unten und bildet mit Luft ein explosives Gemisch; es kann sich im Schiffsinneren (z. B. in der Bilge) sammeln.",
          "keywords": [
            "Bilge",
            "Gemisch",
            "Luft",
            "Schiffsinneren"
          ]
        },
        {
          "id": "seem2-21",
          "number": 21,
          "subtopic": "",
          "question": "Welche 4 Bedienelemente besitzt ein mit Handpumpe betriebenes Bord-WC auf einer Yacht?",
          "answer": "1. Seeventil und Spülwasserschlauch (Seewasser), 2. Handpumpe für Toilettenspülung, 3. Hebel zur Unterbrechung der Seewasserzufuhr (Handpumpe dient dann nur noch zum Abpumpen), 4. Abwasserschlauch (via Fäkalientank) zum Seeventil.",
          "keywords": [
            "Abpumpen",
            "Abwasserschlauch",
            "Fäkalientank",
            "Handpumpe",
            "Hebel"
          ]
        },
        {
          "id": "seem2-22",
          "number": 22,
          "subtopic": "",
          "question": "Beschreiben Sie in 5 Schritten die Bedienung eines Bord-WC auf einer Yacht.",
          "answer": "1. Seeventil für Seewasserspülung öffnen, 2. Handpumpe betätigen, sodass das Becken gespült wird und gleichzeitig die Fäkalien abfließen - ausgiebig spülen, 3. Seewasserzufuhr unterbrechen (Hebel umlegen), 4. Becken mit Handpumpe leer pumpen, 5. Seeventile für Zu- und Abfluss schließen.",
          "keywords": [
            "Abfluss",
            "Becken",
            "Fäkalien",
            "Handpumpe",
            "Hebel"
          ]
        },
        {
          "id": "seem2-23",
          "number": 23,
          "subtopic": "",
          "question": "Was versteht man unter der \"Stabilität\" eines Schiffes?",
          "answer": "Unter Stabilität eines Schiffes versteht man seine Eigenschaft, in aufrechter Lage zu schwimmen und sich aus einer Krängung wieder aufzurichten.",
          "keywords": [
            "Eigenschaft",
            "Krängung",
            "Lage",
            "Schiffes",
            "Stabilität"
          ]
        },
        {
          "id": "seem2-24",
          "number": 24,
          "subtopic": "",
          "question": "Wovon hängt die Stabilität eines Schiffes in ruhigem Wasser ab?",
          "answer": "Nennen Sie Beispiele für äußere Momente, welche die Stabilität beanspruchen. Die Stabilität eines Schiffes hängt ab von: 1. seiner Geometrie (Form), 2. der Gewichtsverteilung im Schiff (Ausrüstung, Crew, Ballast). Beispiele für eine Beanspruchung der Stabilität sind krängende Momente durch Seitenwind, Trossenzug oder Drehkreisfahrt bei schnellen Motoryachten.",
          "keywords": [
            "Ausrüstung",
            "Ballast",
            "Beanspruchung",
            "Beispiele",
            "Crew"
          ]
        },
        {
          "id": "seem2-25",
          "number": 25,
          "subtopic": "",
          "question": "Wovon hängt eine in ruhigem Wasser vorhandene Stabilität zusätzlich in schwerem Wetter ab?",
          "answer": "Die Stabilität in schwerem Wetter hängt zusätzlich von Wind und Seegang, besonders von brechenden Wellen ab.",
          "keywords": [
            "Seegang",
            "Stabilität",
            "Wellen",
            "Wetter",
            "Wind"
          ]
        },
        {
          "id": "seem2-26",
          "number": 26,
          "subtopic": "",
          "question": "Was versteht man unter 1. Formschwerpunkt (F)?",
          "answer": "2. Massenschwerpunkt (Gewichtsschwerpunkt, G)? Welche Kräfte wirken in den beiden Punkten? 1. Im Formschwerpunkt F kann man sich die Masse des vom Schiff verdrängten Wassers vereinigt denken. In F wirkt die Auftriebskraft senkrecht zur Wasseroberfläche nach oben. 2. Im Massenschwerpunkt G kann man sich die Masse des Schiffes einschließlich Ausrüstung und Besatzung vereinigt denken. In G wirkt die Gewichtskraft senkrecht zur Wasseroberfläche nach unten.",
          "keywords": [
            "Auftriebskraft",
            "Ausrüstung",
            "Besatzung",
            "Formschwerpunkt",
            "Gewichtskraft"
          ]
        },
        {
          "id": "seem2-27",
          "number": 27,
          "subtopic": "",
          "question": "Was geschieht bei einer Neigung des Schiffes, z. B. durch seitlichen Winddruck, solange sich die Lage des Massenschwerpunktes (Gewichtsschwerpunktes) nicht verändert?",
          "answer": "(Begründung!) Der Formschwerpunkt F wandert zur geneigten Seite aus, weil dort ein größerer Teil des Bootskörpers unter Wasser gelangt. Die Wirklinie der Auftriebskraft bekommt dadurch einen seitlichen Abstand zur Wirklinie der Gewichtskraft. Es entsteht ein Kräftepaar, der seitliche Abstand zwischen den Wirklinien ist der Hebelarm. Es entsteht ein aufrichtendes Moment, welches gleich dem Produkt aus Gewichtskraft und Hebelarm ist.",
          "keywords": [
            "Abstand",
            "Auftriebskraft",
            "Begründung",
            "Bootskörpers",
            "Formschwerpunkt"
          ]
        },
        {
          "id": "seem2-28",
          "number": 28,
          "subtopic": "",
          "question": "Was verstehen Sie unter \"Trimm\"?",
          "answer": "Der Trimm ist der Unterschied zwischen dem vorderen und dem achteren Tiefgang.",
          "keywords": [
            "Tiefgang",
            "Trimm",
            "Unterschied"
          ]
        },
        {
          "id": "seem2-29",
          "number": 29,
          "subtopic": "",
          "question": "Nennen Sie mögliche Trimmlagen einer Motoryacht.",
          "answer": "Ist der vordere Tiefgang größer als der achtere, ergibt dies einen vorlichen Trimm. Ist der achtere Tiefgang größer als der vordere, ergibt dies einen achterlichen Trimm. Sind beide gleich, liegt eine Yacht auf ebenem Kiel.",
          "keywords": [
            "Kiel",
            "Tiefgang",
            "Trimm",
            "Yacht"
          ]
        },
        {
          "id": "seem2-30",
          "number": 30,
          "subtopic": "",
          "question": "Was verstehen Sie unter \"Rumpfgeschwindigkeit\" und wovon ist sie abhängig?",
          "answer": "Rumpfgeschwindigkeit ist die rechnerische Höchstfahrt eines Verdrängers. Sie ist abhängig von der Wasserlinienlänge.",
          "keywords": [
            "Höchstfahrt",
            "Rumpfgeschwindigkeit",
            "Verdrängers",
            "Wasserlinienlänge"
          ]
        },
        {
          "id": "seem2-31",
          "number": 31,
          "subtopic": "",
          "question": "Erklären Sie die wesentlichen Vorteile des Dieselmotors gegenüber dem Benzinmotor.",
          "answer": "1. Der zum Betrieb erforderliche Kraftstoff (Diesel) ist weniger feuergefährlich als der für einen Benzinmotor. 2. Er hat einen geringeren Kraftstoffverbrauch.",
          "keywords": [
            "Benzinmotor",
            "Betrieb",
            "Diesel",
            "Kraftstoff",
            "Kraftstoffverbrauch"
          ]
        },
        {
          "id": "seem2-32",
          "number": 32,
          "subtopic": "",
          "question": "Erklären Sie die wesentlichen Nachteile des Benzinmotors gegenüber dem Dieselmotor.",
          "answer": "1. Das Benzin-Luft-Gemisch birgt Explosions- und Brandgefahr im Schiff. 2. Die Zündanlage kann störempflindlich gegen Feuchtigkeit und Nässe sein. 3. Der Motor hat einen höheren Kraftstoffverbrauch als der Dieselmotor.",
          "keywords": [
            "Benzin",
            "Brandgefahr",
            "Dieselmotor",
            "Explosions",
            "Feuchtigkeit"
          ]
        },
        {
          "id": "seem2-33",
          "number": 33,
          "subtopic": "",
          "question": "Wozu dient das Wendegetriebe eines Motors?",
          "answer": "1. Zum Ein- und Auskuppeln des Propellers, 2. zum Umsteuern des Propellers auf Rückwärtsfahrt, 3. zur Drehzahluntersetzung.",
          "keywords": [
            "Auskuppeln",
            "Drehzahluntersetzung",
            "Propellers",
            "Rückwärtsfahrt",
            "Umsteuern"
          ]
        },
        {
          "id": "seem2-34",
          "number": 34,
          "subtopic": "",
          "question": "Wodurch unterscheiden sich Einhebel- und Zweihebelschaltung?",
          "answer": "1. Bei Einhebelschaltung werden Gas und Getriebe gleichzeitig bedient. 2. Bei Zweihebelschaltung werden Gas und Getriebe mit 2 Hebeln getrennt bedient.",
          "keywords": [
            "Einhebelschaltung",
            "Getriebe",
            "Hebeln",
            "Zweihebelschaltung"
          ]
        },
        {
          "id": "seem2-35",
          "number": 35,
          "subtopic": "",
          "question": "Erklären Sie die Grundstruktur des Zweikreis-Kühlsystems bei der Motorkühlung.",
          "answer": "Das Zweikreis-Kühlsystem besteht aus einem geschlossenen inneren Süßwasserkreislauf mit eigenem Kühlwassertank und einem offenen Seewasserkreislauf. Beide Kreisläufe sind in einem thermostatgeregelten Wärmetauscher wärmetechnisch miteinander verbunden. Der innere Süßwasserkreislauf durchfließt den Motor.",
          "keywords": [
            "Beide",
            "Kreisläufe",
            "Kühlsystem",
            "Kühlwassertank",
            "Motor"
          ]
        },
        {
          "id": "seem2-36",
          "number": 36,
          "subtopic": "",
          "question": "Welchen Vorteil hat die Zweikreis-Kühlung gegenüber der Einkreis-Kühlung?",
          "answer": "Im Zweikreis-Kühlsystem wird im inneren geschlossenen Kühlwasserkreislauf Süßwasser gefahren. Dem geschlossenen Kühlwassersystem können Zusätze (z. B. Frostschutzmittel) zugegeben werden. Ablagerungen durch Fremdwasser werden verhindert. Durch eine thermostatische Regelung des Wärmeaustausches zwischen innerem und äußerem Kreislauf erreicht der Motor schneller seine Betriebstemperatur, diese wird auch konstant gehalten.",
          "keywords": [
            "Ablagerungen",
            "Betriebstemperatur",
            "Fremdwasser",
            "Frostschutzmittel",
            "Kreislauf"
          ]
        },
        {
          "id": "seem2-37",
          "number": 37,
          "subtopic": "",
          "question": "Was sollte nach dem Anlassen der Maschine kontrolliert werden?",
          "answer": "1. Kühlwasserdurchlauf, 2. Öldruck und Ladung, 3. Motorengeräusche und 4. Auspuffgase.",
          "keywords": [
            "Auspuffgase",
            "Kühlwasserdurchlauf",
            "Ladung",
            "Motorengeräusche",
            "Öldruck"
          ]
        },
        {
          "id": "seem2-38",
          "number": 38,
          "subtopic": "",
          "question": "Was können erste Störungsanzeichen im Motorbetrieb sein?",
          "answer": "Ungewöhnliche und fremde Motorengeräusche, Vibrationen, Verfärbung der Abgase, Aufleuchten der Ladekontrolle bzw. Öldruckkontrolle und die entsprechenden akustischen Warnungen.",
          "keywords": [
            "Abgase",
            "Aufleuchten",
            "Ladekontrolle",
            "Motorengeräusche",
            "Ungewöhnliche"
          ]
        },
        {
          "id": "seem2-39",
          "number": 39,
          "subtopic": "",
          "question": "Der Dieselmotor Ihres Bootes startet nicht. Welche Teile der Kraftstoffanlage sollten überprüft werden?",
          "answer": "1. Kraftstofffüllung, 2. Kraftstoffabsperrhahn, 3. Kraftstoffschläuche, 4. Kraftstofffilter, 5. Kraftstoffpumpe.",
          "keywords": [
            "Kraftstoffabsperrhahn",
            "Kraftstofffilter",
            "Kraftstofffüllung",
            "Kraftstoffpumpe",
            "Kraftstoffschläuche"
          ]
        },
        {
          "id": "seem2-40",
          "number": 40,
          "subtopic": "",
          "question": "Der Benzinmotor Ihres Bootes startet nicht. Welche Teile der Kraftstoffanlage sollten überprüft werden?",
          "answer": "1. Kraftstofffüllung, 2. Kraftstoffabsperrhahn, 3. Kraftstoffschläuche, 4. Kraftstofffilter, 5. Kraftstoffpumpe, 6. Vergaser.",
          "keywords": [
            "Kraftstoffabsperrhahn",
            "Kraftstofffilter",
            "Kraftstofffüllung",
            "Kraftstoffpumpe",
            "Kraftstoffschläuche"
          ]
        },
        {
          "id": "seem2-41",
          "number": 41,
          "subtopic": "",
          "question": "Welche Ursachen können zu einer Anzeige eines zu geringen Öldrucks führen?",
          "answer": "1. Ein verstopftes Ölsieb (Ölwanne), 2. ein zu geringer Ölstand, 3. ein verstopfter Ölfilter, 4. eine defekte Ölpumpe, 5. ein defektes Öldruckventil, 6. ein defektes Anzeigegerät.",
          "keywords": [
            "Anzeigegerät",
            "Öldruckventil",
            "Ölfilter",
            "Ölpumpe",
            "Ölsieb"
          ]
        },
        {
          "id": "seem2-42",
          "number": 42,
          "subtopic": "",
          "question": "Welche Ursachen kann das Aufleuchten der Warnlampe der Batterie-Ladekontrolle während des Betriebes zur Folge haben?",
          "answer": "1. Die Kabelverbindungen sind unterbrochen (oxydiert, lose oder gebrochen). 2. Der Keilriemen zum Antrieb der Lichtmaschine ist defekt und es erfolgt keine Stromerzeugung. 3. Der Regler oder die Lichtmaschine können defekt sein.",
          "keywords": [
            "Antrieb",
            "Kabelverbindungen",
            "Keilriemen",
            "Lichtmaschine",
            "Regler"
          ]
        },
        {
          "id": "seem2-43",
          "number": 43,
          "subtopic": "",
          "question": "Welche Fehlerursachen kann eine schwarze Färbung der Auspuffgase haben?",
          "answer": "Unvollständige Verbrennung durch: 1. kalten Motor, 2. verschmutzten Luftfilter, 3. schlechte Kraftstoffqualität, 4. verstellte Einspritzpumpe, 5. Überlastung des Motors.",
          "keywords": [
            "Einspritzpumpe",
            "Kraftstoffqualität",
            "Luftfilter",
            "Motor",
            "Motors"
          ]
        },
        {
          "id": "seem2-44",
          "number": 44,
          "subtopic": "",
          "question": "Welche Fehlerursachen kann eine weiße Färbung der Auspuffgase haben?",
          "answer": "Verdampfung von Wasser durch z. B. 1. Kondensat im Auspuffsystem bei noch kaltem Motor, 2. gerissenen Zylinderkopf, 3. defekte Zylinderkopfdichtung.",
          "keywords": [
            "Auspuffsystem",
            "Kondensat",
            "Motor",
            "Verdampfung",
            "Wasser"
          ]
        },
        {
          "id": "seem2-45",
          "number": 45,
          "subtopic": "",
          "question": "Welche Vorsichtsmaßnahmen müssen beim Tanken und Umfüllen von Brennstoffen getroffen werden?",
          "answer": "1. Maschine abstellen. 2. Offenes Feuer löschen (Rauchen einstellen). 3. Keine elektrischen Schalter betätigen. 4. Alle Öffnungen schließen. 5. Tragbare Tanks möglichst außerhalb des Bootes befüllen.",
          "keywords": [
            "Bootes",
            "Feuer",
            "Keine",
            "Maschine",
            "Offenes"
          ]
        },
        {
          "id": "seem2-46",
          "number": 46,
          "subtopic": "",
          "question": "Welche Maßnahmen sind vor dem Anlassen eines Dieselmotors zu treffen?",
          "answer": "1. Hauptstromschalter einschalten. 2. Kraftstoff- und Kühlwasserventile öffnen. 3. Getriebe auf \"neutral\" stellen. 4. Kühlwasser prüfen (Zweikreis-Kühlsystem).",
          "keywords": [
            "Getriebe",
            "Hauptstromschalter",
            "Kraftstoff",
            "Kühlsystem",
            "Kühlwasser"
          ]
        },
        {
          "id": "seem2-47",
          "number": 47,
          "subtopic": "",
          "question": "Welche Maßnahmen sind vor dem Anlassen eines Benzinmotors zu treffen?",
          "answer": "1. Hauptstromschalter einschalten. 2. Motorraum mit Bilge entlüften. 3. Kraftstoff- und Kühlwasserventile öffnen. 4. Getriebe auf \"neutral\" stellen. 5. Kühlwasser prüfen (Zweikreis-Kühlsystem).",
          "keywords": [
            "Bilge",
            "Getriebe",
            "Hauptstromschalter",
            "Kraftstoff",
            "Kühlsystem"
          ]
        },
        {
          "id": "seem2-48",
          "number": 48,
          "subtopic": "",
          "question": "Wie kontrollieren Sie den ordnungsgemäßen Betrieb des Motors?",
          "answer": "Kontrolle der Anzeigegeräte auf: 1. Öldruck und Öltemperatur, 2. Kühlwassertemperatur, 3. Motorendrehzahl und 4. Batterieladung. Außerdem auf Motorgeräusche, Vibrationen und Farbe der Auspuffgase achten.",
          "keywords": [
            "Anzeigegeräte",
            "Auspuffgase",
            "Außerdem",
            "Batterieladung",
            "Farbe"
          ]
        },
        {
          "id": "seem2-49",
          "number": 49,
          "subtopic": "",
          "question": "Welche Maßnahmen treffen Sie nach dem Abstellen des Motors?",
          "answer": "1. Kraftstoffventil schließen. 2. Hauptstromschalter (Batterie) ausschalten. 3. Seeventile schließen.",
          "keywords": [
            "Batterie",
            "Hauptstromschalter",
            "Kraftstoffventil",
            "Seeventile"
          ]
        },
        {
          "id": "seem2-50",
          "number": 50,
          "subtopic": "",
          "question": "Während Sie unter Maschine laufen, steigt plötzlich die Kühlwassertemperatur stark an. Ihre Yacht ist mit einem Saildrive-Antrieb ausgestattet. 1. Welche typische Ursache hat der Temperaturanstieg, wenn eine technische Störung unwahrscheinlich ist?",
          "answer": "2. Wie können Sie die Störung einfach beheben? 1. Fremdkörper (Folienstücke, Plastiktüten, Pflanzenteile o. Ä.) haben den Kühlwassereinlass verstopft. 2. Mehrmals abwechselnd vor- und zurückfahren, sodass sich die Fremdkörper vom Kühlwassereinlass lösen.",
          "keywords": [
            "Folienstücke",
            "Fremdkörper",
            "Kühlwassereinlass",
            "Mehrmals",
            "Pflanzenteile"
          ]
        },
        {
          "id": "seem2-51",
          "number": 51,
          "subtopic": "",
          "question": "Welche Fehlerursachen kann eine blaue Färbung der Auspuffgase haben?",
          "answer": "Zweitaktmotor: zu fettes Benzin-Öl-Gemisch. Es ist zu viel Schmieröl im Gemisch. Viertaktmotor: zu viel Schmieröl, Ölabstreifringe bzw. Kolbenringe defekt. In beiden Fällen verbrennt/verdampft Schmieröl.",
          "keywords": [
            "Benzin",
            "Fällen",
            "Gemisch",
            "Kolbenringe",
            "Schmieröl"
          ]
        },
        {
          "id": "seem2-52",
          "number": 52,
          "subtopic": "",
          "question": "Erklären Sie die Arbeitsweise in Bezug auf die Zündung beim Ottomotor und Dieselmotor.",
          "answer": "Beim Ottomotor wird das zündfähige Benzin-Luft-Gemisch im Vergaser durch Einspritzung erzeugt und mit Fremdzündung durch die Zündkerze gezündet. Beim Dieselmotor wird die angesaugte Luft hoch verdichtet und so erwärmt, dass der eingespritzte Dieselkraftstoff sich durch Eigenzündung in dieser komprimierten Luft entzündet.",
          "keywords": [
            "Benzin",
            "Dieselkraftstoff",
            "Dieselmotor",
            "Eigenzündung",
            "Einspritzung"
          ]
        },
        {
          "id": "seem2-53",
          "number": 53,
          "subtopic": "",
          "question": "Weshalb sollte dringend vermieden werden, dass beim Dieselmotor der Kraftstofftank leer gefahren wird?",
          "answer": "In die Einspritzpumpe/Kraftstoffleitung würde Luft gelangen. Startversuche nach dem Tanken wären erfolglos. Vor dem Tanken müssten die Leitung und die Einspritzpumpe entlüftet werden. Ablagerungen sowie Kondenswasserbildung durch Temperaturschwankungen können entstehen.",
          "keywords": [
            "Ablagerungen",
            "Einspritzpumpe",
            "Kondenswasserbildung",
            "Kraftstoffleitung",
            "Leitung"
          ]
        },
        {
          "id": "seem2-54",
          "number": 54,
          "subtopic": "",
          "question": "Während der Fahrt lässt plötzlich die Motordrehzahl abrupt nach und der Motor geht beim Zurücklegen des Gashebels gänzlich aus. Was kann die Ursache sein?",
          "answer": "Es ist möglicherweise ein schwimmender Fremdkörper (Leine, Trosse, Plane, Persening o. Ä.) in den Propeller geraten und behindert bzw. blockiert ihn.",
          "keywords": [
            "Fremdkörper",
            "Leine",
            "Persening",
            "Plane",
            "Propeller"
          ]
        },
        {
          "id": "seem2-55",
          "number": 55,
          "subtopic": "",
          "question": "In welchen Bereichen werden an Bord Batterien eingesetzt?",
          "answer": "Zum Starten und für das Bordnetz.",
          "keywords": [
            "Bordnetz",
            "Starten"
          ]
        },
        {
          "id": "seem2-56",
          "number": 56,
          "subtopic": "",
          "question": "Was ist beim Laden von Batterien dringend zu beachten?",
          "answer": "Die Batteriekästen bzw. -räume müssen ausreichend be- und entlüftet sein.",
          "keywords": [
            "Batteriekästen"
          ]
        },
        {
          "id": "seem2-57",
          "number": 57,
          "subtopic": "",
          "question": "1. Was bedeutet die Angabe einer Batteriekapazität \"2 x 60 Ah\"? (Begründung!)",
          "answer": "2. Welche Nettokapazität steht in dem Fall zur Verfügung? (Begründung!) 1. Es handelt sich um 2 Batterien (Akkus) mit jeweils 60 Amperestunden, insgesamt also 120 Ah Nennkapazität. 2. Dem entspricht eine Nettokapazität von etwa 72 Ah, da ein Akku kaum über 80 % seiner Nennkapazität geladen werden kann.",
          "keywords": [
            "Akku",
            "Akkus",
            "Amperestunden",
            "Batterien",
            "Begründung"
          ]
        },
        {
          "id": "seem2-58",
          "number": 58,
          "subtopic": "",
          "question": "Geben Sie die benötigte Strommenge (in Amperestunden) an, um bei einer 12-Volt-Anlage zwei Verbraucher mit je 24 Watt 10 Stunden betreiben zu können (mit Angabe der Berechnung)! Benötigte Strommenge je Verbraucher:",
          "answer": "24 : 12 = 2 Ampere mal Anzahl der Verbraucher mal Stunden ergibt: 2 x 2 A x 10 h = 40 Ah.",
          "keywords": [
            "Ampere",
            "Anzahl",
            "Stunden",
            "Verbraucher"
          ]
        },
        {
          "id": "seem2-59",
          "number": 59,
          "subtopic": "",
          "question": "Was könnte zu möglichen Motorschäden bis hin zum Kolbenfresser führen?",
          "answer": "Zu wenig Kühlwasser, Dampfblasen im Kühlwasserschauglas, Kühlwassertemperatur zu hoch, zu niedriger oder stetig fallender Öldruck, zu wenig oder nicht geeignetes Öl, fallende Drehzahl, zitternde Nadel im Drehzahlmesser, klopfende Motorgeräusche.",
          "keywords": [
            "Dampfblasen",
            "Drehzahl",
            "Drehzahlmesser",
            "Kühlwasser",
            "Kühlwasserschauglas"
          ]
        },
        {
          "id": "seem2-60",
          "number": 60,
          "subtopic": "",
          "question": "Wie muss Tauwerk beschaffen sein, das für Festmacherleinen, Anker- und Schlepptrossen verwendet wird?",
          "answer": "Es muss bruchfest und elastisch sein.",
          "keywords": []
        },
        {
          "id": "seem2-61",
          "number": 61,
          "subtopic": "",
          "question": "Wodurch können Sie verhindern, dass Festmacherleinen durch Schamfilen in Klüsen oder an Kanten an der Pier beschädigt werden?",
          "answer": "Durch einen gegen Verrutschen gesicherten Plastikschlauch, der über den Festmacher an der Scheuerstelle gezogen wird, hilfsweise mit Tuchstreifen.",
          "keywords": [
            "Festmacher",
            "Plastikschlauch",
            "Scheuerstelle",
            "Tuchstreifen",
            "Verrutschen"
          ]
        },
        {
          "id": "seem2-62",
          "number": 62,
          "subtopic": "",
          "question": "Was müssen Sie hinsichtlich der Festigkeit bedenken, wenn Sie Leinen zusammenknoten?",
          "answer": "Beim Knoten können Festigkeitsverluste bis zu 50 % auftreten.",
          "keywords": [
            "Festigkeitsverluste",
            "Knoten"
          ]
        },
        {
          "id": "seem2-63",
          "number": 63,
          "subtopic": "",
          "question": "Wodurch können Sie verhindern, dass bei Tauwerk aus unterschiedlichem Innen- und Außenmaterial die Seele in den Mantel rutscht?",
          "answer": "Durch einen genähten Takling.",
          "keywords": [
            "Takling"
          ]
        },
        {
          "id": "seem2-64",
          "number": 64,
          "subtopic": "",
          "question": "Wie sind längsseits liegende Fahrzeuge festzumachen?",
          "answer": "Ergänzen Sie die Skizze und benennen Sie die Leinen. 1. Achterleine, 2. Achterspring, 3. Vorspring, 4. Vorleine.",
          "keywords": [
            "Achterleine",
            "Achterspring",
            "Ergänzen",
            "Leinen",
            "Skizze"
          ]
        },
        {
          "id": "seem2-65",
          "number": 65,
          "subtopic": "",
          "question": "Wie können Sie mit Hilfe von zwei Fendern und einem Fenderbrett Ihr Boot festmachen, wenn die Pier mit vorspringenden Pfählen versehen ist?",
          "answer": "Ergänzen Sie die Skizze mit Leinen.",
          "keywords": [
            "Ergänzen",
            "Leinen",
            "Skizze"
          ]
        },
        {
          "id": "seem2-66",
          "number": 66,
          "subtopic": "",
          "question": "Was ist beim Reinigen eines mit Antifouling behandelten Unterwasserschiffes zu beachten?",
          "answer": "Umweltschutzbestimmungen beachten, d. h. das Schiff nur auf einem entsprechend ausgerüsteten Reinigungsplatz abspritzen und Wasser und Schmutz auffangen, also nicht in die Kanalisation lassen.",
          "keywords": [
            "Kanalisation",
            "Reinigungsplatz",
            "Schiff",
            "Schmutz",
            "Umweltschutzbestimmungen"
          ]
        },
        {
          "id": "seem2-67",
          "number": 67,
          "subtopic": "",
          "question": "Ein funktionsfähiges elektrisches Gerät arbeitet an Bord nicht. Nennen Sie häufige Ursachen und was kann zur Behebung getan werden?",
          "answer": "1. Schlechte Kontakte und Korrosion. 2. Kontakte fest anziehen, korrodierte Stellen mit feinstem Schleifpapier säubern, Kontaktspray verwenden.",
          "keywords": [
            "Kontakte",
            "Kontaktspray",
            "Korrosion",
            "Schlechte",
            "Schleifpapier"
          ]
        },
        {
          "id": "seem2-68",
          "number": 68,
          "subtopic": "",
          "question": "Warum müssen Schäden im Gelcoat unverzüglich beseitigt werden?",
          "answer": "Das Laminat unter der Gelcoatschicht nimmt Wasser auf und wird dadurch geschädigt.",
          "keywords": [
            "Gelcoatschicht",
            "Laminat",
            "Wasser"
          ]
        },
        {
          "id": "seem2-69",
          "number": 69,
          "subtopic": "",
          "question": "Welche Daten sollten an Bord mindestens im Logbuch dokumentiert werden?",
          "answer": "1. Namen und Funktionen der Crewmitglieder, 2. Beginn und Ende einer Fahrt und 3. in angemessenen Zeitabständen: Position, Kurs, Geschwindigkeit, Strömung, Wetter, Luftdruck.",
          "keywords": [
            "Beginn",
            "Crewmitglieder",
            "Ende",
            "Fahrt",
            "Funktionen"
          ]
        },
        {
          "id": "seem2-70",
          "number": 70,
          "subtopic": "",
          "question": "Welche Sicherheitsmaßnahmen müssen auch bei ruhigem Wetter bei Nachtfahrten beachtet werden?",
          "answer": "1. Bei jeder Tätigkeit an Deck Rettungswesten und Sicherheitsgurt tragen. 2. Nur mit am Schiff eingepickter Sicherheitsleine über Deck gehen.",
          "keywords": [
            "Deck",
            "Rettungswesten",
            "Schiff",
            "Sicherheitsgurt",
            "Sicherheitsleine"
          ]
        },
        {
          "id": "seem2-71",
          "number": 71,
          "subtopic": "",
          "question": "Was verstehen Sie unter \"Radeffekt\" des Schiffspropellers (Schraube)?",
          "answer": "\"Radeffekt\" ist die seitliche Versetzung des Hecks durch die drehende Schraube.",
          "keywords": [
            "Hecks",
            "Radeffekt",
            "Schraube",
            "Versetzung"
          ]
        },
        {
          "id": "seem2-72",
          "number": 72,
          "subtopic": "",
          "question": "Mit welchen 4 Angaben werden Propeller auf Yachten beschrieben?",
          "answer": "Anzahl der Flügel, Größe ihrer Fläche, Durchmesser und Steigung.",
          "keywords": [
            "Anzahl",
            "Durchmesser",
            "Fläche",
            "Flügel",
            "Größe"
          ]
        },
        {
          "id": "seem2-73",
          "number": 73,
          "subtopic": "",
          "question": "Wie wirkt der rechts- bzw. linksdrehende Propeller auf das Schiffsheck bei Rückwärtsfahrt?",
          "answer": "Ein rechtsdrehender Propeller versetzt das Heck bei Rückwärtsfahrt nach Backbord, ein linksdrehender nach Steuerbord.",
          "keywords": [
            "Backbord",
            "Heck",
            "Propeller",
            "Rückwärtsfahrt",
            "Steuerbord"
          ]
        },
        {
          "id": "seem2-74",
          "number": 74,
          "subtopic": "",
          "question": "1. Wie drehen bei einem Zweischrauber in der Regel die Propeller?",
          "answer": "2. Welchen manövriertechnischen Vorteil haben Yachten mit 2 Propellern? 1. Gegenläufig. 2. Mit 2 Propellern kann man nahezu auf der Stelle drehen, indem man einen Propeller vorwärts und einen Propeller rückwärts arbeiten lässt. Die Manövrierfähigkeit wird dadurch verbessert.",
          "keywords": [
            "Gegenläufig",
            "Manövrierfähigkeit",
            "Propeller",
            "Propellern",
            "Stelle"
          ]
        },
        {
          "id": "seem2-75",
          "number": 75,
          "subtopic": "",
          "question": "Warum gibt es bei einem Zweischrauben-Schiff (in der Regel) keinen Radeffekt?",
          "answer": "Die Drehrichtungen der Schrauben sind gegenläufig. So heben sich die jeweiligen Radeffekte gegenseitig auf.",
          "keywords": [
            "Drehrichtungen",
            "Radeffekte",
            "Schrauben"
          ]
        },
        {
          "id": "seem2-76",
          "number": 76,
          "subtopic": "",
          "question": "Was ist ein Bugstrahlruder und wozu dient es?",
          "answer": "Eine im Bug einer Yacht befindliche Röhre mit einem Propeller, mit dem ein Querschub und damit ein Drehen des Buges bei geringen Vorausgeschwindigkeiten erreicht werden kann.",
          "keywords": [
            "Buges",
            "Drehen",
            "Propeller",
            "Querschub",
            "Röhre"
          ]
        },
        {
          "id": "seem2-77",
          "number": 77,
          "subtopic": "",
          "question": "Wann sollte aus Gründen der Sicherheit auf Motoryachten der Außenfahrstand besetzt werden?",
          "answer": "1. Bei verminderter Sicht zum Wahrnehmen der Schallsignale. 2. Bei Manövern in engen Gewässern zur besseren Rundumsicht.",
          "keywords": [
            "Gewässern",
            "Manövern",
            "Rundumsicht",
            "Schallsignale",
            "Sicht"
          ]
        },
        {
          "id": "seem2-78",
          "number": 78,
          "subtopic": "",
          "question": "Warum empfiehlt sich beim Schleppen die Verwendung einer Hahnepot und wo sollte sie belegt werden?",
          "answer": "1. Eine Hahnepot verteilt die Zugkräfte auf mehrere Belegpunkte für die Schleppleine an der Durchführung an Bug und auf den beiden Bootsseiten. 2. Zum Belegen eignen sich zumeist kräftigere Klampen für die Vorspring auf den Bootsseiten.",
          "keywords": [
            "Belegen",
            "Belegpunkte",
            "Bootsseiten",
            "Durchführung",
            "Hahnepot"
          ]
        },
        {
          "id": "seem2-79",
          "number": 79,
          "subtopic": "",
          "question": "Sie wollen in eine Box einlaufen. Wie bereiten Sie die Achterleinen vor und machen sie fest?",
          "answer": "Achterleinen mit Auge versehen. Möglichst fühzeitig über die Pfähle legen, bei seitlichem Wind zuerst über den Luvpfahl.",
          "keywords": [
            "Achterleinen",
            "Auge",
            "Luvpfahl",
            "Möglichst",
            "Pfähle"
          ]
        },
        {
          "id": "seem2-80",
          "number": 80,
          "subtopic": "",
          "question": "Welche Vorbereitung haben Sie für ein Anlegemanöver zu treffen?",
          "answer": "1. Crew für Manöver einteilen. 2. Leinen und Fender bereitlegen.",
          "keywords": [
            "Crew",
            "Fender",
            "Leinen",
            "Manöver"
          ]
        },
        {
          "id": "seem2-81",
          "number": 81,
          "subtopic": "",
          "question": "Beschreiben Sie das Fahrmanöver mit einem Zweischrauben-Schiff bei einer Drehung auf engem Raum",
          "answer": "über Steuerbord. Ruder hart Steuerbord, Steuerbordmaschine rückwärts, Backbordmaschine voraus.",
          "keywords": [
            "Backbordmaschine",
            "Ruder",
            "Steuerbord",
            "Steuerbordmaschine"
          ]
        },
        {
          "id": "seem2-82",
          "number": 82,
          "subtopic": "",
          "question": "Bei welchen Manövern können Sie ein Bugstrahlruder sinnvoll einsetzen?",
          "answer": "1. Beim An- und Ablegen. 2. Beim Drehen auf engem Raum.",
          "keywords": [
            "Ablegen",
            "Drehen",
            "Raum"
          ]
        },
        {
          "id": "seem2-83",
          "number": 83,
          "subtopic": "",
          "question": "Sie liegen längsseits mit der Stuerbordseite an einer Pier.",
          "answer": "Beschreiben Sie ein Ablegemanöver unter gleichzeitigem Einsatz von Bugstrahlruder und Maschine. 1. Hebel für Bugstrahlruder nach Backbord legen, sodass der Bug von der Pier weggedrückt wird (nach Backbord schwenkt) und gleichzeitig 2. Ruderlage deutlich nach Steuerbord und langsame Fahrt voraus, sodass das Heck nach Backbord ausschwenkt. So wird das Schiff fast parallel von der Pier abgedrückt.",
          "keywords": [
            "Ablegemanöver",
            "Backbord",
            "Beschreiben",
            "Bugstrahlruder",
            "Einsatz"
          ]
        },
        {
          "id": "seem2-84",
          "number": 84,
          "subtopic": "",
          "question": "Warum kann das Anlaufen eines Hafens bei auflandigem Starkwind bzw. schwerem Wetter gefährlich werden?",
          "answer": "Gefahr durch Grundseen bzw. Kreuzseen. Möglichkeit von Querstromwirbeln.",
          "keywords": [
            "Gefahr",
            "Grundseen",
            "Kreuzseen",
            "Möglichkeit",
            "Querstromwirbeln"
          ]
        },
        {
          "id": "seem2-85",
          "number": 85,
          "subtopic": "",
          "question": "Sie werden in Küstennähe von einem Sturm überrascht. Wie verhalten Sie sich mit einer Motoryacht?",
          "answer": "1. Möglichst rasch versuchen, Hafen oder Landschutz anzulaufen. 2. Ggf. Motoryacht mit langsamer Fahrt gegen die See halten. 3. Sicherheitsmaßnahmen für die Besatzung treffen.",
          "keywords": [
            "Besatzung",
            "Fahrt",
            "Hafen",
            "Landschutz",
            "Motoryacht"
          ]
        },
        {
          "id": "seem2-86",
          "number": 86,
          "subtopic": "",
          "question": "Worauf müssen Sie achten, wenn Sie in Tidengewässern längsseits einer Pier festgemacht haben?",
          "answer": "1. Die Wassertiefe muss auch bei Niedrigwasser ausreichen oder sicheres Aufsetzen muss gewährleistet sein. 2. Die Leinen müssen für den Tidenstieg oder -fall ausreichend lang sein. Bei größerem Tidenhub darf das Fahrzeug keinesfalls unbeaufsichtigt bleiben.",
          "keywords": [
            "Aufsetzen",
            "Fahrzeug",
            "Leinen",
            "Niedrigwasser",
            "Tidenhub"
          ]
        },
        {
          "id": "seem2-87",
          "number": 87,
          "subtopic": "",
          "question": "Sie fahren bei frischem Wind und mitlaufendem Strom (Wind gegen Strom) nach Luv. Welche Auswirkungen hat ein gegen den Wind setzender Strom auf den Seegang?",
          "answer": "Durch den Strom entsteht eine kurze, steile und kabbelige See.",
          "keywords": [
            "Strom"
          ]
        },
        {
          "id": "seem2-88",
          "number": 88,
          "subtopic": "",
          "question": "Wie wirkt sich mitlaufender Strom auf die Fahrt eines Fahrzeugs und die Loganzeige aus?",
          "answer": "1. Der Strom erhöht die Fahrt über Grund. 2. Das Log zeigt dies nicht an.",
          "keywords": [
            "Fahrt",
            "Grund",
            "Strom"
          ]
        },
        {
          "id": "seem2-89",
          "number": 89,
          "subtopic": "",
          "question": "Welcher Kurswinkel ist bei schwerer See am besten geeignet, das Aufschlagen des Bootes zu verringern?",
          "answer": "Ein Kurswinkel von 20 bis 25° bezogen auf die Seegangsrichtung ist am besten geeignet, hartes Aufschlagen zu verringern.",
          "keywords": [
            "Aufschlagen",
            "Kurswinkel",
            "Seegangsrichtung"
          ]
        },
        {
          "id": "seem2-90",
          "number": 90,
          "subtopic": "",
          "question": "Welche Hilfsmittel können Sie einsetzen, um einen Überbordgefallenen an Deck zu bekommen?",
          "answer": "Bewegliche (und gesicherte) Badeleiter, beschwerte Trittschlinge, Rettungstalje, Bergegurt.",
          "keywords": [
            "Badeleiter",
            "Bergegurt",
            "Bewegliche",
            "Rettungstalje",
            "Trittschlinge"
          ]
        },
        {
          "id": "seem2-91",
          "number": 91,
          "subtopic": "",
          "question": "Welche Sofortmaßnahmen sind einzuleiten, wenn jemand über Bord gefallen ist?",
          "answer": "1. Ruf: \"Mensch über Bord!\", 2. Rettungsmittel zuwerfen, 3. Ausguck halten, Mann im Auge behalten, 4. Maschine starten, 5. \"Mensch-über-Bord-Manöver\" einleiten, 6. Notmeldung abgeben, 7. ggf. Markierungsblitzboje werfen, 8. ggf. MOB-Taste eines satellitengestützten Navigationsgerätes drücken, 9. Bergung durchführen.",
          "keywords": [
            "Auge",
            "Ausguck",
            "Bergung",
            "Bord",
            "Mann"
          ]
        },
        {
          "id": "seem2-92",
          "number": 92,
          "subtopic": "",
          "question": "Welche Maßnahmen können gegen das Überbordfallen getroffen werden?",
          "answer": "1. Sicherheitsgurte anlegen und einpicken. 2. Anbringen von Strecktau oder Laufleinen von Bug zum Heck. 3. Crew auf Befestigungspunkte (Einpickpunkte für Karabinerhaken) hinweisen.",
          "keywords": [
            "Anbringen",
            "Befestigungspunkte",
            "Crew",
            "Einpickpunkte",
            "Heck"
          ]
        },
        {
          "id": "seem2-93",
          "number": 93,
          "subtopic": "",
          "question": "Nennen Sie die grundsätzlichen Schritte und ihre Ziele zur Rettung einer über Bord gegangenen Person.",
          "answer": "1. Maschine starten, 2. Suche, Herstellung eines Sichtkontaktes zur über Bord gegangenen Person, 3. \"Mensch-über-Bord-Manöver\", Annäherung an die im Wasser treibende Person und Herstellung einer ersten Leinenverbindung, 4. Bergung, sicheres und schnelles Anbordnehmen der Person, 5. Erste Hilfe, Betreuung, 6. ggf. Notalarm abgeben.",
          "keywords": [
            "Anbordnehmen",
            "Annäherung",
            "Bergung",
            "Betreuung",
            "Bord"
          ]
        },
        {
          "id": "seem2-94",
          "number": 94,
          "subtopic": "",
          "question": "Mit welchen Hilfsmitteln können Sie den Bezugspunkt (internationaler Begriff: Datum) für die Suche nach einem Überbordgefallenen sichern?",
          "answer": "1. Markierungsblitzboje, 2. MOB-Taste eines satellitengestützten Navigationsgerätes (z. B. GPS).",
          "keywords": [
            "Markierungsblitzboje",
            "Navigationsgerätes",
            "Taste"
          ]
        },
        {
          "id": "seem2-95",
          "number": 95,
          "subtopic": "",
          "question": "Was gehört u. a. zur Sicherheitsausrüstung z. B. einer 10-m-Yacht?",
          "answer": "Nennen Sie mindestens 6 Ausrüstungsgegenstände. 1. Lenzpumpen und Pützen, 2. Lecksicherungsmaterial, 3. Feuerlöscher, 4. Werkzeug und Ersatzteile, 5. Seenotsignalmittel, 6. Handlampen, 7. Funkeinrichtung, 8. Anker, 9. Erste-Hilfe-Ausrüstung, 10. Radarreflektor und 11. Rettungsmittel.",
          "keywords": [
            "Anker",
            "Ausrüstung",
            "Ausrüstungsgegenstände",
            "Ersatzteile",
            "Erste"
          ]
        },
        {
          "id": "seem2-96",
          "number": 96,
          "subtopic": "",
          "question": "Was gehört zur Sicherheitsausrüstung der Besatzung in der Küstenfahrt?",
          "answer": "1. Rettungsweste und Sicherheitsgurt (Lifebelt) für jedes Besatzungsmitglied, 2. Rettungsfloß (Rettungsinsel), 3. Rettungskragen mit Tag- und Nachtsignal und 4. Erste-Hilfe-Ausrüstung mit Anleitung.",
          "keywords": [
            "Anleitung",
            "Ausrüstung",
            "Besatzungsmitglied",
            "Erste",
            "Hilfe"
          ]
        },
        {
          "id": "seem2-97",
          "number": 97,
          "subtopic": "",
          "question": "Wie erhalten Sie Kenntnis über das nächste Wartungsdatum eines Rettungsfloßes?",
          "answer": "Die runde, auf der Insel klebende farbige Serviceplakette oder das bei der letzten Wartung mitgelieferte Zertifikat geben Auskunft über den nächsten Wartungstermin.",
          "keywords": [
            "Auskunft",
            "Insel",
            "Serviceplakette",
            "Wartung",
            "Wartungstermin"
          ]
        },
        {
          "id": "seem2-98",
          "number": 98,
          "subtopic": "",
          "question": "Worauf müssen Sie bei Ihren Automatikrettungswesten hinsichtlich der Funktionssicherheit achten?",
          "answer": "Auf regelmäßige Wartung. Wartungsfälligkeit erkennbar an der farbigen Serviceplakette.",
          "keywords": [
            "Serviceplakette",
            "Wartung",
            "Wartungsfälligkeit"
          ]
        },
        {
          "id": "seem2-99",
          "number": 99,
          "subtopic": "",
          "question": "Was ist auf Deck einer Yacht ein Strecktau (auch Laufleine genannt) und wozu dient es?",
          "answer": "Ein neben der Fußreling verlaufender Draht, Gurt oder eine starke Leine zwischen Cockpit und Vorschiff straff gespannt zum Einpicken der Sicherheitsleine (Lifebelts).",
          "keywords": [
            "Cockpit",
            "Draht",
            "Einpicken",
            "Fußreling",
            "Gurt"
          ]
        },
        {
          "id": "seem2-100",
          "number": 100,
          "subtopic": "",
          "question": "Welche Seenotsignalmittel sollten Sie an Bord haben?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Handfackeln, rot, 2. Handraketen, rot, 3. Rauchfackeln oder Rauchtopf, orange, 4. Signalpistole mit Munition, 5. Seewasserfärber, 6. Signalflaggen N und C, 7. Signallampe, 8. Seenotfunkboje.",
          "keywords": [
            "Beispiele",
            "Handfackeln",
            "Handraketen",
            "Munition",
            "Nennen"
          ]
        },
        {
          "id": "seem2-101",
          "number": 101,
          "subtopic": "",
          "question": "Welche Feuerlöscheinrichtungen sollten an Bord sein?",
          "answer": "1. Feuerlöscher (ABC-Pulverlöscher und eventuell CO22-Löscher), 2. Pütz zum Löschen von Bränden fester Stoffe, 3. Feuerlöschdecke, 4. Löschdurchlass für geschlossene Motorräume, der das Löschen von Bränden mit CO -Löschern ohne Sauerstoffzutritt 2 ermöglicht.",
          "keywords": [
            "Bränden",
            "Feuerlöschdecke",
            "Feuerlöscher",
            "Löschdurchlass",
            "Löschen"
          ]
        },
        {
          "id": "seem2-102",
          "number": 102,
          "subtopic": "",
          "question": "Welche Feuerlöscharten sind für Sportboote geeignet?",
          "answer": "Wie und wo sind sie an Bord unterzubringen? 1. Der ABC-Pulverlöscher, für geschlossene Motorräume der CO -Löscher. 2 2. Der Feuerlöscher muss gebrauchsfertig und leicht erreichbar sein, CO 2 -Löscher nicht im Schiffsinneren unterbringen (Erstickungsgefahr bei Leckage). 3. Er soll in der Nähe der Maschinenräume, der Kombüse sowie der Koch- oder Heizstelle montiert sein.",
          "keywords": [
            "Bord",
            "Erstickungsgefahr",
            "Feuerlöscher",
            "Heizstelle",
            "Koch"
          ]
        },
        {
          "id": "seem2-103",
          "number": 103,
          "subtopic": "",
          "question": "Wie wird die ständige Funktionssicherheit eines Feuerlöschers sichergestellt?",
          "answer": "1. Durch Einhaltung des vorgeschriebenen Prüftermins, ersichtlich aus der Prüfplakette. 2. Der Feuerlöscher muss vor Feuchtigkeit und Korrosion geschützt werden.",
          "keywords": [
            "Einhaltung",
            "Feuchtigkeit",
            "Feuerlöscher",
            "Korrosion",
            "Prüfplakette"
          ]
        },
        {
          "id": "seem2-104",
          "number": 104,
          "subtopic": "",
          "question": "Wie wird ein Brand an Bord wirksam bekämpft?",
          "answer": "1. Alle Öffnungen schließen, 2. Brennstoffzufuhr (Hauptschalter) unterbrechen, 3. Feuerlöscher erst am Brandherd betätigen, 4. Feuer von unten und von vorn bekämpfen, 5. Löschdecke einsetzen, 6. Flüssigkeitsbrände nicht mit Wasser bekämpfen.",
          "keywords": [
            "Brandherd",
            "Brennstoffzufuhr",
            "Feuer",
            "Feuerlöscher",
            "Flüssigkeitsbrände"
          ]
        },
        {
          "id": "seem2-105",
          "number": 105,
          "subtopic": "",
          "question": "Was ist vor Reisebeginn beim Seeklarmachen zu überprüfen und zu beachten?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Seetüchtigkeit der Yacht, 2. Treibstoffvorrat, 3. Navigationsunterlagen, 4. Sicherheitseinweisung der Besatzung, 5. Rettungsmittel, 6. Seenotsignale, 7. Trinkwasser- und Proviantvorräte, 8. Funktionsfähigkeit des Motors, 9. Funktionsfähigkeit der elektronischen Navigationsgeräte, 10. Lenzeinrichtungen, 11. Feuerlöscher, 12. Boots- und Personalpapiere.",
          "keywords": [
            "Beispiele",
            "Besatzung",
            "Boots",
            "Feuerlöscher",
            "Funktionsfähigkeit"
          ]
        },
        {
          "id": "seem2-106",
          "number": 106,
          "subtopic": "",
          "question": "Was gehört zur Sicherheitseinweisung der gesamten Besatzung vor Reisebeginn?",
          "answer": "Nennen Sie mindestens 6 Beispiele. Einweisung in Gebrauch und Bedienung 1. der Rettungswesten und Sicherheitsgurte, 2. des Rettungsfloßes, 3. der Signalmittel, 4. der Lenzpumpen, 5. der Seeventile und des Bord-WC, 6. der Kocheinrichtung, 7. der Feuerlöscher, 8. der Motoranlage, 9. der Elektroanlage, 10. des Rundfunkgerätes und der UKW-Seefunkanlage, 11. Verhalten bei \"Mensch-über-Bord\", 12. Erkennen der Seekrankheit und entsprechendes Verhalten.",
          "keywords": [
            "Bedienung",
            "Beispiele",
            "Bord",
            "Einweisung",
            "Elektroanlage"
          ]
        },
        {
          "id": "seem2-107",
          "number": 107,
          "subtopic": "",
          "question": "In welche technischen Einrichtungen/Ausrüstungen muss der Schiffsführer die Besatzung vor Reiseantritt unbedingt einweisen?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Ankergeschirr, 2. Lenzeinrichtung, 3. Feuerlöscheinrichtungen, 4. Motoranlage, 5. Seeventile, 6. UKW-Seefunkanlage, 7. MOB-Taste vom satellitengestützten Navigationsgerät (z. B. GPS), 8. Seenotsignalmittel, 9. Notrudereinrichtung.",
          "keywords": [
            "Ankergeschirr",
            "Beispiele",
            "Feuerlöscheinrichtungen",
            "Lenzeinrichtung",
            "Motoranlage"
          ]
        },
        {
          "id": "seem2-108",
          "number": 108,
          "subtopic": "",
          "question": "Welche Sicherheitsmaßnahmen sind vor jedem Auslaufen durchzuführen?",
          "answer": "Nennen Sie mindestens 6 Beispiele. 1. Wetterbericht einholen, 2. Kontrolle der Sicherheitsausrüstung, 3. Kontrolle von Motor und Schaltung, 4. Kontrolle der nautischen Geräte, 5. Kontrolle der Bilge, 6. Überprüfen des Wasser- und Kraftstoffvorrats, 7. Kontrolle der Schall- und Lichtsignaleinrichtung, 8. Kontrolle der Navigationslichter, 9. Bereitlegen der aktuellen Seekarten und nautischen Veröffentlichungen.",
          "keywords": [
            "Beispiele",
            "Bereitlegen",
            "Bilge",
            "Geräte",
            "Kontrolle"
          ]
        },
        {
          "id": "seem2-109",
          "number": 109,
          "subtopic": "",
          "question": "Warum sollten alle Crewmitglieder Lage und Funktion sämtlicher Pumpen und Ventile kennen?",
          "answer": "Damit im Bedarfsfall sie jeder bedienen kann.",
          "keywords": [
            "Bedarfsfall",
            "Damit"
          ]
        },
        {
          "id": "seem2-110",
          "number": 110,
          "subtopic": "",
          "question": "Warum sollte die Crew in die Funktion des Bord-WC eingewiesen werden?",
          "answer": "Weil durch unsachgemäße Bedienung Wasser ins Bootsinnere gelangen kann.",
          "keywords": [
            "Bedienung",
            "Bootsinnere",
            "Wasser",
            "Weil"
          ]
        },
        {
          "id": "seem2-111",
          "number": 111,
          "subtopic": "",
          "question": "Warum sollte die Crew vor Reisebeginn in die Funktion des Ankergeschirrs und die Durchführung eines Ankermanövers eingewiesen werden?",
          "answer": "Damit jeder den Anker sicher ausbringen und einholen kann.",
          "keywords": [
            "Anker",
            "Damit"
          ]
        },
        {
          "id": "seem2-112",
          "number": 112,
          "subtopic": "",
          "question": "Wie verhalten Sie sich, wenn Ihr Schiff leckgeschlagen ist?",
          "answer": "1. Meldung abgeben. 2. Je nach Erfordernissen Fahrt aus dem Schiff nehmen. 3. Lenzpumpen betätigen, Lecksuche, Leck mit Bordmitteln abdichten. 4. Küste bzw. flaches Wasser ansteuern. 5. Fahrzeug so trimmen, dass Leckstelle aus dem Wasser kommt bzw. möglichst wenig unter Wasser ist.",
          "keywords": [
            "Bordmitteln",
            "Erfordernissen",
            "Fahrt",
            "Fahrzeug",
            "Küste"
          ]
        },
        {
          "id": "seem2-113",
          "number": 113,
          "subtopic": "",
          "question": "Was tun Sie, wenn Ihr Schiff leckgeschlagen ist und das Wasser im Schiff trotz aller Maßnahmen weiter steigt?",
          "answer": "1. Notzeichen geben, Funkmeldung abgeben, ggf. Radartransponder einschalten. 2. Verlassen des Bootes vorbereiten, Rettungswesten anlegen, Rettungsfloß klarmachen. 3. Wenn möglich, ruhiges Flachwasser anlaufen und Schiff auf Grund setzen.",
          "keywords": [
            "Bootes",
            "Flachwasser",
            "Funkmeldung",
            "Grund",
            "Notzeichen"
          ]
        },
        {
          "id": "seem2-114",
          "number": 114,
          "subtopic": "",
          "question": "Welche Folgen können Grundberührungen und harte Stöße, z. B. bei Anlegemanövern oder Kollisionen mit treibenden Gegenständen, haben?",
          "answer": "1. Eine Beschädigung der Bordwand kann eintreten. 2. Es kann Sinkgefahr entstehen.",
          "keywords": [
            "Beschädigung",
            "Bordwand",
            "Sinkgefahr"
          ]
        },
        {
          "id": "seem2-115",
          "number": 115,
          "subtopic": "",
          "question": "Welche grundsätzliche Verhaltensweise sollte beachtet und welche Maßnahmen sollten ergriffen werden, wenn Ihr Schiff in Seenot kommt?",
          "answer": "1. Ruhe bewahren und überlegt handeln. 2. Notalarm abgeben, ggf. Radartransponder einschalten. 3. Rettungsfloß klarmachen. 4. Rettungsweste und Sicherheitsgurt anlegen. 5. So lange wie möglich an Bord bleiben. 6. Wärmende Kleidung anziehen.",
          "keywords": [
            "Bord",
            "Kleidung",
            "Notalarm",
            "Radartransponder",
            "Rettungsfloß"
          ]
        },
        {
          "id": "seem2-116",
          "number": 116,
          "subtopic": "",
          "question": "Welche Maßnahmen treffen Sie, bevor Sie von Ihrem Fahrzeug in ein Rettungsfloß übersteigen?",
          "answer": "1. Rettungsweste und Sicherheitsgurt anlegen. 2. Wärmende Kleidung anziehen. 3. Nach Möglichkeit vorher reichlich warme Flüssigkeit trinken. 4. Soweit noch nicht geschehen, Proviant, Wasser, Seenotsignalmittel und ggf. Seenotfunkbake, Radartransponder und UKW- Handsprechfunkgeräte in das Rettungsfloß bringen.",
          "keywords": [
            "Flüssigkeit",
            "Handsprechfunkgeräte",
            "Kleidung",
            "Möglichkeit",
            "Proviant"
          ]
        },
        {
          "id": "seem2-117",
          "number": 117,
          "subtopic": "",
          "question": "Warum sollte ein sinkendes Schiff im Notfall so spät wie möglich verlassen werden?",
          "answer": "1. Die Überlebensmöglichkeiten sind auf dem Schiff größer. 2. Ein Schiff ist besser zu orten. 3. Einstieg in das Rettungsfloß und Aufenthalt können sehr schwierig sein.",
          "keywords": [
            "Aufenthalt",
            "Einstieg",
            "Rettungsfloß",
            "Schiff",
            "Überlebensmöglichkeiten"
          ]
        },
        {
          "id": "seem2-118",
          "number": 118,
          "subtopic": "",
          "question": "Erklären Sie die Handhabung der Hubschrauberrettungsschlinge im Einsatz!",
          "answer": "1. Bei offener Rettungsschlinge: zuerst den Karabinerhaken einpicken. 2. Mit dem Kopf und beiden Armen in die Rettungsschlinge einsteigen. 3. Die Arme müssen nach unten gedrückt werden und die Hände sind zu schließen. 4. Das Windenseil muss frei hängen, es darf nicht an Bord befestigt werden.",
          "keywords": [
            "Arme",
            "Armen",
            "Bord",
            "Hände",
            "Karabinerhaken"
          ]
        },
        {
          "id": "seem2-119",
          "number": 119,
          "subtopic": "",
          "question": "Wann dürfen Notzeichen gegeben werden?",
          "answer": "Nach Feststellung des Notfalles auf Anordnung des Schiffsführers; bei unmittelbarer Gefahr für das Schiff oder die Besatzung, die ohne fremde Hilfe nicht überwunden werden kann.",
          "keywords": [
            "Anordnung",
            "Besatzung",
            "Feststellung",
            "Gefahr",
            "Hilfe"
          ]
        },
        {
          "id": "seem2-120",
          "number": 120,
          "subtopic": "",
          "question": "Wann darf ein UKW-Sprechfunkgerät auch ohne entsprechenden Befähigungsnachweis benutzt werden?",
          "answer": "In Notfällen.",
          "keywords": [
            "Notfällen"
          ]
        },
        {
          "id": "seem2-121",
          "number": 121,
          "subtopic": "",
          "question": "Worauf ist zu achten, wenn Crewmitglieder seekrank sind?",
          "answer": "1. Aufenthalt im Cockpit beaufsichtigen und Crewmitglieder gegen Überbordfallen sichern, 2. Flüssigkeitsverlust ausgleichen (Wasser), 3. Crewmitglied anhalten, zur Küste oder zum Horizont zu schauen, 4. mit Arbeiten beschäftigen.",
          "keywords": [
            "Arbeiten",
            "Aufenthalt",
            "Cockpit",
            "Crewmitglied",
            "Crewmitglieder"
          ]
        },
        {
          "id": "seem2-122",
          "number": 122,
          "subtopic": "",
          "question": "Wozu dient ein Reitgewicht (Gleitgewicht, Ankergewicht) beim Ankern?",
          "answer": "Es soll die Ankertrosse auf den Grund ziehen, damit der Anker nicht durch einen zu steilen Winkel aus dem Grund gebrochen wird. Es wirkt ruckdämpfend.",
          "keywords": [
            "Anker",
            "Ankertrosse",
            "Grund",
            "Winkel"
          ]
        },
        {
          "id": "seem2-123",
          "number": 123,
          "subtopic": "",
          "question": "Warum sollte beim Verwenden einer Ankertrosse ein Kettenvorlauf benutzt werden?",
          "answer": "Damit der Zug auf den Anker nicht zu steil wird.",
          "keywords": [
            "Anker",
            "Damit"
          ]
        },
        {
          "id": "seem2-124",
          "number": 124,
          "subtopic": "",
          "question": "Welcher Ankergrund ist für die üblichen Leichtgewichtsanker 1. gut geeignet?",
          "answer": "2. mäßig geeignet? 3. ungeeignet? 1. Sand, Schlick, weicher Ton und Lehm, 2. harter Ton und Lehm, 3. steinige, verkrautete und stark schlammige Böden.",
          "keywords": [
            "Böden",
            "Lehm",
            "Sand",
            "Schlick"
          ]
        },
        {
          "id": "seem2-125",
          "number": 125,
          "subtopic": "",
          "question": "Was müssen Sie bei der Auswahl eines Ankerplatzes beachten?",
          "answer": "1. Der Ankerplatz sollte Schutz vor Wind und Wellen bieten. 2. Auf ausreichenden Platz zum Schwojen achten. 3. Mögliche Winddrehungen einplanen.",
          "keywords": [
            "Ankerplatz",
            "Mögliche",
            "Platz",
            "Schutz",
            "Schwojen"
          ]
        },
        {
          "id": "seem2-126",
          "number": 126,
          "subtopic": "",
          "question": "Welchen Ankergrund sollten Sie nach Möglichkeit meiden?",
          "answer": "Steinige, verkrautete und stark schlammige Böden.",
          "keywords": [
            "Böden",
            "Steinige"
          ]
        },
        {
          "id": "seem2-127",
          "number": 127,
          "subtopic": "",
          "question": "Wie können Sie die Haltekraft eines Ankers erhöhen, wenn Sie auf engem Raum (z. B. zwischen zwei Stegen) nicht die erforderliche Kettenlänge stecken können?",
          "answer": "Mit einem Reitgewicht, um so den Anker besser am Boden zu halten.",
          "keywords": [
            "Anker",
            "Boden",
            "Reitgewicht"
          ]
        },
        {
          "id": "seem2-128",
          "number": 128,
          "subtopic": "",
          "question": "Sie ankern in einer Bucht. Wie können Sie bei zunehmendem Wind die Haltekraft Ihres Ankers verbessern?",
          "answer": "1. Mehr Trosse oder Kette stecken, 2. Reitgewicht verwenden.",
          "keywords": [
            "Kette",
            "Mehr",
            "Reitgewicht",
            "Trosse"
          ]
        },
        {
          "id": "seem2-129",
          "number": 129,
          "subtopic": "",
          "question": "Sie wollen auf verkrautetem Grund ankern. Ihnen steht ein Leichtgewichtsanker und ein Stockanker zur Verfügung. Welchen benutzen Sie und warum?",
          "answer": "Den Stockanker, weil er sich insbesondere auch aufgrund seines höheren Gewichtes besser eingräbt.",
          "keywords": [
            "Gewichtes",
            "Stockanker"
          ]
        },
        {
          "id": "seem2-130",
          "number": 130,
          "subtopic": "",
          "question": "Wozu dient eine Ankerboje?",
          "answer": "1. Sie zeigt die Lage des Ankers an. 2. Mit der Trippleine kann das Bergen eines unklaren Ankers unterstützt werden.",
          "keywords": [
            "Ankers",
            "Bergen",
            "Lage",
            "Trippleine"
          ]
        },
        {
          "id": "seem2-131",
          "number": 131,
          "subtopic": "",
          "question": "Wie erkennen Sie, ob der Anker hält?",
          "answer": "1. Vibration von Kette oder Trosse prüfen, 2. Einrucken des Ankers prüfen, 3. durch wiederholte Peilungen und ggf. Schätzungen des Abstands zu anderen Schiffen oder zu Landmarken, 4. falls GPS vorhanden ist, die Ankeralarmfunktion einschalten.",
          "keywords": [
            "Abstands",
            "Ankeralarmfunktion",
            "Ankers",
            "Einrucken",
            "Kette"
          ]
        },
        {
          "id": "seem2-132",
          "number": 132,
          "subtopic": "",
          "question": "Welche Ankerarten finden überwiegend auf Sportbooten Verwendung?",
          "answer": "Nennen Sie 3. 1. Patentanker, 2. Stockanker (einklappbarer Stock), 3. Draggen (klappbare Flunken), 4. Pflugscharanker.",
          "keywords": [
            "Draggen",
            "Flunken",
            "Nennen",
            "Patentanker",
            "Pflugscharanker"
          ]
        },
        {
          "id": "seem2-133",
          "number": 133,
          "subtopic": "",
          "question": "Nennen Sie 3 Ankertypen, die vom Germanischen Lloyd als Anker mit hoher Haltekraft anerkannt sind.",
          "answer": "Bruce-Anker, CQR-Anker, Danforth-Anker, D'Hone-Anker.",
          "keywords": [
            "Anker",
            "Bruce",
            "Danforth",
            "Hone"
          ]
        },
        {
          "id": "seem2-134",
          "number": 134,
          "subtopic": "",
          "question": "1. Welches sind die Vorteile einer Ankerkette gegenüber einer Ankerleine?",
          "answer": "2. Wie kombiniert man auf Yachten häufig die Systeme? 1. Die Kette unterstützt das Eingraben, verkleinert den Schwojeraum, wirkt ruckdämpfend, kann nicht an Steinen durchscheuern und erhöht die Haltekraft des Ankers. 2. Es wird zwischen Anker und Leine ein Kettenvorlauf von 3 bis 5 m gefahren.",
          "keywords": [
            "Anker",
            "Ankers",
            "Eingraben",
            "Haltekraft",
            "Kette"
          ]
        },
        {
          "id": "seem2-135",
          "number": 135,
          "subtopic": "",
          "question": "1. Warum soll eine Ankerleine nicht an den Anker geknotet werden?",
          "answer": "2. Warum muss die Ankerkette mit einem Taustropp am Schiff bzw. im Kettenkasten befestigt werden? 1. Knoten reduzieren die Bruchlast einer Leine um bis zu 50 %. 2. Damit die Kette im Notfall schnell gekappt werden kann.",
          "keywords": [
            "Ankerkette",
            "Bruchlast",
            "Damit",
            "Kette",
            "Kettenkasten"
          ]
        },
        {
          "id": "seem2-136",
          "number": 136,
          "subtopic": "",
          "question": "Sie wollen in einer Bucht ankern, in der das (ausreichend tiefe) Wasser unterschiedliche Färbungen zeigt. Wo wählen Sie den Ankerplatz? (Begründung!) Ich ankere auf hellem Wasser. Begründung:",
          "answer": "Der Grund ist hier sandig, der Anker hält gut. Dunkler Grund weist auf Bewuchs hin, wo der Anker schlecht hält.",
          "keywords": [
            "Anker",
            "Bewuchs",
            "Dunkler",
            "Grund"
          ]
        },
        {
          "id": "seem2-137",
          "number": 137,
          "subtopic": "",
          "question": "Warum darf der Anker nicht zusammen mit seiner Leine am Ankerplatz über Bord geworfen werden?",
          "answer": "Die Leine könnte mit dem Anker vertörnen und dadurch das Eingraben des Ankers verhindern. Der Anker würde dann nicht halten.",
          "keywords": [
            "Anker",
            "Ankers",
            "Eingraben",
            "Leine"
          ]
        },
        {
          "id": "seem2-138",
          "number": 138,
          "subtopic": "",
          "question": "Beschreiben Sie die Vorbereitung eines Ankermanövers.",
          "answer": "Auswählen eines geeigneten Ankerplatzes anhand der Seekarte bzw. des Seehandbuches (Meeresgrund/Wassertiefe geeignet?), Ermitteln der Wind- und/oder Stromrichtung und -stärke, Klarmachen des Ankergeschirrs und des Ankersignals, mit langsamster Fahrt - Kurs gegen Strom bzw. Wind - einen Ankerplatz ansteuern.",
          "keywords": [
            "Ankergeschirrs",
            "Ankerplatz",
            "Ankerplatzes",
            "Ankersignals",
            "Auswählen"
          ]
        },
        {
          "id": "seem2-139",
          "number": 139,
          "subtopic": "",
          "question": "Beschreiben Sie wichtige Elemente eines Ankermanövers.",
          "answer": "Geeigneten Ankerplatz festlegen/planen, Ansteuerung planen (in der Regel gegen Wind und/oder Strom), bei langsamer Fahrt rückwärts über Grund Anker fallen lassen, Kette/Leine in Abhängigkeit vom Wetter/Strom bis auf das 3- bzw. 5fache der Wassertiefe stecken, Ankerball/Ankerlicht setzen, Ankerposition feststellen, dokumentieren und ausreichend kontrollieren.",
          "keywords": [
            "Abhängigkeit",
            "Anker",
            "Ankerball",
            "Ankerlicht",
            "Ankerplatz"
          ]
        },
        {
          "id": "seem2-140",
          "number": 140,
          "subtopic": "",
          "question": "Was müssen Sie bedenken, wenn ein großes Schiff auf Ihr Sportboot zukommt?",
          "answer": "1. Andere Manövrierfähigkeit (größere Drehkreise, längere Stoppstrecken), 2. u. U. eingeschränkte Sicht des anderen Fahrzeugs, insbesondere nach voraus, 3. Möglichkeit des Übersehenwerdens, weil man sich im Radarschatten befindet, 4. Beeinträchtigung durch Bugwellen des großen Schiffes.",
          "keywords": [
            "Beeinträchtigung",
            "Bugwellen",
            "Drehkreise",
            "Fahrzeugs",
            "Manövrierfähigkeit"
          ]
        },
        {
          "id": "seem2-141",
          "number": 141,
          "subtopic": "",
          "question": "Warum sollten Sie nicht zu dicht hinter dem Heck eines vorbeifahrenden Schiffes durchfahren?",
          "answer": "Sog und Hecksee können das eigene Boot erheblich gefährden.",
          "keywords": [
            "Boot",
            "Hecksee"
          ]
        },
        {
          "id": "seem2-142",
          "number": 142,
          "subtopic": "",
          "question": "Was müssen Sie beim Passieren eines großen Schiffes bei dessen Kursänderungen, z. B. in einem kurvenreichen Fahrwasser, beachten?",
          "answer": "Bei einer Kursänderung schwenkt das Heck deutlich in die entgegengesetzte Richtung aus, also nach Backbord bei einer Kursänderung nach Steuerbord und umgekehrt.",
          "keywords": [
            "Backbord",
            "Heck",
            "Kursänderung",
            "Richtung",
            "Steuerbord"
          ]
        },
        {
          "id": "seem2-143",
          "number": 143,
          "subtopic": "",
          "question": "Mit welchen Stoppstrecken und Stoppzeiten müssen Sie bei großen Schiffen in voller Fahrt rechnen und wovon hängen sie ab?",
          "answer": "Abhängig von Schiffstyp und -größe, Beladungszustand und Ausgangsgeschwindigkeit ist mit der 8- bis 12fachen Schiffslänge und bis zu 8 bis 12 Minuten Dauer (z. B. ein 300 m langes Containerschiff voll abgeladen mit 24 kn: Stoppstrecke ca. 2 sm, Stoppzeit ca. 12 Minuten) zu rechnen.",
          "keywords": [
            "Abhängig",
            "Ausgangsgeschwindigkeit",
            "Beladungszustand",
            "Containerschiff",
            "Dauer"
          ]
        },
        {
          "id": "seem2-144",
          "number": 144,
          "subtopic": "",
          "question": "Wie reagiert ein großes Schiff, wenn bei ca. 20 kn Fahrt ein Ausweichmanöver durch Hartruderlage eingeleitet wird?",
          "answer": "Nach welcher Distanz verlässt es in etwa die alte Kurslinie? Der Steven bewegt sich in Richtung der Hartruderlage, das Heck schlägt relativ weit zur entgegengesetzten Richtung aus. Das Schiff verlässt mit seinem Heck erst nach mehreren Schiffslängen seine bisherige Kurslinie, bewegt sich also zunächst in der alten Kursrichtung fort. Diese Strecke kann bei 300 m langen Containerschiffen 1,5 bis 2,5 Schiffslängen, d. h. ca. 500 bis 600 m betragen.",
          "keywords": [
            "Containerschiffen",
            "Distanz",
            "Hartruderlage",
            "Heck",
            "Kurslinie"
          ]
        },
        {
          "id": "seem2-145",
          "number": 145,
          "subtopic": "",
          "question": "Auf vielen großen Schiffen ist die Sicht nach vorne eingeschränkt. Welchen Abstand vor einem Schiff müssen Sie als nicht einsehbar mindestens berücksichtigen?",
          "answer": "Sichtbeschränkung nach voraus maximal 2 Schiffslängen oder 500 m.",
          "keywords": [
            "Schiffslängen",
            "Sichtbeschränkung"
          ]
        },
        {
          "id": "seem2-146",
          "number": 146,
          "subtopic": "",
          "question": "Wie können Sie die Wahrscheinlichkeit erhöhen, im Radar von anderen Fahrzeugen gesehen zu werden?",
          "answer": "Durch einen möglichst hoch und fest angebrachten passiven Radarreflektor bzw. besser noch durch einen \"aktiven\" Radarreflektor. Stand: 01. Juli 2006",
          "keywords": [
            "Juli",
            "Radarreflektor",
            "Stand"
          ]
        }
      ]
    }
  ]
};

export const allQuestions: Question[] = catalog.sections.flatMap(s => s.questions);
export const totalQuestions = allQuestions.length;
