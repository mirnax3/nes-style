import { Meta, Story } from '@storybook/react';
import { Progress } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Progress',
  component: Progress
} as Meta;

const Template: Story<any> = (args) => {
  return <Progress {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
