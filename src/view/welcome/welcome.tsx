import Image from 'next/image';
import Link from 'next/link';
import styles from './welcome.module.scss';
import clsx from 'clsx';
import { ButtonLink } from '@/components/button-link';
import { useTranslations } from 'next-intl';

export function Welcome() {
  const t = useTranslations('welcome');
  return (
    <main className={styles.welcome}>
      <section className={styles.welcome__teaser}>
        <p className="p1">{t('supportForWindows10EndsOnOctober14')}</p>
        <p className="p1">{t('microsoftWantsYouToBuyANewComputer')}</p>
        <p className="p1">
          {t('butWhatIfYouCouldMakeYourCurrentOneFastAndSecureAgain')}
        </p>
      </section>
      <section>
        <Image src="laptop.svg" width={1440} height={640} alt="Laptop" />
      </section>
      <section>
        <p className={clsx('p4', 'txt__center')}>
          {t('ifYouBoughtYourComputerAfter2010')}
        </p>
        <p className={clsx('p4', 'txt__center')}>
          {t('installingAnOperatingSystemMaySoundDifficult')}
        </p>
        <p className="txt__center">
          <ButtonLink
            label={t('findSomeoneToHelpYou')}
            url="/places"
            size="large"
          />
        </p>
        <p className={clsx('p4', 'txt__center')}>
          <Link href="/install">{t('installLinuxYourself')}</Link>
        </p>
      </section>
      <section>
        <div className={styles.welcome__card}>
          <p className={clsx('p4', 'txt__center')}>
            {t('wouldYouLikeToHelpOthersKeepTheirComputerAliveAfterWindows10')}
          </p>
          <ButtonLink
            label={t('signUpAsRepairCollective')}
            url="/contribute"
            size="medium"
          />
        </div>
      </section>
      <section>
        <h2>
          <strong>{t('5Reasons')}</strong>
          {t('toUpgradeYourOldComputerToLinux')}
        </h2>
        <ol>
          <li>
            <dl>
              <dt>{t('itsWayCheaper')}</dt>
              <dd>{t('aNewLaptopCostsALotOfMoney')}</dd>
            </dl>
          </li>
          <li>
            <dt>{t('noAdsNoSpying')}</dt>
            <dd>{t('windowsComesWithLotsOfAdsAndSpywareNowadays')}</dd>
          </li>
          <li>
            <dt>{t('goodForThePlanet')}</dt>
            <dd>{t('productionOfAComputerAccountsFor75')}</dd>
          </li>
          <li>
            <dt>{t('communitySupport')}</dt>
            <dd>{t('ifYouHaveAnyIssuesWithYourCompute')}</dd>
          </li>
          <li>
            <dt>{t('userControl')}</dt>
            <dd>{t('youAreInControlOfTheSoftware')}</dd>
          </li>
        </ol>
      </section>
      <section>
        <h2>{t('convinced')}</h2>
        <p className={clsx('p4', 'txt__center')}>
          {t('thenFindYourClosestRepairCafe')}
        </p>
        <p className="txt__center">
          <ButtonLink
            label={t("repairYourOldComputer")}
            url="/places"
            size="medium"
          />
        </p>
      </section>
    </main>
  );
}
