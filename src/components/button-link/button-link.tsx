'use client';

import { useRouter } from 'next/navigation';
type ButtonLinkProps = {
  label: string;
  url: string;
  size: 'small' | 'medium' | 'large';
};

export function ButtonLink({ label, url, size }: ButtonLinkProps) {
  const router = useRouter();
  console.log(size)

  const clickHandler = () => {
    router.push(url);
  };

  return (
    <button onClick={clickHandler} className={`button__${size}`}>
      {label}
    </button>
  );
}
