export const generateOutlineStyle = (borderColor: string, borderThickness: string) => {
  return generateBoxShadow({
    spreadRadius: borderThickness,
    color: borderColor
  });
};

interface BoxShadowOptions {
  offsetX?: string | number;
  offsetY?: string | number;
  blurRadius?: string | number;
  spreadRadius?: string | number;
  color?: string;
}
const generateBoxShadow = ({
  offsetX,
  offsetY,
  blurRadius,
  spreadRadius,
  color
}: BoxShadowOptions) => {
  return {
    boxShadow: `${offsetX || '0px'} ${offsetY || '0px'} ${blurRadius || '0px'} ${
      spreadRadius || '0px'
    } ${color}`
  };
};
