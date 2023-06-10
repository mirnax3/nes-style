import { Meta, StoryFn } from '@storybook/react';
import { MetaText, MetaTextProps } from 'components/Typography/MetaText';
import React from 'react';
import { MetaTextArgs } from 'stories/Typography/args';

export default {
  title: 'Theme/Typography/MetaText',
  component: MetaText
} as Meta;

const Template: StoryFn<MetaTextProps> = (args) => <MetaText {...args} />;

export const Basic = Template.bind({});
Basic.args = MetaTextArgs;
