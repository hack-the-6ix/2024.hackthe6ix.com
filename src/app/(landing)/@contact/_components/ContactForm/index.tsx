'use client';

import { useEffect, useRef, useState } from 'react';
import { POSTResponse } from '@/app/api/contact/route';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const controller = useRef<AbortController>(new AbortController());
  const [result, setResult] = useState<POSTResponse>();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const query = async (body: FormData, el: HTMLFormElement) => {
    setLoading(true);
    controller.current.abort();
    controller.current = new AbortController();
    try {
      const res = await fetch('/api/contact', {
        signal: controller.current.signal,
        method: 'POST',
        body,
      });
      setResult(await res.json());
      if (res.ok) el.reset();
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
    } finally {
      if (controller.current.signal.aborted) return;
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (result?.status !== 'success') return;
    const timer = window.setTimeout(() => {
      setResult(undefined);
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [result?.status]);

  useEffect(() => {
    // For setting noValidate to be false if without js during SSG
    setLoaded(true);
    return () => {
      controller.current.abort();
    };
  }, []);

  return (
    <Flex
      onSubmit={(e) => {
        e.preventDefault();
        query(new FormData(e.currentTarget), e.currentTarget);
        return true;
      }}
      method="POST"
      action="/api/contact"
      noValidate={loaded}
      direction="column"
      gap="sm"
      as="form"
    >
      <Flex gap="sm" className={styles.nameForm}>
        <Input
          label="Name"
          inputProps={{
            placeholder: 'Enter name',
            autoComplete: 'name',
            required: true,
            name: 'name',
          }}
          status={
            !loading && result?.status === 'error' ?
              {
                type: 'error',
                msg: result.error.name?._errors[0],
              }
            : undefined
          }
          className={styles.grow}
        />
        <Input
          label="Email"
          inputProps={{
            placeholder: 'Enter email',
            autoComplete: 'email',
            type: 'email',
            required: true,
            name: 'email',
          }}
          status={
            !loading && result?.status === 'error' ?
              {
                type: 'error',
                msg: result.error.email?._errors[0],
              }
            : undefined
          }
          className={styles.grow}
        />
      </Flex>
      <Input
        label="Enter your question"
        inputProps={{
          placeholder: 'Send us your questions here!',
          required: true,
          maxLength: 2056,
          name: 'message',
        }}
        status={
          !loading && result?.status === 'error' ?
            {
              type: 'error',
              msg: result.error.message?._errors[0],
            }
          : undefined
        }
      />
      <div
        className="cf-turnstile"
        data-response-field-name="captchaToken"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE}
      ></div>
      <Flex>
        <Button
          buttonColor="primary"
          type="submit"
          disabled={loading || result?.status === 'success'}
        >
          {loading ?
            'Sending...'
          : result?.status === 'success' ?
            'Sent!'
          : 'Send message'}
        </Button>
      </Flex>
    </Flex>
  );
}

export default ContactForm;
