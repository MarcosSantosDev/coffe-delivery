import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Home } from '@/common/modules';

export default function HomePage() {
  const { t: translateHome } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{translateHome('home.title')}</title>
        <meta name="description" content="Pagina inicial | Playground Nextjs" />
      </Head>

      <Home />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
};
