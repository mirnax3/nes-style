import { Meta, Story } from '@storybook/react';
import { TextInput } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Input/TextInput',
  component: TextInput
} as Meta;

const Template: Story<any> = (args) => {
  return <TextInput {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {};
