export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type ParentClassNameProp = {
    className?: string;
  };

  // React 18 requires children to be specified
  type ChildrenProp = {
    children?: React.ReactNode;
  };

  type GenericEvent = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e?: any;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type GenericHandler = (e?: any) => void;

  type ClickEventProp = {
    onClick?: GenericHandler;
  };

  type NesStyleProp = {
    enableNes?: boolean;
  };
}
