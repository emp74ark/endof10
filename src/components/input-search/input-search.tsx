'use client';

import styles from './input-search.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface InputSearchProps {
  target: 'places' | 'events';
}

export function InputSearch({ target }: InputSearchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [exp, setExp] = useState(searchParams.get('search') || '');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setExp(value);
  }

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return;

    const params = new URLSearchParams(searchParams);
    if (exp) {
      params.set('search', exp);
      router.push(`${target}?${params.toString()}`);
    } else {
      params.delete('search');
      router.push(target);
    }
  }

  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Search"
      value={exp}
      onChange={handleInputChange}
      onKeyUp={handleSearch}
    />
  );
}
