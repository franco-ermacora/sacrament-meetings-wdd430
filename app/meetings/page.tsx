import { headers } from 'next/headers';
import { SacramentMeeting } from '@/lib/types';
import MeetingCard from '@/components/MeetingCard';

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/meetings`, { cache: 'no-store' })
    .catch(() => {
      // Fallback local por si se compila sin el servidor activo
      const { getMeetings } = require('@/lib/meetings-db');
      return { json: () => getMeetings() };
    });
  return res.json();
}

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();

  return (
    <main>
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Planned Meetings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </main>
  );
}