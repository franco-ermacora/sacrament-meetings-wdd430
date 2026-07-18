'use client';
import { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 border border-slate-200 max-w-2xl mx-auto print:shadow-none print:border-none print:p-0">
      <div className="text-center border-b pb-6 mb-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase">Sacrament Meeting Program</h2>
        <p className="text-slate-600 font-medium mt-1">{meeting.date}</p>
        <div className="mt-3 flex justify-center gap-4 text-sm text-slate-500">
          <span><strong>Presiding:</strong> {meeting.presiding}</span>
          <span>•</span>
          <span><strong>Conducting:</strong> {meeting.conducting}</span>
        </div>
      </div>

      <div className="space-y-6">
        {meeting.announcements && meeting.announcements.length > 0 && (
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 print:hidden">
            <h4 className="font-bold text-slate-800 mb-1">Announcements</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              {meeting.announcements.map((ann, i) => (
                <li key={i}>{ann}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-b pb-4 space-y-3">
          <div className="flex justify-between text-slate-700">
            <span>Opening Hymn</span>
            <span className="font-semibold text-right">No. {meeting.openingHymn.number} - {meeting.openingHymn.title}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>Opening Prayer</span>
            <span className="font-semibold text-right">{meeting.openingPrayer}</span>
          </div>
        </div>

        {meeting.wardBusiness.length > 0 && (
          <div className="border-b pb-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Ward Business</h4>
            {meeting.wardBusiness.map((item, i) => (
              <p key={i} className="text-sm italic text-slate-600">{item.description}</p>
            ))}
          </div>
        )}

        <div className="border-b pb-4 space-y-3">
          <div className="flex justify-between text-slate-700">
            <span>Sacrament Hymn</span>
            <span className="font-semibold text-right">No. {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</span>
          </div>
          <div className="text-center py-2 text-xs italic text-slate-500 uppercase tracking-widest">
            Administration of the Sacrament
          </div>
        </div>

        <div className="border-b pb-4 space-y-4">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Services</h4>
          {meeting.speakers.map((speaker, i) => (
            <div key={i} className="flex justify-between text-slate-700">
              <span>
                {speaker.type === 'musical-number' ? '🎵 Musical Number' : '🗣️ Speaker'}
                <span className="block text-xs text-slate-400">{speaker.topic}</span>
              </span>
              <span className="font-semibold text-right align-middle self-center">{speaker.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-slate-700">
            <span>Closing Hymn</span>
            <span className="font-semibold text-right">No. {meeting.closingHymn.number} - {meeting.closingHymn.title}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>Closing Prayer</span>
            <span className="font-semibold text-right">{meeting.closingPrayer}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold transition shadow-md"
        >
          🖨️ Print Program
        </button>
      </div>
    </div>
  );
}