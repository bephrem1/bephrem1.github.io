import { COLORS, SPACES, TEXT_SIZE } from '../../../../design';

import { FunctionComponent } from 'react';
import { INTERNAL_LINKS } from '../../../../global-helpers/urls';
import Link from '../../elements/Link';
import SocialLinks from './SocialLinks';
import Spacer from '../../layout/Spacer';
import Text from '../../elements/Text';
import View from '../../elements/View';

interface Props {}

const SectionSpacer = <Spacer direction="vertical" size="24px" />;

const NavbarMenu: FunctionComponent<Props> = () => {
  return (
    <View direction="vertical">
      <Text tag="p" fontSize={TEXT_SIZE.XSMALL} textAlign="right">
        Benyam Ephrem
      </Text>
      <Spacer direction="vertical" size={SPACES.GAP.MICRO} />

      <NavMenuLink type="internal" dest={INTERNAL_LINKS.HOME}>
        About
      </NavMenuLink>
      {SectionSpacer}

      <Text
        tag="p"
        textAlign="right"
        fontSize={TEXT_SIZE.NANO}
        color={COLORS.TEXT.GRAY}
        uninteractive
      >
        Health
      </Text>
      <NavMenuLink type="internal" dest={INTERNAL_LINKS.WRITING.HOW_TO_GET_JACKED}>
        How To Get Jacked
      </NavMenuLink>
      <Spacer direction="vertical" size={SPACES.GAP.MICRO} />
      <NavMenuLink type="internal" dest={INTERNAL_LINKS.WRITING.WHY_IT_IS_HARD_TO_GET_FIT}>
        Why It Is Hard To Get Fit
      </NavMenuLink>
      {SectionSpacer}

      <Text
        tag="p"
        textAlign="right"
        fontSize={TEXT_SIZE.NANO}
        color={COLORS.TEXT.GRAY}
        uninteractive
      >
        Wealth & Career
      </Text>
      <NavMenuLink type="internal" dest={INTERNAL_LINKS.WRITING.A_PROFESSIONAL_VACUUM}>
        A Professional Vacuum
      </NavMenuLink>
      <Spacer direction="vertical" size={SPACES.GAP.MICRO} />
      <NavMenuLink type="internal" dest={INTERNAL_LINKS.WRITING.DONT_SELL_TOO_EARLY}>
        Don’t Sell Too Early
      </NavMenuLink>
      {SectionSpacer}

      <Text
        tag="p"
        textAlign="right"
        fontSize={TEXT_SIZE.NANO}
        color={COLORS.TEXT.GRAY}
        uninteractive
      >
        Love & Relationships
      </Text>
      <Text tag="p" textAlign="right" fontSize={TEXT_SIZE.NANO} uninteractive>
        ...
      </Text>

      {SectionSpacer}
      <SocialLinks />
    </View>
  );
};

interface NavMenuLinkProps {
  type: 'internal' | 'external';
  dest: string;
  children: React.ReactNode;
}

const NavMenuLink: FunctionComponent<NavMenuLinkProps> = ({ type, dest, children: labelView }) => {
  return (
    <View direction="horizontal" alignItemsRight>
      <Link type={type} dest={dest} fontSize={TEXT_SIZE.MICRO} underline>
        {labelView}
      </Link>
    </View>
  );
};

export default NavbarMenu;
