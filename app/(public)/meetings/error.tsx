'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled meeting error:', error);
  }, [error]);

  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
        Something went wrong!
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {error.message || 'An unexpected error occurred while loading meeting data.'}
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
        >
          Try Again
        </button>
        <Link
          href="/meetings"
          className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}