import { cva } from 'class-variance-authority';

export type IntentType = 'primary' | 'secondary' | 'neutral' | 'success' | 'danger' | 'info';
export type ModeType = 'default' | 'dark';
export type InteractionType = 'hover' | 'active' | 'disabled';
export type ProminenceType = 'default' | 'loud' | 'soft';

export type VariantStyleProps = {
  variantStyles?: string;
  backgroundStyles?: string;
  borderStyles?: string;
  disableVariantStyles?: boolean;
};

export type CompoundVariantType = {
  intent: IntentType;
  mode: ModeType;
  interaction: InteractionType;
  prominence?: ProminenceType;
  class: string[];
};

export type CompoundVariantsType = {
  compoundVariants: Array<CompoundVariantType>;
};

export const defaultVariantStyles = {
  variants: {
    intent: {
      primary: [''],
      secondary: [''],
      neutral: [''],
      success: [''],
      danger: [''],
      info: ['']
    },
    mode: {
      default: [''],
      dark: ['']
    },
    interaction: {
      hover: [''],
      active: [''],
      disabled: ['']
    },
    prominence: {
      default: [''],
      loud: [''],
      soft: ['']
    }
  }
};

type InteractionProps = { checked: boolean; disabled: boolean };

export const getInteraction = ({ checked, disabled }: InteractionProps) =>
  checked ? 'active' : disabled ? 'disabled' : 'hover';

// warning: additional parameters could break existing styles
export const defaultVariants = {
  intent: 'primary',
  mode: 'default',
  interaction: 'hover'
};

export const makeVariantStyles = (
  compoundVariantStyles: CompoundVariantsType,
  baseVariantStyles = [''],
  defaultVariantStylesParam = defaultVariantStyles,
  defaultVariantsParam = defaultVariants
) =>
  cva(baseVariantStyles, {
    ...defaultVariantStylesParam,
    ...compoundVariantStyles,
    ...defaultVariantsParam
  });
