import React, { FunctionComponent } from 'react';
import { SPACES, TEXT_SIZE } from '../../../design';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import Head from 'next/head';
import List from '../../shared/elements/List';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import View from '../../shared/elements/View';
import { useRouter } from 'next/router';

interface Props {}

const WhyItIsHardToGetFit: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | Why It Is Hard to Get Fit',
          description: 'Why It Is Hard to Get Fit - The Barriers to Fitness.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'Why It Is Hard to Get Fit',
          description: 'Why It Is Hard to Get Fit - The Barriers to Fitness.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          Why It Is Hard to Get Fit
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO}>
          The biggest barrier to getting very fit is one's psychology around fitness, the biggest
          enabler is establishing consistent habit.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The following is an (incomplete) list of reasons explaining why exceptional fitness is
          hard to attain. Having these blockades in your conscious awareness will help you push
          through them when they are inevitably encountered:
        </Text>

        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <List type="unordered">
          <Text tag="p">
            <b>Excruciatingly Gradual Visual Deltas</b>: Visual progress is virtually impossible to
            reliably see day-to-day. Progress becomes clearly apparent on the order of weeks. You
            sample your results day-to-day and see no change, discouraging you.
          </Text>

          <Text tag="p">
            <b>Consistency is Hard & Boring</b>: No one will tell you to go to the gym, you have to
            have a deeper reason & motivation. No one will tell you not to eat X food. You will find
            yourself doing the same routine for months on end (especially when losing weight) and it
            will just be a waiting game through the pain. Embrace the mundane.
          </Text>

          <View direction="vertical">
            <Text tag="p">
              <b>A Specific Kind of Pain</b>: Exercise is painful, but you must reframe the pain as
              good pain that teaches you lessons, builds character, and amounts to important changes
              in your life.
            </Text>
            <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
            <List type="unordered">
              <Text tag="p">
                <b>Hunger</b>: When losing weight hunger can be unbearable until you mentally adjust
                to the feeling.
              </Text>
              <Text tag="p">
                <b>Exertion</b>: When gaining muscle the pain of pushing past your limits will be
                uncomfortable.
              </Text>
            </List>
          </View>

          <View direction="vertical">
            <Text tag="p">
              <b>Inertia</b>: It is hard to start a new habit unless you are driven by something
              deeper to see it through. Surface-level motivation lasts maybe 1 week when you first
              start exercising due to massive habit inertia.
            </Text>
            <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
            <List type="unordered">
              <Text tag="p">
                You don’t feel like working out until you are warmed up (often). Then the mind shuts
                down and the body is unlocked. You have to get to the gym and break this Catch-22.
              </Text>
            </List>
          </View>

          <Text tag="p">
            <b>Apathy Towards Fitness</b>: Often, being very fit is not valuable to an individual
            and their goals in life. It has to fit into one’s life roadmap and you have to see the
            value that elevated fitness can bring into your life (higher energy levels, greater
            mobility, higher self-esteem, greater mental health, longevity). It has to become a
            priority.
          </Text>

          <Text tag="p">
            <b>Target Visualization</b>: It is hard to imagine how fit you can become until you
            become that level of fit. This is especially apparent when you lose large amounts of
            weight, a new aesthetic high occurs every 2-4 weeks that you'd never have projected.
          </Text>

          <Text tag="p">
            <b>Consistent Diet is Hard</b>: You have to get plenty of protein, control calories,
            balance other macronutrients. It is very hard to ensure you are getting the food you
            need in a busy life. It can seem you are eating enough, but it is very black or white
            whether you are hitting the macros you need to build muscle or lose fat.
          </Text>

          <View direction="vertical">
            <Text tag="p">
              <b>Mental Presence Is Required</b>: Heavy lifting taxes the central nervous system. It
              is hard to be present during the workday and fully present in the gym as well to push
              to new frontiers.
            </Text>
            <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
            <List type="unordered">
              <Text tag="p">
                You have to constantly push yourself further. If training for size/strength, trying
                the next 5lbs up even if you fail is critical. If doing cardio, go .1 more miles or
                1 more minute.
              </Text>
            </List>
          </View>

          <Text tag="p">
            <b>Time Investment</b>: Exercising takes time out of your busy day.
          </Text>

          <Text tag="p">
            <b>Self-Consciousness/Learning Curve</b>: People new to the gym often feel
            self-conscious or like they have to overcome a large learning curve. Realize everyone
            had to start somewhere and we are all learning every day. Eventually, you will be an
            expert from your self-learnings just trying things.
          </Text>

          <View direction="vertical">
            <Text tag="p">
              <b>Bad Workouts Tripping You Up</b>: You will have many “off-days” where the weight
              just isn't moving right, your legs feel heavy, you aren't lifting the same weights.
              These are normal, and as long as your diet is correct, they will pass and you will
              continue to new heights. These should not discourage you.
            </Text>
            <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
            <List type="unordered">
              <Text tag="p">
                There will be days when you are in the gym and just do not want to be there. This is
                normal. This is where the power of habit shines, it will carry you through your
                routine no matter how bad you feel.
              </Text>
            </List>
          </View>

          <Text tag="p">
            <b> It Is Easy to Slip on Certain Isolations</b>: If you don’t work some auxiliary
            muscles in isolation (like forearms) they will not grow at the same pace as other muscle
            groups. This can lead to you getting demoralized by "lagging" regions, but you just need
            to be conscious of what you are isolating & creating microtears in.
          </Text>
        </List>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="p">
          A lot of how far you will go in your fitness journey will be determined by how well you
          can integrate fitness into your day-to-day life. Everything from the time of day, to your
          mood/mindset when you exercise, will impact your rate of progress or leave you trapped in
          a holding pattern.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The most worthwhile things in life are often the hardest to achieve and take long spans of
          time to earn.
        </Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default WhyItIsHardToGetFit;
