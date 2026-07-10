'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Overview', href: '/' },
    { name: 'Matches', href: '/' },
    { name: 'Table', href: '/standings' },
    { name: 'Stats', href: '/stats' },
  ];

  return (
    <div className="sticky top-[61px] z-40 bg-[#202124] py-3 border-b border-[#3c4043]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-2 overflow-x-auto no-scrollbar" aria-label="Tabs">
          {tabs.map((tab, idx) => {
            // Keep Matches as active on root, omit Overview for real routing or just keep Matches active
            const isActive = tab.name !== 'Overview' && pathname === tab.href;
            const isOverview = tab.name === 'Overview';
            return (
              <Link
                key={idx}
                href={tab.href}
                className={`
                  whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-[#e8eaed] text-[#202124]'
                      : 'border border-[#5f6368] text-[#e8eaed] hover:bg-[#303134]'
                  }
                  ${isOverview ? 'hidden' : ''}
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
