import { Meta, StoryFn } from '@storybook/react';
import { BodyText, BodyTextProps } from 'components/Typography/BodyText';
import React from 'react';
import { BodyTextArgs } from 'stories/Typography/args';

export default {
  title: 'Theme/Typography/BodyText',
  component: BodyText
} as Meta;

const Template: StoryFn<BodyTextProps> = (args) => <BodyText {...args} />;

export const Basic = Template.bind({});
Basic.args = BodyTextArgs;
