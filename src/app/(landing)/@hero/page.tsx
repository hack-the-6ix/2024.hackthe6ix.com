import Image from 'next/image';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Text from '@/components/Text';
import config from '@/config';
import footerAssetUrl from './_assets/lonely-island.png';
import mainAssetUrl from './_assets/tv-island.png';
import Banner from './_components/Banner';
import MailingListForm from './_components/MailingListForm';
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
    <Container innerProps={{ className: styles.content }} as="section">
      <h1 className="hidden">Hack the 6ix 2024 landing page</h1>
      <Flex direction="column" className={styles.container} gap="2x-big">
        <Flex direction="column" gap="sm">
          <Text textType="paragraph-lg" textColor="neutral-600" as="p">
            {range.replace('–', ' – ').toUpperCase()} • In-person event
          </Text>
          <Flex direction="column">
            <Text textType="display" textColor="secondary-900" as="p">
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
            as="p"
          >
            Applications opening soon! Receive the latest updates in your inbox.
          </Text>
          <MailingListForm />
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
