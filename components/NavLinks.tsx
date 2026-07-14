'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'All Meetings', href: '/meetings' },
    { name: 'Current Sunday', href: '/meetings/current' },
  ];

  return (
    <nav className="flex gap-4 p-4 bg-slate-100 rounded-xl mb-6 shadow-inner border border-slate-200">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}