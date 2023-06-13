import { StoryFn } from '@storybook/react';
import { HeadingText, HeadingTextProps } from 'components/Typography/HeadingText';
import React from 'react';
import { HeadingTextArgs } from 'stories/Typography/args.st';

export default {
  title: 'Components/Typography/HeadingText',
  component: HeadingText
};
const Template: StoryFn<HeadingTextProps> = (args) => <HeadingText {...args} />;

export const Basic = Template.bind({});
Basic.args = HeadingTextArgs;
