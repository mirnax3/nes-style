import { makeStyles } from 'lib/makeStyles';
import React from 'react';

export type PanelItemProps = {
  align?: 'start' | 'center' | 'end' | 'stretch';
  direction?: 'row' | 'col';
  justify?: 'between' | 'start' | 'center' | 'end';
  fullWidth?: boolean;
  hasDivider?: boolean;
  hover?: 'primary' | 'secondary';
  as?: 'div' | 'span' | 'li' | 'nav' | 'label';
  spacing?: false | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | '2XL';
  rounded?: false | 'SM' | 'MD' | 'LG' | 'full';
  active?: boolean;
  padding?: boolean;
  paddingX?: false | 'XS' | 'SM' | 'MD' | 'LG';
  paddingY?: false | 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
  children?: React.ReactNode;
  wrap?: true | 'nowrap' | 'wrap' | 'wrap-reverse';
} & ParentClassNameProp;

const useStyles = makeStyles<PanelItemProps>()({
  root: (props) => [
    'flex',
    {
      [`flex-${props?.direction}`]: props?.direction,
      [`flex-${props?.wrap !== true ? props?.wrap : 'wrap'}`]: props?.wrap,
      [`justify-${props?.justify}`]: props?.justify,
      'w-full': props?.fullWidth,
      [`items-${props?.align}`]: props?.align,
      'py-0': !props?.paddingY || !props?.padding,
      'py-0.5': props?.paddingY === 'XS' && props?.padding,
      'py-1': props?.paddingY === 'SM' && props?.padding,
      'py-1.5': props?.paddingY === 'MD' && props?.padding,
      'py-2': props?.paddingY === 'LG' && props?.padding,
      'py-4': props?.paddingY === 'XL' && props?.padding,
      'px-0': !props?.paddingX || !props?.padding,
      'px-1': props?.paddingX === 'XS' && props?.padding,
      'px-2': props?.paddingX === 'SM' && props?.padding,
      'px-3': props?.paddingX === 'MD' && props?.padding,
      'px-4': props?.paddingX === 'LG' && props?.padding,
      'gap-x-1': props?.direction === 'row' && props?.spacing === 'XS',
      'gap-y-0.5': props?.direction === 'col' && props?.spacing === 'XS',
      'gap-x-1.5': props?.direction === 'row' && props?.spacing === 'SM',
      'gap-y-1': props?.direction === 'col' && props?.spacing === 'SM',
      'gap-x-2': props?.direction === 'row' && props?.spacing === 'MD',
      'gap-y-1.5': props?.direction === 'col' && props?.spacing === 'MD',
      'gap-x-3': props?.direction === 'row' && props?.spacing === 'LG',
      'gap-y-2.5': props?.direction === 'col' && props?.spacing === 'LG',
      'gap-x-4': props?.direction === 'row' && props?.spacing === 'XL',
      'gap-y-5': props?.direction === 'col' && props?.spacing === 'XL',
      'gap-x-6': props?.direction === 'row' && props?.spacing === '2XL',
      'gap-y-7': props?.direction === 'col' && props?.spacing === '2XL',
      'gap-y-0 gap-x-0': props?.spacing === false,
      'hover:bg-primaryBackgroundHover': props?.hover === 'primary',
      'hover:bg-neutralBackgroundHover': props?.hover === 'secondary',
      'bg-primaryBackgroundActive': props?.active,
      'box-content border-b border-neutralBorder': props?.hasDivider,
      'rounded-sm': props?.rounded === 'SM' && !props?.hasDivider,
      'hover:rounded-sm': props?.rounded === 'SM' && props?.hasDivider,
      rounded: props?.rounded === 'MD' && !props?.hasDivider,
      'hover:rounded': props?.rounded === 'MD' && props?.hasDivider,
      'rounded-lg': props?.rounded === 'LG' && !props?.hasDivider,
      'hover:rounded-lg': props?.rounded === 'LG' && props?.hasDivider,
      'rounded-full': props?.rounded === 'full' && !props?.hasDivider,
      'hover:rounded-full': props?.rounded === 'full' && props?.hasDivider
    },
    props?.className
  ]
});

const PanelItem: React.FC<PanelItemProps> = React.memo((props) => {
  const { as = 'div', children } = props;
  const styles = useStyles(props);
  const WrapperElement = as;

  return <WrapperElement className={styles.root}>{children}</WrapperElement>;
});

PanelItem.defaultProps = {
  align: 'center',
  direction: 'row',
  justify: 'start',
  fullWidth: false,
  padding: true,
  paddingX: false,
  paddingY: 'MD',
  hasDivider: false,
  hover: undefined,
  spacing: 'SM',
  as: 'div',
  active: false,
  rounded: false,
  wrap: 'nowrap'
};

PanelItem.displayName = 'PanelItem';

export { PanelItem };
