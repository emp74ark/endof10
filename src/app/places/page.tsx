import { apiService } from '@/services/apiService';
import { PlacesList } from '@/components/place';

export default async function PlacesPage() {
  const places = await apiService.getPlaces();

  if (places.length === 0) {
    return <h2>No places found</h2>;
  }

  return (
    <main>
      <h2>Where can I find Linux support?</h2>
      <p className="p4">
        Here is a list of repair cafes, independent shops, organizations, groups
        and collectives where you can get help with Linux on a regular basis.
        Also take a look at the events.
      </p>
      <PlacesList places={places} />
    </main>
  );
}
