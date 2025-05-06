'use client';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';

type ButtonLinkProps = {
  label: string;
  url: string;
  size: 'small' | 'medium' | 'large';
  openInNewTab?: boolean;
  customClass?: string;
};

export function ButtonLink({
  label,
  url,
  size,
  openInNewTab,
  customClass,
}: ButtonLinkProps) {
  const router = useRouter();

  const clickHandler = () => {
    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(url);
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={clsx(`button__${size}`, customClass)}
    >
      {label}
    </button>
  );
}
