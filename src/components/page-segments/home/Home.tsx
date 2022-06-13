import { FunctionComponent } from 'react';
import Logo from '../../shared/Logo';
import View from '../../shared/elements/View';

interface Props {}

const Home: FunctionComponent<Props> = () => {
  return (
    <View>
      <Logo width="50px" height="50px" />
    </View>
  );
};

export default Home;
