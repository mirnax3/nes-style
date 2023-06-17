import { Meta, Story } from '@storybook/react';
import { ControllerIcon } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/Nes/ControllerIcon',
  component: ControllerIcon
} as Meta;

const Template: Story<any> = (args) => {
  return <ControllerIcon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'hi'
};
