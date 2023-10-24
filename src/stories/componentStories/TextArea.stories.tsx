import { Meta, StoryFn } from '@storybook/react';
import { TextArea as TextAreaComponent } from 'components/TextArea';
import { TextInputProps as TextAreaProps } from 'components/TextInput';
import React from 'react';

export default {
  title: 'Inputs/TextArea',
  component: TextAreaComponent
} as Meta;

const Template: StoryFn<TextAreaProps> = (args) => <TextAreaComponent {...args} />;
export const TextArea = Template.bind({});

TextArea.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  intent: 'primary',
  inline: false
};
