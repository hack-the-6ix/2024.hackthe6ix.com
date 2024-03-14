import { CSSProperties } from 'react';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import config from '@/config';
import Banner from './_banner';
import styles from './page.module.scss';

const words = [
  'network.',
  'learn.',
  'win.',
  'create a project.',
  'collaborate',
];

function Hero() {
  const range = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatRange(config.startAt, config.endAt);
  return (
    <Container>
      <Flex direction="column" className={styles.container} gap="sm">
        <Text textType="paragraph-lg" textColor="neutral-600">
          {range.replace('–', ' – ').toUpperCase()} • In-person event
        </Text>
        <Flex direction="column">
          <Text textType="display" textColor="secondary-900">
            Hack the 6ix is Toronto&apos;s{' '}
            <span className={styles.highlight}>largest</span> summer hackathon,
            where <span className={styles.highlight}>anyone</span> can hack to
          </Text>
          <Banner words={words} />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Hero;
