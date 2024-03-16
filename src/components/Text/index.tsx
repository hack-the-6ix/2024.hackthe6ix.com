import { ComponentProps, ElementType } from 'react';
import { Inter } from 'next/font/google';
import cn from 'classnames';
import forwardRefAs from 'forward-ref-as';
import * as R from 'ramda';
import { Colors, TextTypes, TextWeights } from '@/styles';
import styles from './Text.module.scss';

const inter = Inter({ subsets: ['latin'] });

type _TextProps = {
  textType: TextTypes;
  textColor?: Colors;
  textWeight?: TextWeights;
};

export type TextProps<T extends ElementType> = _TextProps & {
  as?: T;
} & ComponentProps<T>;

const Text = forwardRefAs<'span', _TextProps>(
  ({ textType, textColor, textWeight, as, ...props }, ref) => {
    const Component = as ?? 'span';
    return (
      <Component
        {...props}
        ref={ref}
        style={R.reject(R.isNil, {
          ...props.style,
          '--text-color': textColor ? `var(--${textColor})` : null,
        })}
        className={cn(
          `font--${textType}`,
          textWeight && `font--wgt--${textWeight}`,
          inter.className,
          props.className,
          styles.text,
        )}
      />
    );
  },
);

export default Text;
