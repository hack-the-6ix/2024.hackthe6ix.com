'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import placeholder from './assets/placeholder.png';
import styles from './Innovations.module.scss';

const SINCE = 2014;

const data = [
  {
    text: "Hosted at Top Hat HQ, we've doubled in size this year, growing larger and forging stronger connections.",
    image: placeholder,
  },
  {
    text: "Hosted at Top Hat HQ, we've doubled in size this year, growing larger and forging stronger connections.",
    image: placeholder,
  },
  {
    text: 'Determined to leave a lasting impact, we return even stronger helded two event at Wealthsimple and MaRS Discovery District.',
    image: placeholder,
  },
  {
    text: 'We embrace challenges, soaring to new heights, pushing boundaries, and unlocking unprecedented growth at the Centre for Social Innovation.',
    image: placeholder,
  },
  {
    text: "Hosted at Top Hat HQ, we've doubled in size this year, growing larger and forging stronger connections.",
    image: placeholder,
  },
  {
    text: 'We organized the Exploding Watermelon Challenge along with numerous other thrilling activities held at the Bahen Centre for Information Technology.',
    image: placeholder,
  },
  {
    text: 'We went completely virtual making our hackathon available for hackers around the world.',
    image: placeholder,
  },
  {
    text: 'Continuing the virtual event, we have connect with hackers on a larger scale.',
    image: placeholder,
  },
  {
    text: 'Our first hybrid event hosted at Wealthsimple. We love to interacting with hackers again.',
    image: placeholder,
  },
  {
    text: 'We enthusiastically greeted hackers back to our traditional, fully in-person setup!',
    image: placeholder,
  },
];

function Innovations() {
  const [selected, setSelected] = useState(9);
  const activeText = data[selected].text;

  return (
    <Container>
      <Flex direction="column" align="center">
        <Text
          textColor="secondary-900"
          textAlign="center"
          textType="heading-lg"
          textWeight="bold"
          as="h2"
        >
          Decade of <Text textColor="warning-400">Innovation</Text>
        </Text>
        <Text
          textColor="secondary-900"
          textAlign="center"
          textType="paragraph-lg"
          textWeight="medium"
        >
          Hack the 6ix is celebrating a decade of breakthroughs! Let&apos;s walk
          down memory lane to revisit our past events. Each year, filled with
          innovation, collaboration, and unforgettable moments.
        </Text>
        <Flex>
          {data.map(({ image }, idx) => (
            <Text
              textColor="secondary-900"
              textType="paragraph-lg"
              textWeight="semi-bold"
              as="button"
              key={idx}
            >
              {SINCE + idx}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Innovations;
