import classNames from 'clsx';
import * as React from 'react';

export type RadiosProps = {
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  onValueChange: (value: string) => void;
} & ParentClassNameProp;

export const Radios: React.FC<RadiosProps> = React.memo(
  ({ className, options, selectedValue, onValueChange, ...other }: RadiosProps) => (
    <div>
      {options.map((option, index) => (
        <label key={index} className="nes-radio-group">
          <input
            type="radio"
            className={classNames(className, 'nes-radio')}
            value={option.value}
            checked={option.value === selectedValue}
            onClick={() => onValueChange(option.value)}
            {...other}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
);
Radios.displayName = 'NesRadios';
