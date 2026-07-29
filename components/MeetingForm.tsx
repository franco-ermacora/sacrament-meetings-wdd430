'use client';

import { useActionState } from 'react';
import { createMeeting, updateMeeting, State } from '@/lib/actions';
import { SacramentMeeting } from '@/lib/types';

export default function MeetingForm({ meeting }: { meeting?: SacramentMeeting }) {
  const updateMeetingWithId = meeting
    ? updateMeeting.bind(null, meeting.id)
    : createMeeting;

  const initialState: State = { errors: {}, message: null };
  const [state, formAction, isPending] = useActionState(updateMeetingWithId, initialState);

  return (
    <form action={formAction} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-800">
      <h2 className="text-2xl font-bold text-slate-900">
        {meeting ? 'Edit Sacrament Meeting' : 'Create Sacrament Meeting'}
      </h2>

      {state?.message && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
          {state.message}
        </div>
      )}

      {/* FECHA Y TIPO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            defaultValue={meeting?.date || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
          {state?.errors?.date && <p className="text-xs text-red-500 mt-1">{state.errors.date[0]}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Meeting Type</label>
          <select
            name="meetingType"
            defaultValue={meeting?.meetingType?.toLowerCase() || 'regular'}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white"
          >
            <option value="regular">Regular</option>
            <option value="testimony">Testimony</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>
          {state?.errors?.meetingType && <p className="text-xs text-red-500 mt-1">{state.errors.meetingType[0]}</p>}
        </div>
      </div>

      {/* AUTORIDADES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Presiding</label>
          <input
            type="text"
            name="presiding"
            defaultValue={meeting?.presiding || ''}
            placeholder="Bishop Thompson"
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
          {state?.errors?.presiding && <p className="text-xs text-red-500 mt-1">{state.errors.presiding[0]}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Conducting</label>
          <input
            type="text"
            name="conducting"
            defaultValue={meeting?.conducting || ''}
            placeholder="Brother Nakamura"
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
          {state?.errors?.conducting && <p className="text-xs text-red-500 mt-1">{state.errors.conducting[0]}</p>}
        </div>
      </div>

      {/* ORACIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Opening Prayer</label>
          <input
            type="text"
            name="openingPrayer"
            defaultValue={meeting?.openingPrayer || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
          {state?.errors?.openingPrayer && <p className="text-xs text-red-500 mt-1">{state.errors.openingPrayer[0]}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Closing Prayer</label>
          <input
            type="text"
            name="closingPrayer"
            defaultValue={meeting?.closingPrayer || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
          {state?.errors?.closingPrayer && <p className="text-xs text-red-500 mt-1">{state.errors.closingPrayer[0]}</p>}
        </div>
      </div>

      <hr className="border-slate-200" />
      <h3 className="text-lg font-bold text-slate-800">Hymns</h3>

      {/* HIMNO APERTURA */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">Opening Hymn No.</label>
          <input
            type="number"
            name="openingHymn.number"
            defaultValue={meeting?.openingHymn?.number || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold mb-1">Opening Hymn Title</label>
          <input
            type="text"
            name="openingHymn.title"
            defaultValue={meeting?.openingHymn?.title || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
      </div>

      {/* HIMNO SANTA CENA */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">Sacrament Hymn No.</label>
          <input
            type="number"
            name="sacramentHymn.number"
            defaultValue={meeting?.sacramentHymn?.number || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold mb-1">Sacrament Hymn Title</label>
          <input
            type="text"
            name="sacramentHymn.title"
            defaultValue={meeting?.sacramentHymn?.title || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
      </div>

      {/* HIMNO CLAUSURA */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">Closing Hymn No.</label>
          <input
            type="number"
            name="closingHymn.number"
            defaultValue={meeting?.closingHymn?.number || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold mb-1">Closing Hymn Title</label>
          <input
            type="text"
            name="closingHymn.title"
            defaultValue={meeting?.closingHymn?.title || ''}
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
      >
        {isPending ? 'Saving...' : meeting ? 'Update Meeting' : 'Create Meeting'}
      </button>
    </form>
  );
}