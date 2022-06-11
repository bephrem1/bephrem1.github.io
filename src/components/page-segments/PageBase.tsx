import { FunctionComponent } from 'react';
import Head from 'next/head';
import React from 'react';
import View from '../shared/elements/View';

interface Props {
  children?: React.ReactNode;
}

const PageBase: FunctionComponent<Props> = ({ children }) => {
  return (
    <View id="root">
      <Head>
        <title>Benyam Ephrem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </View>
  );
};

export default PageBase;
