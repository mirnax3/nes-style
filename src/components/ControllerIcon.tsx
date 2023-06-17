import classNames from 'clsx';
import * as React from 'react';

export type ControllerIconProps = {
  controller: 'snes' | 'snes-jp' | 'nes' | 'nes-jp';
} & ParentClassNameProp;

export const ControllerIcon: React.FC<ControllerIconProps> = React.memo(
  ({ controller, className, ...other }: ControllerIconProps) => (
    <i className={classNames(className, `${controller}-logo`)} {...other} />
  )
);
ControllerIcon.displayName = 'NesControllerIcon';
