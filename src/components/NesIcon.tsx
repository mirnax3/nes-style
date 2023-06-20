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
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  empty?: boolean;
  transparent?: boolean;
  half?: boolean;
} & ParentClassNameProp;

export const NesIcon: React.FC<NesIconProps> = React.memo(
  ({ className, type, small, medium, large, empty, transparent, half, ...other }: IconProps) => (
    <i
      className={classNames(className, 'nes-icon', type, {
        'is-small': small,
        'is-medium': medium,
        'is-large': large,
        'is-transparent': empty,
        'is-empty': transparent,
        'is-half': half
      })}
      {...other}
    />
  )
);
NesIcon.displayName = 'NesIcon';
