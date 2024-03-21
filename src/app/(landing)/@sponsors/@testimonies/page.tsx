'use client';

import Image, { StaticImageData } from 'next/image';
import Flex from '@/components/Flex';
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
    name: 'Ian Korvinsky',
    role: 'Hacker',
    content:
      "Attending Hack The 6ix was one of the best hackathon experiences I've ever had. From the intense hacking to the side-quests along the way, every step of the journey was memorable thanks to the incredible hackers there, as well as the hard-working organizers who made this an event to remember!",
  },
];

function Testimonies() {
  return (
    <Flex align="center" gap="m">
      <button>Back</button>
      <ul>
        {data.map((item, i) => (
          <Flex align="center" gap="x-lg" key={i} as="li">
            <Flex align="center" direction="column" gap="m">
              <Image
                width="280"
                src={item.image}
                className={styles.image}
                alt={`Self portrait of ${item.name}`}
              />
              <p>
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
              </p>
            </Flex>
            <Flex>
              <Text
                textType="paragraph-sm"
                textWeight="medium"
                textColor="secondary-900"
              >
                {item.content}
              </Text>
            </Flex>
          </Flex>
        ))}
      </ul>
      <button>Next</button>
    </Flex>
  );
}

export default Testimonies;
