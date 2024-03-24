import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './about.module.scss';
import footerAssetUrl from './assets/green-sailboat.png';
import mainAssetUrl from './assets/tree.png';

function AboutPage() {
  return (
    <Container className={styles.frame}>
      <Flex direction="column" className={styles.container} gap="2x-big">
        <Text textType="heading-lg" textColor="secondary-900">
          <span className={styles.yellow}>Join us </span>
          for a weekend of memories
        </Text>
        <Text
          className={styles.textBox}
          textType="paragraph-lg"
          textColor="secondary-900"
          textWeight="medium"
        >
          Hack the 6ix is the largest summer student-run, not-for-profit
          hackathon now in its tenth iteration, based in Toronto. We take pride
          in the diversity and talent of our hackers, who help us become a key
          player in the Toronto tech ecosystem. We provide an outlet for
          students to present their ideas of the future.
        </Text>
      </Flex>
    </Container>
  );
}

export default AboutPage;
