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

const AProfessionalVacuum: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | A Professional Vacuum',
          description: 'A Professional Vacuum - Nothing Too Professional.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'A Professional Vacuum',
          description: 'A Professional Vacuum - Nothing Too Professional.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          A Professional Vacuum
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} uninteractive>
          June 2022
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p">
          I left my job at Twitter on January 21st, 2022. Today is June 21st, 2022 and I have lived
          in a professional vacuum, as I like to call it, for 5 months ("professional vacuum" as a
          euphemism for unemployed).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          What I don't like about the word "unemployed" is the weight it carries in society. It
          carries a weight of uselessness, of unwantedness. You cannot create value. You are a
          reject. You are on the fringes of society, unable to be a true contributor.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          If you were to chart the{' '}
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.ASYMPTOTIC_ANALYSIS} openInNewWindow>
            asymptotic
          </Link>{' '}
          behaviour of a professionally unengaged person's wealth, health, happiness, it would
          eventually limit to 0.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          For me, this is an experiment I have wanted to run for the past 2-3 years. Many times
          while building Back To Back SWE I told myself "one day, I am going to take a year off and
          just do nothing". Those were just words of solace for my depressed and overworked mind at
          the time, a coping mechanism to continue building.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Being professionally unengaged has a stigma socially. Acquaintances constantly ask my
          friends "what does he do all day?," strangers at bars struggle to comprehend, close
          friends subliminally update their internal mapping of Ben to "doing nothing
          professionally".
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Having a high-status name, an association, is important. "He works at Twitter." "She works
          at Airbnb." We need these things to latch on and identify new and existing figures in our
          lives (& establish their value to us). Since work traditionally occupies 5/7ths of the
          week and is the main contributor to purpose in life, it only makes sense that the largest
          identity "hook" we seek out to latch onto is what we do.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you no longer are running a company you have run, you lose that identity, that hook.
          You lose what made you relevant. Relevancy comes from impacting others, and when you
          resign from your position, you lose the associated clout you once had.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I knew the dynamics at play and still decided that taking the time off was worth it and
          the right move for me to move my life in a healthier direction.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          These external pressures would bother me in the longterm, but not in the nearterm, as this
          is a temporary experiment. Generally, I always want it to be hard to explain what I do to
          others, then I think I will be living interestingly.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Money tends to eclipse all other areas of life (and rightly so because money is power in
          life to <i>do</i>) to the point that one lets their personal life slip.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          And I let my personal life slip. I let my health slip, my rock-bottom self-esteem from
          childhood sit unhealed, my friendships deteriorate. Everything outside of money that
          contributes to happiness was slipping. By default, all of these facets of life default to
          decomposing into chaos unattended.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">For years:</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            I had not had a breakthrough in my fitness goals despite going to the gym regularly (due
            to lack of time & focus)
          </Text>
          <Text tag="p">
            I had not had any intimacy or deeper interaction with girls (due to social ineptitude &
            low self-esteem)
          </Text>
          <Text tag="p">
            I had neglected relationships in my life and socialzation (which I believe is as
            primitive a need as our need for food)
          </Text>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I decided that now was the time to make a change in all of the areas of my life that did
          not have to do with bits and bytes.
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          In late December, after moving back to my childhood home from Colorado for a reset, I
          began to workout like a prison inmate. I was lifting 2x a day and my strength was growing
          leaps & bounds like it never had before. I was running from demons, I had a mission in my
          head.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          In March, I moved to Washington DC with my college friend{' '}
          <Link
            type="external"
            dest={EXTERNAL_LINKS.MICHAEL_WEINBERGER_PERSONAL_SITE}
            openInNewWindow
          >
            Michael
          </Link>{' '}
          and began to go out to bars, clubs, & general social events (to grow in that area as
          well). Things I just never did in college because I was closed off, building my business,
          head-down. I began learning social rulesets I had never learned before (one rule being
          "there are no rules").
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I began a cut and was losing 1-2lbs a week at a rapid rate (down ~21lbs at the writing of
          this) while maintaining all of my muscle mass which had grown greatly from the 2x/day
          lifting (which actually led to overtraining until I started my March cut). I have had to
          get my jeans tailored and all of my underwear replaced because nothing fit anymore (my
          waist thinned down 3-4 inches).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I had worn glasses for years. Initially when I got them I loved them, but they made me
          look & feel like a nerd (which I am) in social environments. So I got contact lenses. The
          world looked new to me afterwards, perfect peripheral vision. My self-esteem in social
          settings went up.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Since I was a child I have had bad hyperpigmentation from acne flare-ups on my shoulders &
          back (that I don't even remember). For years I'd go to dermatologists and they would give
          me routines that wouldn't work or they'd just say "it'll fade over time," then I would
          forget about it. It hadn't faded in over 6 years. Through a lot of online research I
          implemented a skincare routine (a key component being Cerave Resurfacing Retinol Serum)
          that has almost completely cleared my shoulders & back.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          As silly as it sounds, one of the largest hits to my self-esteem was my PIH. I was afraid
          to take my shirt off my whole life. One sunny day coming back from the gym, now that my
          back pigmentation was starting to heal and I was quickly losing weight, I jogged back
          shirtless. I was very self-conscious. Then the next day I tried to walk back without a
          shirt. Eventually I'd go on runs completely shirtless from leaving my front door to
          returning to my front door. Now I am not afraid to take my shirt off at all and it has
          transformed my confidence & body image.
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          Life has slowed down. I have been able to walk around the city during work hours and just
          people-watch. I go on runs and just observe the mosaic of the city move and mold.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When inspired, I write. I began writing for myself (inspired by{' '}
          <Link type="external" dest={EXTERNAL_LINKS.PAUL_GRAHAM}>
            Paul Graham
          </Link>
          ), articulating my thoughts in a persistent medium and expanding on them.
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          Being the son of foreign parents, all my life I have done things I did not want to do for
          the sake of professional furthering. This has put me in a great position, but I wanted to
          run an experiment where I strived for nothing to see what would surface within me as true.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The past 5 months I have run an experiment simulating retirement.{' '}
          <b>What I have realized is that you never want to retire for a life full of leisure.</b>{' '}
          What you do is an intimate part of your life's meaning and purpose.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You just have to find work that you like. Whether it is a job, or painting your own
          picture with a company. This is possible, it is just that the subset of "professional
          engagements I can get & do that will make me happy" is a very small subset of
          "professional engagements I can get & do".
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You want work that professionally fulfills you, and gives you freedom and flexibility in
          life. We need impact and a name. We need meaning.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">A large part of happiness is a purpose and a mission.</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default AProfessionalVacuum;
