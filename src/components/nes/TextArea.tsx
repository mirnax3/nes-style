import classNames from 'clsx';
import * as React from 'react';

export type TextAreaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  labelInline?: boolean;
} & ParentClassNameProp;

export const TextArea: React.FC<TextAreaProps> = React.memo(
  ({
    label,
    value,
    onChange,
    success,
    warning,
    error,
    placeholder,
    labelInline,
    ...other
  }: TextAreaProps) => (
    <div className={classNames('nes-field', { 'is-inline': labelInline })}>
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        className={classNames('nes-textarea', {
          'is-success': success,
          'is-warning': warning,
          'is-error': error
        })}
        placeholder={placeholder}
        {...other}
      />
    </div>
  )
);

TextArea.displayName = 'NesTextArea';
