import classNames from 'clsx';
import * as React from 'react';

export type ButtonProps = {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Button: React.FC<ButtonProps> = React.memo(
  ({ children, className, primary, success, warning, error, disabled, ...other }: ButtonProps) => (
    <button
      className={classNames(className, 'nes-btn', {
        'is-primary': primary,
        'is-success': success,
        'is-warning': warning,
        'is-error': error,
        'is-disabled': disabled
      })}
      {...other}>
      {children}
    </button>
  )
);
Button.displayName = 'NesButton';
