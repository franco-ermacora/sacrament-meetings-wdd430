'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between mt-6">
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 rounded hover:bg-gray-300 text-sm font-medium"
        >
          Previous
        </Link>
      ) : (
        <div />
      )}

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 rounded hover:bg-gray-300 text-sm font-medium"
        >
          Next
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}