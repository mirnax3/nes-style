import { Meta, StoryFn } from '@storybook/react';
import { HeadingText, HeadingTextProps } from 'components/Typography/HeadingText';
import React from 'react';
import { HeadingTextArgs } from 'stories/Typography/args';

export default {
  title: 'Theme/Typography/HeadingText',
  component: HeadingText
} as Meta;

const Template: StoryFn<HeadingTextProps> = (args) => <HeadingText {...args} />;

export const Basic = Template.bind({});
Basic.args = HeadingTextArgs;
