import {
  DisplayProperty,
  FloatProperty,
  LayoutDirection,
  LayoutDirections,
  MarginProps,
  OverflowProperty,
  PaddingProps,
  PositionProperty,
  PositioningProps
} from '../../../design';
import React, { FunctionComponent, Ref } from 'react';
import {
  generateNoninteractiveStyle,
  generateOutlineStyle
} from '../../../design/style-generators';

export interface ViewProps extends MarginProps, PaddingProps, PositioningProps {
  id?: string;
  className?: string;
  ref?: Ref<any>;
  backgroundColor?: string;
  fillViewportHeight?: boolean;
  fillViewportWidth?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  borderColor?: string;
  borderThickness?: string;
  outlineColor?: string;
  outlineThickness?: string;
  overflowX?: OverflowProperty;
  overflowY?: OverflowProperty;
  borderRadius?: string;
  opacity?: string | number;

  // Display, orientation, Flexbox details, etc.
  display?: DisplayProperty;
  position?: PositionProperty;
  zIndex?: number;
  float?: FloatProperty;
  direction?: LayoutDirection;
  allowItemWrap?: boolean;
  centerItemsVertically?: boolean;
  centerItemsHorizontally?: boolean;
  alignItemsTop?: boolean;
  alignItemsRight?: boolean;
  alignItemsSpaceBetween?: boolean;
  alignItemsSpaceAround?: boolean;
  centerSelfVertically?: boolean;
  centerSelfHorizontally?: boolean;
  alignSelfBottom?: boolean;
  order?: number;
  flexBasis?: string | number;

  cursorOnHover?: boolean;
  uninteractive?: boolean;
  enableFocusing?: boolean;
  onClick?: () => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;

  children?: React.ReactNode | Array<React.ReactNode>;
}

const View: FunctionComponent<ViewProps> = React.forwardRef(
  (
    {
      backgroundColor,
      fillViewportHeight,
      fillViewportWidth,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      borderColor,
      borderThickness,
      outlineColor,
      outlineThickness,
      overflowX,
      overflowY,
      borderRadius,
      opacity,

      display,
      position,
      zIndex,
      float,
      direction,
      allowItemWrap,
      centerItemsVertically,
      centerItemsHorizontally,
      alignItemsTop,
      alignItemsRight,
      alignItemsSpaceBetween,
      alignItemsSpaceAround,
      centerSelfVertically,
      centerSelfHorizontally,
      alignSelfBottom,
      order,
      flexBasis,

      cursorOnHover,
      uninteractive,
      enableFocusing,
      onClick,
      onBlur,
      style,

      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      paddingY,
      paddingX,

      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      marginY,
      marginX,

      children,
      ...rest
    },
    ref
  ) => {
    const flexDisplayRequired =
      !!direction ||
      !!centerItemsVertically ||
      !!centerItemsHorizontally ||
      !!alignItemsTop ||
      !!alignItemsRight ||
      !!alignItemsSpaceBetween ||
      !!alignItemsSpaceAround ||
      !!centerSelfHorizontally ||
      !!centerSelfVertically ||
      !!alignSelfBottom;
    const hasBorder = !!borderColor || !!borderThickness;
    const hasOutline = !!outlineColor || !!outlineThickness;

    return (
      <div
        style={{
          ...(backgroundColor ? { backgroundColor } : {}),
          ...(fillViewportHeight ? { height: '100vh' } : {}),
          ...(fillViewportWidth ? { width: '100vw' } : {}),
          ...(width ? { width } : {}),
          ...(minWidth ? { minWidth } : {}),
          ...(maxWidth ? { maxWidth } : {}),
          ...(height ? { height } : {}),
          ...(minHeight ? { minHeight } : {}),
          ...(maxHeight ? { maxHeight } : {}),
          ...(hasBorder ? { border: `${borderThickness || '1px'} solid ${borderColor}` } : {}),
          ...(hasOutline ? generateOutlineStyle(outlineColor, outlineThickness) : {}),
          ...(overflowX ? { overflowX } : {}),
          ...(overflowY ? { overflowY } : {}),
          ...(borderRadius ? { borderRadius } : {}),
          ...(opacity ? { opacity } : {}),

          ...(flexDisplayRequired ? { display: 'flex' } : display ? { display } : {}),
          ...(position ? { position } : {}),
          ...(!!zIndex ? { zIndex } : {}),
          ...(float ? { float } : {}),
          ...(direction === LayoutDirections.vertical ? { flexDirection: 'column' } : {}),
          ...(allowItemWrap ? { flexWrap: 'wrap' } : {}),
          ...(centerItemsVertically
            ? direction === LayoutDirections.horizontal || !direction
              ? { alignItems: 'center' }
              : { justifyContent: 'center' }
            : {}),
          ...(centerItemsHorizontally
            ? direction === LayoutDirections.horizontal || !direction
              ? { justifyContent: 'center' }
              : { alignItems: 'center' }
            : {}),
          ...(alignItemsTop
            ? direction === LayoutDirections.horizontal || !direction
              ? { alignItems: 'flex-start' }
              : { justifyContent: 'flex-start' }
            : {}),
          ...(alignItemsRight
            ? direction === LayoutDirections.horizontal || !direction
              ? { justifyContent: 'flex-end' }
              : { alignItems: 'flex-end' }
            : {}),
          ...(alignItemsSpaceBetween ? { justifyContent: 'space-between' } : {}),
          ...(alignItemsSpaceAround
            ? direction === LayoutDirections.horizontal || !direction
              ? { justifyContent: 'space-around' }
              : { alignItems: 'space-around' }
            : {}),
          ...(centerSelfVertically ? { alignSelf: 'center' } : {}),
          ...(centerSelfHorizontally ? { alignSelf: 'center' } : {}),
          ...(alignSelfBottom ? { alignSelf: 'flex-end' } : {}),
          ...(!!order ? { order } : {}),
          ...(!!flexBasis ? { flexBasis } : {}),

          ...(paddingTop ? { paddingTop } : {}),
          ...(paddingRight ? { paddingRight } : {}),
          ...(paddingBottom ? { paddingBottom } : {}),
          ...(paddingLeft ? { paddingLeft } : {}),
          ...(paddingX ? { paddingLeft: paddingX, paddingRight: paddingX } : {}),
          ...(paddingY ? { paddingTop: paddingY, paddingBottom: paddingY } : {}),

          ...(marginTop ? { marginTop } : {}),
          ...(marginRight ? { marginRight } : {}),
          ...(marginBottom ? { marginBottom } : {}),
          ...(marginLeft ? { marginLeft } : {}),
          ...(marginX ? { marginLeft: marginX, marginRight: marginX } : {}),
          ...(marginY ? { marginTop: marginY, marginBottom: marginY } : {}),

          ...(cursorOnHover || !!onClick ? { cursor: 'pointer' } : {}),
          ...(uninteractive ? generateNoninteractiveStyle() : {}),
          ...style
        }}
        {...(onClick ? { onClick } : {})}
        {...(onBlur ? { onBlur } : {})}
        {...(enableFocusing ? { tabIndex: 0 } : {})}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

View.displayName = 'View';

export default View;
