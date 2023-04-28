import * as React from 'react';
import { Metadata } from 'next';
import { Baloo_2, Roboto } from 'next/font/google';

import '@/common/sass/main.scss';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const baloo2 = Baloo_2({
  weight: ['400', '500', '700', '600', '800'],
  variable: '--font-baloo2',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Coffe Delivery | Home',
  description: 'Coffe Delivery | Home',
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
      <body>
        <div className="root-layout">{children}</div>
      </body>
    </html>
  );
}
