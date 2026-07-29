import Link from 'next/link';
import { SacramentMeeting } from '@/lib/types';
import DeleteMeetingButton from '@/components/DeleteMeetingButton';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const badgeColors = {
    regular: 'bg-green-100 text-green-800 border-green-200',
    testimony: 'bg-blue-100 text-blue-800 border-blue-200',
    stake: 'bg-purple-100 text-purple-800 border-purple-200',
    general: 'bg-amber-100 text-amber-800 border-amber-200',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-bold text-slate-500">{meeting.date}</span>
          <span className={`text-xs uppercase font-semibold px-2 py-1 rounded-full border ${badgeColors[meeting.meetingType]}`}>
            {meeting.meetingType}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">Conducted by {meeting.conducting}</h3>
        <p className="text-sm text-slate-600 mb-1"><strong>Presiding:</strong> {meeting.presiding}</p>
        <p className="text-sm text-slate-600"><strong>Opening Hymn:</strong> No. {meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
      </div>

      {/* Botones de acción: View, Edit y Delete */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
        <Link
          href={`/meetings/${meeting.id}`}
          className="flex-1 text-center bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
        >
          View Program
        </Link>
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="text-center bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-sm font-medium py-2 px-3 rounded-lg transition"
        >
          Edit
        </Link>
        <DeleteMeetingButton id={meeting.id} />
      </div>
    </div>
  );
}