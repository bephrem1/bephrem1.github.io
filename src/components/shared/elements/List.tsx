import React, { FunctionComponent } from 'react';

import { SPACES } from '../../../design';
import Spacer from '../layout/Spacer';
import { areEquivalentComponentTypes } from '../../../global-helpers/components';

interface Props {
  type?: 'unordered' | 'ordered';
  itemMargin?: string;

  children: React.ReactNode | Array<React.ReactNode>;
}

const List: FunctionComponent<Props> = ({
  type = 'unordered',
  itemMargin = SPACES.GAP.XSMALL,
  children: items
}) => {
  const ListTag = type === 'ordered' ? OrderedListTag : UnorderedListTag;

  return (
    <ListTag>
      {React.Children.map(items, (Item: React.ReactElement, index) => {
        const isSublist = areEquivalentComponentTypes(Item, List);
        const isLastItem = React.Children.count(items) - 1 === index;

        return (
          <React.Fragment>
            {isSublist ? Item : <li>{Item}</li>}
            {!isLastItem && <Spacer direction="vertical" size={itemMargin} />}
          </React.Fragment>
        );
      })}
    </ListTag>
  );
};

const OrderedListTag = ({ children }) => {
  return <ol>{children}</ol>;
};

const UnorderedListTag = ({ children }) => {
  return <ul>{children}</ul>;
};

export default List;
