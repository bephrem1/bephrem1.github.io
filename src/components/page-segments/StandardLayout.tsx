import { PAGE_SECTION_MAX_WIDTH, SPACES } from '../../design';
import React, { FunctionComponent } from 'react';

import Navbar from '../shared/navigation/Navbar';
import Spacer from '../shared/layout/Spacer';
import View from '../shared/elements/View';

interface Props {
  children?: React.ReactNode | Array<React.ReactNode>;
}

const StandardLayout: FunctionComponent<Props> = ({ children: PageContents }) => {
  return (
    <View
      paddingTop="40px"
      paddingX={SPACES.PADDING.SMALL}
      paddingBottom={SPACES.PADDING.JUMBO}
      centerItemsHorizontally
    >
      <View direction="vertical" maxWidth={PAGE_SECTION_MAX_WIDTH}>
        <Navbar />
        <Spacer direction="vertical" size={SPACES.GAP.MEDIUM} />

        {PageContents}
      </View>
    </View>
  );
};

export default StandardLayout;
