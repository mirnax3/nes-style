import classNames from 'clsx';
import * as React from 'react';

export type RadioProps = {
  checked?: boolean;
  label?: string;
  value?: any;
  onClick: GenericHandler;
} & ParentClassNameProp;

export const Radio: React.FC<RadioProps> = React.memo(
  ({ className, label, ...other }: RadioProps) => (
    <div>
      <label className="nes-radio-group">
        <input type="radio" className={classNames(className, 'nes-radio')} {...other} />
        <span className="nes-text">{label}</span>
      </label>
    </div>
  )
);

Radio.displayName = 'NesRadio';
