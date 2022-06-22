import DontSellTooEarly from '../components/page-segments/dont-sell-too-early/DontSellTooEarly';
import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import PageBase from '../components/page-segments/PageBase';

const DontSellTooEarlyPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <DontSellTooEarly />
    </PageBase>
  );
};

export default DontSellTooEarlyPage;
