import { makeStyles } from 'lib/makeStyles';
import React, { ForwardedRef, forwardRef, useRef } from 'react';

type Props = {
  defaultPadding?: boolean;
  type?: 'popover' | 'card' | 'screen';
  fullWidth?: boolean;
  fullHeight?: boolean;
  disableBorder?: boolean;
  disableBackground?: boolean;
  rounded?: boolean;
  ref?: ForwardedRef<HTMLDivElement | HTMLFormElement>;
} & ParentClassNameProp &
  ChildrenProp;

const useStyles = makeStyles<Props>()({
  panel: (props) => [
    {
      'bg-primaryBackground': !props?.disableBackground,
      'rounded-md': props?.rounded,
      'border border-primaryBorder': props?.type !== 'screen' && !props?.disableBorder,
      'p-2': props?.defaultPadding,
      'shadow-md': props?.type === 'popover',
      'shadow-sm': props?.type === 'card',
      'w-full': props?.fullWidth,
      'h-full': props?.fullHeight
    },
    props?.className
  ]
});

const PanelBasic: React.FC<Props> = forwardRef<HTMLDivElement | HTMLFormElement, Props>(
  ({ children, ...props }, ref) => {
    const customRef = useRef(null);
    const styles = useStyles(props);

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <div ref={ref ?? customRef} className={styles.panel}>
        {children}
      </div>
    );
  }
);

PanelBasic.defaultProps = {
  defaultPadding: true,
  type: 'popover',
  fullWidth: false,
  fullHeight: false,
  disableBorder: false,
  disableBackground: false,
  rounded: true
};

PanelBasic.displayName = 'PanelBasic';

export { PanelBasic };
