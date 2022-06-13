import { COLORS, SPACES, TEXT_SIZE } from '../design';

import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import Logo from '../components/shared/Logo';
import PageBase from '../components/page-segments/PageBase';
import Spacer from '../components/shared/layout/Spacer';
import Text from '../components/shared/elements/Text';
import View from '../components/shared/elements/View';

const Custom404Page: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <Head>
        <title>Not Found :(</title>
      </Head>
      <View
        direction="vertical"
        minHeight="100vh"
        paddingX={SPACES.PADDING.SMALL}
        centerItemsHorizontally
        centerItemsVertically
      >
        <Logo height="100px" width="100px" />
        <Spacer direction="vertical" size={SPACES.GAP.MICRO} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} color={COLORS.TEXT.GRAY} uninteractive>
          (page not found)
        </Text>
      </View>
    </PageBase>
  );
};

export default Custom404Page;
