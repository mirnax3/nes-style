import { makeStyles } from 'lib/makeStyles';
import React, { memo } from 'react';

type Props = {
  defaultPadding?: boolean;
  borderless?: boolean;
  checked?: boolean;
  disabled?: boolean;
  enableGroupStyle?: boolean;
  fullWidth?: boolean;
  hasSelectedSticky?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

const useStyles = makeStyles<Props>()({
  root: (props) => [
    'cursor-pointer',
    'rounded',
    {
      'border-b border-neutralBorder': !props?.borderless,
      'hover:bg-primaryBackgroundHover': !props?.checked && !props?.disabled,
      'bg-primaryBackgroundActive': props?.checked,
      'bg-primaryBackgroundDisabled': props?.disabled,
      'sticky top-[-4px] z-10': props?.hasSelectedSticky && props?.checked
    },
    'group' && props?.enableGroupStyle,
    'w-full' && props?.fullWidth,
    props?.className
  ]
});

export const PanelSelectItem: React.FC<Props> = memo((props) => {
  const { children } = props;
  const styles = useStyles(props);

  return <div className={styles.root}>{children}</div>;
});

PanelSelectItem.defaultProps = {
  hasSelectedSticky: false,
  defaultPadding: true,
  borderless: false,
  checked: false,
  disabled: false,
  enableGroupStyle: false,
  fullWidth: false
};

PanelSelectItem.displayName = 'PanelSelectItem';
