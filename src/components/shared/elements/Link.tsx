import { COLORS, SPACES } from '../../../design';

import { Empty } from '../../../global-types/empty';
import { FunctionComponent } from 'react';
import { default as NextLink } from 'next/link';
import { generateUnderlineStyle } from '../../../design/style-generators';

enum LinkTypes {
  internal = 'internal',
  external = 'external'
}
type LinkType = keyof typeof LinkTypes;

interface Props {
  type: LinkType;
  dest: string;
  color?: string;
  fontSize?: string;
  bold?: boolean;
  openInNewWindow?: boolean;
  underline?: boolean;
  style?: React.CSSProperties;

  children?: React.ReactNode | Array<React.ReactNode>;
}

const baseLinkProps = (
  color: string,
  isBold: boolean,
  underline: boolean,
  fontSize?: string,
  style?: React.CSSProperties
) => {
  return {
    style: {
      ...style,
      ...(color ? { color } : {}),
      ...(isBold ? { fontWeight: 700 /* 'bold' */ } : {}),
      ...(underline ? generateUnderlineStyle(color) : {}),
      ...(fontSize ? { fontSize } : {})
    }
  };
};

const Link: FunctionComponent<Props> = ({
  type = LinkTypes.internal,
  dest,
  color = COLORS.LINK.DEFAULT,
  fontSize,
  bold: isBold = false,
  children,
  openInNewWindow = true,
  underline = false,
  style
}) => {
  return type === LinkTypes.internal ? (
    <NextLink href={dest}>
      <a {...baseLinkProps(color, isBold, underline, fontSize, style)}>{children}</a>
    </NextLink>
  ) : (
    <ExternalLink
      dest={dest}
      color={color}
      bold={isBold}
      openInNewWindow={openInNewWindow}
      underline={underline}
      fontSize={fontSize}
      style={style}
    >
      {children}
    </ExternalLink>
  );
};

interface ExternalLinkProps {
  dest: string;
  color: string;
  bold: boolean;
  openInNewWindow: boolean;
  underline: boolean;
  fontSize: string | Empty;
  style: React.CSSProperties;

  children?: React.ReactNode | Array<React.ReactNode>;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  dest,
  color,
  bold: isBold,
  children,
  openInNewWindow,
  underline,
  fontSize,
  style
}) => {
  const externalLinkConfigs = openInNewWindow
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={dest}
      {...baseLinkProps(color, isBold, underline, fontSize, style)}
      {...externalLinkConfigs}
    >
      {children}
    </a>
  );
};

export default Link;
