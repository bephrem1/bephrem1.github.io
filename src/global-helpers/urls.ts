import { NextRouter } from 'next/router';

export const INTERNAL_LINKS = {
  HOME: '/',
  WRITING: {
    // health
    HOW_TO_GET_JACKED: '/jacked',
    WHY_IT_IS_HARD_TO_GET_FIT: '/fit',

    // wealth & career
    A_PROFESSIONAL_VACUUM: '/vacuum',
    DONT_SELL_TOO_EARLY: '/early',

    // love & relationships
    QUITTING_SOCIAL_DRINKING: '/drinking'
  }
};

export const EXTERNAL_LINKS = {
  SOCIAL: {
    GITHUB: 'https://github.com/bephrem1',
    INSTAGRAM: 'https://www.instagram.com/bephrem_',
    LINKEDIN: 'https://linkedin.com/in/bephrem',
    TWITTER: 'https://twitter.com/notbenyam'
  },
  BACKTOBACKSWE: {
    WEBSITE: 'https://backtobackswe.com',
    YOUTUBE: 'https://www.youtube.com/c/BackToBackSWE'
  },
  WIKIPEDIA: {
    ASYMPTOTIC_ANALYSIS: 'https://en.wikipedia.org/wiki/Asymptotic_analysis',
    MARYLAND_STATE: 'https://en.wikipedia.org/wiki/Maryland',
    UNIVERSITY_OF_MARYLAND: 'https://en.wikipedia.org/wiki/University_of_Maryland,_College_Park',
    PROGRESSIVE_OVERLOAD: 'https://en.wikipedia.org/wiki/Progressive_overload',
    SOCIAL_DRINKING: 'https://en.wikipedia.org/wiki/Drinking_culture#Social_drinking',
    ALCOHOL: {
      TOXICITY: 'https://en.wikipedia.org/wiki/Alcohol_(drug)#Toxicity',
      SHORT_TERM_EFFECTS: 'https://en.wikipedia.org/wiki/Short-term_effects_of_alcohol_consumption',
      LONG_TERM_EFFECTS: 'https://en.wikipedia.org/wiki/Long-term_effects_of_alcohol'
    },
    CATABOLISM: 'https://en.wikipedia.org/wiki/Catabolism',
    WEALTH: 'https://en.wikipedia.org/wiki/Wealth'
  },

  // personal sites
  PAUL_GRAHAM: 'http://paulgraham.com',
  MICHAEL_WEINBERGER_PERSONAL_SITE: 'https://michaelwe.in',

  // misc
  TWITTER: 'https://twitter.com',
  MYFITNESSPAL: 'https://www.myfitnesspal.com',
  IRIBE: 'https://iribe.umd.edu'
};

export const getCurrentUrl = (router: NextRouter) => {
  return getFrontendUrl(router.asPath);
};

const getFrontendUrl = (path: string, params?: Record<string, string>) => {
  return getUrlToResource(getBaseFrontendUrl(), path, params);
};

const getUrlToResource = (
  baseUrl: string,
  resourcePath: string,
  params?: Record<string, string>
) => {
  // Adjust for trailing slash
  if (!!resourcePath && resourcePath.charAt(resourcePath.length - 1) === '/') {
    resourcePath = resourcePath.substring(0, resourcePath.length - 1);
  }

  // Adjust for leading slash
  if (!!resourcePath && resourcePath.charAt(0) !== '/') {
    resourcePath = '/' + resourcePath;
  }

  const queryParamString = params ? getQueryParamString(params) : '';

  return baseUrl + resourcePath + queryParamString;
};

const getQueryParamString = (params: Record<string, string>): string => {
  if (!params) {
    return '';
  }

  const paramItems = Object.keys(params).map((paramLabel: string) => {
    return `${encodeURIComponent(paramLabel)}=${encodeURIComponent(params[paramLabel])}`;
  });

  return `?${paramItems.join('&')}`;
};

const getBaseFrontendUrl = () => {
  return getBaseUrl({
    host: process.env.NEXT_PUBLIC_HOSTNAME,
    port: process.env.NEXT_PUBLIC_HOSTNAME === 'localhost' ? ':3000' : ''
  });
};

interface BaseUrlOptions {
  host: string;
  port: string;
  suffix?: string;
}
const getBaseUrl = ({ host, port, suffix }: BaseUrlOptions) => {
  const protocol = host === 'localhost' ? 'http' : 'https';

  return `${protocol}://${host}${port}${!!suffix ? suffix : ''}`;
};
