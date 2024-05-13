'use client';

import { useEffect, useRef, useState } from 'react';
import type { POSTResponse } from '@/app/api/mailingList/route';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import styles from './MailingListForm.module.scss';

function MailingListForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<POSTResponse>();
  const [loaded, setLoaded] = useState(false);
  const controller = useRef<AbortController>(new AbortController());

  const query = async (body: FormData) => {
    setLoading(true);
    controller.current.abort();
    controller.current = new AbortController();
    try {
      const res = await fetch('/api/mailingList', {
        signal: controller.current.signal,
        method: 'POST',
        body,
      });
      setResult(await res.json());
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
    } finally {
      if (controller.current.signal.aborted) return;
      setLoading(false);
    }
  };

  useEffect(() => {
    // For setting noValidate to be false if without js during SSG
    setLoaded(true);
    return () => {
      controller.current.abort();
    };
  }, []);

  return (
    <Flex
      as="form"
      gap="x-sm"
      noValidate={loaded}
      method="POST"
      action="/api/mailingList"
      onSubmit={(e) => {
        e.preventDefault();
        query(new FormData(e.currentTarget));
        return false;
      }}
      wrap
    >
      <Input
        description={
          result?.status === 'success' ?
            'Thank you for subscribing to our updates!'
          : undefined
        }
        inputProps={{
          readOnly: loading || result?.status === 'success',
          placeholder: 'hacker@hackthe6ix.com',
          autoComplete: 'email',
          required: true,
          name: 'email',
          type: 'email',
        }}
        className={styles.input}
        label="Enter email"
        status={
          !loading && result?.status === 'error' ?
            {
              type: 'error',
              msg: result.error.email?._errors[0],
            }
          : undefined
        }
        hideLabel
      />
      <Button
        className={styles.button}
        disabled={loading || result?.status === 'success'}
        buttonColor="primary"
        buttonType="primary"
        type="submit"
      >
        {loading ?
          'Loading...'
        : result?.status === 'success' ?
          'Added!'
        : 'Notify me'}
      </Button>
    </Flex>
  );
}

export default MailingListForm;
