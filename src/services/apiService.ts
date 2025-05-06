import { ICountry, IEvent, IPlace } from '@/entities/interfaces';

class ApiService {
  endOf10Url = 'https://invent.kde.org/websites/endof10-org/-/raw/master/data';
  countriesUrl = 'https://restcountries.com/v3.1/alpha';

  getPlaces = async (exp?: string): Promise<IPlace[]> => {
    try {
      const response = await fetch(`${this.endOf10Url}/places.json`, {
        cache: 'force-cache',
      });
      const data = await response.json();
      const expLower = (exp || '').toLowerCase();
      return (data as IPlace[]).filter(
        (place) =>
          place?.name?.toLowerCase().includes(expLower) ||
          place?.streetAddress?.toLowerCase().includes(expLower) ||
          place?.addressLocality?.toLowerCase().includes(expLower) ||
          place?.addressCountry?.toLowerCase().includes(expLower)
      );
    } catch (e) {
      console.error(e);
      throw new Error('Could not fetch places.');
    }
  };

  getEvents = async (exp?: string): Promise<IEvent[]> => {
    try {
      const response = await fetch(`${this.endOf10Url}/events.json`, {
        cache: 'force-cache',
      });
      const data = await response.json();
      const expLower = (exp || '').toLowerCase();
      return (data as IEvent[]).filter(
        (event) =>
          event?.name?.toLowerCase().includes(expLower) ||
          event?.streetAddress?.toLowerCase().includes(expLower) ||
          event?.addressLocality?.toLowerCase().includes(expLower) ||
          event?.addressCountry?.toLowerCase().includes(expLower)
      );
    } catch {
      throw new Error('Could not fetch events.');
    }
  };

  getCountryByCode = async (code: string): Promise<ICountry | null> => {
    try {
      const response = await fetch(
        `${this.countriesUrl}/${code}?fields=name,flags`
      );
      if (response.status !== 200) {
        return null;
      }
      return await response.json();
    } catch {
      throw new Error(`Could not fetch country info by code: ${code}`);
    }
  };
}

const apiService = new ApiService();

export { apiService };
