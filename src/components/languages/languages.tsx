import { useTranslations } from 'next-intl';

export function Languages() {
  const t = useTranslations('languages')
  return <p>{t('languages')}:</p>;
}
