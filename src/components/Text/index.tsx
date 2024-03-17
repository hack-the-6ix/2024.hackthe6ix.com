import { Inter } from 'next/font/google';
import cn from 'classnames';
import forwardRefAs from 'forward-ref-as';
import * as R from 'ramda';
import { Colors, TextTypes, TextWeights } from '@/styles';
import styles from './Text.module.scss';

const inter = Inter({ subsets: ['latin'] });

export type TextProps = {
  textType: TextTypes;
  textColor?: Colors;
  textWeight?: TextWeights;
};

const Text = forwardRefAs<'span', TextProps>(
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
