import { Meta, Story } from '@storybook/react';
import { Avatar } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/Avatar',
  component: Avatar
} as Meta;

const Template: Story<any> = (args) => {
  return <Avatar {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  className: 'nes-icon'
};
