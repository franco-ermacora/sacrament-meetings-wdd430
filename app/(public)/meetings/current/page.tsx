import Link from 'next/link';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import MeetingCard from '@/components/MeetingCard';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || '';
  const currentPage = Number(resolvedParams?.page) || 1;

  const meetings = await getMeetings(query, currentPage);
  const totalPages = await getMeetingsTotalPages(query);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Encabezado con Botón de Crear Nueva Reunión */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">
            Sacrament Meetings
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Manage and view all ward sacrament meeting agendas.
          </p>
        </div>
        <Link
          href="/meetings/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5"
        >
          <span className="text-lg leading-none">+</span> New Meeting
        </Link>
      </div>

      {/* Buscador */}
      <MeetingSearch placeholder="Search by speaker, leader, or meeting type..." />

      {/* Listado de Tarjetas */}
      {meetings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 font-medium">No meetings found.</p>
        </div>
      )}

      {/* Paginación */}
      <div className="mt-8 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}