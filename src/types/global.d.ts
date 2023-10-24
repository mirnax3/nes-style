export {};

declare global {
  type ChildrenProp = {
    children?: React.ReactNode;
  };

  type ParentClassNameProp = {
    className?: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type GenericHandler = (e?: any) => void;

  type ClickEventProp = {
    onClick?: GenericHandler;
  };

  type IntentProp = {
    intent?: 'success' | 'warning' | 'error' | 'primary';
  };

  type DefaultSizeOptions = 'SM' | 'MD' | 'LG';
  type SizeProp = {
    size?: DefaultSizeOptions;
  };
}
