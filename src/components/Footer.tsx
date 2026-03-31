'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 mt-6 mb-16">
      <div className="max-w-lg mx-auto">
        <p className="mb-2">
          Made by Claudia ✨ @{' '}
          <Link
            href="https://dexmind.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            DexMind AI
          </Link>
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <Link
            href="https://github.com/DexMind-AI/sks-trainer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://dexmind.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            DexMind AI
          </Link>
        </div>
      </div>
    </footer>
  );
}