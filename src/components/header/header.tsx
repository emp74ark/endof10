import styles from './header.module.scss';
import { Logo } from '@/components/logo';
import { Nav } from '@/components/nav';
import { NavVariant } from '@/components/nav/nav';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav variant={NavVariant.Header} />
    </header>
  );
}
