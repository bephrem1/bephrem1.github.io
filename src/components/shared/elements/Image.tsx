import { BORDER_RADII } from '../../../design';
import { FunctionComponent } from 'react';
import { default as NextImage } from 'next/image';

enum ImageExtensions {
  svg = 'svg',
  png = 'png'
}
type ImageExtension = keyof typeof ImageExtensions;

export interface ImageProps {
  name?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  srcOverride?: string;
  alt?: string;
  ext?: ImageExtension;
  optimize?: boolean; // See: https://nextjs.org/docs/api-reference/next/image
  borderColor?: string;
  borderThickness?: string;
  curveCorners?: boolean;
  makeCircular?: boolean;
  style?: React.CSSProperties;

  onClick?: (e?: any) => void;
}

const Image: FunctionComponent<ImageProps> = ({
  name,
  width,
  maxWidth,
  height,
  maxHeight,
  srcOverride,
  alt,
  ext,
  optimize = false,
  borderColor,
  borderThickness,
  curveCorners,
  makeCircular,
  style
}) => {
  const hasBorder = !!borderColor || !!borderThickness;

  const sharedImageProps = {
    src: srcOverride ? srcOverride : `/images/${name}.${ext}`,
    width,
    ...(maxWidth ? { maxWidth } : {}),
    height,
    ...(maxHeight ? { maxHeight } : {}),
    draggable: false,
    alt: alt
  };
  const imageStyle = {
    ...style,
    ...(hasBorder
      ? {
          border: `${borderThickness || '1px'} solid ${borderColor}`
        }
      : {}),
    ...(curveCorners ? { borderRadius: BORDER_RADII.SMALL } : {}),
    ...(makeCircular ? { borderRadius: BORDER_RADII.CIRCLE } : {}),
    alignSelf: 'center'
  };

  return optimize ? (
    <NextImage {...sharedImageProps} />
  ) : (
    <img {...sharedImageProps} style={imageStyle} />
  );
};

export default Image;
