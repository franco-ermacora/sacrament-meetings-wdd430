import { NextRequest, NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const idNumber = parseInt(resolvedParams.id, 10);

  if (isNaN(idNumber)) {
    return NextResponse.json({ error: 'Invalid ID format.' }, { status: 400 });
  }

  // Agregamos await acá
  const meeting = await getMeetingById(idNumber);

  if (!meeting) {
    return NextResponse.json({ error: 'Meeting not found.' }, { status: 404 });
  }

  return NextResponse.json(meeting);
}