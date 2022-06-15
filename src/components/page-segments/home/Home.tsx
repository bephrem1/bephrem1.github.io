import { EXTERNAL_LINKS, INTERNAL_LINKS } from '../../../global-helpers/urls';
import { PAGE_SECTION_MAX_WIDTH, SPACES } from '../../../design';

import { FunctionComponent } from 'react';
import Link from '../../shared/elements/Link';
import Navbar from '../../shared/navigation/Navbar';
import Spacer from '../../shared/layout/Spacer';
import Text from '../../shared/elements/Text';
import View from '../../shared/elements/View';

interface Props {}

const Home: FunctionComponent<Props> = () => {
  return (
    <View
      paddingTop="40px"
      paddingX={SPACES.PADDING.SMALL}
      paddingBottom={SPACES.PADDING.XLARGE}
      centerItemsHorizontally
    >
      <View direction="vertical" maxWidth={PAGE_SECTION_MAX_WIDTH}>
        <Navbar />
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <span>
          <Text tag="p">
            Hi, my name is Benyam Ephrem. I am an Ethiopian-American software engineer & internet
            teacher. I grew up in{' '}
          </Text>
          <Link type="external" dest={EXTERNAL_LINKS.MARYLAND_STATE_WIKI} openInNewWindow>
            Maryland, USA
          </Link>
          <Text tag="p"> & studied Computer Science at the </Text>
          <Link type="external" dest={EXTERNAL_LINKS.UNIVERSITY_OF_MARYLAND_WIKI} openInNewWindow>
            University of Maryland
          </Link>
          <Text tag="p"> (21’) (Computer Science was hard).</Text>
        </span>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Programming & engineering is my core skillset. But I like thinking about, and working on
          business problems.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        <Text tag="h5" bold>
          Interesting Things
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h6" bold>
          Back To Back SWE (Dec. 18’ - Dec. 21’)
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">
          In November/December of 2018 I founded a software engineer interview prep company I called
          "Back To Back SWE" (it was a goal of many undergraduate students to land high-tier
          internships in "back to back" years).
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">
          I never wanted to start the company. I just felt compelled to because the way I processed
          problems from the ground-up seemed to be different from how they were being taught back to
          me. I felt that disconnect, & wanted to create highly-academic prep material for others to
          benefit from.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">
          I ended up teaching technical interviews & Computer Science concepts to hundreds of
          thousands of people online, and helped thousands of engineers get jobs.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <span>
          <Text tag="p">The company ended up being acquired in November 2020 (that’s a </Text>
          <Link type="internal" dest={INTERNAL_LINKS.WRITING.DONT_SELL_TOO_EARLY} openInNewWindow>
            whole other topic
          </Link>
          <Text tag="p">).</Text>
        </span>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h6" bold>
          Twitter
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">
          In 2019 I interned at Twitter as a web engineer on the twitter.com team. It was my first
          professional programming experience and it changed the course of my career & skillset.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">I learned how good very good programmers are.</Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p">I would intern again in 2020, and join fulltime in 2021.</Text>
      </View>
    </View>
  );
};

export default Home;
