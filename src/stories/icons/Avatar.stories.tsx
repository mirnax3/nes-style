import { Meta, StoryFn } from '@storybook/react';
import { Avatar as AvatarComponent } from 'components/Avatar';
import React from 'react';

export default {
  title: 'Icons/Avatar',
  component: AvatarComponent
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <AvatarComponent {...args} />;
};

export const Avatar = Template.bind({});

Avatar.args = {
  className: 'nes-icon'
};
