import React, { FunctionComponent } from 'react';
import { SPACES, TEXT_SIZE } from '../../../design';
import { getOpenGraphMetaTags, getSEOMetaTags } from '../../../global-helpers/page-headers';

import EllipsisSeparator from '../../shared/layout/EllipsisSeparator';
import Head from 'next/head';
import Spacer from '../../shared/layout/Spacer';
import StandardLayout from '../StandardLayout';
import Text from '../../shared/elements/Text';
import { useRouter } from 'next/router';

interface Props {}

const AProfessionalVacuum: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        {getSEOMetaTags({
          title: 'Benyam Ephrem | A Professional Vacuum',
          description: 'A Professional Vacuum - Nothing Too Professional.'
        })}
        {getOpenGraphMetaTags(router, {
          title: 'A Professional Vacuum',
          description: 'A Professional Vacuum - Nothing Too Professional.'
        })}
      </Head>
      <StandardLayout>
        <Text tag="h3" bold>
          A Professional Vacuum
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.XSMALL} />
        <Text tag="p" fontSize={TEXT_SIZE.MICRO} uninteractive>
          June 2022
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />

        <Text tag="p">
          Ut ultrices augue ut purus lacinia, sit amet malesuada libero laoreet. Cras egestas tempor
          leo vitae venenatis. Sed quis ullamcorper ex, tristique placerat eros. Maecenas interdum
          laoreet quam nec ornare. Sed at tellus quis urna euismod volutpat. Aliquam malesuada nibh
          viverra luctus imperdiet. Vivamus vel massa in diam varius feugiat. Nam vehicula mi a quam
          pretium, sed efficitur nisl dapibus. Aenean id vestibulum lorem. Mauris blandit justo vel
          mauris blandit accumsan.
        </Text>

        <EllipsisSeparator />

        <Text tag="h6" bold>
          Lorem Ipsum.
        </Text>
        <Spacer direction="vertical" size={SPACES.GAP.SMALL} />
        <Text tag="p">
          Proin dapibus ante ipsum, sed posuere justo tincidunt in. Quisque orci urna, vestibulum eu
          vehicula non, porta quis sem. Suspendisse id fringilla quam. Sed malesuada dapibus justo,
          a sagittis nisi gravida vitae. Aliquam luctus nisi risus. Maecenas sapien odio, pharetra
          ut justo sed, vulputate porta arcu. Nullam malesuada turpis elit, vel congue dui congue
          nec. Nam porttitor condimentum dictum. Suspendisse volutpat est sit amet sodales accumsan.
          Vestibulum congue rhoncus est, id pulvinar risus maximus quis. Quisque fermentum, purus
          faucibus sollicitudin maximus, diam lorem ultricies risus, vel consectetur ante sem sit
          amet orci. In egestas nisi a metus interdum, at semper ipsum tristique.
        </Text>
      </StandardLayout>
    </React.Fragment>
  );
};

export default AProfessionalVacuum;
