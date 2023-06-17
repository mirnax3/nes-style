import { BodyTextProps } from 'components/Typography/BodyText';
import { HeadingTextProps } from 'components/Typography/HeadingText';
import { MetaTextProps } from 'components/Typography/MetaText';
import { SmallTextProps } from 'components/Typography/SmallText';

export const HeadingTextArgs = {
  as: 'h1',
  size: 'XL',
  enableHover: false,
  active: false,
  color: 'primary',
  disableColorStyle: false,
  children: 'Heading text'
} as HeadingTextProps;

export const BodyTextArgs = {
  as: 'p',
  medium: false,
  bold: false,
  large: false,
  italic: false,
  enableHover: false,
  active: false,
  color: 'secondary',
  disableColorStyle: false,
  children: 'Body text'
} as BodyTextProps;

export const MetaTextArgs = {
  as: 'h6',
  thin: false,
  bold: false,
  italic: false,
  enableHover: false,
  active: false,
  color: 'primary',
  disableColorStyle: false,
  children: 'Meta text'
} as MetaTextProps;

export const SmallTextArgs = {
  as: 'p',
  bold: false,
  italic: false,
  enableHover: false,
  active: false,
  color: 'secondary',
  disableColorStyle: false,
  children: 'Small text'
} as SmallTextProps;
