import * as React from 'react';
import { Metadata } from 'next';
import { Baloo_2, Roboto } from 'next/font/google';

import '@/common/sass/main.scss';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const baloo2 = Baloo_2({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo2',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  icons: {
    shortcut: 'assets/app-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${roboto.variable} ${baloo2.variable}`}>
      <body>{children}</body>
    </html>
  );
}
