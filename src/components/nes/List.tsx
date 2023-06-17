import classNames from 'clsx';
import * as React from 'react';

export type ListProps = {
  solid?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const List: React.FC<ListProps> = React.memo(
  ({ children, solid, className, ...other }: ListProps) => (
    <ul
      className={classNames(className, 'nes-list', {
        'is-circle': !solid,
        'is-disc': solid
      })}
      {...other}>
      {children}
    </ul>
  )
);
List.displayName = 'NesList';
