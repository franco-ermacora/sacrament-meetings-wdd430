import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-07-12', // El domingo de esta semana actual (Año 2026)
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of a new Elders Quorum Secretary.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: 'Beautiful Savior', type: 'musical-number' },
      { name: 'Brother Miller', topic: 'The Power of the Sacrament', type: 'speaker' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: July 17', 'Youth activity on Wednesday at 7 PM']
  },
  {
    id: 2,
    date: '2026-07-05',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Bishop Smith',
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Brother Martinez',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 180, title: 'Father in Heaven, We Do Believe' },
    speakers: [
      { name: 'Congregation', topic: 'Bearing testimonies', type: 'speaker' }
    ],
    closingHymn: { number: 156, title: 'Sing We Now at Parting' },
    closingPrayer: 'Sister Taylor',
    announcements: ['Pecan pie social this Friday']
  },
  {
    id: 3,
    date: '2026-06-28',
    meetingType: 'stake',
    presiding: 'President Nelson (Stake)',
    conducting: 'Brother Higgins',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Clark',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { name: 'President Nelson', topic: 'Stake Vision and Unity', type: 'speaker' }
    ],
    closingHymn: { number: 89, title: 'The Lord is My Light' },
    closingPrayer: 'Brother Young',
    announcements: []
  },
  {
    id: 4,
    date: '2026-06-21',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Christensen',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Adams',
    wardBusiness: [{ description: 'Releasing Brother Lopez from Sunday School' }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Sister Evans', topic: 'Covenant Path', type: 'speaker' },
      { name: 'Brother Garcia', topic: 'Daily Prayer', type: 'speaker' }
    ],
    closingHymn: { number: 100, title: 'Nearer, My God, to Thee' },
    closingPrayer: 'Sister Robinson',
    announcements: []
  },
  {
    id: 5,
    date: '2026-06-14',
    meetingType: 'general',
    presiding: 'Elder Ballard',
    conducting: 'Brother Jones',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Baker',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 184, title: 'Upon the Cross of Calvary' },
    speakers: [
      { name: 'Elder Ballard', topic: 'Preparing the World', type: 'speaker' }
    ],
    closingHymn: { number: 294, title: 'Love One Another' },
    closingPrayer: 'Brother Hill',
    announcements: []
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}