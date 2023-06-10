//@ts-nocheck
import parser, { ClassValue } from 'clsx';
import isFunction from 'lodash/isFunction';
import { useMemo } from 'react';

export type DefaultProps = {
  className?: string | undefined;
};

type Props<P> = P & DefaultProps;

// alias in case of better library later.
type Parse = typeof parser;

type Styles<S, P = Record<string, unknown>> = Record<
  keyof S,
  ClassValue | ((props?: Props<P>, parse?: Parse) => ClassValue)
>;

/**
 * Make styles is a curried function for creating a
 * useStyles hook based on clsx definitions.
 *
 * @returns hook function to be used inside of component block.
 */
function useStyles<P, S>(styles: S, props?: P) {
  return Object.keys(styles).reduce<Record<keyof S, string>>((r, k) => {
    const style = styles[k];
    if (isFunction(style)) {
      r[k] = parser(style(props || null, parser));
    } else {
      r[k] = parser(style);
    }
    return r;
  }, Object.create(null));
}

export function makeStyles<S extends Styles<S>>(
  styles: S
): <P>(props?: Props<P>) => Record<keyof S, string>;

export function makeStyles<P>(): <S extends Styles<S, P>>(
  styles: S
) => (props?: Props<P>) => Record<keyof S, string>;

export function makeStyles<P>(styles?: never) {
  if (styles) {
    return <S extends Styles<S, P>>(props?: Props<P>) =>
      useMemo(() => useStyles<P, S>(styles, props), [props]);
  }
  return <S extends Styles<S, P>>(styles: S) => {
    return (props?: Props<P>) => useMemo(() => useStyles<P, S>(styles, props), [props]);
  };
}
