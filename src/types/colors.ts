export type ColorInteractionType = { interaction: 'default' | 'hover' | 'active' | 'disabled' };
export type ColorProminenceType = { prominence: 'default' | 'strong' | 'weak' };
export type ColorUsageType = { usage: 'background' | 'border' | 'icon' | 'text' };
export type ColorModeType = { mode: 'default' | 'dark' };

export type ColorSentimentType = {
  sentiment: 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'danger';
};

export type ColorPalettesItemType = {
  color: string;
  hex: string;
} & ColorInteractionType &
  ColorProminenceType &
  ColorSentimentType &
  ColorUsageType &
  ColorModeType;

export type ColorPalettesType = ColorPalettesItemType[];
