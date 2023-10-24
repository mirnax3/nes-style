import classNames from 'clsx';
import * as React from 'react';

export type BalloonProps = {
  left?: boolean;
  right?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Balloon: React.FC<BalloonProps> = React.memo(
  ({ left, right, children, className, ...props }: BalloonProps) => (
    <div
      className={classNames(className, 'nes-balloon', {
        'from-left': left && !right,
        'from-right': right
      })}
      {...props}>
      {children}
    </div>
  )
);

Balloon.defaultProps = {
  left: true,
  right: false
};

Balloon.displayName = 'NesBalloon';
