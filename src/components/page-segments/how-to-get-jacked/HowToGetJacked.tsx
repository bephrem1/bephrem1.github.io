import { LINE_HEIGHT, SPACES, TEXT_SIZE } from '../../../design';
import React, { FunctionComponent } from 'react';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import Head from 'next/head';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import { useRouter } from 'next/router';

interface Props {}

const HowToGetJacked: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | How To Get Jacked',
          description: 'How To Get Jacked - A Simple Guide.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'How To Get Jacked',
          description: 'How To Get Jacked - A Simple Guide.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          How To Get Jacked
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="h5" bold>
          Summary
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The below encapsulates, as succinctly as possible, the only principles needed to alter
          your body composition to achieve your aesthetic goals (with additional tips &
          observations).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} lineHeight={LINE_HEIGHT.SMALL}>
          <b>Note:</b> The focus is on body composition which is a single aspect of overall health.
          In-depth nutrient balance, cardiovascular endurance, etc are not directly addressed.
        </Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default HowToGetJacked;
