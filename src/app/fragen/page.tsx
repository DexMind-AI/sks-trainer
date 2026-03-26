'use client';

import { useState, useEffect } from 'react';
import { catalog, Question } from '@/data/questions';
import { getAllProgress } from '@/lib/storage';
import { CardProgress, getBoxColor, getBoxLabel } from '@/lib/leitner';

export default function FragenPage() {
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, CardProgress>>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const sections = catalog.sections;
  const currentSection = selectedSection
    ? sections.find(s => s.id === selectedSection)
    : null;

  let displayQuestions: Question[] = [];
  if (currentSection) {
    displayQuestions = currentSection.questions;
  } else if (searchQuery.length >= 2) {
    const query = searchQuery.toLowerCase();
    displayQuestions = sections.flatMap(s => s.questions).filter(
      q => q.question.toLowerCase().includes(query) ||
           q.answer.toLowerCase().includes(query) ||
           q.id.toLowerCase().includes(query)
    );
  }

  return (
    <div className="py-6 space-y-4">
      <h1 className="text-xl font-bold text-navy-600 dark:text-blue-400">🔍 Fragenkatalog</h1>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Fragen durchsuchen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-blue-500"
        />
        <span className="absolute left-3 top-3.5 text-slate-400">🔍</span>
      </div>

      {/* Section Filter */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        <button
          onClick={() => setSelectedSection('')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
            !selectedSection
              ? 'bg-navy-600 text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          Alle
        </button>
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setSelectedSection(s.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedSection === s.id
                ? 'bg-navy-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            {s.name} ({s.questions.length})
          </button>
        ))}
      </div>

      {/* Questions List */}
      {!selectedSection && !searchQuery && (
        <div className="text-center py-8 text-slate-400 dark:text-slate-500">
          <p className="text-sm">Wähle einen Bereich oder suche nach einer Frage</p>
        </div>
      )}

      {displayQuestions.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {displayQuestions.length} Frage{displayQuestions.length !== 1 ? 'n' : ''}
          </p>
          {displayQuestions.map(q => {
            const p = progress[q.id];
            const isExpanded = expandedQuestion === q.id;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                  className="w-full text-left p-4 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {p ? (
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${getBoxColor(p.box)}`} title={getBoxLabel(p.box)} />
                    ) : (
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" title="Ungesehen" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{q.id}</div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 line-clamp-2">{q.question}</p>
                  </div>
                  <span className="text-slate-400 text-sm flex-shrink-0">{isExpanded ? '▲' : '▼'}</span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-slate-100 dark:border-slate-700 animate-fadeIn">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mt-2">
                      <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Musterantwort</div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">{q.answer}</p>
                    </div>
                    {p && (
                      <div className="mt-2 flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className={`px-1.5 py-0.5 rounded ${getBoxColor(p.box)} text-white`}>Box {p.box}</span>
                        <span>{p.reviewCount}x wiederholt</span>
                        {p.correctStreak > 0 && <span>🔥 {p.correctStreak}x richtig</span>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {searchQuery.length >= 2 && displayQuestions.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          <p>Keine Fragen gefunden für &ldquo;{searchQuery}&rdquo;</p>
        </div>
      )}
    </div>
  );
}
