import { apiService } from '@/services/apiService';
import { PlacesList } from '@/components/place';
import { InputSearch } from '@/components/input-search';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { Spinner } from '@/components/spinner';

type PlacesPageProps = {
  searchParams: Promise<Record<string, string>>;
};

export default async function PlacesPage({ searchParams }: PlacesPageProps) {
  const t = await getTranslations('places');
  const { search } = await searchParams;
  const places = await apiService.getPlaces(search);

  return (
    <main>
      <h2>{t('whereCanIFindLinuxSupport')}</h2>
      <p className="p4">{t('hereIsAListOfRepairCafes')}</p>
      <InputSearch target="places" />
      <Suspense key={search} fallback={<Spinner/>}>
        <PlacesList places={places} />
      </Suspense>
    </main>
  );
}
