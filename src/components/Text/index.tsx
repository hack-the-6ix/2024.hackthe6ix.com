import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react';
import { PolymorphicRef } from 'react';
import { Inter } from 'next/font/google';
import cn from 'classnames';
import * as R from 'ramda';
import { Colors, TextTypes, TextWeights } from '@/styles';
import styles from './Text.module.scss';

const inter = Inter({ subsets: ['latin'] });

export type TextProps<T extends ElementType> = {
  textType: TextTypes;
  textColor?: Colors;
  textWeight?: TextWeights;
  as?: T;
} & ComponentPropsWithoutRef<T>;

function Text<T extends ElementType = 'span'>(
  { textType, textColor, textWeight, as, ...props }: TextProps<T>,
  ref: PolymorphicRef<T>,
) {
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
}

export default forwardRef(Text);
