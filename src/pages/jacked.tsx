import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import HowToGetJacked from '../components/page-segments/how-to-get-jacked/HowToGetJacked';
import PageBase from '../components/page-segments/PageBase';

const HowToGetJackedPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <HowToGetJacked />
    </PageBase>
  );
};

export default HowToGetJackedPage;
