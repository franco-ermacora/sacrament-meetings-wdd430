export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-6 border-t border-slate-800 text-sm mt-auto">
      <p>© {new Date().getFullYear()} The Church of Jesus Christ of Latter-day Saints. All rights reserved.</p>
    </footer>
  );
}