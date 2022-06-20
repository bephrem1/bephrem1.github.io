import { BORDER_RADII, COLORS, SPACES } from '../../../design';

import { FunctionComponent } from 'react';
import Spacer from './Spacer';
import View from '../elements/View';

interface Props {}

const dotSize = '3px';
const dotGap = SPACES.GAP.XSMALL;

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
        <View
          direction="horizontal"
          borderRadius={BORDER_RADII.CIRCLE}
          width={dotSize}
          height={dotSize}
          backgroundColor={COLORS.BLACK}
        />
        <Spacer direction="horizontal" size={dotGap} />
        <View
          direction="horizontal"
          borderRadius={BORDER_RADII.CIRCLE}
          width={dotSize}
          height={dotSize}
          backgroundColor={COLORS.BLACK}
        />
        <Spacer direction="horizontal" size={dotGap} />
        <View
          direction="horizontal"
          borderRadius={BORDER_RADII.CIRCLE}
          width={dotSize}
          height={dotSize}
          backgroundColor={COLORS.BLACK}
        />
      </View>
    </View>
  );
};

export default EllipsisSeparator;
