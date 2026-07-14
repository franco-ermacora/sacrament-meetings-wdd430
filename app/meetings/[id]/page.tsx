import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { SacramentMeeting } from '@/lib/types';
import MeetingDetail from '@/components/MeetingDetail';

async function fetchMeeting(id: string): Promise<SacramentMeeting | null> {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3001';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/meetings/${id}`, { cache: 'no-store' })
    .catch(() => {
      const { getMeetingById } = require('@/lib/meetings-db');
      return { json: () => getMeetingById(parseInt(id, 10)) };
    });
  
  if (!res) return null;
  return res.json();
}

// Desempaquetamos "params" como una Promesa para Next.js 16
export default async function MeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; 
  const meeting = await fetchMeeting(resolvedParams.id);

  if (!meeting || ('error' in meeting)) {
    notFound();
  }

  return (
    <main>
      <MeetingDetail meeting={meeting} />
    </main>
  );
}