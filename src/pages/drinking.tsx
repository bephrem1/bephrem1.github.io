import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import PageBase from '../components/page-segments/PageBase';
import QuittingSocialDrinking from '../components/page-segments/quitting-social-drinking/QuittingSocialDrinking';

const QuittingSocialDrinkingPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <QuittingSocialDrinking />
    </PageBase>
  );
};

export default QuittingSocialDrinkingPage;
