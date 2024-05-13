'use client';

import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import notepad from './assets/notepad.png';
import tv from './assets/tv.png';
import tv2015 from './assets/tv/2015.png';
import tv2016 from './assets/tv/2016.png';
import tv2017 from './assets/tv/2017.png';
import tv2018 from './assets/tv/2018.png';
import tv2019 from './assets/tv/2019.png';
import tv2020 from './assets/tv/2020.png';
import tv2021 from './assets/tv/2021.png';
import tv2022 from './assets/tv/2022.png';
import tv2023 from './assets/tv/2023.png';
import styles from './Innovations.module.scss';

const SINCE = 2015;

const data = [
  {
    text: 'The first ever Hack the 6ix, hosted at Top Hat HQ.',
    image: tv2015,
  },
  {
    text: 'Determined to leave a lasting impact, we return even stronger with 2 events at Wealthsimple & MaRS Discovery District.',
    image: tv2016,
  },
  {
    text: 'We embrace challenges, soar to new heights, and unlock unprecedented growth at the Centre for Social Innovation.',
    image: tv2017,
  },
  {
    text: "Hosted at Top Hat HQ, we've doubled in size this year, growing larger and forging stronger connections.",
    image: tv2018,
  },
  {
    text: 'We ran the Exploding Watermelon Challenge and other fun activities at the Bahen Centre for Information Technology.',
    image: tv2019,
  },
  {
    text: 'We went completely virtual making our hackathon available for hackers around the world.',
    image: tv2020,
  },
  {
    text: 'Continuing the virtual event, we have connect with hackers on a larger scale.',
    image: tv2021,
  },
  {
    text: 'Our first hybrid event hosted at Wealthsimple. We love to interacting with hackers again.',
    image: tv2022,
  },
  {
    text: 'We enthusiastically greeted hackers back to our traditional, fully in-person setup!',
    image: tv2023,
  },
];

function Innovations() {
  const [selected, setSelected] = useState(0);
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
        <div className={styles.tvGrid}>
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
        </div>
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
