import { LINE_HEIGHT, SPACES, TEXT_SIZE } from '../../../design';
import React, { FunctionComponent } from 'react';

import Head from 'next/head';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';

interface Props {}

const HowToGetJacked: FunctionComponent<Props> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Benyam Ephrem | How To Get Jacked</title>
        <meta key="description" name="description" content="How To Get Jacked" />
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
