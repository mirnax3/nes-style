import classNames from 'clsx';
import * as React from 'react';

export type TextInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  labelInline?: boolean;
} & ParentClassNameProp;

export const TextInput: React.FC<TextInputProps & React.HTMLProps<HTMLInputElement>> = React.memo(
  ({
    label,
    placeholder,
    success,
    warning,
    error,
    value,
    onChange,
    labelInline,
    className,
    ...other
  }: TextInputProps) => (
    <div className={classNames('nes-field', { 'is-inline': labelInline })}>
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(className, 'nes-input', {
          'is-success': success,
          'is-warning': warning,
          'is-error': error
        })}
        {...other}
      />
    </div>
  )
);

TextInput.displayName = 'NesTextInput';
