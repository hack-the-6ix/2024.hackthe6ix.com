import React from 'react';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import styles from './about.module.scss';

function AboutPage() {
  return (
    <Container className={styles.frame}>
      <Flex direction="column" className={styles.container} gap="2x-big">
        <p>Test</p>
      </Flex>
    </Container>
  );
}

export default AboutPage;
