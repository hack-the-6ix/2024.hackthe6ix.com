import { ComponentPropsWithoutRef, ReactNode, useId } from 'react';
import cn from 'classnames';
import Flex from '../Flex';
import Text from '../Text';
import styles from './InputLike.module.scss';

// Used for extending by inputs
export type InputLikePublicProps = {
  label: ReactNode;
  hideLabel?: boolean;
  description?: ReactNode;
  status?: {
    type: 'error';
    msg?: ReactNode;
  };
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export type InputLikeProps = InputLikePublicProps & {
  disabled?: boolean;
  required?: boolean;
  children?: (props: AriaProps) => ReactNode;
};

type AriaProps = {
  'aria-errormessage'?: string;
  'aria-describedby'?: string;
  'aria-invalid': boolean;
  'aria-disabled'?: boolean;
  required?: boolean;
  disabled?: boolean;
  id: string;
};

function InputLike({
  label,
  hideLabel,
  required,
  disabled,
  description,
  status,
  children,
  ...props
}: InputLikeProps) {
  const id = useId();
  const descriptor = description || status?.msg;
  return (
    <Flex direction="column" gap="2x-sm" {...props} inline>
      <Text
        htmlFor={id}
        className={cn(hideLabel && 'hidden')}
        textType="paragraph-sm"
        textWeight="semi-bold"
        as="label"
      >
        <span>{label}</span>
        {required && (
          <span className={styles.required} aria-hidden>
            *
          </span>
        )}
      </Text>
      {children?.({
        [status?.type ? 'aria-errormessage' : 'aria-describedby']:
          `${id}--text`,
        'aria-invalid': status?.type === 'error',
        'aria-disabled': disabled,
        required,
        disabled,
        id,
      })}
      {descriptor && (
        <Text
          textColor={
            disabled ? 'neutral-400'
            : status?.type ?
              'error-500'
            : 'secondary-900'
          }
          id={`${id}--text`}
          textType="label"
          textWeight="medium"
        >
          {descriptor}
        </Text>
      )}
    </Flex>
  );
}

export default InputLike;
