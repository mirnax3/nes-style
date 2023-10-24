import classNames from 'clsx';
import * as React from 'react';

export type ContainerProps = {
  title?: string;
  dark?: boolean;
  rounded?: boolean;
  center?: boolean;
} & ChildrenProp &
  ParentClassNameProp;

export const Container: React.FC<ContainerProps> = React.memo(
  ({ children, className, dark, rounded, center, title, ...other }: ContainerProps) => (
    <section
      className={classNames(className, 'nes-container', {
        'with-title': title,
        'is-dark': dark,
        'is-rounded': rounded,
        'is-centered': center
      })}
      {...other}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  )
);
Container.displayName = 'NesContainer';
