import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Football Tournament | GSTU CSE',
  description: 'CSE Department Football Tournament at Gopalganj Science and Technology University',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-screen flex flex-col pb-12`}>
        <Header />
        <Navigation />
        <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
          {children}
        </main>
        <footer className="text-center py-6 text-sm text-gray-500 dark:text-[#9aa0a6] mt-auto">
          Courtesy by 12th batch, Department of CSE, GSTU
        </footer>
      </body>
    </html>
  );
}
