import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-zinc-100">404 - Meeting Not Found</h2>
      <p className="mt-2 text-zinc-400">
        Could not find the requested sacrament meeting record.
      </p>
      <div className="mt-6">
        <Link
          href="/meetings"
          className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
        >
          Return to Meetings
        </Link>
      </div>
    </main>
  );
}