import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-slate-900 text-white py-6 px-8 shadow-md flex justify-between items-center">
      <div>
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-slate-300 transition">
          ⛪ Rexburg 3rd Ward
        </Link>
        <p className="text-xs text-slate-400 mt-1">Sacrament Meeting Planner</p>
      </div>
      <div className="text-sm font-medium bg-slate-800 py-1.5 px-3 rounded-lg border border-slate-700">
        📅 {today}
      </div>
    </header>
  );
}