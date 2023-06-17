import { Meta, StoryFn } from '@storybook/react';
import { Button as ButtonComponent } from 'components/Button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: ButtonComponent
} as Meta;

const Template: StoryFn<any> = (args) => <ButtonComponent {...args} />;
export const Button = Template.bind({});

Button.args = {
  children: 'button',
  success: false,
  error: false,
  disabled: false
};
