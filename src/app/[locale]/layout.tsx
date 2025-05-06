import type { Metadata } from 'next';
import '@/styles/global.scss';
import { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Where can I find Linux support? | End of 10',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
