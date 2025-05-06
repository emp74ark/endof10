import styles from './spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles.spinner__wrapper}>
      <div className={styles.spinner}>
        <div className={styles.spinner__element}></div>
      </div>
    </div>
  );
}
