import { ComponentProps } from 'react';
import InputLike, { InputLikePublicProps } from '../InputLike';

export type InputProps = InputLikePublicProps & ComponentProps<'input'>;

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
      {(inputProps) => <input {...props} {...inputProps} />}
    </InputLike>
  );
}

export default Input;
