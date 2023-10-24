import classNames from 'clsx';
import { makeIntentStyles } from 'lib/makeIntentStyles';
import * as React from 'react';

export type TextInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: GenericHandler;
  inline?: boolean;
} & ParentClassNameProp &
  IntentProp;

export const TextInput: React.FC<TextInputProps & React.HTMLProps<HTMLInputElement>> = React.memo(
  ({
    label,
    placeholder,
    intent,
    value,
    onChange,
    inline,
    className,
    ...other
  }: TextInputProps) => (
    <div className={classNames('nes-field', { 'is-inline': inline })}>
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(className, 'nes-input', makeIntentStyles({ intent }))}
        {...other}
      />
    </div>
  )
);

TextInput.defaultProps = {
  intent: 'primary',
  placeholder: 'Start typing'
};

TextInput.displayName = 'NesTextInput';
