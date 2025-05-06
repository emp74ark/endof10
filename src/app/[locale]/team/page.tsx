import { useTranslations } from 'next-intl';

export default function TeamPage() {
  const t = useTranslations('team');
  return (
    <main>
      <h2>{t('teamBehindEndOf10')}</h2>
      <p className="p4">{t('thisCampaign')}</p>

      <ul>
        <li>Tobias Bernard (GNOME Design Team)</li>
        <li>Joseph P. De Veaugh-Geiss (KDE Eco)</li>
        <li>Tobias Diekershoff (FSFE)</li>
        <li>Nico Düsing (Web Development)</li>
        <li>Bettina Louis (Outreach, Events, Lifelong learning)</li>
        <li>Bernard Sadaka (Outreach)</li>
        <li>Carolina Silva Rode (Outreach Latin America)</li>
        <li>Nicole Teale (KDE&apos;s Opt Green)</li>
        <li>Geoffrey Teale (Website)</li>
        <li>Gerardo Zamudio (Outreach)</li>
      </ul>
    </main>
  );
}
