import classNames from 'clsx';
import * as React from 'react';

export type AvatarProps = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  rounded?: boolean;
  src?: string;
} & ParentClassNameProp;

export const Avatar: React.FC<AvatarProps> = React.memo(
  ({ src, small, medium, large, rounded, className, ...other }: AvatarProps) => (
    <img
      src={src}
      alt="avatar"
      className={classNames(className, 'nes-avatar', {
        'is-small': small,
        'is-medium': medium,
        'is-large': large,
        'is-rounded': rounded
      })}
      {...other}
    />
  )
);
Avatar.displayName = 'NesAvatar';
