import { apiService } from '@/services/apiService';
import { PlacesList } from '@/components/place';
import { InputSearch } from '@/components/input-search';

type PlacesPageProps = {
  searchParams: Promise<Record<string, string>>;
};

export default async function PlacesPage({ searchParams }: PlacesPageProps) {
  const { search } = await searchParams;
  const places = await apiService.getPlaces(search);

  return (
    <main>
      <h2>Where can I find Linux support?</h2>
      <p className="p4">
        Here is a list of repair cafes, independent shops, organizations, groups
        and collectives where you can get help with Linux on a regular basis.
        Also take a look at the events.
      </p>
      <InputSearch target="places" />
      <PlacesList places={places} />
    </main>
  );
}
