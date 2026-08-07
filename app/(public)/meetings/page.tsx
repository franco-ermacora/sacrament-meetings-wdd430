import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton, SignInButton } from '@clerk/nextjs';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import MeetingCard from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const { userId } = await auth(); // Verificamos si hay usuario en sesión
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Sacrament Meetings</h1>
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          <MeetingSearch />
        </div>

        {userId ? (
          <div className="flex items-center gap-3">
            <Link
              href="/meetings/new"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-center transition-colors flex items-center justify-center shrink-0"
            >
              + Create Meeting
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0">
              Inicia sesión (Obispado)
            </button>
          </SignInButton>
        )}
      </div>

      {meetings.length === 0 ? (
        <p className="text-gray-500 my-8">No meetings found.</p>
      ) : (
        <div className="space-y-4">
          {meetings.map((m) => (
            <MeetingCard key={m.id} meeting={m} />
          ))}
        </div>
      )}

      <Pagination totalPages={totalPages} />
    </div>
  );
}