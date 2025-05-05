import styles from './footer.module.scss';
import { Nav } from '@/components/nav';
import { NavVariant } from '@/components/nav/nav';
import Link from 'next/link';
import Image from 'next/image';
import { Languages } from '@/components/languages';
import clsx from 'clsx';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav variant={NavVariant.Footer} />
      <p className="p5">
        <Link href="/">End of 10 website content</Link>
        <span>is licensed under</span>
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
        <span>
          Thanks to KDE for supporting the project by hosting the website and
          providing the infrastructure. You can contact the
        </span>
        <Link href="mailto:kde-www@kde.org">KDE Webmasters</Link>
        <span>(public mailing list) or see the</span>
        <Link href="https://kde.org/privacypolicy/" target="_blank">
          Privacy Policy
        </Link>
        <span>and</span>
        <Link
          href="https://kde.org/community/whatiskde/impressum/"
          target="_blank"
        >
          Legal Notices
        </Link>
        <span>for more information.</span>
      </p>
      <Languages />
    </footer>
  );
}
