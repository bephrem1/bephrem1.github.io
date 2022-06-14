import { PAGE_SECTION_MAX_WIDTH, SPACES } from '../../../design';

import { EXTERNAL_LINKS } from '../../../global-helpers/urls';
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

        <Text tag="p">
          Hi, my name is Benyam Ephrem. I am an Ethiopian-American software engineer & internet
          teacher.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h4" bold>
          Companies
        </Text>
        <ul>
          <li>Back To Back SWE (acq. November 2020)</li>
          <ul>
            <li>Founded & operated from December 2018 to Novermber 2020.</li>
            <li>
              Taught technical interviews & Computer Science concepts to hundreds of thousands of
              people online.
            </li>
            <li>
              (
              <Link type="external" dest={EXTERNAL_LINKS.BACKTOBACKSWE.WEBSITE}>
                Website
              </Link>
              ) (
              <Link type="external" dest={EXTERNAL_LINKS.BACKTOBACKSWE.YOUTUBE}>
                YouTube
              </Link>
              )
            </li>
          </ul>
        </ul>
        <ul>
          <li>_</li>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h4" bold>
          Professional
        </Text>
        <ul>
          <li>Twitter, Software Engineer (September 2021 - January 2022)</li>
          <li>Twitter, Software Engineer Intern (Summer 2020)</li>
          <li>Twitter, Software Engineer Intern (Summer 2019)</li>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h4" bold>
          Education
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Computer Science in college is the hardest thing I’ve ever done. Very theoretical and
          rigorous.
        </Text>
        <ul>
          <li>B.S., Computer Science, University of Maryland College Park (2021)</li>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h4" bold>
          Skills
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Programming & engineering is my core skillset. But I like thinking about, and working on
          business problems.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="h4" bold>
          Qualities
        </Text>
        <ul>
          <li>I like thinking in systems and functions</li>
          <li>If I think there is something I need to do worth doing I will not stop</li>
          <li>I am obsessive about completion</li>
          <li>
            I always seek the truth of any situation. What is really going on here? (whether code,
            or a lesson topic, or in life)
          </li>
        </ul>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
      </View>
    </View>
  );
};

export default Home;
