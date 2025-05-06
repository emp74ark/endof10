export interface IPlace {
  name: string;
  url: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  latitude: number;
  longitude: number;
  email: string;
  telephone?: string;
  openingHours: string;
  estimatedCost?: string;
}

export interface IEvent {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  inLanguage: string;
  url: string;
  email?: string;
  telephone?: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  latitude: number;
  longitude: number;
  estimatedCost: string;
  eventAttendanceMode?:
    | 'https://schema.org/OfflineEventAttendanceMode'
    | 'https://schema.org/OnlineEventAttendanceMode';
}

export interface ICountry {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
}
