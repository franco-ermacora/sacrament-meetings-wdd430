import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentSundayPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 es Domingo
  const sunday = new Date(today);
  
  // Restamos días para llegar al domingo más cercano
  sunday.setDate(today.getDate() - dayOfWeek);
  
  // Formato YYYY-MM-DD
  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, '0');
  const day = String(sunday.getDate()).padStart(2, '0');
  const formattedSunday = `${year}-${month}-${day}`;

  // Buscamos si existe esa reunión
  const matchingMeetings = await getMeetings(formattedSunday);

  if (matchingMeetings.length > 0) {
    redirect(`/meetings/${matchingMeetings[0].id}`);
  } else {
    // Si no hay reunión para hoy, traemos la más reciente disponible
    const allMeetings = await getMeetings('', 1);
    
    if (allMeetings.length > 0) {
      redirect(`/meetings/${allMeetings[0].id}`);
    } else {
      redirect('/meetings');
    }
  }
}