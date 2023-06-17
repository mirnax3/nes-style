import { Meta, Story } from '@storybook/react';
import { TextArea } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Input/TextArea',
  component: TextArea
} as Meta;

const Template: Story<any> = (args) => {
  return <TextArea {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
