import classNames from 'clsx';
import * as React from 'react';

export type AvatarProps = {
  rounded?: boolean;
  src?: string;
} & ParentClassNameProp &
  SizeProp;

export const Avatar: React.FC<AvatarProps> = React.memo(
  ({ src, size, rounded, className, ...other }: AvatarProps) => (
    <img
      src={src}
      alt="avatar"
      className={classNames(className, 'nes-avatar', {
        'is-small': size === 'SM',
        'is-medium': size === 'MD',
        'is-large': size === 'LG',
        'is-rounded': rounded
      })}
      {...other}
    />
  )
);

Avatar.defaultProps = {
  size: "MD",
  rounded: false
};

Avatar.displayName = 'NesAvatar';
