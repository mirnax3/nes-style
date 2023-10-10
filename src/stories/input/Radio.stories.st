import { Meta, StoryFn } from '@storybook/react';
import { Radio as RadioComponent, RadioProps } from 'components/Radio';
import React from 'react';

export default {
  title: 'Inputs/Radio',
  component: RadioComponent
} as Meta;

const Template: StoryFn<RadioProps> = (args) => <RadioComponent {...args} />;
export const Radio = Template.bind({});

Template.args = {
  checked: false,
  label: 'Label'
};
