import React, { FunctionComponent } from 'react';
import { SPACES, TEXT_SIZE } from '../../../design';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import EllipsisSeparator from '../../shared/layout/EllipsisSeparator';
import Head from 'next/head';
import List from '../../shared/elements/List';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import View from '../../shared/elements/View';
import { useRouter } from 'next/router';

interface Props {}

const QuittingSocialDrinking: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | Quitting Social Drinking',
          description: 'Quitting Social Drinking - You Do Not Need to Drink to Socialize Well.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'Quitting Social Drinking',
          description: 'Quitting Social Drinking - You Do Not Need to Drink to Socialize Well.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          Quitting Social Drinking
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} uninteractive>
          June 2022
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p">
          <b>Brief</b>: You do not need to drink alcohol to be socially performant. All effects of
          alcohol can be reproduced by a good mood (whether local to the day or global to your
          broader life), gradual energy escalation, conscious openness and curiosity, social
          experience, good self-esteem, & being around people you like.
        </Text>
        <EllipsisSeparator />

        <Text tag="p">lorem.</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default QuittingSocialDrinking;
