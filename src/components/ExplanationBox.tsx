'use client';

import { useState } from 'react';

interface ExplanationBoxProps {
  text: string;
  defaultOpen?: boolean;
}

export default function ExplanationBox({ text, defaultOpen = false }: ExplanationBoxProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      >
        <span>📖</span>
        <span className="font-medium">Erklärung</span>
        <span className="text-[10px] opacity-70">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 animate-fadeIn">
          <p className="text-sm text-blue-800 dark:text-blue-200 italic leading-relaxed">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
