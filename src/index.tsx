import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { Avatar } from 'components/Avatar';
export { Balloon } from 'components/Balloon';
export { Button } from 'components/Button';
export { Checkbox } from 'components/Checkbox';
export { Container } from 'components/Container';
export { ControllerIcon } from 'components/ControllerIcon';
export { List } from 'components/List';
export { NesIcon } from 'components/NesIcon';
export { Progress } from 'components/Progress';
// export * from 'components/Radios';
export { Sprite } from 'components/Sprite';
export { Table } from 'components/Table';
export { TextArea } from 'components/TextArea';
export { TextInput } from 'components/TextInput';

export type { AvatarProps } from 'components/Avatar';
export type { BalloonProps } from 'components/Balloon';
export type { ButtonProps } from 'components/Button';
export type { CheckboxProps } from 'components/Checkbox';
export type { ContainerProps } from 'components/Container';
export type { ControllerIconProps } from 'components/ControllerIcon';
export type { ListProps } from 'components/List';
export type { NesIconProps } from 'components/NesIcon';
export type { ProgressProps } from 'components/Progress';
