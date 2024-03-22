import { CSSProperties } from 'react';
import cn from 'classnames';
import forwardRefAs from 'forward-ref-as';
import { Spacing } from '@/styles';
import styles from './Flex.module.scss';

export type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: Spacing;
  inline?: boolean;
  wrap?: boolean;
};

const Flex = forwardRefAs<'div', FlexProps>(
  ({ direction, justify, align, gap, inline, wrap, as, ...props }, ref) => {
    const Component = as ?? 'div';
    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          inline ? styles['flex-inline'] : styles.flex,
          direction && styles[`direction--${direction}`],
          justify && styles[`justify--${justify}`],
          align && styles[`align--${align}`],
          gap && styles[`gap--${gap}`],
          wrap && styles.wrap,
          props.className,
        )}
      />
    );
  },
);

export default Flex;
