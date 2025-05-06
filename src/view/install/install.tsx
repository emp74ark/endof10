import { ButtonLink } from '@/components/button-link';
import styles from './install.module.scss';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export function Install() {
  const t = useTranslations('install');
  return (
    <main className={styles.install}>
      <h2>{t('diyInstallGuide')}</h2>
      <p className="p4">
        {t('weRecommendGettingIn-personSupportForTheBestExperience')}
      </p>

      <p className="p4">
        {t('ifYouFeelYouAreTechnicallyVersedEnoughToDoItYourself')}
      </p>

      <div className={clsx(styles.install__warning, 'p5', 'txt__center')}>
        <p>
          ⚠️ <strong>{t('doBackups')}</strong> ⚠️
        </p>
        <p>{t('beforeYouStart')}</p>
      </div>
      <ol>
        <li>
          <dt>{t('downloadANewOs')}</dt>
          <dd>{t('downloadTheOperatingSystem')}</dd>
        </li>
        <li>
          <dt>{t('flashToAUsbKey')}</dt>
          <dd>
            <p>{t('flashTheOperatingSystemToAUsbStick')}</p>
            <ButtonLink
              label={t('getRufus')}
              url="https://rufus.ie/en/"
              size="medium"
              openInNewTab={true}
              customClass="centered"
            />
          </dd>
        </li>
        <li>
          <dt>{t('bootAndInstallOnYourComputer')}</dt>
          <dd>{t('bootYourComputerFromYourUsbStick')}</dd>
        </li>
      </ol>
    </main>
  );
}
