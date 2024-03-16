'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import { receiveUpdates } from './actions';

function MailingListForm() {
  const [state, formAction] = useFormState(receiveUpdates, null);
  const owo = useFormStatus();
  console.log(state, formAction, owo);

  return (
    <Flex as="form" gap="x-sm" action={formAction}>
      <Input hideLabel label="Enter email" name="email" required />
      <Button type="submit" buttonColor="primary" buttonType="primary">
        Notify me
      </Button>
    </Flex>
  );
}

export default MailingListForm;
