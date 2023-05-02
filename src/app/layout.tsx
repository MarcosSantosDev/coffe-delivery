import * as React from 'react';
import { Metadata } from 'next';
import { Baloo_2, Roboto } from 'next/font/google';

import Footer from '@/common/components/context/general/Footer/Footer';
import Header from '@/common/components/context/general/Header/Header';

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
  title: 'Coffe Delivery',
  description: 'Coffe Delivery',
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
        <div className="root-layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
