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
        <Text tag="p">
          But alas, duality. With all these benefits, you’d imagine there will be costs to balance
          the benefits out.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          There are 3 prominent costs to drinking alcohol:{' '}
          <b>health, control, & psychological growth opportunity-cost</b>.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Health
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Alcohol is a{' '}
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.ALCOHOL.TOXICITY}>
            toxin
          </Link>{' '}
          with many{' '}
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.ALCOHOL.SHORT_TERM_EFFECTS}>
            short
          </Link>{' '}
          &{' '}
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.ALCOHOL.LONG_TERM_EFFECTS}>
            long
          </Link>
          term health effects. It:
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p"> Disrupts deep sleep</Text>
          <Text tag="p">Makes you have to urinate (and subsequently dehydrates you)</Text>
          <Text tag="p">Crashes your bloodsugar levels (in excess)</Text>
          <Text tag="p">Makes you sleepy (actually lowering your energy levels)</Text>
          <Text tag="p">Taxes your liver & organs over time</Text>
          <Text tag="p">Reduces muscle protein synthesis (bad for serious lifters)</Text>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">Additionally:</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            Night drinking events are usually in the hours of 9pm-3/4am on the weekend and cost you
            sleep
          </Text>
          <Text tag="p">
            Drinks can add up in calories and you can down 700-1000 calories before you know it
            (impeding weight loss efforts)
          </Text>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          If you have ever drank, you know you don’t feel 100% the next day. You feel “off”. If you
          lift weights, your nervous system is no longer firing at full capacity for heavy lifts.
          You find yourself exhausted.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The combination of drinking and a lack of quality sleep taxes you in the short-term. In
          the long-term you are taxing your organs (like your brain & liver). Just a few nights are
          ok, but when alcohol is an intimate part of your social toolkit, drinking becomes a
          long-term item.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The health costs of drinking are formidable. If you are an individual that champions your
          health and want to be top-quartile fit, these will urk you. Why am I poisoning my body? My
          one and only body? Is there any other way?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Control
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The nights I go out sober I am struck by how in-control I am of myself. Surrounded by
          tipsy-to-drunk people, you can actually realize what being drunk sounds like, how someone
          intoxicated acts. It is different. There is a clear behavioral & energy delta.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          There is something empowering about being in-control of yourself. Some people are running
          from themselves, they want to lose control, lose the voice in their head holding them
          captive. Some people are just trying to have a great time and love it, and I admit, it is
          very fun to go wild and let loose. You don’t want to be that guy who drains energy from
          those around you (and I have consistently been that guy in the past).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          But when sober in non-sober environments, I am always struck by how composed I am.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Instead of struggling for the next thing to say, I have charisma. Instead of forgetting a
          girl’s name 3 minutes after I met her, I remember it easily.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Control over your emotions, your thoughts, your body, is a beautiful thing.{' '}
          <b>You become better socially instead of worse.</b>
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          So what is the problem? Why drink if being in control is better? Control comes at a cost
          as well, you risk being “boring” or getting in your head and over-calculating.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <b>
            Our greatest enemy in socialization is going into our heads instead of meeting people on
            the physical plane & connecting.
          </b>{' '}
          You can’t connect to another person if you aren’t “out there”.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          A day after being out sober, I am so happy that I am in control of my body. No sickness,
          no hangover. My day is not lost. I am 100%, ready to push my health to higher frontiers
          and have a great day.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Psychological Growth Opportunity-Cost
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">lorem.</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default QuittingSocialDrinking;
