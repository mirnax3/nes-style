import { Meta, StoryFn } from '@storybook/react';
import { NesIcon } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/NesIcon',
  component: NesIcon
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <NesIcon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
