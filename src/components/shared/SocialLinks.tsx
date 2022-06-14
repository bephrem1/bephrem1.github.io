import { EXTERNAL_LINKS } from '../../global-helpers/urls';
import { FunctionComponent } from 'react';
import Image from './elements/Image';
import Link from './elements/Link';
import View from './elements/View';

export interface Props {}

const ICON_SIZE = '22px';

const SocialLinks: FunctionComponent<Props> = () => {
  return (
    <View direction="horizontal" centerItemsVertically alignItemsRight>
      <View direction="horizontal">
        <Link type="external" dest={EXTERNAL_LINKS.SOCIAL.TWITTER} openInNewWindow>
          <Image
            name="social/twitter"
            width={ICON_SIZE}
            height={ICON_SIZE}
            ext="svg"
            alt="Twitter"
          />
        </Link>
        <Link type="external" dest={EXTERNAL_LINKS.SOCIAL.GITHUB} openInNewWindow>
          <Image name="social/github" width={ICON_SIZE} height={ICON_SIZE} ext="svg" alt="Github" />
        </Link>
        <Link type="external" dest={EXTERNAL_LINKS.SOCIAL.INSTAGRAM} openInNewWindow>
          <Image
            name="social/instagram"
            width={ICON_SIZE}
            height={ICON_SIZE}
            ext="svg"
            alt="Instagram"
          />
        </Link>
      </View>
    </View>
  );
};

export default SocialLinks;
