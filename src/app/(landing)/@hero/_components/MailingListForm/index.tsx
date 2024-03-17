'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import styles from './MailingListForm.module.scss';
import { AddToMailingListResult, addToMailingList } from './action';

function MailingListFormContent(props: AddToMailingListResult) {
  const formStatus = useFormStatus();
  return (
    <>
      <Input
        description={
          props.status === 'success' ?
            'Thank you for subscribing to our updates!'
          : undefined
        }
        readOnly={formStatus.pending || props.status === 'success'}
        className={styles.input}
        placeholder="Enter email"
        autoComplete="email"
        label="Enter email"
        status={
          !formStatus.pending && props.status === 'error' ?
            {
              type: 'error',
              msg: props.error?.fieldErrors.email?.[0],
            }
          : undefined
        }
        name="email"
        type="email"
        hideLabel
        required
      />
      <Button
        className={styles.button}
        disabled={formStatus.pending || props.status === 'success'}
        buttonColor="primary"
        buttonType="primary"
        type="submit"
      >
        {formStatus.pending ?
          'Loading...'
        : props.status === 'success' ?
          'Added!'
        : 'Notify me'}
      </Button>
    </>
  );
}

function MailingListForm() {
  const [state, formAction] = useFormState(addToMailingList, {
    status: 'initial',
  });
  return (
    <Flex as="form" gap="x-sm" action={formAction} noValidate>
      <MailingListFormContent {...state} />
    </Flex>
  );
}

export default MailingListForm;
