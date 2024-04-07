import React from 'react';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './about.module.scss';

function AboutPage() {
  return (
    <Container as="section" className={styles.frame}>
      <Flex
        align="center"
        direction="column"
        className={styles.container}
        gap="2x-lg"
      >
        <Text
          textType="heading-lg"
          textColor="secondary-900"
          textWeight="bold"
          textAlign="center"
          as="h2"
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

        <Text
          textType="paragraph-lg"
          textColor="secondary-900"
          textWeight="medium"
          textAlign="center"
          as="p"
        >
          Hack the 6ix is the largest summer student-run, not-for-profit
          hackathon now in its tenth iteration, based in Toronto. We take pride
          in the diversity and talent of our hackers, who help us become a key
          player in the Toronto tech ecosystem. We provide an outlet for
          students to present their ideas of the future.
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        gap="2x-lg"
        className={styles.container}
      >
        <Text
          textColor="secondary-900"
          textType="heading-lg"
          textWeight="semi-bold"
          textAlign="center"
          as="h2"
        >
          Decade of
          <Text
            textType="heading-lg"
            textColor="warning-400"
            textWeight="extra-bold"
          >
            innovation
          </Text>
        </Text>
        <Text
          textColor="secondary-900"
          textType="paragraph-lg"
          textWeight="medium"
          textAlign="center"
          as="p"
        >
          Hack the 6ix is celebrating a decade of breakthroughs! Let's walk down
          memory lane to revisit our past events. Each year, filled with
          innovation, collaboration, and unforgettable moments.
        </Text>
      </Flex>
    </Container>
  );
}

export default AboutPage;
