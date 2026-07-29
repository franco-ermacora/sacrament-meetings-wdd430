'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  addMeeting as createMeetingInDb,
  updateMeeting as updateMeetingInDb,
  deleteMeeting as deleteMeetingInDb,
} from '@/lib/meetings-db';
import { z } from 'zod';

const HymnSchema = z.object({
  number: z.number().default(0),
  title: z.string().default(''),
});

const MeetingSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general']),
  presiding: z.string().min(1, 'Presiding authority is required'),
  conducting: z.string().min(1, 'Conducting leader is required'),
  openingPrayer: z.string().min(1, 'Opening prayer is required'),
  closingPrayer: z.string().min(1, 'Closing prayer is required'),
  openingHymn: HymnSchema,
  sacramentHymn: HymnSchema,
  closingHymn: HymnSchema,
  announcements: z.array(z.string()).default([]),
  wardBusiness: z
    .array(
      z.object({
        description: z.string(),
      })
    )
    .default([]),
  stakeBusiness: z.boolean().default(false),
  speakers: z
    .array(
      z.object({
        name: z.string(),
        topic: z.string(),
        type: z.enum(['speaker', 'musical-number']),
      })
    )
    .default([]),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingPrayer?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const rawData = {
    date: formData.get('date')?.toString() || '',
    meetingType: (formData.get('meetingType')?.toString() || 'regular').toLowerCase(),
    presiding: formData.get('presiding')?.toString() || '',
    conducting: formData.get('conducting')?.toString() || '',
    openingPrayer: formData.get('openingPrayer')?.toString() || '',
    closingPrayer: formData.get('closingPrayer')?.toString() || '',
    openingHymn: {
      number: Number(formData.get('openingHymn.number')) || 0,
      title: formData.get('openingHymn.title')?.toString() || '',
    },
    sacramentHymn: {
      number: Number(formData.get('sacramentHymn.number')) || 0,
      title: formData.get('sacramentHymn.title')?.toString() || '',
    },
    closingHymn: {
      number: Number(formData.get('closingHymn.number')) || 0,
      title: formData.get('closingHymn.title')?.toString() || '',
    },
    announcements: [],
    wardBusiness: [],
    stakeBusiness: false,
    speakers: [],
  };

  const validatedFields = MeetingSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to Create Meeting.',
    };
  }

  try {
    await createMeetingInDb(validatedFields.data);
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Failed to create meeting in database.' };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const rawData = {
    date: formData.get('date')?.toString() || '',
    meetingType: (formData.get('meetingType')?.toString() || 'regular').toLowerCase(),
    presiding: formData.get('presiding')?.toString() || '',
    conducting: formData.get('conducting')?.toString() || '',
    openingPrayer: formData.get('openingPrayer')?.toString() || '',
    closingPrayer: formData.get('closingPrayer')?.toString() || '',
    openingHymn: {
      number: Number(formData.get('openingHymn.number')) || 0,
      title: formData.get('openingHymn.title')?.toString() || '',
    },
    sacramentHymn: {
      number: Number(formData.get('sacramentHymn.number')) || 0,
      title: formData.get('sacramentHymn.title')?.toString() || '',
    },
    closingHymn: {
      number: Number(formData.get('closingHymn.number')) || 0,
      title: formData.get('closingHymn.title')?.toString() || '',
    },
    announcements: [],
    wardBusiness: [],
    stakeBusiness: false,
    speakers: [],
  };

  const validatedFields = MeetingSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to Update Meeting.',
    };
  }

  try {
    await updateMeetingInDb(id, validatedFields.data);
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Failed to update meeting in database.' };
  }

  revalidatePath('/meetings');
  revalidatePath(`/meetings/${id}`);
  redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    await deleteMeetingInDb(id);
    revalidatePath('/meetings');
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete meeting.');
  }
}