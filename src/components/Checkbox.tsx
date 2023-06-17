import classNames from 'clsx';
import * as React from 'react';

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  onSelect?: () => void;
} & ParentClassNameProp;

export const Checkbox: React.FC<CheckboxProps> = React.memo(
  ({ label, onSelect, checked, className, ...other }: CheckboxProps) => (
    <div>
      <label className="nes-checkbox-parent">
        <input
          type="checkbox"
          className={classNames(className, 'nes-checkbox')}
          checked={checked}
          onChange={onSelect}
          {...other}
        />
        <span>{label}</span>
      </label>
    </div>
  )
);
Checkbox.displayName = 'NesCheckbox';
