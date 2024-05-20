'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const controller = useRef<AbortController>(new AbortController());
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // For setting noValidate to be false if without js during SSG
    setLoaded(true);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      controller.current.abort();
    };
  }, []);

  return (
    <Flex
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
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
          }}
          className={styles.grow}
        />
        <Input
          label="Email"
          inputProps={{
            placeholder: 'Enter email',
            autoComplete: 'email',
            type: 'email',
            required: true,
          }}
          className={styles.grow}
        />
      </Flex>
      <Input
        label="Enter your question"
        inputProps={{
          placeholder: 'Send us your questions here!',
          required: true,
        }}
      />
      <Flex>
        <Button buttonColor="primary" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Flex>
    </Flex>
  );
}

export default ContactForm;
