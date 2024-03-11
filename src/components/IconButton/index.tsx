import { ElementType } from 'react';
import cn from 'classnames';
import Button, { ButtonProps } from '../Button';
import Icon from '../Icon';
import styles from './IconButton.module.scss';

export type IconButtonProps<T extends ElementType> = Omit<
  ButtonProps<T>,
  'children'
> & { icon: string };

function IconButton<T extends ElementType>({
  icon,
  as,
  ...props
}: IconButtonProps<T>) {
  return (
    <Button
      {...props}
      className={cn(props.className, styles.button)}
      as={as ?? 'button'}
    >
      <Icon icon={icon} />
    </Button>
  );
}

export default IconButton;
