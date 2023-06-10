import { EnableHoverType } from 'components/Typography/props';
import { makeVariantStyles } from 'lib/makeStyles';

export type TypographyCustomIntent = 'white' | 'tmBlue';

export const getHoverPrefix = (enableHover: EnableHoverType) =>
  enableHover === 'group' ? 'group-hover' : 'hover';

export const useTypographyVariantStyles = (enableHover: EnableHoverType) =>
  makeVariantStyles({
    compoundVariants: [
      {
        intent: 'white',
        class: ['text-white'],
        mode: 'default',
        interaction: 'hover'
      },
      {
        intent: 'tmBlue',
        class: ['text-tmBlue'],
        mode: 'default',
        interaction: 'hover'
      },
      {
        intent: 'primary',
        mode: 'default',
        interaction: 'hover',
        class: [
          'text-primaryText',
          enableHover ? `${getHoverPrefix(enableHover)}:text-primaryTextHover` : ''
        ]
      },
      {
        intent: 'primary',
        mode: 'default',
        interaction: 'active',
        class: ['text-primaryTextActive']
      },
      {
        intent: 'primary',
        mode: 'default',
        interaction: 'disabled',
        class: ['text-primaryTextDisabled']
      },
      {
        intent: 'primary',
        mode: 'dark',
        interaction: 'hover',
        class: [
          'text-primaryTextDark',
          enableHover ? `${getHoverPrefix(enableHover)}:text-primaryTextDarkHover` : ''
        ]
      },
      {
        intent: 'primary',
        mode: 'dark',
        interaction: 'active',
        class: ['text-primaryTextDarkActive']
      },
      {
        intent: 'primary',
        mode: 'dark',
        interaction: 'disabled',
        class: ['text-primaryTextDarkDisabled']
      },
      {
        intent: 'secondary',
        mode: 'default',
        interaction: 'hover',
        class: [
          'text-secondaryText',
          enableHover ? `${getHoverPrefix(enableHover)}:text-secondaryTextHover` : ''
        ]
      },
      {
        intent: 'secondary',
        mode: 'default',
        interaction: 'active',
        class: ['text-secondaryTextActive']
      },
      {
        intent: 'secondary',
        mode: 'default',
        interaction: 'disabled',
        class: ['text-secondaryTextDisabled']
      },
      {
        intent: 'secondary',
        mode: 'dark',
        interaction: 'hover',
        class: [
          'text-secondaryTextDark',
          enableHover ? `${getHoverPrefix(enableHover)}:text-secondaryTextDarkHover` : ''
        ]
      },
      {
        intent: 'secondary',
        mode: 'dark',
        interaction: 'active',
        class: ['text-secondaryTextDarkActive']
      },
      {
        intent: 'secondary',
        mode: 'dark',
        interaction: 'disabled',
        class: ['text-secondaryTextDarkDisabled']
      },
      {
        intent: 'neutral',
        mode: 'default',
        interaction: 'hover',
        class: ['text-neutralText']
      },
      {
        intent: 'neutral',
        mode: 'dark',
        interaction: 'hover',
        class: ['text-neutralTextDark']
      },
      {
        intent: 'success',
        mode: 'default',
        interaction: 'hover',
        class: [
          'text-successText',
          enableHover ? `${getHoverPrefix(enableHover)}:text-successTextHover` : ''
        ]
      },
      {
        intent: 'danger',
        mode: 'default',
        interaction: 'hover',
        class: [
          'text-dangerText',
          enableHover ? `${getHoverPrefix(enableHover)}:text-dangerTextHover` : ''
        ]
      },
      {
        intent: 'info',
        mode: 'default',
        interaction: 'hover',
        class: [
          'text-infoText',
          enableHover ? `${getHoverPrefix(enableHover)}:text-infoTextHover` : ''
        ]
      }
    ]
  });
