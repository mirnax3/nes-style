import { Meta, Story } from '@storybook/react';
import { Radios } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Input/Radios',
  component: Radios
} as Meta;

const Template: Story<any> = (args) => {
  return <Radios {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: ['hi']
};
