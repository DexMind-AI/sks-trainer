'use client';

import Link from 'next/link';

const resources = {
  podcast: [
    {
      title: 'SKS Lern-Podcast',
      author: "S'whenya",
      description: '17 Folgen — Prüfungsfragen und Antworten in 10er-Blöcken vorgelesen. Perfekt zum passiven Lernen unterwegs.',
      links: [
        { label: 'Spotify', url: 'https://open.spotify.com/show/5NQowkGYveVLEZgqgIDr3v', emoji: '🟢' },
        { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/de/podcast/sks-lern-podcast-seek%C3%BCstenschifffahrtsschein-segeln/id1578110583', emoji: '🍎' },
      ],
    },
  ],
  youtube: [
    {
      title: 'McFly439 — SKS Kartenaufgaben',
      author: 'Laura (Seglerin & SKS-Ausbilderin)',
      description: '25 Videos: Alle 10 Prüfungsbögen Schritt für Schritt durchgerechnet + Detailvideos zu Kursumwandlung, Stromdreieck, Gezeiten und mehr. Von Segelschulen empfohlen.',
      links: [
        { label: 'Kanal', url: 'https://www.youtube.com/@LauraMcFly439', emoji: '📺' },
      ],
      videos: [
        { title: 'Das Kurswandlungsschema', url: 'https://youtu.be/l_TWGQ7lfGc' },
        { title: 'Das Stromdreieck', url: 'https://youtu.be/kTCzll2hr7s' },
        { title: 'Strömung nach Seekarte', url: 'https://youtu.be/tQ_yacCd7EU' },
        { title: 'Strömung nach Gezeitenstromatlas', url: 'https://youtu.be/okZzLrMauuQ' },
        { title: 'Hochwasser + Anschlussorte + Tidenstieg', url: 'https://youtu.be/zWNHgt_WN9A' },
        { title: 'Kreuzpeilung & Radarseitenpeilung', url: 'https://youtu.be/26QRddzfPJs' },
        { title: 'Seezeichen & Feuer beschreiben', url: 'https://youtu.be/pFJYH8ZLQb0' },
        { title: 'Navigatorische Bedeutung', url: 'https://youtu.be/1kWJeSQJoj8' },
        { title: 'Karteneintragungen (INT 1)', url: 'https://youtu.be/_yYYtv2cbpo' },
      ],
    },
    {
      title: 'SKS Navigationsaufgabe 1 — Komplett',
      author: 'YouTube',
      description: 'Vollständige Lösung der ersten Kartenaufgabe mit allen Schritten: Gezeiten, Strom, Kursumwandlung, Kreuzpeilung.',
      links: [
        { label: 'Video', url: 'https://www.youtube.com/watch?v=RJytIuObyyc', emoji: '▶️' },
      ],
    },
    {
      title: 'SKS Tutorial Gezeitenkunde',
      author: 'YouTube',
      description: 'Höhen- und Zeitermittlung am Anschlussort — das schwierigste Thema verständlich erklärt.',
      links: [
        { label: 'Video', url: 'https://www.youtube.com/watch?v=944WAKfE_B8', emoji: '▶️' },
      ],
    },
    {
      title: 'Tipps zur SKS Prüfung Navigation',
      author: 'YouTube',
      description: 'Praktische Tipps für die Navigationsklausur: Zeiteinteilung, häufige Fehler, Tricks.',
      links: [
        { label: 'Video', url: 'https://www.youtube.com/watch?v=UrzDy-TFMXM', emoji: '▶️' },
      ],
    },
  ],
  books: [
    {
      title: 'Sportküstenschifferschein & SBF See',
      author: 'Delius Klasing Verlag',
      description: 'Das Standard-Lehrbuch mit dem gesamten Prüfungsstoff: Navigation, Gezeiten, Seemannschaft, Recht, Wetter. Enthält den amtlichen Fragenkatalog mit offiziellen Antworten.',
      price: 'ca. 49 €',
    },
    {
      title: 'Kartenaufgaben Sportküstenschifferschein',
      author: 'Delius Klasing Verlag',
      description: 'Übungsbogen-Sammlung für die Navigationsaufgaben. Zum Durchrechnen aller Prüfungsbögen.',
    },
  ],
  materials: [
    { item: 'Übungskarte D49 (INT 1463)', note: 'Pflicht in der Prüfung — nur mit Bleistift beschriften!' },
    { item: 'Karte 1 / INT 1', note: 'Symbole und Abkürzungen auf Seekarten' },
    { item: 'Begleitheft SKS (Ausgabe 2013)', note: 'Gezeitentafeln, Stromatlas, Ablenkungstabelle' },
    { item: 'Navigationsbesteck', note: 'Kursdreieck, Anlegedreieck, Marinezirkel' },
    { item: 'Taschenrechner', note: 'Nicht programmierbar!' },
  ],
};

export default function LernhilfenPage() {
  return (
    <div className="py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">📚 Lernhilfen</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Kuratierte Ressourcen für die SKS-Vorbereitung
        </p>
      </div>

      {/* Podcast */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">🎧 Podcast</h2>
        {resources.podcast.map((p, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">{p.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">von {p.author}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.links.map((l, j) => (
                <a key={j} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  {l.emoji} {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* YouTube */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">🎬 YouTube</h2>
        <div className="space-y-4">
          {resources.youtube.map((y, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{y.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{y.author}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{y.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {y.links.map((l, j) => (
                  <a key={j} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                    {l.emoji} {l.label}
                  </a>
                ))}
              </div>
              {'videos' in y && y.videos && (
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Einzelvideos:</p>
                  {y.videos.map((v, k) => (
                    <a key={k} href={v.url} target="_blank" rel="noopener noreferrer"
                      className="block text-sm text-blue-600 dark:text-blue-400 hover:underline pl-2">
                      ▸ {v.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bücher */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">📖 Lehrbücher</h2>
        <div className="space-y-3">
          {resources.books.map((b, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{b.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{b.author}{b.price ? ` · ${b.price}` : ''}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prüfungsmaterial */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">🧭 Prüfungsmaterial</h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
            Diese Materialien brauchst du für die Kartenaufgabe — und musst sie selbst mitbringen:
          </p>
          <div className="space-y-2">
            {resources.materials.map((m, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sm mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{m.item}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="text-xs text-center text-slate-400 dark:text-slate-500 pt-2">
        Alle Links sind redaktionell kuratiert — keine Werbung, keine Affiliate-Links.
      </p>
    </div>
  );
}
