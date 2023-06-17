import { Meta, StoryFn } from '@storybook/react';
import { List as ListComponent } from 'components/nes';
import React from 'react';

export default {
  title: 'Components/List',
  component: ListComponent
} as Meta;

const Template: StoryFn<any> = (args) => <ListComponent {...args} />;
export const List = Template.bind({});

List.args = {
  solid: true,
  children: (
    <div>
      <ul>
        <li>hi</li>
        <li>bye</li>
      </ul>
    </div>
  )
};
