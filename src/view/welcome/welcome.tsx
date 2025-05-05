import Image from 'next/image';
import Link from 'next/link';
import styles from './welcome.module.scss';
import clsx from 'clsx';
import { ButtonLink } from '@/components/button-link';

export function Welcome() {
  return (
    <main className={styles.welcome}>
      <section className={styles.welcome__teaser}>
        <p className="p1">Support for Windows 10 ends on October 14, 2025.</p>
        <p className="p1">Microsoft wants you to buy a new computer.</p>
        <p className="p1">
          But what if you could make your current one fast and secure again?
        </p>
      </section>
      <section>
        <Image src="laptop.svg" width={1440} height={640} alt="Laptop" />
      </section>
      <section>
        <p className={clsx('p4', 'txt__center')}>
          If you bought your computer after 2010, there&apos;s most likely no
          reason to throw it out. By just installing an up-to-date Linux
          operating system you can keep using it for years to come.
        </p>
        <p className={clsx('p4', 'txt__center')}>
          Installing an operating system may sound difficult, but you don&apos;t
          have to do it alone. With any luck, there are people in your area
          ready to help!
        </p>
        <p className="txt__center">
          <ButtonLink
            label={'Find someone to help you \u2192'}
            url="/places"
            size="large"
          />
        </p>
        <p className={clsx('p4', 'txt__center')}>
          <Link href="/install"> Install Linux yourself &rarr;</Link>
        </p>
      </section>
      <section>
        <div className={styles.welcome__card}>
          <p className={clsx('p4', 'txt__center')}>
            Would you like to help others keep their computer alive after
            Windows 10?
          </p>
          <ButtonLink
            label={'Sign up as repair collective \u2192'}
            url="/contribute"
            size="medium"
          />
        </div>
      </section>
      <section>
        <h2>
          <strong>5 Reasons</strong>
          to upgrade your old computer to Linux
        </h2>
        <ol>
          <li>
            <dl>
              <dt>It&apos;s waaaaay cheaper</dt>
              <dd>
                A new laptop costs a lot of money. Repair cafes will often help
                you for free. Software updates are also free, forever. You can
                of course show your support for both with donations!
              </dd>
            </dl>
          </li>
          <li>
            <dt>No ads, no spying</dt>
            <dd>
              Windows comes with lots of ads and spyware nowadays, slowing down
              your computer and increasing your energy bill.
            </dd>
          </li>
          <li>
            <dt>Good for the planet</dt>
            <dd>
              Production of a computer accounts for 75+% of carbon emissions
              over its lifecycle. Keeping a functioning device longer is a
              hugely effective way to reduce emissions.
            </dd>
          </li>
          <li>
            <dt>Community support</dt>
            <dd>
              If you have any issues with your computer, the local repair cafe
              and independent computer shop are there for you. You can find
              community support in online forums, too.
            </dd>
          </li>
          <li>
            <dt>User control</dt>
            <dd>
              You are in control of the software, not companies. Use your
              computer how you want, for as long as you want.
            </dd>
          </li>
        </ol>
      </section>
      <section>
        <h2>Convinced?</h2>
        <p className={clsx('p4', 'txt__center')}>
          Then find your closest repair cafe or independent computer shop and
          enjoy your brand-new, old computer!
        </p>
        <p className="txt__center">
          <ButtonLink
            label={'Repair your old computer \u2192'}
            url="/places"
            size="medium"
          />
        </p>
      </section>
    </main>
  );
}
