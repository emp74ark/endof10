import { ICountry, IEvent, IPlace } from '@/entities/interfaces';

class ApiService {
  endOf10Url = 'https://invent.kde.org/websites/endof10-org/-/raw/master/data';
  countriesUrl = 'https://restcountries.com/v3.1/alpha';

  getPlaces = async (): Promise<IPlace[]> => {
    try {
      const response = await fetch(`${this.endOf10Url}/places.json`);
      return await response.json();
    } catch {
      throw new Error('Could not fetch places.');
    }
  };

  getEvents = async (): Promise<IEvent[]> => {
    try {
      const response = await fetch(`${this.endOf10Url}/events.json`);
      return await response.json();
    } catch {
      throw new Error('Could not fetch events.');
    }
  };

  getCountryByCode = async (code: string): Promise<ICountry | null> => {
    try {
      const response = await fetch(
        `${this.countriesUrl}/${code}?fields=name,flags`
      );
      return await response.json();
    } catch {
      throw new Error(`Could not fetch country info by code: ${code}`);
    }
  };
}

const apiService = new ApiService();

export { apiService };
