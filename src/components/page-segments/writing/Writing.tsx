import { formatDistanceToNow, isValid, parse, parseISO } from 'date-fns';

import { EXTERNAL_LINKS } from '../../../helpers/urls';
import { FunctionComponent } from 'react';
import Link from '../../shared/elements/Link';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '../../shared/navigation/Navbar';
import SiteLayout from '../../shared/layout/SiteLayout';
import { WritingData } from '../../../pages/[writingId]';
import clsx from 'clsx';
import { isEmpty } from '../../../helpers/empty';
import { twMerge } from 'tailwind-merge';

interface Props {
  mdxSource: any;
  mdxData: WritingData;
}

const Writing: FunctionComponent<Props> = ({ mdxSource, mdxData }) => {
  const { title, date } = mdxData;

  return (
    <SiteLayout>
      <Navbar />

      <div className="pt-3.5 sm:pt-9 pb-16">
        <Header className="mb-4 sm:mb-6" title={title} date={date} />
        <Contents mdxSource={mdxSource} />
      </div>
    </SiteLayout>
  );
};

const Contents = ({ mdxSource }) => {
  return <MDXRemote components={components} {...mdxSource} />;
};
const components = {
  h1: (props: any) => <h1 className="text-neutral-200 text-3xl font-semibold mb-2.5" {...props} />,
  h2: (props: any) => <h2 className="text-neutral-200 text-2xl font-semibold mb-2.5" {...props} />,
  h3: (props: any) => <h3 className="text-neutral-200 text-xl font-semibold mb-2.5" {...props} />,
  h4: (props: any) => <h4 className="text-neutral-200 text-lg font-semibold mb-2.5" {...props} />,
  p: (props: any) => <p className="text-neutral-100 mb-3" {...props} />,
  a: (props: any) => {
    return (
      <a
        className="text-amber-400 hover:text-amber-300 visited:text-amber-300"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  },

  ul: (props: any) => <ul className="list-disc mb-2.5" {...props} />,
  li: (props: any) => <li className="text-neutral-100 ml-8 mt-2" {...props} />,

  hr: (props: any) => <hr className="border-neutral-600 my-5" {...props} />,
  blockquote: (props: any) => {
    // TODO: cleanup slop
    const extractText = (children: any): string => {
      if (typeof children === 'string') {
        return children;
      } else if (Array.isArray(children)) {
        return children
          .map((child) => {
            if (typeof child === 'string') {
              return child;
            } else if (child.props && child.props.children) {
              return extractText(child.props.children);
            } else {
              return extractText(child);
            }
          })
          .join('');
      } else if (children && children.props && children.props?.children) {
        return extractText(children.props.children);
      }

      return '';
    };

    const text = extractText(props.children);

    return (
      <blockquote
        className="border-l border-neutral-500 pl-4 mb-5"
        style={{ borderLeftWidth: '0.5px' }}
      >
        <p className="text-neutral-500 italic mb-1.5">{text}</p>
      </blockquote>
    );
  },

  Image: (props: any) => {
    const hasCaption = !isEmpty(props.caption);

    const imageClassName = clsx({
      'w-full sm:max-w-[450px]': true,
      'mb-2': hasCaption,
      'rounded-sm': true
    });

    return (
      <figure className="flex flex-col w-full items-center my-6">
        <img className={imageClassName} src={props.src} alt={props.alt} draggable="false" />
        {hasCaption && (
          <figcaption className="w-full sm:max-w-[450px]">
            <p className="text-neutral-400 text-sm">{props.caption}</p>
          </figcaption>
        )}
      </figure>
    );
  }
};

const Header = ({ title, date, className }: { title: string; date: string; className: string }) => {
  const relativeDate = formatDateToRelative({ date });

  return (
    <div className={twMerge('flex flex-col', className)}>
      <div className="mb-1 sm:mb-2">
        <p className="text-neutral-200 text-2xl font-semibold">{title}</p>
      </div>
      <div className="flex flex-row items-center">
        <Link type="external" dest={EXTERNAL_LINKS.SOCIAL.TWITTER} openInNewWindow>
          <p className="w-fit text-neutral-500 hover:text-neutral-400 hover:cursor text-sm sm:text-xs font-mono">
            @notbenyam
          </p>
        </Link>
        <div className="h-3 bg-neutral-500 mx-2" style={{ width: '0.5px' }} />
        <span className="leading-4">
          <p className="w-fit text-neutral-500 text-sm sm:text-xs font-mono inline">{date} </p>
          <p className="w-fit text-neutral-500 text-xs font-mono inline">({relativeDate})</p>
        </span>
      </div>
    </div>
  );
};
const formatDateToRelative = ({ date: dateStr }: { date: string }) => {
  let date: any;

  // try ISO8601 parsing first
  date = parseISO(dateStr);
  if (!isValid(date)) {
    // custom parsing logic for non-standard formats
    const formats = [
      'MMM yyyy', // e.g., "Jan 2022"
      'MMMM yyyy', // e.g., "January 2022"
      'MMM dd, yyyy', // e.g., "Jan 1, 2022"
      'MMMM dd, yyyy', // e.g., "January 1, 2022"
      'MM/dd/yyyy' // e.g., "01/01/2022"
    ];
    for (let format of formats) {
      date = parse(dateStr, format, new Date());
      if (isValid(date)) {
        break;
      }
    }
  }

  if (!isValid(date)) {
    throw new Error('Invalid date format');
  }

  // format the date to a relative time string
  const relativeTime = formatDistanceToNow(date);

  return `${relativeTime} ago`;
};

export default Writing;
