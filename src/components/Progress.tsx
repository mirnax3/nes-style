import classNames from 'clsx';
import { makeIntentStyles } from 'lib/makeIntentStyles';
import * as React from 'react';

export type ProgressProps = {
  style?: any;
  value?: number;
  maximum?: number;
  isPattern?: boolean;
} & ParentClassNameProp &
  IntentProp;

export const Progress: React.FC<ProgressProps> = React.memo(
  ({ className, value, maximum, intent, isPattern, ...other }: ProgressProps) => (
    <progress
      value={value}
      max={maximum}
      className={classNames(className, 'nes-progress', makeIntentStyles({ intent }))}
      {...other}
    />
  )
);

Progress.defaultProps = {
  maximum: 100
};

Progress.displayName = 'NesProgress';
