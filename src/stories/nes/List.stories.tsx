import { Meta, Story } from '@storybook/react';
import { List } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/List',
  component: List
} as Meta;

const Template: Story<any> = (args) => {
  return <List {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
