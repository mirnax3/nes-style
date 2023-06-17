import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from 'components/Avatar';
import React from 'react';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <Avatar {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  className: 'nes-icon'
};
