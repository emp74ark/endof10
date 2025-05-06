import { locales } from '@/i18n/routing';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { languagesData } from '@/components/languages/languages.data';
import styles from './languages.module.scss';

export async function Languages() {
  const t = await getTranslations('languages');
  return (
    <section className={styles.languages}>
      <h5>{t('languages')}:</h5>
      <div className={styles.languages__list}>
        {locales.map((locale) => (
          <Link className='p5' href={`/${locale}`} key={locale}>
            {languagesData.find((l) => l.code === locale)?.name || locale}
          </Link>
        ))}
      </div>
    </section>
  );
}
