import { BORDER_RADII, COLORS, SPACES } from '../../../design';

import { FunctionComponent } from 'react';
import Spacer from './Spacer';
import View from '../elements/View';

interface Props {}

const dotSize = '3px';
const dotGap = SPACES.GAP.MICRO;
const dotColor = COLORS.BLACK;

const EllipsisSeparator: FunctionComponent<Props> = () => {
  return (
    <View
      direction="horizontal"
      width="100%"
      height={SPACES.GAP.LARGE}
      centerItemsHorizontally
      centerItemsVertically
    >
      <View direction="horizontal" centerItemsVertically>
        <Dot size={dotSize} color={dotColor} />
        <Spacer direction="horizontal" size={dotGap} />
        <Dot size={dotSize} color={dotColor} />
        <Spacer direction="horizontal" size={dotGap} />
        <Dot size={dotSize} color={dotColor} />
      </View>
    </View>
  );
};

interface DotProps {
  size: string;
  color: string;
}

const Dot: FunctionComponent<DotProps> = ({ color, size }) => {
  return (
    <View
      direction="horizontal"
      borderRadius={BORDER_RADII.CIRCLE}
      width={size}
      height={size}
      backgroundColor={color}
    />
  );
};

export default EllipsisSeparator;
