import classNames from 'clsx';
import * as React from 'react';

export type BalloonProps = {
  fromLeft?: boolean;
  fromRight?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Balloon: React.FC<BalloonProps> = React.memo(
  ({ fromLeft = true, fromRight, children, className, ...other }: BalloonProps) => (
    <div
      className={classNames(className, 'nes-balloon', {
        'from-left': fromLeft,
        'from-right': fromRight
      })}
      {...other}>
      {children}
    </div>
  )
);
Balloon.displayName = 'NesBalloon';
