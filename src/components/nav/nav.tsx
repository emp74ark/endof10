import Link from 'next/link';
import styles from './nav.module.scss';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export enum NavVariant {
  Header,
  Footer,
}

interface NavProps {
  variant: NavVariant;
}

export function Nav({ variant }: NavProps) {
  const t = useTranslations('nav')
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
          <Link href="/places">{t('places')}</Link>
        </li>
        <li>
          <Link href="/events">{t('events')}</Link>
        </li>
        <li>
          <Link href="/install">{t('diyInstall')}</Link>
        </li>
        {variant === NavVariant.Footer && (
          <>
            <li>
              <Link href="/team">{t('team')}</Link>
            </li>
            <li>
              <Link href="/contribute">{t('addAPlaceOrEvent')}</Link>
            </li>
            <li>
              <Link href="/contribute">{t('contribute')}</Link>
            </li>
            <li>
              <Link
                href="https://invent.kde.org/websites/endof10-org"
                target="_blank"
              >
                {t('websiteSource')}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
