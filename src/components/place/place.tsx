import { IPlace } from '@/entities/interfaces';
import styles from './place.module.scss';
import { apiService } from '@/services/apiService';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/icons';

type PlaceProps = {
  place: IPlace;
};

export async function Place({ place }: PlaceProps) {
  const country = await apiService.getCountryByCode(place.addressCountry);
  return (
    <div className={styles.place}>
      <h3>
        <Link href={place.url} target="_blank">
          {place.name}
        </Link>
      </h3>
      <ul>
        <li>
          {country && (
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              width={36}
              height={36}
            />
          )}
          <span>
            {place.streetAddress}, {place.postalCode} {place.addressLocality},{' '}
            {country ? country.name.common : place.addressCountry}
          </span>
        </li>
        <li>
          <Icon iconName="map-pin" size="1.3rem" />
          <Link
            href={`http://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=18/${place.latitude}/${place.longitude}&layers=T`}
            target="_blank"
          >
            OpenStreetMap
          </Link>
        </li>
        <li>
          <Icon iconName="clock-countdown" size="1.3rem" />
          <span>{place.openingHours}</span>
        </li>
        <li>
          <Icon iconName="link" size="1.3rem" />
          <a href={place.url} target="_blank">
            Website
          </a>
        </li>
        {place.telephone && (
          <li>
            <Icon iconName="phone" size="1.3rem" />
            <a href={`tel:${place.telephone}`}>{place.telephone}</a>
          </li>
        )}
        <li>
          <Icon iconName="envelope" size="1.3rem" />
          <a href={`mailto:${place.email}`} target="_blank">
            {place.email}
          </a>
        </li>
        {place.estimatedCost && (
          <li>
            <Icon iconName="hand-coins" size="1.3rem" />
            <span>{place.estimatedCost}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
