export interface Event {
    id: number;
    title: string;
    date: string;
    place: string;
    seats: number;
  }
  
  export const events: Event[] = [
    { id: 1, title: 'KBTU Initiation Day', date: '2026-10-20', place: 'Halyk Arena', seats: 150 },
    { id: 2, title: 'Körinis', date: '2026-11-15', place: 'Hall of Independence', seats: 300 },
    { id: 3, title: 'IT Management Workshop', date: '2026-11-20', place: 'Room 404', seats: 45 },
    { id: 4, title: 'React Native Meetup', date: '2026-12-01', place: 'Online', seats: 100 },
  ];