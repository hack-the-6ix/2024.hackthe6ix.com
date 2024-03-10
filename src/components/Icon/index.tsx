import { ComponentProps } from 'react';
import cn from 'classnames';
import styles from './Icon.module.scss';

export interface IconProps extends Omit<ComponentProps<'span'>, 'children'> {
  size?: 'sm' | 'md' | 'lg';
  icon: string;
}

function Icon({ icon, size = 'md', ...props }: IconProps) {
  return (
    <span
      {...props}
      className={cn(
        styles['material-symbols-rounded'],
        styles[`size--${size}`],
        props.className,
      )}
    >
      {icon}
    </span>
  );
}

export default Icon;
