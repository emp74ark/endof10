import styles from './logo.module.scss';
import Link from 'next/link';

export function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link className="unstyled" href="/">
        End of 10
      </Link>
    </h1>
  );
}
