import { Meta, StoryFn } from '@storybook/react';
import { Progress as ProgressComponent, ProgressProps } from 'components/Progress';
import React from 'react';

export default {
  title: 'Components/Progress',
  component: ProgressComponent
} as Meta;

const Template: StoryFn<ProgressProps> = (args) => <ProgressComponent {...args} />;
export const Progress = Template.bind({});

Progress.args = {
  value: 20,
  max: 100,
  primary: false,
  success: false,
  warning: false,
  error: false
};
