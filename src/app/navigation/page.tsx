'use client';

import Link from 'next/link';

const modules = [
  {
    href: '/navigation/kursumwandlung',
    icon: '🧮',
    title: 'Kursumwandlung',
    description: 'MgK ↔ rwK ↔ KaK — Schritt für Schritt',
    badge: 'Wichtigste Aufgabe',
    badgeColor: 'bg-red-500',
  },
  {
    href: '/navigation/gezeiten',
    icon: '🌊',
    title: 'Gezeitenberechnung',
    description: 'Bezugsort → Anschlussort mit Formblatt',
    badge: null,
    badgeColor: '',
  },
  {
    href: '/navigation/stromdreieck',
    icon: '📐',
    title: 'Stromdreieck',
    description: 'Vektordreieck: KdW, Strom, KüG visualisieren',
    badge: null,
    badgeColor: '',
  },
  {
    href: '/navigation/symbole',
    icon: '🗺️',
    title: 'Kartensymbole & Zeichen',
    description: 'INT 1, IALA System A, Leuchtfeuer',
    badge: '100+ Karten',
    badgeColor: 'bg-blue-500',
  },
];

export default function NavigationPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-navy-600 dark:text-blue-400">🧭 Navigation</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Kartenaufgabe — der praktische Teil der Theorieprüfung
        </p>
      </div>

      {/* Info banner */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
        <div className="flex items-start gap-2">
          <span className="text-lg">💡</span>
          <div>
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              Prüfungstipp
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
              18 Aufgaben, 90 Minuten, 30 Punkte. Die Kursumwandlung kommt in fast jeder Aufgabe vor — fang damit an!
            </p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-3">
        {modules.map(({ href, icon, title, description, badge, badgeColor }) => (
          <Link key={href} href={href} className="block">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-slate-800 dark:text-white">{title}</h2>
                    {badge && (
                      <span className={`${badgeColor} text-white text-[10px] px-2 py-0.5 rounded-full font-medium`}>
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
                </div>
                <span className="text-slate-300 dark:text-slate-600 text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Exam structure info */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">📋 Aufgabentypen der Prüfung</h3>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex gap-2">
            <span className="text-green-500">●</span>
            <span>Kursumwandlung (MgK ↔ rwK) — <strong>digital übbar</strong></span>
          </div>
          <div className="flex gap-2">
            <span className="text-green-500">●</span>
            <span>Gezeitenberechnung — <strong>digital übbar</strong></span>
          </div>
          <div className="flex gap-2">
            <span className="text-green-500">●</span>
            <span>Stromdreieck — <strong>digital übbar</strong></span>
          </div>
          <div className="flex gap-2">
            <span className="text-green-500">●</span>
            <span>Kartensymbole & Zeichen — <strong>digital übbar</strong></span>
          </div>
          <div className="flex gap-2">
            <span className="text-green-500">●</span>
            <span>Distanz, ETA, Geschwindigkeit — <strong>digital übbar</strong></span>
          </div>
          <div className="flex gap-2">
            <span className="text-yellow-500">●</span>
            <span>Kurs/Peilung eintragen — <em>nur auf Papier</em></span>
          </div>
          <div className="flex gap-2">
            <span className="text-yellow-500">●</span>
            <span>Position ablesen/eintragen — <em>nur auf Papier</em></span>
          </div>
        </div>
      </div>
    </div>
  );
}
