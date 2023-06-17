import { Meta, Story } from '@storybook/react';
import { Balloon } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Balloon',
  component: Balloon
} as Meta;

const Template: Story<any> = (args) => {
  return <Balloon {...args}>{args?.children}</Balloon>;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi',
  className: 'from-left'
};
