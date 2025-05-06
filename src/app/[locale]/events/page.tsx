import Link from 'next/link';
import { EventsList } from '@/components/event/events';
import { apiService } from '@/services/apiService';
import { InputSearch } from '@/components/input-search';

type EventsPageProps = {
  searchParams: Promise<Record<string, string>>;
};

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const { search } = await searchParams;
  const events = await apiService.getEvents(search);

  return (
    <main>
      <h2>Upcoming Events</h2>
      <p className="p4">
        Here is a list of events where you can get help with Linux. You can also
        look for <Link href="/places">places</Link> that provide help more
        regularly.
      </p>
      <InputSearch target="events" />
      <EventsList events={events} />
    </main>
  );
}
