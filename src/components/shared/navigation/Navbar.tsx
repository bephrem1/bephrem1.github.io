import { FunctionComponent } from 'react';
import Logo from '../Logo';
import NavbarMenu from './components/NavbarMenu';
import View from '../elements/View';

interface Props {}

const Navbar: FunctionComponent<Props> = () => {
  return (
    <View direction="horizontal" alignItemsSpaceBetween alignItemsTop>
      <View direction="horizontal" marginLeft="-8px">
        <Logo height="70px" width="70px" />
      </View>

      <NavbarMenu />
    </View>
  );
};

export default Navbar;
