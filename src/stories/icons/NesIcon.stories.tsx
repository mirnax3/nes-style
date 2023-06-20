import { Meta, StoryFn } from '@storybook/react';
import { NesIcon as NesIconComponent } from 'components/NesIcon';
import React from 'react';

export default {
  title: 'Icons/NesIcon',
  component: NesIconComponent
} as Meta;

const Template: StoryFn<any> = (args) => <NesIconComponent {...args} />;
export const NesIcon = Template.bind({});

NesIcon.args = {
  type: 'trophy',
  small: false,
  medium: false,
  large: false,
  empty: false,
  transparent: false,
  half: false
};
