import { Empty } from '../global-types/empty';
import Environment from '../Environment';
import { NextRouter } from 'next/router';
import { getCurrentUrl } from './urls';
import { isEmpty } from './empty';

export interface OpenGraphData {
  imageUrl: string | Empty;
  title: string | Empty;
  description: string | Empty;
}

interface PageMetadata {
  openGraphData: OpenGraphData;
  canonicalUrl: (router: NextRouter) => string;
}

const metaDefaults: PageMetadata = {
  openGraphData: {
    title: 'Benyam Ephrem',
    description: 'Personal Website of Benyam Ephrem',
    imageUrl: Environment.isDevelopment(process.env.NEXT_PUBLIC_ENV)
      ? '/images/og-image.png'
      : `https://${process.env.NEXT_PUBLIC_HOSTNAME}/images/og-image.png`
  },
  canonicalUrl: (router: NextRouter) => getCurrentUrl(router)
};

export const getSEOMetaTags = (seoMetadata?: { title?: string; description?: string }) => {
  const title =
    !!seoMetadata && !isEmpty(seoMetadata.title)
      ? seoMetadata.title
      : metaDefaults.openGraphData.title;
  const description =
    !!seoMetadata && !isEmpty(seoMetadata.description)
      ? seoMetadata.description
      : metaDefaults.openGraphData.description;

  return (
    <>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
    </>
  );
};

export const getOpenGraphMetaTags = (
  router: NextRouter,
  openGraphData?: Partial<OpenGraphData>
) => {
  const imageUrl =
    !!openGraphData && !isEmpty(openGraphData.imageUrl)
      ? openGraphData.imageUrl
      : metaDefaults.openGraphData.imageUrl;
  const title =
    !!openGraphData && !isEmpty(openGraphData.title)
      ? openGraphData.title
      : metaDefaults.openGraphData.title;
  const description =
    !!openGraphData && !isEmpty(openGraphData.description)
      ? openGraphData.description
      : metaDefaults.openGraphData.description;

  return (
    <>
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={metaDefaults.canonicalUrl(router)} />
      <meta key="og:type" property="og:type" content="website" />

      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:url" property="twitter:url" content={metaDefaults.canonicalUrl(router)} />
      <meta
        key="twitter:domain"
        property="twitter:domain"
        content={process.env.NEXT_PUBLIC_HOSTNAME}
      />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
    </>
  );
};
