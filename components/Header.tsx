import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton, SignInButton } from '@clerk/nextjs';

export default async function Header() {
  const { userId } = await auth();

  return (
    <header className="bg-slate-900 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <span>🏛️</span> Rexburg 3rd Ward
      </Link>

      <div className="flex items-center gap-4">
        {userId ? (
          <div className="flex items-center gap-3">
            <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">
              Obispado
            </span>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
              Inicia sesión
            </button>
          </SignInButton>
        )}
      </div>
    </header>
  );
}