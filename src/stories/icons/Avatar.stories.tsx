import { Meta, StoryFn } from '@storybook/react';
import {Avatar as AvatarComponent, AvatarProps} from 'components/Avatar';
import React from 'react';

export default {
  title: 'Icons/Avatar',
  component: AvatarComponent
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => {
  return <AvatarComponent {...args} />;
};

export const Avatar = Template.bind({});

Avatar.args = {
  small: false,
  medium: false,
  large: true,
  rounded: true,
  src: 'https://placekitten.com/g/200/200'
};
