import { FunctionComponent } from 'react';
import Link from '../../shared/elements/Link';
import Spacer from '../../shared/layout/Spacer';
import Text from '../../shared//elements/Text';
import View from '../../shared/elements/View';

interface Props {}

const Home: FunctionComponent<Props> = () => {
  return (
    <View>
      <Text tag="h1">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="h2">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="h3">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="h4">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="h5">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="h6">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Text tag="code">Lorem Ipsum Dolor for the First Time Ever</Text>
      <Spacer direction="vertical" size="1px" />
      <Link type="internal" dest="/jacked" bold>
        Home
      </Link>
    </View>
  );
};

export default Home;
