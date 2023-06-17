import { Meta, Story } from '@storybook/react';
import { Checkbox } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Input/Checkbox',
  component: Checkbox
} as Meta;

const Template: Story<any> = (args) => {
  return <Checkbox {...args} />;
};

export const Basic = Template.bind({});
