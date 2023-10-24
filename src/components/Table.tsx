import classNames from 'clsx';
import * as React from 'react';

export type TableProps = {
  hasBorder?: boolean;
  center?: boolean;
  dark?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Table: React.FC<TableProps> = React.memo(
  ({ hasBorder, center, dark, children, className, ...other }: TableProps) => (
    <table
      className={classNames(className, 'nes-table', {
        'is-bordered': hasBorder,
        'is-centered': center,
        'is-dark': dark
      })}
      {...other}>
      {children}
    </table>
  )
);
Table.displayName = 'NesTable';
