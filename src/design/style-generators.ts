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

export const generateUnderlineStyle = (color: string) => {
  return {
    backgroundImage: `linear-gradient(to right, ${color} 75%, transparent 75%)`,
    backgroundPosition: '0 1.14em',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '1000px 3px' // arbitrarily large width for coverage
  };
};

export const generateNoninteractiveTextStyle = (): React.CSSProperties => {
  return {
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
  };
};
