import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Sacrament Meeting Planner',
  description: 'Manage ward weekly programs easily.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-50 min-h-screen flex flex-col font-sans">
        <Header />
        <div className="max-w-6xl mx-auto w-full px-4 py-8 flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}