import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import InputLike, { InputLikePublicProps } from '../InputLike';
import Text from '../Text';
import styles from './Input.module.scss';

export type InputProps = InputLikePublicProps &
  ComponentPropsWithoutRef<'input'>;

function Input({
  label,
  description,
  hideLabel,
  status,
  ...props
}: InputProps) {
  return (
    <InputLike
      label={label}
      hideLabel={hideLabel}
      description={description}
      disabled={props.disabled}
      required={props.required}
      status={status}
    >
      {(inputProps) => (
        <Text
          {...props}
          {...inputProps}
          className={cn(
            inputProps['aria-invalid'] && styles.error,
            props.className,
            styles.input,
          )}
          textColor="neutral-900"
          textType="paragraph-sm"
          as="input"
        />
      )}
    </InputLike>
  );
}

export default Input;
