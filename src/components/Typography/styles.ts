import { useTypographyVariantStyles } from 'components/Typography/typographyVariantStyles';
import { getInteraction, makeStyles } from 'lib/makeStyles';

import {
  TypographyAlignProps,
  TypographyColorProps,
  TypographyWhitespaceProps,
  TypographyWrapperProps
} from './index';

export const useTypographyColorStyles = ({
  color,
  dark,
  enableHover = false,
  active = false,
  disabled = false
}: TypographyColorProps) => {
  const typographyVariantStyles = useTypographyVariantStyles(enableHover)({
    intent: color,
    mode: dark ? 'dark' : 'default',
    interaction: getInteraction({ checked: active, disabled })
  });

  return makeStyles<TypographyColorProps>()({
    color: [typographyVariantStyles]
  })();
};

export const useWrapperStyles = makeStyles<TypographyWrapperProps>()({
  wrapper: ({ className }: TypographyWrapperProps) => [
    {
      block:
        !className?.includes('block') &&
        !className?.includes('inline') &&
        !className?.includes('hidden')
    },
    'whitespace-pre-line',
    className
  ]
});

export const useTypographyAlignStyles = makeStyles<TypographyAlignProps>()({
  align: ({ align }: TypographyAlignProps) => [align && `text-${align}`]
});

export const useTypographyWhitespaceStyles = makeStyles<TypographyWhitespaceProps>()({
  whitespace: ({ whitespace }: TypographyWhitespaceProps) => [
    whitespace && `whitespace-${whitespace}`
  ]
});
