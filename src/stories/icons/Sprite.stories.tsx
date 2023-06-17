import { Meta, StoryFn } from '@storybook/react';
import { Sprite } from 'components/Sprite';
import React from 'react';

export default {
  title: 'Components/Sprite',
  component: Sprite
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <Sprite {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
