import AProfessionalVacuum from '../components/page-segments/a-professional-vacuum/AProfessionalVacuum';
import { EmptyObject } from '../global-types/empty';
import { FunctionComponent } from 'react';
import PageBase from '../components/page-segments/PageBase';

const AProfessionalVacuumPage: FunctionComponent<EmptyObject> = () => {
  return (
    <PageBase>
      <AProfessionalVacuum />
    </PageBase>
  );
};

export default AProfessionalVacuumPage;
