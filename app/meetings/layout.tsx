import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavLinks />
      {children}
    </div>
  );
}