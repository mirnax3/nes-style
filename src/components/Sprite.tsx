import classNames from 'clsx';
import * as React from 'react';

export type SpriteProps = {
  type:
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
  ({ type, className, ...other }: SpriteProps) => (
    <i className={classNames(className, `nes-${type}`)} {...other} />
  )
);

type Sprite = {
  type: 'octocat';
};

Sprite.displayName = 'NesSprite';
