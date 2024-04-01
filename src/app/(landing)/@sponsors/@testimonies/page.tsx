'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import * as R from 'ramda';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import IconButton from '@/components/IconButton';
import Text from '@/components/Text';
import * as images from './_assets';
import styles from './page.module.scss';

interface Testimony {
  image: StaticImageData;
  name: string;
  role: string;
  content: string;
}

const data: Testimony[] = [
  {
    image: images.ianKorvinsky,
    name: 'Ian Korovinsky',
    role: 'Hacker',
    content:
      "Attending Hack the 6ix was one of the best hackathon experiences I've ever had. From the intense hacking to the side-quests along the way, every step of the journey was memorable thanks to the incredible hackers there, as well as the hard-working organizers who made this an event to remember!",
  },
  {
    image: images.danielYe,
    name: 'Daniel Ye',
    role: 'Hacker',
    content:
      'Favourite thing about HT6? There were so many! It could be the tiny workshops scattered throughout or the awards ceremony. But my absolute favourite was probably watching our drone take flight... I definitely felt like a real engineer then.',
  },
  {
    image: images.joshFernando,
    name: 'Josh Fernando',
    role: 'Hacker',
    content:
      "Going to Hack the 6ix was awesome. It's one of the best hackathons I've been to, and I've been to quite a few, winning 21 of them! The food was great, the games and workshops were super fun, and it all just made coding even more exciting. Being around so many cool people who love tech as much as I do was amazing. We all got to share ideas, learn from each other, and just have a good time making stuff. This wasn't just about programming; it was a big party for people who love building and inventing things. Definitely a highlight for me!",
  },
];

function Testimonies() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const item = itemsRef.current[active];
    const container = containerRef.current;
    if (!item || !container) return;

    container.scrollTo({
      left: item.offsetLeft - container.offsetLeft,
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <Flex align="center" gap="lg" className={styles.container}>
      <IconButton
        icon="chevron_left"
        className={styles.control}
        onClick={() => setActive(R.dec)}
        buttonType="tertiary"
        disabled={active <= 0}
      />
      <Flex
        className={styles.list}
        ref={containerRef}
        align="center"
        gap="m"
        as="ul"
      >
        {data.map((item, i) => (
          <Flex
            className={styles.item}
            ref={(el: HTMLLIElement) => {
              itemsRef.current[i] = el;
            }}
            align="center"
            gap="x-lg"
            key={i}
            as="li"
          >
            <Flex align="center" direction="column" gap="m">
              <Image
                width="280"
                src={item.image}
                className={styles.image}
                alt={`Self portrait of ${item.name}`}
              />
              <h3 className={styles.label}>
                <Text
                  textType="paragraph-lg"
                  textWeight="medium"
                  textColor="secondary-900"
                >
                  {item.name}
                </Text>
                ,{' '}
                <Text textType="paragraph-lg" textColor="secondary-900">
                  {item.role}
                </Text>
              </h3>
            </Flex>
            <Flex gap="x-sm">
              <Text
                textType="display"
                textColor="warning-400"
                className={styles.quoteL}
              >
                “
              </Text>
              <Text
                textType="paragraph-sm"
                textWeight="medium"
                textColor="secondary-900"
                as="p"
              >
                {item.content}
              </Text>
              <Text
                textType="display"
                textColor="warning-400"
                className={styles.quoteR}
              >
                “
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <IconButton
        icon="chevron_right"
        onClick={() => setActive(R.inc)}
        disabled={active >= data.length - 1}
        buttonType="tertiary"
        className={styles.control}
      />
    </Flex>
  );
}

export default Testimonies;
