import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentSundayRedirectPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Dom) a 6 (Sáb)
  
  const sunday = new Date(today);
  // Restamos días para llegar al domingo más cercano del calendario
  sunday.setDate(today.getDate() - dayOfWeek);
  
  // Lo convertimos a formato YYYY-MM-DD
  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, '0');
  const day = String(sunday.getDate()).padStart(2, '0');
  const formattedSunday = `${year}-${month}-${day}`;

  // Buscamos si existe esa reunión
  const matchingMeetings = getMeetings(formattedSunday);

  if (matchingMeetings.length > 0) {
    redirect(`/meetings/${matchingMeetings[0].id}`);
  } else {
    // Si no hay reunión cargada para este domingo, va a la lista general
    redirect('/meetings');
  }
}