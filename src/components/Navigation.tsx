'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Start', icon: '🏠' },
  { href: '/lernen', label: 'Lernen', icon: '📚' },
  { href: '/navigation', label: 'Navigation', icon: '🧭' },
  { href: '/pruefung', label: 'Prüfung', icon: '📝' },
  { href: '/erfolge', label: 'Erfolge', icon: '🏅' },
  { href: '/statistik', label: 'Statistik', icon: '📊' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-50 safe-area-bottom">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map(({ href, label, icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center py-2 px-2 min-w-[50px] transition-colors ${
                active
                  ? 'text-navy-600 dark:text-blue-400'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <span className="text-xl mb-0.5">{icon}</span>
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
