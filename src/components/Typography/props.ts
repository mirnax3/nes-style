import React, { ComponentProps } from 'react';

export interface TypographyOwnProps {
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'label' | 'span';
  children: string | React.ReactNode;
}

export interface TypographyFontProps {
  bold?: boolean;
  italic?: boolean;
  medium?: boolean;
  thin?: boolean;
  large?: boolean;
}

export interface TypographyAlignProps {
  align?: 'center' | 'right' | 'left';
}

export interface TypographyWhitespaceProps {
  whitespace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
}

export type EnableHoverType = true | false | 'group';

export interface TypographyColorProps {
  color?: 'tmBlue' | 'primary' | 'secondary' | 'neutral' | 'danger' | 'success' | 'info' | 'white';
  dark?: boolean;
  active?: boolean;
  disabled?: boolean;
  enableHover?: EnableHoverType;
  disableColorStyle?: boolean;
}

export type TypographyProps = TypographyOwnProps & ComponentProps<'label'>;
export type TypographyStyleProps = TypographyFontProps &
  TypographyAlignProps &
  TypographyWhitespaceProps &
  TypographyColorProps;
export type TypographyWrapperProps = Pick<TypographyProps, 'className'>;

export type TypographyMakeStyleProps = {
  whitespaceClassName?: string;
  fontClassName?: string;
  alignClassName?: string;
  colorClassName?: string;
};
