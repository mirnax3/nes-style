import { Meta, StoryFn } from '@storybook/react';
import { Table as TableComponent, TableProps } from 'components/Table';
import React from 'react';

export default {
  title: 'Components/Table',
  component: TableComponent
} as Meta;

const Template: StoryFn<TableProps> = (args) => <TableComponent {...args} />;
export const Table = Template.bind({});

Table.args = {
  hasBorder: false,
  center: false,
  dark: false,
  children: (
    <table>
      <tr>
        <th className="p-2">col 1</th>
        <th className="p-2">col 2</th>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
      </tr>
    </table>
  )
};
