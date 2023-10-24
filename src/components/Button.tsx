import classNames from 'clsx';
import * as React from 'react';

export type ButtonProps = {
  disabled?: boolean;
} & ChildrenProp &
  ParentClassNameProp &
  IntentProp;

export const Button: React.FC<ButtonProps> = React.memo(
  ({ children, className, intent, disabled, ...props }: ButtonProps) => (
    <button
      className={classNames(className, 'nes-btn', {
        'is-primary': intent === 'primary',
        'is-success': intent === 'success',
        'is-warning': intent === 'warning',
        'is-error': intent === 'error',
        'is-disabled': disabled
      })}
      {...props}>
      {children}
    </button>
  )
);

Button.displayName = 'NesButton';
