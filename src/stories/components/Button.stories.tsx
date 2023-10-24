import { Meta, StoryFn } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from 'components/Button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: ButtonComponent
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <ButtonComponent {...args} />;
export const Button = Template.bind({});

Button.args = {
  children: 'button',
  intent: 'primary',
  disabled: false
};
