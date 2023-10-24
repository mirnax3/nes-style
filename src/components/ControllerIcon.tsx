import classNames from 'clsx';
import * as React from 'react';

export type ControllerIconProps = {
  type: 'snes' | 'snes-jp' | 'nes' | 'nes-jp';
} & ParentClassNameProp;

export const ControllerIcon: React.FC<ControllerIconProps> = React.memo(
  ({ type, className, ...other }: ControllerIconProps) => (
    <i className={classNames(className, `${type}-logo`)} {...other} />
  )
);

ControllerIcon.defaultProps = {
  type: 'snes'
};

ControllerIcon.displayName = 'NesControllerIcon';
