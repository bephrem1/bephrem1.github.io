import { COLORS } from '../../../design';
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

const Link: FunctionComponent<Props> = ({
  type = LinkTypes.internal,
  dest,
  color = COLORS.LINK.DEFAULT,
  fontSize,
  bold: isBold = false,
  children,
  openInNewWindow,
  underline = false,
  style
}) => {
  const LinkTag = (
    <a
      {...(type === LinkTypes.external && { href: dest })}
      {...(type === LinkTypes.external || openInNewWindow
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      style={{
        ...style,
        width: 'fit-content',
        ...(color ? { color } : {}),
        ...(isBold ? { fontWeight: 700 /* 'bold' */ } : {}),
        ...(underline ? generateUnderlineStyle(color) : {}),
        ...(fontSize ? { fontSize } : {})
      }}
    >
      {children}
    </a>
  );

  return type === LinkTypes.internal ? <NextLink href={dest}>{LinkTag}</NextLink> : LinkTag;
};

export default Link;
