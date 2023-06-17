import { Meta, StoryFn } from '@storybook/react';
import { TextArea as TextAreaComponent } from 'components/TextArea';
import React from 'react';

export default {
  title: 'Inputs/TextArea',
  component: TextAreaComponent
} as Meta;

const Template: StoryFn<any> = (args) => <TextAreaComponent {...args} />;
export const TextArea = Template.bind({});

TextArea.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  success: false,
  warning: false,
  error: false,
  labelInline: false
};