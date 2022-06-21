import { COLORS, DisplayProperty, FloatProperty, TextAlignProperty } from '../../../design';

import { FunctionComponent } from 'react';
import { generateNoninteractiveStyle } from '../../../design/style-generators';

enum TextElements {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  code = 'code'
}
type TextElement = keyof typeof TextElements;

interface Props {
  tag: TextElement;
  display?: DisplayProperty;
  float?: FloatProperty;
  textAlign?: TextAlignProperty;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  lineHeight?: string;
  bold?: boolean;
  uninteractive?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;

  children: React.ReactNode | Array<React.ReactNode>;
}

const Text: FunctionComponent<Props> = ({
  tag,
  display = 'inline',
  float,
  textAlign,
  color = COLORS.TEXT.BLACK,
  backgroundColor,
  fontSize,
  lineHeight,
  bold = false,
  uninteractive,
  style,
  onClick,
  children
}) => {
  const textContents = bold ? <b>{children}</b> : children;
  const textElementProps = {
    ...(!!onClick ? { onClick } : {}),
    style: {
      color,
      backgroundColor,
      display,
      ...(float ? { float } : {}),
      ...(fontSize ? { fontSize } : {}),
      ...(lineHeight ? { lineHeight } : {}),
      ...(textAlign ? { textAlign } : {}),
      ...(uninteractive ? generateNoninteractiveStyle() : {}),
      ...(!!onClick ? { cursor: 'pointer' } : {}),
      ...style
    }
  };

  switch (tag) {
    case TextElements.h1:
      return <h1 {...textElementProps}>{textContents}</h1>;

    case TextElements.h2:
      return <h2 {...textElementProps}>{textContents}</h2>;

    case TextElements.h3:
      return <h3 {...textElementProps}>{textContents}</h3>;

    case TextElements.h4:
      return <h4 {...textElementProps}>{textContents}</h4>;

    case TextElements.h5:
      return <h5 {...textElementProps}>{textContents}</h5>;

    case TextElements.h6:
      return <h6 {...textElementProps}>{textContents}</h6>;

    case TextElements.p:
      return <p {...textElementProps}>{textContents}</p>;

    case TextElements.code:
      return <code {...textElementProps}>{textContents}</code>;

    default:
      return null;
  }
};

export default Text;
