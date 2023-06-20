import { Meta, StoryFn } from '@storybook/react';
import {ControllerIcon as ControllerIconComponent, ControllerIconProps} from 'components/ControllerIcon';
import React from 'react';

export default {
  title: 'Icons/ControllerIcon',
  component: ControllerIconComponent
} as Meta;

const Template: StoryFn<ControllerIconProps> = (args) => <ControllerIconComponent {...args} />;
export const ControllerIcon = Template.bind({});

ControllerIcon.args = {
  controller: 'snes'
};
