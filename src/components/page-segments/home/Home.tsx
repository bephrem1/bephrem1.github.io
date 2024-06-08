import { EXTERNAL_LINKS } from '../../../helpers/urls';
import { EmptyObject } from '../../../types/empty';
import { FunctionComponent } from 'react';
import Link from '../../shared/elements/Link';
import Navbar from '../../shared/navigation/Navbar';
import ProfessionalSection from '../../shared/sections/ProfessionalSection';
import SiteLayout from '../../shared/layout/SiteLayout';

const Home: FunctionComponent<EmptyObject> = () => {
  return (
    <SiteLayout>
      <Navbar />

      <div className="pb-16">
        <About />
        <DividerLine />
        <ProfessionalSection />
        <DividerLine />
        <PersonalLife />
      </div>
    </SiteLayout>
  );
};

const About = () => {
  return (
    <div className="pt-10">
      <p className="text-neutral-100 mb-2.5">Hi, my name is Benyam Ephrem.</p>
      <span>
        <p className="text-neutral-100 inline">I’m an Ethiopian-American software engineer & </p>
        <Link type="external" dest={EXTERNAL_LINKS.VIDEOGRAPHY.HOME} openInNewWindow>
          <p className="inline">videographer</p>
        </Link>
        <p className="text-neutral-100 inline">.</p>
      </span>
    </div>
  );
};

const PersonalLife = () => {
  return (
    <div>
      <p className="text-neutral-100 text-md font-semibold mb-2.5">Life</p>

      <p className="text-neutral-100 text-md font-semibold mb-2.5">Locations</p>
      <div className="mb-2.5">
        <span>
          <p className="text-neutral-100 inline">I grew up in </p>
          <Link
            type="external"
            dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.MARYLAND_STATE}
            openInNewWindow
          >
            <p className="text-md inline">Maryland, USA</p>
          </Link>
          <p className="text-neutral-100 inline"> & studied Computer Science at the </p>
          <Link
            type="external"
            dest={EXTERNAL_LINKS.WIKIPEDIA.UNIVERSITY_OF_MARYLAND}
            openInNewWindow
          >
            <p className="text-md inline">University of Maryland</p>
          </Link>
          <p className="text-neutral-100 inline"> (’21).</p>
        </span>
      </div>
      <div className="mb-2.5">
        <span>
          <p className="text-neutral-100 text-sm inline">(locations: </p>
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.SALISBURY} openInNewWindow>
            <p className="text-sm inline">Salisbury, MD</p>
          </Link>
          <p className="text-neutral-100 text-sm inline"> → </p>
          <Link
            type="external"
            dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.COLLEGE_PARK}
            openInNewWindow
          >
            <p className="text-sm inline">College Park, MD</p>
          </Link>
          <p className="text-neutral-100 text-sm inline"> → </p>
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.BALTIMORE} openInNewWindow>
            <p className="text-sm inline">Baltimore, MD</p>
          </Link>
          <p className="text-neutral-100 text-sm inline"> → </p>
          <Link type="external" dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.BOULDER} openInNewWindow>
            <p className="text-sm inline">Boulder, CO</p>
          </Link>
          <p className="text-neutral-100 text-sm inline"> → </p>
          <Link
            type="external"
            dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.WASHINGTON_DC}
            openInNewWindow
          >
            <p className="text-sm inline">Washington, DC</p>
          </Link>
          <p className="text-neutral-100 text-sm inline"> → </p>
          <Link
            type="external"
            dest={EXTERNAL_LINKS.WIKIPEDIA.LOCATIONS.SAN_FRANCISCO}
            openInNewWindow
          >
            <p className="text-sm inline">San Francisco, CA</p>
          </Link>
          <p className="text-neutral-100 text-sm inline">)</p>
        </span>
      </div>

      <p className="text-neutral-100 font-semibold mb-2.5">Hobbies</p>
      <div>
        <span>
          <p className="text-neutral-100 inline">I’m an avid cyclist & enjoy working with </p>
          <Link type="external" dest={EXTERNAL_LINKS.VIDEOGRAPHY.HOME} openInNewWindow>
            <p className="inline">cameras</p>
          </Link>
          <p className="text-neutral-100 inline">.</p>
        </span>
      </div>
    </div>
  );
};

const DividerLine = () => {
  return <div className="w-full bg-neutral-700 my-6 rounded-lg" style={{ height: '1px' }} />;
};

export default Home;
