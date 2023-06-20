import { Meta, StoryFn } from '@storybook/react';
import { List as ListComponent } from 'components/List';
import React from 'react';

export default {
  title: 'Components/List',
  component: ListComponent
} as Meta;

const Template: StoryFn<any> = (args) => (
  <div className="px-4">
    <ListComponent {...args} />
  </div>
);
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
