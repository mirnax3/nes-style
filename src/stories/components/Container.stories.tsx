import { Meta, StoryFn } from '@storybook/react';
import { Container as ContainerComponent, ContainerProps } from 'components/Container';
import React from 'react';

export default {
  title: 'Components/Container',
  component: ContainerComponent
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => <ContainerComponent {...args} />;
export const Container = Template.bind({});

Container.args = {
  title: 'balloon',
  dark: false,
  rounded: false,
  centered: false,
  children: 'hi'
};
