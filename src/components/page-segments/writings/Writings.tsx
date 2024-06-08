import React, { FunctionComponent } from 'react';
import { WritingInfo, WritingItems } from '../../../fixtures/writing';

import { EmptyObject } from '../../../types/empty';
import Link from '../../shared/elements/Link';
import Navbar from '../../shared/navigation/Navbar';
import SiteLayout from '../../shared/layout/SiteLayout';
import clsx from 'clsx';

const Writings: FunctionComponent<EmptyObject> = () => {
  return (
    <SiteLayout>
      <Navbar />

      <div className="pt-4 sm:pt-10 pb-16">
        <WritingTable />
      </div>
    </SiteLayout>
  );
};

const WritingTable = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row py-3">
        <div className="min-w-[120px] sm:min-w-[135px]">
          <p className="text-neutral-500 text-xs font-mono select-none">date</p>
        </div>
        <div className="flex flex-grow">
          <p className="text-neutral-500 text-xs font-mono select-none">title</p>
        </div>
      </div>
      <DividerLine />
      {WritingItems.map((item: WritingInfo, index) => {
        const isLast = index === WritingItems.length - 1;

        return (
          <WritingItem
            key={index}
            title={item.title}
            date={item.date}
            path={item.path}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
};

const WritingItem = ({ title, date, path, isLast }) => {
  const className = clsx([
    'flex flex-row items-center',
    'py-3',
    'hover:bg-neutral-800 hover:bg-opacity-15',
    'hover:cursor-pointer',
    'transition-all duration-100 ease-in-out'
  ]);

  return (
    <>
      <Link type="internal" dest={path} fillContainer openInNewWindow={false}>
        <div className={className}>
          <div className="min-w-[120px] sm:min-w-[135px]">
            <p className="text-neutral-400 text-sm font-mono text-nowrap">{date}</p>
          </div>
          <div className="flex flex-grow w-full">
            <p className="text-neutral-200 text-sm font-mono">{title}</p>
          </div>
        </div>
      </Link>
      {!isLast && <DividerLine />}
    </>
  );
};

const DividerLine = () => {
  return <div className="border-t border-neutral-700 border-opacity-50" />;
};

export default Writings;
