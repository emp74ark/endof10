import Link from 'next/link';
import { EventsList } from '@/components/event/events';
import { apiService } from '@/services/apiService';

export default async function EventsPage() {
  const events = await apiService.getEvents();

  if (events.length === 0) {
    return <h2>No places found</h2>;
  }
  return (
    <main>
      <h2>Upcoming Events</h2>
      <p className="p4">
        Here is a list of events where you can get help with Linux. You can also
        look for <Link href="/places">places</Link> that provide help more
        regularly.
      </p>
      <EventsList events={events} />
    </main>
  );
}
