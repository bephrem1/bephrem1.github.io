import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import PageBase from '../components/page-segments/PageBase';
import WhyItIsHardToGetFit from '../components/page-segments/why-it-is-hard-to-get-fit/WhyItIsHardToGetFit';

const WhyItIsHardToGetFitPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <WhyItIsHardToGetFit />
    </PageBase>
  );
};

export default WhyItIsHardToGetFitPage;
