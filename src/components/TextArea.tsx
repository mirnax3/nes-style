import classNames from 'clsx';
import { makeIntentStyles } from 'lib/makeIntentStyles';
import * as React from 'react';

import { TextInputProps as TextAreaProps } from './TextInput';

export const TextArea: React.FC<TextAreaProps> = React.memo(
  ({ label, value, onChange, intent, placeholder, inline, ...other }: TextAreaProps) => (
    <div className={classNames('nes-field', { 'is-inline': inline })}>
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        className={classNames('nes-textarea', makeIntentStyles({ intent }))}
        placeholder={placeholder}
        {...other}
      />
    </div>
  )
);

TextArea.defaultProps = {
  intent: 'primary',
  placeholder: 'Start typing'
};

TextArea.displayName = 'NesTextArea';
