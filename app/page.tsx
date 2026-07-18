import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

export default function Home() {
  return (
    <main>
      <NavLinks />
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Welcome to the Sacrament Meeting Planner
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Plan, organize, and view Sacrament meetings seamlessly. Our app helps leaders prepare schedules and allows ward members to access and print the weekly program on any device.
          </p>
          <div className="flex gap-4">
            <Link
              href="/meetings"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
              Browse Meetings
            </Link>
            <Link
              href="/meetings/current"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
              This Week's Program
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border border-slate-100">
          {/* Usamos Next Image como se requiere */}
          <Image
            src="https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
            alt="Beautiful church interior chapel"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}