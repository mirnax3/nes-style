import classNames from 'clsx';
import * as React from 'react';

export type SpriteProps = {
  sprite:
    | 'octocat'
    | 'mario'
    | 'ash'
    | 'pokeball'
    | 'bulbasaur'
    | 'charmander'
    | 'squirtle'
    | 'smartphone'
    | 'phone'
    | 'kirby'
    | 'bcrikko';
} & ParentClassNameProp;

export const Sprite: React.FC<SpriteProps> = React.memo(
  ({ sprite, className, ...other }: SpriteProps) => (
    <i className={classNames(className, `nes-${sprite}`)} {...other} />
  )
);
Sprite.displayName = 'NesSprite';
