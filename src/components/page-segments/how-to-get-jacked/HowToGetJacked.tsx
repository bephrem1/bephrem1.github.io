import { COLORS, LINE_HEIGHT, SPACES, TEXT_SIZE } from '../../../design';
import React, { FunctionComponent } from 'react';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import { EXTERNAL_LINKS } from '../../../global-helpers/urls';
import Head from 'next/head';
import Link from '../../shared/elements/Link';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import View from '../../shared/elements/View';
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
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

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
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          Gaining Muscle Mass
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Microtears</b>: Workout to create microtears in your muscles
          </u>
          , this is done by lifting hard (~4-8 reps is fine) to failure, always pushing the weight
          from last workout.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <ul>
          <li>
            <Text tag="p">
              <b>Challenge</b>: You can make quick adjustments if you just can't do a challenge
              weight (stop mid set and grab new weight then keep going), but you must always
              challenge and hammer the muscles (with good form so you get proper isolation)
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <ul>
            <li>
              <Text tag="p">
                You must bring an intensity to the table that is ready to take on weights you don’t
                think you can handle.
              </Text>
            </li>
            <Spacer direction="vertical" size={SPACES.GAP.MICRO} />
            <li>
              <Text tag="p">
                Never compromise form. You will risk injury and isolate the muscle less.
              </Text>
            </li>
          </ul>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <ul>
          <li>
            <Text tag="p">
              <b>Isolation</b>: Isolation is key. What you isolate will grow.
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <ul>
            <li>
              <Text tag="p">
                Mind muscle connection is critical to establish in all of your exercises. You have
                to really feel the stretch & contraction, & in the right location, for the movement
                to be effective.
              </Text>
            </li>
          </ul>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <ul>
          <li>
            <Text tag="p">
              <b>Don't Go To X Reps</b>: Following a program and hitting X reps is just a guiderail.
              You want to pick heavy weight that you can go to 4-8 reps on, and do that weight to
              failure (transcend a rep-count). If you get to 9+ reps, go heavier. If you can do just
              3-4 reps, go lighter.
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <ul>
            <li>
              <span>
                <Text tag="p">
                  Exercises are a detail, routine is a detail. Find movements that you like, that
                  isolate the proper muscle group(s). Then focus on{' '}
                </Text>
                <Link
                  type="external"
                  dest={EXTERNAL_LINKS.WIKIPEDIA.PROGRESSIVE_OVERLOAD}
                  openInNewWindow
                >
                  progressive overload
                </Link>
                <Text tag="p"> (aggressive weight progression).</Text>
              </span>
            </li>
          </ul>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Protein</b>: Get 1g of protein per 1lb of overall weight daily. Eat at or a few
            hundred calories above maintenance calories.
          </u>{' '}
          The main concern around calories is having the energy to do your workouts with vigor to
          create microtears in the muscle and maintain existing muscle mass.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Sleep</b>: Sleep well.
          </u>{' '}
          This is important because your muscles are repaired the most when you are in deep sleep.
          You will notice soreness recover greatly after a night's sleep.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <span>
          <Text tag="p" backgroundColor={COLORS.HIGHLIGHT_YELLOW}>
            <u>
              <b>The Goal:</b>
            </u>
          </Text>
          <Text tag="p">
            {' '}
            You are succeeding if your strength increases every 1-2 workouts by ~5lbs in weight or
            2-4 more reps on an exercise at X weight (when you go from 4 reps @ 80lbs to 7-8 reps @
            80lbs, then you hop to 4 reps @ 85lbs next workout, etc). You will notice your muscles
            will be larger as your body adds muscle tissue.
          </Text>
        </span>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Tips:
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <ul>
          <li>
            <Text tag="p">
              Lifting twice a day for different body regions can speed up your mass & strength
              gains. It will take a toll on your joints & tendons the most (vs muscles, which will
              recover quickly if you are sleeping & eating right). It will also lead to overtraining
              and chronic fatigue if you do not eat enough calories.
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <li>
            <Text tag="p">
              If you have worked out for years and haven’t made meaningful strength or lean mass
              gains, it is likely due to diet (protein intake + energy balance) or a non-aggressive
              weight progression.
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <li>
            <Text tag="p">
              You will be surprised at the amount of lean mass you really have when you cut. It is
              critical to reach a good point of size before you move to a caloric deficit where
              gaining lean mass becomes much more difficult to unlikely, otherwise you will be
              “shredded but small”.
            </Text>
          </li>
          <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
          <li>
            <Text tag="p">
              Chicken is a very effective way to fulfill your protein macro (any lean meats).
            </Text>
          </li>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          Cutting Fat
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You will notice as you gain muscle mass, you will add fat as well. Eventually it will come
          time to work on cutting down your fat stores. This is a judgement call by you based on
          your overall goals (it is recommended to begin cutting when you are ~15%+ bodyfat, then
          bulk when you get down to 8-10%, then repeat or maintain).
        </Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default HowToGetJacked;
