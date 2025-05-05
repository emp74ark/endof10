import { IEvent } from '@/entities/interfaces';
import { Event } from './event';
import styles from './event.module.scss';

type EventsProps = {
  events: IEvent[];
};

export function EventsList({ events }: EventsProps) {
  return (
    <div className={styles.events}>
      {events.map((event) => (
        <Event key={event.name} event={event} />
      ))}
    </div>
  );
}
