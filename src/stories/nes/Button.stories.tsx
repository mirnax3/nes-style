import { Meta, Story } from '@storybook/react';
import { Button } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Button',
  component: Button
} as Meta;

const Template: Story<any> = (args) => {
  return <Button {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  children: 'button',
  success: false,
  error: false,
  disabled: false
};
