import { ElementType, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import Flex from '../Flex';
import styles from './Container.module.scss';

export type ContainerProps<T extends ElementType, F extends ElementType> = {
  innerProps?: Omit<ComponentPropsWithoutRef<F>, 'children'> & { as?: F };
  fluid?: boolean;
  as?: T;
} & ComponentPropsWithoutRef<T>;

function Container<
  T extends ElementType = 'div',
  F extends ElementType = 'div',
>({ innerProps, children, fluid, as, ...props }: ContainerProps<T, F>) {
  const InnerElement = innerProps?.as ?? 'div';
  return (
    <Flex
      {...props}
      className={cn(props.className, styles.container, fluid && styles.fluid)}
      as={(as ?? 'div') as ElementType}
      direction="column"
      align="center"
    >
      <InnerElement
        {...innerProps}
        className={cn(innerProps?.className, styles.content)}
      >
        {children}
      </InnerElement>
    </Flex>
  );
}

export default Container;
