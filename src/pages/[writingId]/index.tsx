import Head from 'next/head';
import PageBase from '../../components/shared/page/PageBase';
import Writing from '../../components/page-segments/writing/Writing';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { useDocumentHeadComponents } from '../../hooks/page-headers';

export interface WritingData {
  title: string;
  date: string;
}
const CONTENT_PATH = 'src/content';

const WritingPage = ({ mdxSource, mdxData }) => {
  const { SEOTags } = useDocumentHeadComponents({
    title: mdxData.title
  });

  return (
    <PageBase>
      <Head>{SEOTags}</Head>
      <Writing mdxSource={mdxSource} mdxData={mdxData} />
    </PageBase>
  );
};

// will render all writings to static pages at build time
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(CONTENT_PATH));

  const paths = files.map((filename) => ({
    params: {
      writingId: filename.replace('.mdx', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

// writing pages will be prerendered (at build time) with the data from the markdown files
export async function getStaticProps({ params: { writingId } }) {
  const markdownWithMeta = fs.readFileSync(path.join(CONTENT_PATH, `${writingId}.mdx`), 'utf-8');

  const { content, data } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource: mdxSource,
      mdxData: data as WritingData
    }
  };
}

export default WritingPage;
