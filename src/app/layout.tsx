import * as React from 'react';
import type { Metadata } from 'next';
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
  alternates: {
    canonical: 'https://coffee-delivery-rocket.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Coffe Delivery',
    description: 'A Sua Cafeteria Online',
    siteName: 'Coffe Delivery',
    images: [
      {
        url: 'https://coffee-delivery-rocket.vercel.app/assets/opengraph/og_coffe.jpg',
        type: 'image/jpg',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://coffee-delivery-rocket.vercel.app/assets/opengraph/og_coffe.jpg',
        type: 'image/jpg',
        width: 400,
        height: 400,
      },
    ],
    locale: 'pt_BR',
    url: 'https://coffee-delivery-rocket.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@MarcosSantosDev',
    images: [
      {
        url: 'https://coffee-delivery-rocket.vercel.app/assets/opengraph/og_coffe.jpg',
        type: 'image/jpg',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://coffee-delivery-rocket.vercel.app/assets/opengraph/og_coffe.jpg',
        type: 'image/jpg',
        width: 400,
        height: 400,
      },
    ],
  },
  title: 'Coffe Delivery - Encontre o café perfeito para qualquer hora do dia',
  description: 'Coffe Delivery - A Sua Cafeteria Online',
  icons: {
    shortcut: '/assets/app/coffee-delivery-logo.svg',
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
