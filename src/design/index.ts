export const PAGE_SECTION_MAX_WIDTH = '800px';

export const COLORS = {
  TEXT: {
    GRAY: '#797979',
    BLACK: '#1A181B'
  },
  LINK: {
    DEFAULT: '#2d67e3'
  },

  HIGHLIGHT_YELLOW: '#FFFB01',
  BLACK: '#000000',
  WHITE: '#FFFFFF'
};

export const BORDER_RADII = {
  SMALL: '4px',
  MEDIUM: '8px',
  LARGE: '16px',
  XLARGE: '40px',
  CIRCLE: '50%'
};

export const SPACES = {
  PADDING: {
    MICRO: '4px',
    XSMALL: '8px',
    SMALL: '16px',
    MEDIUM: '24px',
    LARGE: '32px',
    XLARGE: '64px',
    XXLARGE: '128px',
    JUMBO: '256px'
  },
  MARGIN: {
    MICRO: '4px',
    XSMALL: '8px',
    SMALL: '16px',
    MEDIUM: '32px',
    LARGE: '64px',
    XLARGE: '128px'
  },
  GAP: {
    MICRO: '4px',
    XSMALL: '8px',
    SMALL: '16px',
    MEDIUM: '32px',
    LARGE: '64px',
    XLARGE: '96px',
    XXLARGE: '128px',
    JUMBO: '256px'
  }
};

export const TEXT_SIZE = {
  NANO: '0.75rem',
  MICRO: '.875rem',
  XSMALL: '1rem',
  SMALL: '1.25rem',
  MEDIUM: '1.563rem',
  LARGE: '1.953rem',
  XLARGE: '2.441rem',
  XXLARGE: '3.052rem',
  JUMBO: '3.815rem'
};

export const LINE_HEIGHT = {
  NANO: '0.75rem',
  MICRO: '.875rem',
  XSMALL: '1rem',
  SMALL: '1.25rem',
  MEDIUM: '1.563rem',
  LARGE: '1.953rem',
  XLARGE: '2.441rem',
  XXLARGE: '3.052rem',
  JUMBO: '3.815rem'
};

export const Z_INDEX = {
  LAYER_NEG_1: -1,
  LAYER_1: 1,
  LAYER_2: 2,
  LAYER_3: 3,
  LAYER_4: 4,
  LAYER_5: 5
};

export type MarginProps = {
  marginTop?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginBottom?: string | number;
  marginY?: string | number;
  marginX?: string | number;
};

export type PaddingProps = {
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  paddingBottom?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
};

export type PositioningProps = {
  position?: string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

enum DisplayProperties {
  none = 'none',
  flex = 'flex',
  inline = 'inline',
  block = 'block',
  'inline-block' = 'inline-block'
}
export type DisplayProperty = keyof typeof DisplayProperties;

export enum LayoutDirections {
  horizontal = 'horizontal',
  vertical = 'vertical'
}
export type LayoutDirection = keyof typeof LayoutDirections;

enum FloatProperties {
  left = 'left',
  right = 'right',
  none = 'none',
  inherit = 'inherit'
}
export type FloatProperty = keyof typeof FloatProperties;

enum OverflowProperties {
  scroll = 'scroll',
  hidden = 'hidden',
  auto = 'auto',
  visible = 'visible'
}
export type OverflowProperty = keyof typeof OverflowProperties;

enum PositionProperties {
  absolute = 'absolute',
  relative = 'relative',
  fixed = 'fixed',
  sticky = 'sticky',
  static = 'static',
  initial = 'initial',
  inherit = 'inherit'
}
export type PositionProperty = keyof typeof PositionProperties;

enum TextAlignProperties {
  center = 'center',
  left = 'left',
  right = 'right',
  justify = 'justify'
}
export type TextAlignProperty = keyof typeof TextAlignProperties;
