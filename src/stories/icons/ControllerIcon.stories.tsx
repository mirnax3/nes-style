import { Meta, StoryFn } from '@storybook/react';
import { ControllerIcon as ControllerIconComponent } from 'components/ControllerIcon';
import React from 'react';

export default {
  title: 'Icons/ControllerIcon',
  component: ControllerIconComponent
} as Meta;

const Template: StoryFn<any> = (args) => <ControllerIconComponent {...args} />;
export const ControllerIcon = Template.bind({});

ControllerIcon.args = {
  children: 'hi'
};
