import { Meta, StoryFn } from '@storybook/react';
import { NesIcon as NesIconComponent, NesIconProps } from 'components/NesIcon';
import React from 'react';

export default {
  title: 'Icons/NesIcon',
  component: NesIconComponent
} as Meta;

const Template: StoryFn<NesIconProps> = (args) => <NesIconComponent {...args} />;
export const NesIcon = Template.bind({});

NesIcon.args = {
  type: 'trophy',
  size: 'MD',
  isEmpty: false,
  isTransparent: false,
  isHalf: false
};
