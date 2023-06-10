import { StoryFn } from '@storybook/react';
import { MetaText, MetaTextProps } from 'components/Typography/MetaText';
import React from 'react';
import { MetaTextArgs } from 'stories/Typography/args';

export default {
  title: 'Components/Typography/MetaText',
  component: MetaText
};

const Template: StoryFn<MetaTextProps> = (args) => <MetaText {...args} />;

export const Basic = Template.bind({});
Basic.args = MetaTextArgs;
