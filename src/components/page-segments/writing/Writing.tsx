import { formatDistanceToNow, isValid, parse, parseISO } from "date-fns";

import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote";
import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";
import { isEmpty } from "../../../helpers/empty";
import { EXTERNAL_LINKS } from "../../../helpers/urls";
import { WritingData } from "../../../pages/[writingId]";
import Link from "../../shared/elements/Link";
import SiteLayout from "../../shared/layout/SiteLayout";
import Navbar from "../../shared/navigation/Navbar";
import QuoteIcon from "../../../icons/lib/QuoteIcon";

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
  h1: (props: any) => (
    <h1 className="text-neutral-200 text-3xl font-semibold mb-2.5" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-neutral-200 text-2xl font-semibold mb-2.5" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-neutral-200 text-xl font-semibold mb-2.5" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-neutral-200 text-lg font-semibold mb-2.5" {...props} />
  ),
  h5: (props: any) => (
    <h5 className="text-neutral-200 text-base font-semibold mb-2.5" {...props} />
  ),
  p: (props: any) => (
    <p
      className="text-neutral-100 mb-3 [&>sup]:text-neutral-400 [&>sup]:text-xs [&>sup]:relative"
      {...props}
    />
  ),
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
  ol: (props: any) => <ol className="list-decimal mb-2.5" {...props} />,
  li: (props: any) => <li className="text-neutral-100 ml-8 mt-2" {...props} />,

  hr: (props: any) => <hr className="border-neutral-600 my-5" {...props} />,
  blockquote: (props: any) => {
    return (
      <blockquote
        className="border-l border-neutral-500 pl-4 mb-5"
        style={{ borderLeftWidth: "0.5px" }}
      >
        <div className="text-neutral-500 italic mb-1.5 [&>p]:text-neutral-500 [&>p]:italic [&>p]:mb-1.5">
          {props.children}
        </div>
      </blockquote>
    );
  },
  Aside: (props: any) => {
    return <aside
      className="border-l border-neutral-500 pl-4 mb-5"
      style={{ borderLeftWidth: "0.5px" }}
    >
      <div className="text-neutral-400 italic mb-1.5 [&>p]:text-neutral-500 [&>p]:italic [&>p]:mb-1.5">
        {props.children}
      </div>
    </aside>
  },
  Quote: (props: any) => {
    return <div className="flex pb-4 rounded-lg">
      <QuoteIcon className="h-6 w-6 flex-shrink-0 fill-neutral-100 mr-4" />
      <div className="text-neutral-200 mt-0.5 italic">{props.children}</div>
    </div>
  },
  Highlight: (props: any) => {
    return <span className="text-neutral-900 bg-amber-300">{props.children}</span>
  },
  Dots: () => {
    return <div className="flex flex-row gap-1 justify-center pt-4 pb-6">
      <div className="h-1 w-1 bg-neutral-500 rounded-full" />
      <div className="h-1 w-1 bg-neutral-500 rounded-full" />
      <div className="h-1 w-1 bg-neutral-500 rounded-full" />
    </div>
  },

  Image: (props: any) => {
    const hasCaption = !isEmpty(props.caption);

    const imageClassName = clsx({
      "w-full sm:max-w-[450px]": true,
      "mb-2": hasCaption,
      "rounded-sm": true,
    });

    return (
      <figure className="flex flex-col w-full items-center my-6">
        <img
          className={imageClassName}
          src={props.src}
          alt={props.alt}
          draggable="false"
        />
        {hasCaption && (
          <figcaption className="w-full sm:max-w-[450px]">
            <p className="text-neutral-400 text-sm">{props.caption}</p>
          </figcaption>
        )}
      </figure>
    );
  },
  ImagePair: (props: any) => {
    const hasCaption = !isEmpty(props.caption);

    const imageClassName = clsx({
      "w-1/2 sm:w-[300px]": true,
      "aspect-square": true,
      "object-cover": true,
      "rounded-sm": true,
    });

    return (
      <figure className="flex flex-col items-center my-6">
        <div className="flex flex-row gap-2 w-full justify-center">
          <img
            className={imageClassName}
            src={props.src1}
            alt={props.alt1}
            draggable="false"
          />
          <img
            className={imageClassName}
            src={props.src2}
            alt={props.alt2}
            draggable="false"
          />
        </div>
        {hasCaption && (
          <figcaption className="mt-2 w-full text-center max-w-[450px]">
            <p className="text-neutral-400 text-sm">{props.caption}</p>
          </figcaption>
        )}
      </figure>
    );
  },
};

const Header = ({
  title,
  date,
  className,
}: { title: string; date: string; className: string }) => {
  const relativeDate = formatDateToRelative({ date });

  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="mb-1 sm:mb-2">
        <p className="text-neutral-200 text-2xl font-semibold">{title}</p>
      </div>
      <div className="flex flex-row items-center">
        <Link
          type="external"
          dest={EXTERNAL_LINKS.SOCIAL.TWITTER}
          openInNewWindow
        >
          <p className="w-fit text-neutral-500 hover:text-neutral-400 hover:cursor text-sm sm:text-xs font-mono">
            @notbenyam
          </p>
        </Link>
        <div className="h-3 bg-neutral-500 mx-2" style={{ width: "0.5px" }} />
        <span className="leading-4">
          <p className="w-fit text-neutral-500 text-sm sm:text-xs font-mono inline">
            {date}{" "}
          </p>
          <p className="w-fit text-neutral-500 text-xs font-mono inline">
            ({relativeDate})
          </p>
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
      "MMM yyyy", // e.g., "Jan 2022"
      "MMMM yyyy", // e.g., "January 2022"
      "MMM dd, yyyy", // e.g., "Jan 1, 2022"
      "MMMM dd, yyyy", // e.g., "January 1, 2022"
      "MM/dd/yyyy", // e.g., "01/01/2022"
    ];
    for (let format of formats) {
      date = parse(dateStr, format, new Date());
      if (isValid(date)) {
        break;
      }
    }
  }

  if (!isValid(date)) {
    throw new Error("Invalid date format");
  }

  // format the date to a relative time string
  const relativeTime = formatDistanceToNow(date);

  return `${relativeTime} ago`;
};

export default Writing;
