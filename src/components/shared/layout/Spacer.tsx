import { FunctionComponent } from 'react';
import { SPACES } from '../../../design';
import View from '../elements/View';

interface Props {
  size: string;
  direction?: 'vertical' | 'horizontal';
}

const Spacer: FunctionComponent<Props> = ({ direction = 'vertical', size = SPACES.GAP.SMALL }) => {
  const sizeStyle =
    direction === 'vertical' ? { height: size, width: '100%' } : { height: '100%', width: size };

  return <View {...sizeStyle} uninteractive />;
};

export default Spacer;
