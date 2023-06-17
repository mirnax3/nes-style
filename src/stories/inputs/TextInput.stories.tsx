import { Meta, StoryFn } from '@storybook/react';
import { TextInput as TextInputComponent } from 'components/TextInput';
import React from 'react';

export default {
  title: 'Inputs/TextInput',
  component: TextInputComponent
} as Meta;

const Template: StoryFn<any> = (args) => <TextInputComponent {...args} />;
export const TextInput = Template.bind({});

TextInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  success: false,
  warning: false,
  error: false,
  labelInline: false
};
