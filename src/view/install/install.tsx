import { ButtonLink } from '@/components/button-link';
import styles from './install.module.scss';
import clsx from 'clsx';

export function Install() {
  return (
    <main className={styles.install}>
      <h2>DIY Install Guide</h2>
      <p className="p4">
        We recommend getting in-person support for the best experience.
      </p>

      <p className="p4">If you
        feel you&apos;re technically versed enough to do it yourself,
        here&apos;s a general guide with the three steps needed for installing
        Linux. Once you have picked a distribution, their website will have more
        detailed guides you can follow.
      </p>

      <div className={clsx(styles.install__warning, 'p5')}>
        ⚠️ <strong>Do Backups!</strong> ⚠️ Before you start, make sure to back up any important
        data from the computer you&apos;re about to reinstall!
      </div>
      <ol>
        <li>
          <dt>Download a new OS</dt>
          <dd>
            Download the operating system you want to install. Search for Linux
            distributions for beginners to get some suggestions.
          </dd>
        </li>
        <li>
          <dt>Flash to a USB key</dt>
          <dd>
            Flash the operating system to a USB stick using a standard tool,
            such as Rufus. This will overwrite all data on the USB stick, so
            make sure to back up the files you want to keep.
            <ButtonLink
              label={'Get Rufus \u2192'}
              url="https://rufus.ie/en/"
              size="medium"
              openInNewTab={true}
            />
          </dd>
        </li>
        <li>
          <dt>Boot and install on your computer</dt>
          <dd>
            Boot your computer from your USB stick. You will need to know the
            correct keyboard combination beforehand. At this point you will
            overwrite all data on the computer, so have a back up of the files
            you want to keep. Follow the instructions, and voilà! Welcome to
            your new, old computer!
          </dd>
        </li>
      </ol>
    </main>
  );
}
