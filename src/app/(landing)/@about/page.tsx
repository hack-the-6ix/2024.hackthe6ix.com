import React from 'react';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './about.module.scss';

function AboutPage() {
  return (
    <Container className={styles.frame}>
      <Flex
        align="center"
        direction="column"
        className={styles.container}
        gap="2x-big"
      >
        <Text
          textType="heading-lg"
          textColor="secondary-900"
          textWeight="bold"
          textAlign="center"
        >
          <span className={styles.yellow}>Join us </span>
          <Text
            textType="heading-lg"
            textColor="secondary-900"
            textWeight="semi-bold"
            textAlign="center"
          >
            for a weekend of memories
          </Text>
        </Text>
        <Flex align="center">
          <Text
            textType="paragraph-lg"
            textColor="secondary-900"
            textWeight="medium"
            textAlign="center"
          >
            Hack the 6ix is the largest summer student-run, not-for-profit
            hackathon now in its tenth iteration, based in Toronto. We take
            pride in the diversity and talent of our hackers, who help us become
            a key player in the Toronto tech ecosystem. We provide an outlet for
            students to present their ideas of the future.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default AboutPage;
