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

      <div className={clsx(styles.install__warning, 'p5')}>
        <span>
          ⚠️ <strong>{t('doBackups')}</strong> ⚠️
        </span>
        <span>{t('beforeYouStart')}</span>
      </div>
      <ol>
        <li>
          <dt>{t('downloadANewOs')}</dt>
          <dd>{t('downloadTheOperatingSystem')}</dd>
        </li>
        <li>
          <dt>{t('flashToAUsbKey')}</dt>
          <dd>
            {t('flashTheOperatingSystemToAUsbStick')}
            <ButtonLink
              label={t('getRufus')}
              url="https://rufus.ie/en/"
              size="medium"
              openInNewTab={true}
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
