import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('404')
  return (
    <main className="txt__center">
      <h1>{t('pageNotFound')}</h1>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
