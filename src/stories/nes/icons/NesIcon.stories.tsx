import { Meta, Story } from '@storybook/react';
import { NesIcon } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/NesIcon',
  component: NesIcon
} as Meta;

const Template: Story<any> = (args) => {
  return <NesIcon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
