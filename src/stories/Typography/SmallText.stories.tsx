import { Meta, StoryFn } from '@storybook/react';
import { SmallText, SmallTextProps } from 'components/Typography/SmallText';
import React from 'react';
import { SmallTextArgs } from 'stories/Typography/args';

export default {
  title: 'Theme/Typography/SmallText',
  component: SmallText
} as Meta;

const Template: StoryFn<SmallTextProps> = (args) => <SmallText {...args} />;

export const Basic = Template.bind({});
Basic.args = SmallTextArgs;
