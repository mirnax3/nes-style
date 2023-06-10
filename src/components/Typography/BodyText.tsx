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

export type BodyTextProps = ComponentProps<'p'> & TypographyProps & TypographyStyleProps;

const useStyles = makeStyles<BodyTextProps & TypographyMakeStyleProps>()({
  root: (props) => [
    {
      'text-body': !props?.large,
      'text-bodyLarge': props?.large,
      'font-normal': !props?.bold,
      'font-semibold': props?.bold,
      'font-medium': props?.medium && !props?.large,
      italic: props?.italic
    },
    !props?.disableColorStyle && props?.colorClassName,
    props?.fontClassName,
    props?.alignClassName,
    props?.whitespaceClassName
  ]
});

const BodyText: React.FC<BodyTextProps> = (props: BodyTextProps) => {
  const { as = 'p', children, className } = props;

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

BodyText.displayName = 'BodyText';

BodyText.defaultProps = {
  as: 'p',
  medium: false,
  bold: false,
  large: false,
  italic: false,
  dark: false,
  enableHover: false,
  active: false,
  disabled: false,
  color: 'secondary',
  disableColorStyle: false
};

export { BodyText };
