import { IPlace } from '@/entities/interfaces';
import { Place } from './place';
import styles from './place.module.scss';

type PlacesProps = {
  places: IPlace[];
};

export function PlacesList({ places }: PlacesProps) {
  return (
    <div className={styles.places}>
      {places.map((place) => (
        <Place key={place.name} place={place} />
      ))}
    </div>
  );
}
