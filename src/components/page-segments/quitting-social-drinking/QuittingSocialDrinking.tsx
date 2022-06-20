import React, { FunctionComponent } from 'react';
import { SPACES, TEXT_SIZE } from '../../../design';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import { EXTERNAL_LINKS } from '../../../global-helpers/urls';
import EllipsisSeparator from '../../shared/layout/EllipsisSeparator';
import Head from 'next/head';
import Link from '../../shared/elements/Link';
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

        <Text tag="h6" bold>
          Prologue
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I have been a{' '}
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.SOCIAL_DRINKING} openInNewWindow>
            social drinker
          </Link>{' '}
          for as long as I can remember. In high school I was not social and did not go to parties,
          it was only until my first year of college that I began going to parties and along with
          that, drinking socially. I did not question it, it was what everyone was doing, it let you
          let loose, so you just go along with it.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is only until recent that I have started to question the necessity of drinking in
          social venues. I have felt the damaging effects on health the next day, I have seen its
          effects on my physique and weight loss progress, I have seen friends make fools of
          themselves and be people who they are not, I have seen me make a fool of myself and be
          someone I am not (losing respect from my peers in the process).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Is drinking worth it? Are the health costs worthy of the powers alcohol gives you in
          social settings? Can the same effects be replicated without alcohol?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          This is a question that receives lengthy and heated debate online. It ranges all the way
          from devoted social drinkers who swear by drinking making their life better socially (or
          it just being fun), to extreme anti-drinkers who draw a moral and health line in the sand
          and swear away drinking.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          As with anything in life, I think the analysis of drinking in your social life comes down
          to a non-binary answer. The answer lay somewhere between the extremes.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          This discussion is not about pride, it is not about finding a camp to pledge allegiance
          to. It is about finding the truth, facts & principles, to guide our decision-making.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          My goal in this essay is not to convince you of any side directly. I just want to point
          out some observations I have had (by this age of 23) about social drinking, and lay out
          some principles. I imagine this will lead us somewhere.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          Why Drink Socially?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          People drink alcohol socially because it is fun to be inebriated and it is a state tap, a
          light switch, for easy socialization.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is fun to have full expression socially, not feel social anxiety, and act goofy. Being
          a good level of buzzed/tipsy is fun. This is undeniable.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You will smile, enjoy yourself, and enjoy those around you (to a certain point of
          inebriation). Drinking gives you social superpowers.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          This is why people drink socially (besides the taste of the beverage they are consuming).
          They want freedom, they want fun, they want to let go of the steering wheel that keeps
          them straight and often boring in a high-energy environment like a bar, club, or social
          gathering.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <b>In social settings, energy is currency.</b> If you can go up to that pretty girl and
          say the right thing with the right energy, you are high-value and have a better chance
          than if you are stone-cold sober and bring the heaviness of reluctance into an
          interaction.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          This is why people drink. For fun, for freedom. To loosen up, to smile without care, to
          express themselves where otherwise thought would impede.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          The Costs
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">lorem.</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default QuittingSocialDrinking;
