import Link from 'next/link';
import { EventsList } from '@/components/event';
import { apiService } from '@/services/apiService';
import { InputSearch } from '@/components/input-search';
import { getTranslations } from 'next-intl/server';

type EventsPageProps = {
  searchParams: Promise<Record<string, string>>;
};

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const t = await getTranslations('events');
  const { search } = await searchParams;
  const events = await apiService.getEvents(search);

  return (
    <main>
      <h2>{t('upcomingEvents')}</h2>
      <p className="p4">
        {t('hereIsAListOfEventsWhereYouCanGetHelpWithLinux')}{' '}
        <Link href="/places">{t('places')}</Link>{' '}
        {t('thatProvideHelpMoreRegularly')}
      </p>
      <InputSearch target="events" />
      <EventsList events={events} />
    </main>
  );
}
