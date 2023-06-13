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

export type SmallTextProps = ComponentProps<'p'> & TypographyProps & TypographyStyleProps;

const useStyles = makeStyles<SmallTextProps & TypographyMakeStyleProps>()({
  root: (props) => [
    'font-secondary',
    'text-smallMobile md:text-small',
    {
      'font-medium': !props?.bold && !props?.thin,
      'font-normal': props?.thin,
      'font-semibold': props?.bold,
      italic: props?.italic
    },
    !props?.disableColorStyle && props?.colorClassName,
    props?.fontClassName,
    props?.alignClassName,
    props?.whitespaceClassName
  ]
});

const SmallText: React.FC<SmallTextProps> = (props: SmallTextProps) => {
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

SmallText.defaultProps = {
  as: 'p',
  bold: false,
  italic: false,
  dark: false,
  enableHover: false,
  active: false,
  disabled: false,
  color: 'secondary',
  disableColorStyle: false
};

SmallText.displayName = 'SmallText';

export { SmallText };
