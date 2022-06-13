import { FunctionComponent } from 'react';
import { INTERNAL_LINKS } from '../../global-helpers/urls';
import Image from './elements/Image';
import Link from './elements/Link';
import View from './elements/View';

export interface LogoProps {
  width?: string;
  height?: string;
}

const LOGO_DEFAULT_SIZE = '75px';

const Logo: FunctionComponent<LogoProps> = ({
  width = LOGO_DEFAULT_SIZE,
  height = LOGO_DEFAULT_SIZE
}) => {
  return (
    <View direction="horizontal" centerItemsVertically>
      <Link type="internal" dest={INTERNAL_LINKS.HOME}>
        <Image name="logo" width={width} height={height} ext="svg" alt="bephrem.com logo" />
      </Link>
    </View>
  );
};

export default Logo;
