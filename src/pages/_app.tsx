import '../styles/global.css';

import { getOpenGraphMetaTags, getSEOMetaTags } from '../global-helpers/page-headers';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalHead />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

const GlobalHead = () => {
  const router = useRouter();

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Native HTML Meta Tags for SEO */}
      {getSEOMetaTags()}

      {/* Open Graph Data */}
      {getOpenGraphMetaTags(router)}
    </Head>
  );
};

export default App;
