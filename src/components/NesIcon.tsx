import classNames from 'clsx';
import * as React from 'react';

export type NesIconProps = {
  type:
    | 'heart'
    | 'star'
    | 'like'
    | 'twitter'
    | 'facebook'
    | 'github'
    | 'youtube'
    | 'google'
    | 'medium'
    | 'twitch'
    | 'reddit'
    | 'whatsapp'
    | 'gmail'
    | 'linkedin'
    | 'close'
    | 'trophy';
  isEmpty?: boolean;
  isTransparent?: boolean;
  isHalf?: boolean;
} & ParentClassNameProp &
  SizeProp;

export const NesIcon: React.FC<NesIconProps> = React.memo(
  ({ className, type, size, isEmpty, isTransparent, isHalf, ...other }: NesIconProps) => (
    <i
      className={classNames(className, 'nes-icon', type, {
        'is-small': size === 'SM',
        'is-medium': size === 'MD',
        'is-large': size === 'LG',
        'is-transparent': isEmpty,
        'is-empty': isTransparent,
        'is-half': isHalf
      })}
      {...other}
    />
  )
);

NesIcon.defaultProps = {
  type: 'heart'
};

NesIcon.displayName = 'NesIcon';
