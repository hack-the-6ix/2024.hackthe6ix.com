'use client';

import Image from 'next/image';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { rockstar } from './_assets';
import styles from './page.module.scss';

function Rockstar() {
  return (
    <Flex className={styles.rockstar}>
      <Flex
        className={styles.rockstarImageContainer}
        as="a"
        href="https://rockstarenergy.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.rockstarImage}
          src={rockstar}
          alt="Rockstar Energy Drink Logo"
        />
      </Flex>
      <Flex className={styles.rockstarText} direction="column" justify="center">
        <Text
          textColor="secondary-900"
          textType="paragraph-lg"
          textWeight="medium"
          as="p"
        >
          We are proud to announce that we have partnered with Rockstar Energy,
          to make this weekend one that you won’t forget.
        </Text>
        <Text
          textColor="secondary-900"
          textType="paragraph-lg"
          textWeight="medium"
          as="p"
        >
          With Rockstar Energy headlining Hack the 6ix, we&apos;re here to let
          you know that you can own ANY moment. With its delicious flavours and
          unmistakable energy boost, Rockstar sustains Mind-Body Energy for all
          active lifestyles, including those hacking late into the night.
        </Text>
        <Text
          textColor="secondary-900"
          textType="paragraph-lg"
          textWeight="medium"
          as="p"
        >
          To learn more about what we&apos;re all about, check us out on social
          media @rockstarenergy
        </Text>
      </Flex>
    </Flex>
  );
}

export default Rockstar;
