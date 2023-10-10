export {};

declare global {
  type ChildrenProp = {
    children?: React.ReactNode;
  };

  type ParentClassNameProp = {
    className?: string;
  };
}
