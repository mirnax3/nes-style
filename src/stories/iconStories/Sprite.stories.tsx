import { Meta, StoryFn } from '@storybook/react';
import { Sprite as SpriteComponent, SpriteProps } from 'components/Sprite';
import React from 'react';

export default {
  title: 'Icons/Sprite',
  component: SpriteComponent
} as Meta;

const Template: StoryFn<SpriteProps> = (args) => <SpriteComponent {...args} />;
export const Sprite = Template.bind({});

Sprite.args = {
  type: 'pokeball'
};
