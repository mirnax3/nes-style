import { makeStyles } from 'lib/makeStyles';
import React, { ComponentProps } from 'react';

import {
  TypographyColorProps,
  TypographyMakeStyleProps,
  TypographyProps,
  TypographyStyleProps
} from './props';
import {
  useTypographyAlignStyles,
  useTypographyColorStyles,
  useTypographyWhitespaceStyles,
  useWrapperStyles
} from './styles';

export type HeadingTextProps = ComponentProps<'h1'> &
  TypographyProps &
  TypographyStyleProps & {
    size?: 'XL' | 'LG' | 'MD' | 'SM' | 'XS';
  };

const hasValidSize = ({ size = 'XL' }: Pick<HeadingTextProps, 'size'>) =>
  ['LG', 'MD', 'SM', 'XS'].includes(size);

const useStyles = makeStyles<HeadingTextProps & TypographyMakeStyleProps>()({
  root: (props) => [
    'font-primary',
    {
      'text-4xl md:text-6xl font-bold': props?.size === 'XL',
      'tracking-tight md:leading-tight': props?.size === 'XL',
      'text-5xl': props?.size === 'LG',
      'tracking-tight sm:leading-none md:leading-tight': props?.size === 'LG',
      'text-3xl md:text-4xl': props?.size === 'MD',
      'tracking-tight': props?.size === 'MD',
      'text-3xl': props?.size === 'SM',
      'text-xl': props?.size === 'XS',
      'font-semibold': hasValidSize({ size: props?.size }) && !props?.bold,
      'font-bold': hasValidSize({ size: props?.size }) && props?.bold
    },
    !props?.disableColorStyle && props?.colorClassName,
    props?.fontClassName,
    props?.alignClassName,
    props?.whitespaceClassName
  ]
});

const HeadingText: React.FC<HeadingTextProps> = (props: HeadingTextProps) => {
  const { as = 'h1', children, className } = props;

  const wrapperStyles = useWrapperStyles({ className });
  const colorStyles = useTypographyColorStyles(props as TypographyColorProps);
  const alignStyles = useTypographyAlignStyles(props);
  const whitespaceStyles = useTypographyWhitespaceStyles(props);

  const styles = useStyles({
    colorClassName: colorStyles.color,
    alignClassName: alignStyles.align,
    whitespaceClassName: whitespaceStyles.whitespace,
    ...props
  });

  const Element = () => React.createElement(as, { className: styles.root }, children);

  return className ? (
    <span className={wrapperStyles.wrapper}>
      <Element />
    </span>
  ) : (
    <Element />
  );
};

HeadingText.defaultProps = {
  as: 'h1',
  size: 'XL',
  bold: false,
  dark: false,
  enableHover: false,
  active: false,
  disabled: false,
  color: 'primary',
  disableColorStyle: false
};

HeadingText.displayName = 'HeadingText';

export { HeadingText };
