import { StoryFn } from '@storybook/react';
import { BodyText, BodyTextProps } from 'components/Typography/BodyText';
import React from 'react';
import { BodyTextArgs } from 'stories/Typography/args.st';

export default {
  title: 'Components/Typography/BodyText',
  component: BodyText
};

const Template: StoryFn<BodyTextProps> = (args) => <BodyText {...args} />;

export const Basic = Template.bind({});
Basic.args = BodyTextArgs;
