import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import PageBase from '../components/page-segments/PageBase';
import OnSocialDrinking from '../components/page-segments/on-social-drinking/OnSocialDrinking';

const OnSocialDrinkingPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <OnSocialDrinking />
    </PageBase>
  );
};

export default OnSocialDrinkingPage;
