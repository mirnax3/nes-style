import { Meta, StoryFn } from '@storybook/react';
import {Balloon as BalloonComponent, BalloonProps} from 'components/Balloon';
import React from 'react';

export default {
  title: 'Components/Balloon',
  component: BalloonComponent
} as Meta;

const Template: StoryFn<BalloonProps> = (args) => (
  <BalloonComponent {...args}>{args?.children}</BalloonComponent>
);

export const Balloon = Template.bind({});

Balloon.args = {
  children: 'hi',
  fromLeft: false,
  fromRight: true
};
