import { ElementType, ComponentProps } from 'react';
import cn from 'classnames';
import Flex from '../Flex';
import styles from './Container.module.scss';

export type ContainerProps<T extends ElementType, F extends ElementType> = {
  innerProps?: Omit<ComponentProps<F> & { as?: F }, 'children'>;
  fluid?: boolean;
  as?: T;
} & ComponentProps<T>;

function Container<
  T extends ElementType = 'div',
  F extends ElementType = 'div',
>({ innerProps, children, fluid, as, ...props }: ContainerProps<T, F>) {
  const InnerElement = innerProps?.as ?? 'div';
  return (
    <Flex
      {...props}
      className={cn(props.className, styles.container, fluid && styles.fluid)}
      direction="column"
      align="center"
      as={as ?? 'div'}
    >
      <InnerElement
        {...innerProps}
        className={cn(innerProps?.className, styles.content)}
        as={undefined}
      >
        {children}
      </InnerElement>
    </Flex>
  );
}

export default Container;
