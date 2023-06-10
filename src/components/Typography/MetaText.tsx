import { makeStyles } from 'lib/makeStyles';
import React, { ComponentProps } from 'react';

import {
  TypographyColorProps,
  TypographyMakeStyleProps,
  TypographyProps,
  TypographyStyleProps,
  useTypographyAlignStyles,
  useTypographyColorStyles,
  useTypographyWhitespaceStyles,
  useWrapperStyles
} from './index';

export type MetaTextProps = ComponentProps<'h6'> &
  TypographyProps &
  TypographyStyleProps & {
    elementClassName?: string;
  };

const useStyles = makeStyles<MetaTextProps & TypographyMakeStyleProps>()({
  root: (props) => [
    'text-meta',
    {
      'font-medium': !props?.bold && !props?.thin,
      'font-semibold': props?.bold,
      'font-normal': props?.thin,
      italic: props?.italic
    },
    {
      'hover:cursor-pointer': props?.as === 'label'
    },
    !props?.disableColorStyle && props?.colorClassName,
    props?.fontClassName,
    props?.alignClassName,
    props?.elementClassName,
    props?.whitespaceClassName
  ]
});

const MetaText: React.FC<MetaTextProps> = (props: MetaTextProps) => {
  const { as = 'h6', children, className, elementClassName } = props;

  const wrapperStyles = useWrapperStyles({ className });
  const colorStyles = useTypographyColorStyles(props as TypographyColorProps);
  const alignStyles = useTypographyAlignStyles(props);
  const whitespaceStyles = useTypographyWhitespaceStyles(props);

  const styles = useStyles({
    colorClassName: colorStyles.color,
    alignClassName: alignStyles.align,
    whitespaceClassName: whitespaceStyles.whitespace,
    elementClassName,
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

MetaText.defaultProps = {
  as: 'h6',
  thin: false,
  bold: false,
  italic: false,
  dark: false,
  enableHover: false,
  active: false,
  disabled: false,
  color: 'primary',
  disableColorStyle: false
};

MetaText.displayName = 'MetaText';

export { MetaText };
