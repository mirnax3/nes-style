import { Meta, StoryFn } from '@storybook/react';
import { Checkbox as CheckboxComponent } from 'components/Checkbox';
import React from 'react';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent
} as Meta;

const Template: StoryFn<any> = (args) => <CheckboxComponent {...args} />;

export const Checkbox = Template.bind({
  checked: false,
  label: 'Label'
});
