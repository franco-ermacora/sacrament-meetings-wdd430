'use client';

import { useTransition } from 'react';
import { deleteMeeting } from '@/lib/actions';

export default function DeleteMeetingButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this meeting?')) {
      startTransition(async () => {
        await deleteMeeting(id);
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-sm font-medium py-2 px-3 rounded-lg transition disabled:opacity-50"
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}