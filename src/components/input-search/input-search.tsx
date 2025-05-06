'use client';

import styles from './input-search.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Icon } from '@/components/icons';
import { useTranslations } from 'next-intl';

interface InputSearchProps {
  target: 'places' | 'events';
}

export function InputSearch({ target }: InputSearchProps) {
  const t = useTranslations('search');
  const searchParams = useSearchParams();
  const router = useRouter();
  const [exp, setExp] = useState(searchParams.get('search') || '');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setExp(value);
  }

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (exp) {
      params.set('search', exp);
      router.push(`${target}?${params.toString()}`);
    } else {
      params.delete('search');
      router.push(target);
    }
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return;
    handleSearch();
  }

  return (
    <div className={styles.input}>
      <input
        className={styles.input__text}
        type="search"
        placeholder={t("search")}
        value={exp}
        onChange={handleInputChange}
        onKeyUp={handleEnter}
      />
      <Icon
        iconName="magnifying-glass"
        size="1.3rem"
        onClick={handleSearch}
        customClass={styles.input__button}
      />
    </div>
  );
}
