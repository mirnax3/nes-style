import { Meta, StoryFn } from '@storybook/react';
import {TextInput as TextInputComponent, TextInputProps} from 'components/TextInput';
import React from 'react';

export default {
  title: 'Inputs/TextInput',
  component: TextInputComponent
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInputComponent {...args} />;
export const TextInput = Template.bind({});

TextInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  success: false,
  warning: false,
  error: false,
  labelInline: false
};
