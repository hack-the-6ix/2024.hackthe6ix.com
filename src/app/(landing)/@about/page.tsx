import React from 'react';
import Container from '../../../components/Container';
import Flex from '../../../components/Flex';
import styles from './page.module.scss';

function AboutPage() {
  return (
    <Container>
      <Flex className={styles.container} direction="column" align="center">
        <h2>
          <span className="highlight">Join us</span> for a weekend of memories.
        </h2>
        <p>
          Hack the 6ix is the largest summer student-run, not-for-profit
          hackathon now in its tenth iteration, based in Toronto. We take pride
          in the diversity and talent of our hackers, who help us become a key
          player in the Toronto tech ecosystem. We provide an outlet for
          students to present their ideas of the future.
        </p>
      </Flex>
    </Container>
  );
}

export default AboutPage;
