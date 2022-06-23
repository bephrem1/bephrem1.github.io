import { EXTERNAL_LINKS, INTERNAL_LINKS } from '../../../global-helpers/urls';
import React, { FunctionComponent } from 'react';
import { SPACES, TEXT_SIZE } from '../../../design';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import EllipsisSeparator from '../../shared/layout/EllipsisSeparator';
import Head from 'next/head';
import Link from '../../shared/elements/Link';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import { useRouter } from 'next/router';

interface Props {}

const DontSellTooEarly: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | Don’t Sell Too Early',
          description: 'Why you shouldn’t sell your company too early.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'Don’t Sell Too Early',
          description: 'Why you shouldn’t sell your company too early.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          Don’t Sell Too Early
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} uninteractive>
          June 2022
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" fontSize={TEXT_SIZE.MICRO}>
          This writing is specifically directed at young entrepreneurs (18-25) running promising
          businesses for whom a major liquidity event would be enticing & likely life-changing.
        </Text>

        <EllipsisSeparator />

        <Text tag="h6" bold>
          The Backstory
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          In August of 2020 I was probably clinically depressed. I had grinded myself down from 2
          years of maniacal focus on my company. I was having ownership & time-investment struggles
          with my co-founder who was a minority owner and had taken up a rapidly growing role as CMO
          at another startup.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The business was still small. We were not doing enough revenue to justify either of us
          going full-time to grow the company. I knew the unrealized value we had yet to tap. We
          were just hitting the start of an exponential growth curve in online traction I had fought
          2 years to secure. We had the highest quality content, we just needed to effectively
          capture the value we were (I was) creating.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I was starting to be recognized any time I entered the{' '}
          <Link type="external" dest={EXTERNAL_LINKS.IRIBE} openInNewWindow>
            Iribe
          </Link>{' '}
          Computer Science building. Even in 2019 in San Francisco I was being recognized by
          strangers in public. Students in entry-level & advanced algorithms classes at Maryland
          were using my videos to study (without me even knowing it). I felt like we were on the
          verge of something massive, but things still felt small.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I was going to graduate soon. I was a rising Senior at this point in time and my future
          was unsure. I felt like I was out of gas, but I wanted the mission I had worked so hard
          for to continue. I was between a rock and a hard place. Running a company is hard.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          One August night after shooting a video, I sat outside of Iribe. I called my co-founder
          and basically had a panic attack. I hung up and sat alone. I felt like I was battling the
          world by myself. We were chasing competitors that had a 2-year headstart over us, and much
          better organic distribution in the algorithms teaching ecosystem. How would I as a college
          student win this race, working part-time?
        </Text>

        <EllipsisSeparator />

        <Text tag="p" fontSize={TEXT_SIZE.MICRO}>
          <b>Aside</b>: In retrospect, I should have reinvested 100% of the company's profits back
          into hiring more teachers, programmers, and staff to systematize the business. Instead, we
          took money off the table, and the burden for running the whole business continued to rest
          on my shoulders. This was enticing because I didn't really have much personal wealth as a
          20-something.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO}>
          The right course of action would have been to raise money, hire myself out of the teacher
          role, hire a software engineer to rewrite all of our systems w/ me alongside, negotiate my
          co-founder out of the cap table, & step up into the CEO role to direct the next phase of
          the company's growth (but this is getting ahead in the story).
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          The pressure was crushing. I was trapped by my business. Customers who pay for a product
          do not take days off when they need help, you are on the hook.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I had the crazy thought, “What if we sold the company?” If we could find another entity to
          continue the company, I would have some liquidity, and the project would not die from my
          burnout. It seemed possible.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I discussed this with my co-founder and he agreed to sell the company if a buyer could be
          found. I spearheaded the efforts to find a buyer. Eventually we began fielding calls (most
          coming from a site called MicroAcquire which had just started).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It was a long, drawn-out process. Operations suffered, it was very hard to live in two
          worlds.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          In one world, the company had to grow and I would be running it for the next 2-4 years, in
          another, I would not be running the company in 3 months. It is a bizarre feeling that you
          only truly understand when in the thick of it.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Eventually, we received a reasonable offer from a venture arm of an Indian hotel booking
          site that invests in technology companies. We took the offer, and in November a majority
          of the company was acquired (I would maintain a minority stake until December 2021).
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          I provided the top-level backstory just so the following would make more sense and
          resonate more. There is much more to it than the above, but now we can continue to the
          main topic.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          Why To Not Sell
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          As with anything life-changing, you only realize the full implications of the happening in
          the longterm, years later. Events like that have a large ripple effect you cannot foresee.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I have had roughly 2 years to reflect on events and here are a few things to keep in mind
          before you sell your company:
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Unrealized Wealth
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.WEALTH} openInNewWindow>
            Wealth
          </Link>{' '}
          is an intangible descriptor for what you have on your hands. If your business has found
          product-market-fit and is producing revenue, with a promising future for growth, you have
          a machine that will continue churning for you in your sleep to accrue more and more
          resources.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          No matter what anyone offers for your business, there are different theoretical
          projections of value untapped to show you what you really have on your hands. The wealth
          is invisible.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I believe I was one of the best in the world at the very specific thing I was doing, and I
          never figured out the business mechanics to create offerings to capture more of the value
          I was creating. I never built a team around me, a machine to take us to the next level.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I had created wealth. Those that watched my content were getting jobs & getting higher
          compensation from increased interview performance (I imagine $10-30k more per offer). A
          ratio of the value captured to the value created would be striking.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <b>
            If your business is at this stage, where the intrinsic value of the business has yet to
            be unlocked, it is not a good time to sell your business.
          </b>{' '}
          You will be short-changing yourself. No one can tap that invisible value but you who see
          the vision, and no acquirer will pay you for where you know the business will be in 2
          years. You will be paid for the current financial performance (plus fair projections).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          We sold at the exact point when the business was picking-up steam in the online search
          algorithms and things were only at the start. By selling, I gave up my (mostly passive)
          income stream (which was a fight to earn and certainly not passive to build) and an asset
          that I know with the right team I could have 10x'ed.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          By taking the sure path, liquidity, you cut things off. You take today's quote, and lose
          the quote that would have been 10x in 2-4 years.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I choose the easy route, the safest route, the most enticing route, given that I had very
          little money at the time and didn't deeply understand what wealth really meant.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          If someone offers you X for your business, they are only giving you a quote on wealth you
          already possess. You must understand the cost of taking that offer, taking the liquidity,
          and where your tipping point is to make a deal worth it (this is entirely up to you and
          your life-situation, it is a complex decision because when you reason these things out you
          will already be exhausted).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">The financial costs of losing the wealth you possessed can be steep.</Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Professional Identity
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          What you do gives you a strong identity in people's minds. When you first meet people
          professionally, they will index you as "Founder of X". When you no longer are running your
          company, you step into an identity void.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you do interesting things, interesting people tend to fall into your life-path. I met
          so many interesting people on my path, whether they were customers or other builders doing
          what I was doing. I met designers, developers, other technical educators, entrepreneurs.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you are doing interesting things, interesting people want to learn more about you and
          connect with you. Your network grows and your resourcedness grows.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Having a nice car is not interesting. Having a nice house is not interesting. Strangers
          doing interesting things want to see creations, creativity, skills, intelligence,
          craftiness.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you sell your company, you go from "Founder of X" to "prev X, Y, Z". You lose your
          professional identity. You become "the guy who ran a company but not sure what it did".
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Maintaining a strong professional identity in peers' minds is important for your
          professional network to continue growing. By selling you cut this growth vector off.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          A Purpose Void
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Having a profitable business you are working on that keeps you occupied and creative is a
          gift. Having customers that love your products that you can talk to is a gift. You do not
          realize this until you lose these gifts, and stand scratching your head asking "what's
          next?".
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          "What's next" is a very hard, tiring question to have to solve. It is better to avoid it
          altogether if you are working on something promising.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          This is very hard to describe to you if you are in the thick of operating your business
          and want out, but, you do not want to sell your business to do nothing. You very quickly
          will realize that a lot of happiness in life comes from creating meaningful things and
          reveling in your creations.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          A{' '}
          <Link type="internal" dest={INTERNAL_LINKS.WRITING.A_PROFESSIONAL_VACUUM} openInNewWindow>
            professional vacuum
          </Link>{' '}
          for creators does not last long.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The sale of your business will be very anti-climactic. The day that you receive the
          proceeds (whether a wire to your bank, or stock in a brokerage account), you will pause
          and then ask yourself "now what?".
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Well, now you get to sit on your hands indefinitely until you find another hidden need in
          the world interesting enough for you to address, and someone capable and compatible enough
          with you and the problem for it to be worth a try. This can happen soon, or it can be
          years away.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You will enjoy the newfound freedom - maybe you will buy a home, a new car, or whatever
          other esoteric thing you had in mind, but at the end of the day, nothing you can buy can
          replace what you had, emotionally, financially, etc.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          These things just don't matter, but you have to go through it to empirically learn that.
          They peak you, then you realize what really matters in life.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you were building the business you were in it for the game. In it for the customers.
          In it to the death for building what you were aiming to build. Money just acted as a
          barometer for value creation & capture.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">You will miss the game.</Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Going 0-to-1 Is Much Harder Than 1-100
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is much harder to prove traction for a new service or product in the market than to
          take an existing business with healthy margins and scale it with proper systems in place.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When I first started Back To Back SWE, my first 3-6 months of instructional videos each
          got 0-100 views. I was making content for myself and a few dedicated fans at that point.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">Then the internet found what I was making and traction took hold.</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          That phase of silent building is excruciating, when you find traction it is like finding
          an oasis in a desert. You collapse by the water.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Once you start making revenue and growing, you become{' '}
          <Link
            type="external"
            dest={EXTERNAL_LINKS.PAUL_GRAHAM.DEFAULT_ALIVE_OR_DEAD}
            openInNewWindow
          >
            default alive
          </Link>
          . Asymptotically your business, your creation, will survive.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <b>When you start something new with a new group of people, the clock is ticking.</b>{' '}
          Talented individuals who could be paid a lot to do something else can only work so long on
          an idea before the morale reaper knocks at the door (you have ~3-9 months).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          On the other hand, if you have an existing company, with existing revenues, your attention
          is directed at how to grow a plant that has already sprouted. This is a replicable
          skillset.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It may be less exciting and fun than to have planted the seeds of something new in the
          world, but it is much more reliable of a path to not end up empty-handed.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You must take note that if you have a post-PMF business, you have a diamond on your hands.
          If you lose it, you will have to go digging again.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          Non-Closure & “What If”s
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you are operating your company, you have a 1, 2, 5, 10-year vision in your head of
          where the business will go. You don't even have to force this, it just occurs naturally
          when you are thinking creatively.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you move on, that vision you had for the business does not go away. It stays in your
          head.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Even when you have no operational control or power remaining, you still will know exactly
          where the business should be moving. If the new owners choose another trajectory, a
          dissonance is created.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">You will always wonder "what if I had ran the business 1-2 more years?"</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          <b>
            This question can always be recursively asked, and the answer will always be "the
            business will be larger, more impactful, and make more money"
          </b>{' '}
          (if it is being run properly). This is a hard thing to get over.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you depart your customers will miss you (if you were a prominent figure in operations
          or customer support). All of the promises you had made to customers cannot be directly
          acted on by you anymore as you will have moved-on.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is important that you consider how much closure you have with your vision and where the
          business is at today.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Does your story still have more chapters left to it? Or have you reached a good point
          where you will be content moving-on with proper closure.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          The New Owners Could Be the Wrong Choice
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The new owners could not be structured to run your business well given its current state.
          Back To Back SWE was 1-2 years away from being operationally stable with a staff and clear
          workstreams that would each grow impact and subsequently revenue greatly. When the company
          was sold, it was just a staff of contractors, and 2 business partners (one of whom was
          burnt-out to the bone).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The year after a majority of the company was acquired, no new products shipped to
          customers. The company & product was not rebranded and the v0 site was not rewritten to a
          polished v1 site (as I had delineated in a 1-year plan I had written before acquisition
          talks even started). The company was just held as a cashcow income-statement item.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The firm that acquired us was not structured to creatively run a company this nascent.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Teachers still needed to be vetted and hired, the whole software needed to be rewritten
          into a high-quality site with community features & better design, customer support needed
          to be streamlined. Additionally offerings like resume reviews, live interviews, and career
          coaching needed to be launched.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          An engineer from HackerRank was planted in as a COO of sorts and it just wasn't feasible
          that this huge body of work could be taken on by outsiders. I had to run the company for
          1-2 more years and reach this point of systemization myself.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          So the product stagnated. The business stopped growing and it lives in a frozen state now.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Looking back 2 years later, I can't say that I would have done anything differently given
          my reasoning (& mental health) at the time. I knew we had to keep going, but I sought out
          a sale because I knew the business could die.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          So when you are seeking out an acquirer, make sure that your business is even in a state
          where another entity can run it, and that that entity has the expertise and hiring prowess
          to operationally excel in your industry.
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          Ultimately, there is no right answer as to what you should do. Having sold my company, I
          can say from experience what you should expect ahead of time so that you can factor these
          costs into your decision process.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Running a company is very hard. It is very tantalizing to want to cash out your chips, but
          with that comes many life costs (beyond financial costs).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          As a general heuristic, you want to take the harder path. You want to work on your
          business as long as humanly possible (even if you have to take long spans of time off to
          recenter yourself).
        </Text>

        <EllipsisSeparator />

        <Text tag="p">መልካም መንገድ።</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default DontSellTooEarly;
