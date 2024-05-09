'use client';

import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import notepad from './assets/notepad.png';
import placeholder from './assets/placeholder.png';
import tv from './assets/tv.png';
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
    text: 'Determined to leave a lasting impact, we return even stronger with 2 event at Wealthsimple & MaRS Discovery District.',
    image: placeholder,
  },
  {
    text: 'We embrace challenges, soar to new heights, and unlock unprecedented growth at the Centre for Social Innovation.',
    image: placeholder,
  },
  {
    text: "Hosted at Top Hat HQ, we've doubled in size this year, growing larger and forging stronger connections.",
    image: placeholder,
  },
  {
    text: 'We ran the Exploding Watermelon Challenge and other fun activities at the Bahen Centre for Information Technology.',
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
  const activeItem = data[selected];

  return (
    <Container className={styles.container}>
      <Flex gap="lg" direction="column" align="center">
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
          className={styles.content}
          textColor="secondary-900"
          textAlign="center"
          textType="paragraph-lg"
          textWeight="medium"
        >
          Hack the 6ix is celebrating a decade of breakthroughs! Let&apos;s walk
          down memory lane to revisit our past events. Each year, filled with
          innovation, collaboration, and unforgettable moments.
        </Text>
        <Flex gap="2x-big">
          {data.map((_, idx) => (
            <Text
              onClick={() => setSelected(idx)}
              className={cn(idx === selected && styles.active, styles.button)}
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
        <Flex justify="flex-end" className={styles.frame}>
          <div className={styles.notepad}>
            <Image width="400" src={notepad} alt="notepad" />
            <Text
              className={styles.text}
              textColor="secondary-900"
              textType="paragraph-lg"
              textWeight="semi-bold"
            >
              {activeItem.text}
            </Text>
          </div>
          <div className={styles.tv}>
            <Image
              src={activeItem.image}
              alt={`Showing moment during ${SINCE + selected} of HT6`}
              className={styles.asset}
            />
            <Image src={tv} width="1000" alt="tv" />
          </div>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Innovations;
