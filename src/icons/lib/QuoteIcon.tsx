import { BaseIconProps, IconAccessibilityTitle, getBaseSvgProps } from '..';

import { FunctionComponent } from 'react';

const iconName = 'quote-symbol';

const QuoteIcon: FunctionComponent<BaseIconProps> = ({ className, fill, alt }) => {
  const svgBaseOptions = getBaseSvgProps({ iconName });

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 256 256" {...svgBaseOptions}>
      <IconAccessibilityTitle iconName={iconName} alt={alt} />
      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
    </svg>
  );
};

export default QuoteIcon;
