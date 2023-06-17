import { Meta, StoryFn } from '@storybook/react';
import { Progress as ProgressComponent } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Progress',
  component: ProgressComponent
} as Meta;

const Template: StoryFn<any> = (args) => <ProgressComponent {...args} />;
export const Progress = Template.bind({});

Progress.args = {
  value: 20,
  max: 100,
  primary: false,
  success: false,
  warning: false,
  error: false
};
