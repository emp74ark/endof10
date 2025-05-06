import styles from './footer.module.scss';
import { Nav } from '@/components/nav';
import { NavVariant } from '@/components/nav/nav';
import Link from 'next/link';
import Image from 'next/image';
import { Languages } from '@/components/languages';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className={styles.footer}>
      <Nav variant={NavVariant.Footer} />
      <p className="p5">
        <Link href="/">{t('endOf10WebsiteContent')}</Link>
        <span>{t('isLicensedUnder')}</span>
        <Link
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
        >
          CC BY 4.0
          <Image src="/cc.svg" alt="Creative Commons" width={16} height={16} />
          <Image src="/by.svg" alt="Attribution" width={16} height={16} />
        </Link>
      </p>
      <p className={clsx('p5', 'txt__center')}>
        <span>{t('thanksToKdeForSupportingTheProject')}</span>
        <Link href="mailto:kde-www@kde.org">KDE Webmasters</Link>
        <span>{t('publicMailingList')}</span>
        <Link href="https://kde.org/privacypolicy/" target="_blank">
          {t('privacyPolicy')}
        </Link>
        <span>{t('and')}</span>
        <Link
          href="https://kde.org/community/whatiskde/impressum/"
          target="_blank"
        >
          {t('legalNotices')}
        </Link>
        <span>{t('forMoreInformation')}</span>
      </p>
      <Languages />
    </footer>
  );
}
