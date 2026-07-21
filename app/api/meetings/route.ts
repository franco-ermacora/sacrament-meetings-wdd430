import { NextRequest, NextResponse } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') ?? searchParams.get('date') ?? '';
  const page = Number(searchParams.get('page')) || 1;

  // Agregamos await y pasamos parámetros limpios
  const meetings = await getMeetings(query, page);
  return NextResponse.json(meetings);
}