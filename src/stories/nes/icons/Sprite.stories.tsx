import { Meta, Story } from '@storybook/react';
import { Sprite } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Sprite',
  component: Sprite
} as Meta;

const Template: Story<any> = (args) => {
  return <Sprite {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
