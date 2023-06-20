import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export * from 'components/Avatar';
export * from 'components/Balloon';
export * from 'components/Button';
export * from 'components/Checkbox';
export * from 'components/Container';
export * from 'components/ControllerIcon';
export * from 'components/NesIcon';
export * from 'components/List';
export * from 'components/Progress';
// export * from 'components/Radios';
export * from 'components/Sprite';
export * from 'components/Table';
export * from 'components/TextArea';
export * from 'components/TextInput';
