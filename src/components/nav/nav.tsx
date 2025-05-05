import Link from 'next/link';
import styles from './nav.module.scss';
import clsx from 'clsx';

export enum NavVariant {
  Header,
  Footer,
}

interface NavProps {
  variant: NavVariant;
}

export function Nav({ variant }: NavProps) {
  return (
    <nav
      className={clsx(
        styles.nav,
        variant === NavVariant.Header && styles.nav__header,
        variant === NavVariant.Footer && styles.nav__footer
      )}
    >
      <ul>
        <li>
          <Link href="/places">Places</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/install">DIY Install</Link>
        </li>
        {variant === NavVariant.Footer && (
          <>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/contribute">Add a place or event</Link>
            </li>
            <li>
              <Link href="/contribute">Contribute</Link>
            </li>
            <li>
              <Link
                href="https://invent.kde.org/websites/endof10-org"
                target="_blank"
              >
                Website source
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
