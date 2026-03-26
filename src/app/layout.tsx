import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SKS Trainer — Prüfungsvorbereitung',
  description: 'Bereite dich mit Karteikarten und Prüfungssimulation auf die SKS-Theorieprüfung vor. 638 offizielle Fragen mit Leitner-System.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SKS Trainer',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a3a6b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen pb-20 max-w-lg mx-auto px-4">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
