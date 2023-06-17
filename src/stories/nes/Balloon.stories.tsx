import { Meta, StoryFn } from '@storybook/react';
import { Balloon as BalloonComponent } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Balloon',
  component: BalloonComponent
} as Meta;

const Template: StoryFn<any> = (args) => (
  <BalloonComponent {...args}>{args?.children}</BalloonComponent>
);

export const Balloon = Template.bind({});

Balloon.args = {
  children: 'hi',
  fromLeft: false,
  fromRight: true
};
