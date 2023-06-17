import classNames from 'clsx';
import * as React from 'react';

export type ProgressProps = {
  style?: any;
  value?: number;
  max?: number;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  pattern?: boolean;
} & ParentClassNameProp;

export const Progress: React.FC<ProgressProps> = React.memo(
  ({
    className,
    value,
    max,
    primary,
    success,
    warning,
    error,
    pattern,
    ...other
  }: ProgressProps) => (
    <progress
      value={value}
      max={max}
      className={classNames(className, 'nes-progress', {
        'is-primary': primary,
        'is-success': success,
        'is-warning': warning,
        'is-error': error,
        'is-pattern': pattern
      })}
      {...other}
    />
  )
);
Progress.displayName = 'NesProgress';
