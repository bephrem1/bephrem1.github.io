import { COLORS, LINE_HEIGHT, SPACES, TEXT_SIZE } from '../../../design';
import React, { FunctionComponent } from 'react';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import { EXTERNAL_LINKS } from '../../../global-helpers/urls';
import Head from 'next/head';
import Link from '../../shared/elements/Link';
import List from '../../shared/elements/List';
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
        <List type="unordered">
          <Text tag="p">
            <b>Challenge</b>: You can make quick adjustments if you just can't do a challenge weight
            (stop mid set and grab new weight then keep going), but you must always challenge and
            hammer the muscles (with good form so you get proper isolation)
          </Text>
          <List type="unordered">
            <Text tag="p">
              You must bring an intensity to the table that is ready to take on weights you don’t
              think you can handle.
            </Text>
            <Text tag="p">
              Never compromise form. You will risk injury and isolate the muscle less.
            </Text>
          </List>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            <b>Isolation</b>: Isolation is key. What you isolate will grow.
          </Text>
          <List type="unordered">
            <Text tag="p">
              Mind muscle connection is critical to establish in all of your exercises. You have to
              really feel the stretch & contraction, & in the right location, for the movement to be
              effective.
            </Text>
          </List>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            <b>Don't Go To X Reps</b>: Following a program and hitting X reps is just a guiderail.
            You want to pick heavy weight that you can go to 4-8 reps on, and do that weight to
            failure (transcend a rep-count). If you get to 9+ reps, go heavier. If you can do just
            3-4 reps, go lighter.
          </Text>
          <List type="unordered">
            <Text tag="p">
              Exercises are a detail, routine is a detail. Find movements that you like, that
              isolate the proper muscle group(s). Then focus on{' '}
              <Link
                type="external"
                dest={EXTERNAL_LINKS.WIKIPEDIA.PROGRESSIVE_OVERLOAD}
                openInNewWindow
              >
                progressive overload
              </Link>{' '}
              (aggressive weight progression).
            </Text>
          </List>
        </List>
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
        <List type="unordered">
          <Text tag="p">
            Lifting twice a day for different body regions can speed up your mass & strength gains.
            It will take a toll on your joints & tendons the most (vs muscles, which will recover
            quickly if you are sleeping & eating right). It will also lead to overtraining and
            chronic fatigue if you do not eat enough calories.
          </Text>
          <Text tag="p">
            If you have worked out for years and haven’t made meaningful strength or lean mass
            gains, it is likely due to diet (protein intake + energy balance) or a non-aggressive
            weight progression.
          </Text>
          <Text tag="p">
            You will be surprised at the amount of lean mass you really have when you cut. It is
            critical to reach a good point of size before you move to a caloric deficit where
            gaining lean mass becomes much more difficult to unlikely, otherwise you will be
            “shredded but small”.
          </Text>
          <Text tag="p">
            Chicken is a very effective way to fulfill your protein macro (any lean meats).
          </Text>
        </List>
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
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Calorie Deficit + Protein</b>: Use an app like{' '}
            <Link type="external" dest={EXTERNAL_LINKS.MYFITNESSPAL} openInNewWindow>
              MyFitnessPal
            </Link>{' '}
            to maintain a calorie deficit.
          </u>{' '}
          It is best to do a deficit that you can manage given your lifestyle. 1lb a week is a good
          loss rate, if you do 2lbs you risk muscle loss more, but if you hit your protein macro
          consistently and workout hard as above, you should be fine (but it is riskier if you slip,
          your body will literally "eat" your muscle). You will want to continue to get 1g of
          protein per 1lb of overall weight.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Continue Lifting</b>: Continue lifting with intensity and push yourself.
          </u>{' '}
          You will notice your lifts plateau, it is very difficult to gain muscle and strength in a
          calorie deficit, you are just fighting to maintain ground, maintain muscle mass as your
          body ticks away at fat stores day by day.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <u>
            <b>Sleep.</b>
          </u>
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
            You are succeeding if your strength stays the same week after week & your calorie
            deficit is maintained. Your weight will drop gradually, and it will be fat stores being
            consumed, less so muscle (though muscle loss is unavoidable in a cut).
          </Text>
        </span>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Tips:
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            Subcutaneous fat adds much more padding to our frame than we realize. There is a mental
            “trough” you will go through near the end of your cut where you are legitimately smaller
            (but look better) even having maintained all lean mass & strength. This is normal. You
            have to continue to your target bf %, the most dramatic visual changes happen from ~12%
            -{'>'} {'<'}10% (roughly). The final “sheath” of fat hiding sharp muscle definition &
            vascularity remains. This is the hardest time to push through psychologically as you
            will be smaller & not at your target aesthetic. It will seem far, but it is a sign you
            are close.
          </Text>
          <Text tag="p">
            Cutting any more than 1000 calories daily under your BMR (losing 2lbs a week) is very
            taxing. You can do it, and maintain muscle w/ high protein intake, but your cognitive
            ability and general ability to feel overall health & wellbeing will be hindered. It
            sucks & will leave you feeling sick.
          </Text>
          <Text tag="p">
            While cutting, body composition scans can be a great tool to see what lean muscle mass
            you are keeping & how much in fat stores you are shedding. The perfect cut is shedding
            fat stores and losing very little lean muscle mass (& strength ideally not going down).
          </Text>
          <Text tag="p">
            You can do daily weigh-ins, but only take your 2-week weight trend seriously. Day-to-day
            you will fluctuate in water weight. Do not get discouraged. If the trend is there, it is
            happening. Doubt will be your biggest enemy in staying consistent. If the 2-week is
            flat, you need to eat less & move more, adjust.
          </Text>
          <Text tag="p">
            During a cut you can get a good inventory of your muscles. Use that time to determine
            focuses for your next muscle-building phase. (exs: need to even out legs with
            upper-body, need more 3D shoulders, more lift in lower pec, etc).
          </Text>
          <Text tag="p">
            Where fat comes off first will be different for everyone. Most likely, you will notice
            most coming off of your back first (and you will think nothing is happening as your
            weight comes down). Lower abdomen fat tends to stay stubbornly until very low bodyfat %.
            As your bodyfat % comes down you will see focused fat loss in certain areas, as well as
            “even” fat loss across a broad range of areas.
          </Text>
          <Text tag="p">
            Slow cardio is your best friend during a cut. Things like walking are easy ways to burn
            an extra 100-300 calories to drive your deficit or recover from cheat meals.
          </Text>
          <Text tag="p">
            Fruit are your best friend. Low calorie way to fill your stomach (watermelon
            especially).
          </Text>
          <Text tag="p">
            Only eating after 12pm can be a good way to manage hunger if it fits your lifestyle and
            how fasting like that makes you feel. Hunger does not directly map to you needing food.
          </Text>
          <Text tag="p">
            As your weight goes down, so will your maintenance calorie amount. This will lead to
            slower weight loss unless you adjust. Look at the 2-4 week trend and make the judgement
            call on eating less/moving more. It is a constant process of watching and adjusting.
          </Text>
          <Text tag="p">
            As your bodyfat % nears {'<'}10% your body will start{' '}
            <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.CATABOLISM} openInNewWindow>
              catabolizing
            </Link>{' '}
            a greater proportion of muscle over fat (though it will still mostly be fat being
            catabolized to make up for your negative energy balance). It becomes a much harder fight
            as you will be low on energy as well (from your calorie deficit). You have to keep
            pushing through (if you are going sub-10%). This is why it is hard to naturally sustain
            sub-10% bf, your body is fighting for a steady-state of healthy fat stores.
          </Text>
          <Text tag="p">
            As your mental index of foods' macronutrient composition grows, you will realize that
            the most tasty, craved-after, foods are the most calorie dense & nutrient poor. When you
            become more conscious of this biological wiring, you have more power to fight cravings,
            and eventually they disappear when you realize what these foods cost you a lot over time
            in energy surplus (but having occasional days where you treat yourself is fine).
          </Text>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />
        <Text tag="p">Then...</Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />
        <Text tag="p">
          Repeat the above with consistency. Then it is just a matter of time. Eating, sleeping, &
          your body doing the work.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="p" bold>
          Other General Tips:
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            It will take you about 2x as long as you think it will take to reach your target
            physique and much more effort than you can imagine. You have to push through emotional
            lows when the results are just not showing, they will come. Consistency and time is all
            you need. Being consistent is hard and boring.
          </Text>
          <Text tag="p">
            You can lose fat and add muscle mass/strength, especially when you are starting out (if
            you eat at maintenance and lift hard bringing you into a distinct energy deficit). The
            gains in strength come fast initially, you don't have to see these phases as separate,
            just take away their properties & characteristics.
          </Text>
        </List>
      </StandardLayout>
    </React.Fragment>
  );
};

export default HowToGetJacked;
