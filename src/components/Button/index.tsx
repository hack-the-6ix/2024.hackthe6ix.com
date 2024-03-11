import { ComponentProps, ElementType } from 'react';
import cn from 'classnames';
import { ColorTypes } from '@/styles';
import Text from '../Text';
import styles from './Button.module.scss';

export type ButtonProps<T extends ElementType> = {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  buttonColor?: ColorTypes;
  as?: T;
} & ComponentProps<T>;

function Button<T extends ElementType = 'button'>({
  buttonColor = 'neutral',
  buttonType = 'primary',
  as,
  ...props
}: ButtonProps<T>) {
  return (
    <Text
      textType="paragraph-sm"
      textWeight="semi-bold"
      as={as ?? 'button'}
      type="button"
      {...props}
      className={cn(
        props.disabled && styles.disabled,
        styles[`type--${buttonType}`],
        styles.button,
        props.className,
      )}
      style={{
        ...props.style,
        '--button-color': `var(--${buttonColor}-600)`,
        '--button-color-hover': `var(--${buttonColor}-700)`,
        '--button-color-active': `var(--${buttonColor}-800)`,
      }}
    />
  );
}

export default Button;
