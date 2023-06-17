import { Meta, StoryFn } from '@storybook/react';
import { ControllerIcon } from 'components/ControllerIcon';
import React from 'react';

export default {
  title: 'Components/ControllerIcon',
  component: ControllerIcon
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <ControllerIcon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
