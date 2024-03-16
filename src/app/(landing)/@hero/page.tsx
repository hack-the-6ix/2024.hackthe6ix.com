import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import Text from '@/components/Text';
import config from '@/config';
import footerAssetUrl from './_assets/lonely-island.png';
import mainAssetUrl from './_assets/tv-island.png';
import Banner from './_banner';
import styles from './page.module.scss';

const words = [
  'network.',
  'learn.',
  'win.',
  'create a project.',
  'collaborate.',
];

function Hero() {
  const range = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatRange(config.startAt, config.endAt);
  return (
    <Container
      className={styles.frame}
      innerProps={{ className: styles.content }}
      as="section"
    >
      <Flex direction="column" className={styles.container} gap="2x-big">
        <Flex direction="column" gap="sm">
          <Text textType="paragraph-lg" textColor="neutral-600">
            {range.replace('–', ' – ').toUpperCase()} • In-person event
          </Text>
          <Flex direction="column">
            <Text textType="display" textColor="secondary-900">
              Hack the 6ix is Toronto&apos;s{' '}
              <span className={styles.highlight}>largest</span> summer
              hackathon, where <span className={styles.highlight}>anyone</span>{' '}
              can hack to
            </Text>
            <Banner words={words} />
          </Flex>
        </Flex>
        <Flex direction="column" gap="x-sm">
          <Text
            textType="paragraph-lg"
            textColor="secondary-900"
            textWeight="medium"
          >
            Applications opening soon! Receive the latest updates in your inbox.
          </Text>
          <Flex as="form" gap="x-sm">
            <Input hideLabel label="Enter email" name="email" required />
            <Button type="submit" buttonColor="primary" buttonType="primary">
              Notify me
            </Button>
          </Flex>
          <Flex gap="2x-sm">
            {Object.entries(config.socials).map(([ref, social]) => (
              <IconButton
                buttonType="tertiary"
                buttonColor="secondary"
                buttonDarker
                rel="noopener noreferrer"
                icon={social.icon}
                href={social.link}
                target="_blank"
                key={ref}
                as="a"
              />
            ))}
          </Flex>
        </Flex>
        <Flex align="center" className={styles.mainAsset}>
          <Image
            src={mainAssetUrl}
            alt="A cluster of islands with a TV showing 2022 HT6 website"
          />
        </Flex>
      </Flex>
      <Flex align="center" className={styles.footerAsset}>
        <Image src={footerAssetUrl} alt="An island with two trees" />
      </Flex>
    </Container>
  );
}

export default Hero;
