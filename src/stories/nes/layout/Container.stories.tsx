import { Meta, Story } from '@storybook/react';
import { Container } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Container',
  component: Container
} as Meta;

const Template: Story<any> = (args) => {
  return <Container {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  className: '',
  children: 'hi'
};
