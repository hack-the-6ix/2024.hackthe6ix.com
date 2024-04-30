import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './about.module.scss';
import fourteen from './assets/2014.png';
import fifteen from './assets/2015.png';
import sixteen from './assets/2016.png';
import seventeen from './assets/2017.png';
import eighteen from './assets/2018.png';
import nineteen from './assets/2019.png';
import twenty from './assets/2020.png';
import twentyOne from './assets/2021.png';
import twentyTwo from './assets/2022.png';
import twentyThree from './assets/2023.png';
import placeholder from './assets/placeholder.png';
import tv from './assets/tv.png';

// Import Slideshow component

// Ask design team

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
          <span>Decade of </span>
          <Text
            textType="heading-lg"
            textColor="warning-400"
            textWeight="semi-bold"
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
          Hack the 6ix is celebrating a decade of breakthroughs! Let&apos;s walk
          down memory lane to revisit our past events. Each year, filled with
          innovation, collaboration, and unforgettable moments.
        </Text>
      </Flex>

      <Flex direction="row" align="center" justify="center">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Image src={fourteen} alt="2014" className={styles.years} />
            {/* <Text className={styles.cardText}>2014</Text> */}
          </div>
        </div>
        <div className={styles.card}>
          <Image src={fifteen} alt="2015" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={sixteen} alt="2016" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={seventeen} alt="2017" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={eighteen} alt="2018" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={nineteen} alt="2019" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={twenty} alt="2020" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={twentyOne} alt="2021" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={twentyTwo} alt="2022" className={styles.years} />
        </div>
        <div className={styles.card}>
          <Image src={twentyThree} alt="2023" className={styles.years} />
        </div>
      </Flex>

      <Flex
        direction="row"
        justify="flex-end"
        className={styles.imageContainer}
      >
        <div className={styles.tvContainer}>
          <Image src={tv} alt="TV" className={styles.tv} />
          <div className={styles.overlay}>
            <Image
              src={placeholder}
              alt="Overlay Image"
              className={styles.overlayImage}
            />
          </div>
        </div>
      </Flex>
    </Container>
  );
}

export default AboutPage;
