'use client';

import { useRouter } from 'next/navigation';

type ButtonLinkProps = {
  label: string;
  url: string;
  size: 'small' | 'medium' | 'large';
  openInNewTab?: boolean;
};

export function ButtonLink({
  label,
  url,
  size,
  openInNewTab,
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
    <button onClick={clickHandler} className={`button__${size}`}>
      {label}
    </button>
  );
}
