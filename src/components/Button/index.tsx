import { ComponentPropsWithoutRef, ElementType } from 'react';
import cn from 'classnames';
import { ColorTypes } from '@/styles';
import Text from '../Text';
import styles from './Button.module.scss';

export type ButtonProps<T extends ElementType> = {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  buttonColor?: ColorTypes;
  buttonDarker?: boolean;
  as?: T;
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = 'button'>({
  buttonColor = 'neutral',
  buttonType = 'primary',
  buttonDarker,
  as,
  ...props
}: ButtonProps<T>) {
  const level = buttonDarker ? 700 : 500;
  return (
    <Text
      textType="paragraph-sm"
      textWeight="semi-bold"
      as={as ?? 'button'}
      type="asdsadsad"
      {...props}
      className={cn(
        props.disabled && styles.disabled,
        styles[`type--${buttonType}`],
        styles.button,
        props.className,
      )}
      style={
        props.disabled ?
          props.style
        : {
            ...props.style,
            '--button-color': `var(--${buttonColor}-${level})`,
            '--button-color-hover': `var(--${buttonColor}-${level + 100})`,
            '--button-color-active': `var(--${buttonColor}-${level + 200})`,
          }
      }
    />
  );
}

export default Button;
