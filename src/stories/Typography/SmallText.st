import { StoryFn } from '@storybook/react';
import { SmallText, SmallTextProps } from 'components/Typography/SmallText';
import React from 'react';
import { SmallTextArgs } from 'stories/Typography/args.st';

export default {
  title: 'Components/Typography/SmallText',
  component: SmallText
};

const Template: StoryFn<SmallTextProps> = (args) => <SmallText {...args} />;

export const Basic = Template.bind({});
Basic.args = SmallTextArgs;
