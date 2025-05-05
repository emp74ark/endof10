import { IEvent } from '@/entities/interfaces';
import styles from './event.module.scss';
import { apiService } from '@/services/apiService';
import Link from 'next/link';
import { Icon } from '@/components/icons';

type EventProps = {
  event: IEvent;
};

export async function Event({ event }: EventProps) {
  const country = await apiService.getCountryByCode(event.addressCountry);
  return (
    <div className={styles.event}>
      <h3>
        <Link href={event.url} target="_blank">
          {event.name}
        </Link>
      </h3>
      <ul>
        <li>
          <Icon iconName="translate" size="1.3rem" />
          <span>Language: {event.inLanguage}</span>
        </li>
        <li>
          <Icon iconName="clock-countdown" size="1.3rem" />
          <span>
            From: {new Date(event.startDate).toLocaleString()}, to:{' '}
            {new Date(event.endDate).toLocaleString()}
          </span>
        </li>
        <li>
          <Icon iconName="signpost" size="1.3rem" />
          <span>
            {event.streetAddress}, {event.postalCode} {event.addressLocality},{' '}
            {country ? country.name.common : event.addressCountry}
          </span>
        </li>
        <li>
          <Icon iconName="map-pin" size="1.3rem" />
          <Link
            href={`http://www.openstreetmap.org/?mlat=${event.latitude}&mlon=${event.longitude}#map=18/${event.latitude}/${event.longitude}&layers=T`}
            target="_blank"
          >
            OpenStreetMap
          </Link>
        </li>
        <li>
          <Icon iconName="link" size="1.3rem" />
          <a href={event.url} target="_blank">
            Website
          </a>
        </li>
        {event.telephone && (
          <li>
            <Icon iconName="phone" size="1.3rem" />
            <a href={`tel:${event.telephone}`}>{event.telephone}</a>
          </li>
        )}
        {event.email && (
          <li>
            <Icon iconName="envelope" size="1.3rem" />
            <a href={`mailto:${event.email}`} target="_blank">
              {event.email}
            </a>
          </li>
        )}
        {event.estimatedCost && (
          <li>
            <Icon iconName="hand-coins" size="1.3rem" />
            <span>{event.estimatedCost}</span>
          </li>
        )}
        {event.eventAttendanceMode && (
          <li>
            <Icon iconName={event.eventAttendanceMode === 'https://schema.org/OnlineEventAttendanceMode' ? 'desktop' : 'couch'} size="1.3rem" />
            <span>{event.eventAttendanceMode === 'https://schema.org/OnlineEventAttendanceMode' ? 'online' : 'offline'}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
