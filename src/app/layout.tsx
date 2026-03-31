import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
  authors: [{ name: 'DexMind AI' }],
  keywords: ['SKS', 'Sportküstenschifferschein', 'Segeln', 'Prüfung', 'Theorie', 'Lernen'],
  creator: 'DexMind AI',
  publisher: 'DexMind AI',
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
        <div className="flex flex-col min-h-screen max-w-lg mx-auto px-4">
          <main className="flex-grow pb-4">
            {children}
          </main>
          <Footer />
        </div>
        <Navigation />
      </body>
    </html>
  );
}
