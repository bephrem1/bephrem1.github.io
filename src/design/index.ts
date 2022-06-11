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
