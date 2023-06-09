import { StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';
import React from 'react';

export default {
  title: 'Components/Button/Button',
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic',
  onClick: () => null,
} as ButtonProps;
