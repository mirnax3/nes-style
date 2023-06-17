import classNames from 'clsx';
import * as React from 'react';

export type TableProps = {
  bordered?: boolean;
  centered?: boolean;
  dark?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Table: React.FC<TableProps> = React.memo(
  ({ bordered, centered, dark, children, className, ...other }: TableProps) => (
    <table
      className={classNames(className, 'nes-table', {
        'is-bordered': bordered,
        'is-centered': centered,
        'is-dark': dark
      })}
      {...other}>
      {children}
    </table>
  )
);
Table.displayName = 'NesTable';
