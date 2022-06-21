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
        <Text tag="p">
          Some drink socially because it curbs general anxiety. Anxiety can range from mild
          reluctance to interact to a full shutdown state (which I would find myself in sometimes,
          likely due to past childhood traumas). Alcohol gives you a state tap to not consciously
          face anxiety triggering situations and be your best social self.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The growth is where the healthy pain is at. This is a fact of life. What you fear most
          socially is where you will trigger growth as a person.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I never understood people mentioning that alcohol can become a “crutch” socially. It only
          takes 1-2 nights out sober for it to really hit you how much of your psyche you just
          haven’t faced or remolded.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Social people drink just because it is more fun. People using alcohol as a crutch drink
          because it shifts them up the normal curve in social acuity. But this social improvement,
          though real and lesson-providing, does not last.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Alcohol does not create, it masks. Alcohol was your crutch, it got you loose, it covered
          up what was dragging you back.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You cannot step into your fullest confident self, healed of your inner issues, always
          drinking to socialize. Only when you can face yourself fully, and connect with those
          around you as your true self, will you secure longterm personal growth and heal your inner
          dilemmas.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          A Self-Inquiry
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          So what is it that is dragging you back? Why can’t you survive in a non-sober environment
          sober? Do you need alcohol to socialize?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You do not need alcohol to socialize. Socialization & social events will be more fun with
          2-3+ drinks, though. Absolutely.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">I want to ask myself some questions that will lead us deeper:</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Why do you drink socially?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I drink socially because it makes me a more fun & open person in social situations (that
          involve drinking). I am an introvert and like being in my thoughts, analyzing, breaking
          things down. Though, I find myself an able social interactor most of the time. But,
          sometimes I like going into my head and staying there, which is bad for social events.
          Sometimes I perceive my thoughts as more interesting than anything going on around me. At
          my worst, in certain social situations, I will shutdown from anxiety entirely and talk to
          no one. This has been happening less and less as my self-esteem has risen.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I also think that many cannot fathom going out with 0 drinks in them (especially younger
          people & college students + college grads), it is like jumping into the "deep-end" of the
          pool immediately. There is also the awkward feeling of having no drinks in your hand at a
          function/venue. It is just out of the norms to just not drink at all in these situations.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Why are you quiet around new people?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I just get anxious about initially meeting someone new. I have to be proactive and
          introduce myself, get to know them, get them to know me. It is an exchange that has a
          level of overhead (though it is unhealthy to see meeting new people in that way). I can
          project me saying “hi” and just blowing up in the interaction (especially if the new
          person is in a group of other new people). I am afraid what the other person will think of
          me, especially if it is a girl I like. Again, I strongly believe that this fear has an
          inverse correlation to your self-esteem.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Could you imagine new interactions at social events going smoothly sober?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Yes I can imagine that, it is just that the irrational fear is the very thing that trips
          you up. With 1-2 drinks, you are much looser, calmer, and it is easier to just not deal
          with these annoying fears. Sometimes I am really confident, sometimes not. I could do fine
          meeting new people at parties sober, it probably is just a matter of laziness and not even
          wanting to try the harder path.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Can you dance at social events sober?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Funny question, but sure. I can sway and move, but in the back of my head I really am
          afraid of what people will think of me. Do I look stupid? Do I look cool? Maybe it is a
          proxy fear to wanting to be accepted. But I can dance sober, of course. I've gotten much
          better recently as I've been going out to clubs with house music.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Does interacting with large groups bother you?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Yes, I don’t really know how to find my position unless I know one or two people in the
          group. Maybe that is my issue, I just have to be more open, I have to say hi to people, be
          a present figure that contributes to the group’s dynamic. Anxiety really is the only
          barrier. The anxiety itself causes what the anxiety fears.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          So you need to work on openness & your energy?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Yes, when I am on a roll socially I am energetic and I don’t go back into my shell. When
          around good friends I genuinely like I am happy and naturally “in-social-state”. I find we
          all have an in-built capacity to socialize, we just impede it. We all have things that
          interest us in the world to talk about. When around good people I just elevate and elevate
          until nothing bothers me. Strangers can make me come back down into my shell when I worry
          how I will meet them.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p" bold>
          Why are you closed off sometimes? Why would your energy be low?
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It can be a lot of factors. This is going very far back, but I had an emotionally
          traumatic childhood where I feel I didn't get enough love, plus other emotionally
          traumatic events, and that subsequently has made me a closed off person. I had chronically
          low self-esteem and just didn't want to interact with others, I had very low self-worth.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you feel that way for long spans of time, you will be a lower energy person. I am
          healing from all this though. You have to find reasons why you are interesting, notable,
          and awesome, then share that with the world (if you can't find reasons, go make reasons
          happen).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          So it seems that I just need to focus on increasing my self-esteem further, work on the
          mechanics of better socialization, and find reasons why I love my life.
        </Text>

        <EllipsisSeparator />

        <Text tag="p">
          This is only a partial inner inquiry, but going through this thought process has led me to
          realize that everything drinking offers as a temporary patch for can be solved through
          life improvement and more inner emotional work.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I encourage other people who drink to socialize to run an inner inquiry. Your answers may
          surprise you.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          A Different You
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Some people quip that they “love their drunk self”. I can agree with this, tweaking it
          slightly.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I love a totally socially unimpeded version of myself, unimpeded by vexing social fear &
          anxiety. This is what we like.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When you drink, you can become someone you are not. You can become a social butterfly if
          you are a shy person. This is good, since you will see what is possible for you. If you
          can do it drunk, you must be able to do it sober.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Sometimes this is good. If you had a hard day, you may objectively be a bad social
          interactor for the time-being. A few drinks may certainly bring you up and make you a
          net-positive social node.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          What bothers me more are the “phantom interactions”. The people you talk to who you don’t
          care about. The guy that compliments your shirt insincerely just because he is
          hypersocial. The smile you flash a stranger from inebriation and not true confidence. The
          things you say to random strangers without full poise.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is very hard to build a connection with people when you are very tipsy to drunk. Drunk
          chatter is inane (you only realize this when you are sober). You aren’t really centered
          within yourself and your personality, what makes you yourself.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          When I am sober, I find that my personality is still there. My sense of humor is intact,
          unblurred. That is “me”. When tipsy-to-drunk I can talk to anyone, but I am not really a
          notable personality with charisma, I am just another chatty guy.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h6" bold>
          A Final Word
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          I steered this discussion away from any definite conclusions on whether you should totally
          cut out drinking alcohol from your life (for socialization). Most things dealing with
          people and relationships do not have a deterministic output.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          You may find yourself going to a bar one weekend where you may have met the love of your
          life, and had you had 1 or 2 drinks, you may have found escape velocity from your thoughts
          to say a simple "hello". But, you took the moral high-ground and didn't drink.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">Hypotheticals steer me away from any absolutes on this topic.</Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          The larger thing to take away is the principle that you don't need to drink to effectively
          socialize. But, can you be your best, unimpeded, social-self without alcohol? Yes. It is
          just more work, it is the hard path (which often ends up being worthwhile).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Can you avoid all of this inner work, just have fun, and continue regular social drinking?
          Yes, that is fine as well, you just have to recognice the short & longterm costs of
          drinking you are willingly assuming.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          It is not enough to stop drinking. You have to stop drinking and be an outstandingly fun
          person.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">If you can do that, you have won.</Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default QuittingSocialDrinking;
