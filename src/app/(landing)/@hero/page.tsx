import Image from 'next/image';
import Animate from '@/components/Animate';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import config from '@/config';
import footerAssetUrl from './_assets/lonely-island.png';
import mainAssetUrl from './_assets/tv-island.png';
import Banner from './_components/Banner';
import MailingListForm from './_components/MailingListForm';
import styles from './page.module.scss';

const words = ['network.', 'learn.', 'create.', 'collaborate.', 'innovate.'];

function Hero() {
  const range = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatRange(config.startAt, config.endAt);

  return (
    <Container
      innerProps={{ className: styles.content }}
      as="section"
      id="hero"
    >
      <h1 className="hidden">Hack the 6ix 2024 landing page</h1>
      <Flex direction="column" className={styles.container} gap="2x-big">

        <Animate
          duration={0.8}
        >
          <Flex direction="column" gap="sm">
            <Text textType="paragraph-lg" textColor="neutral-600" as="p">
              {range.replace('–', ' – ').toUpperCase()} • In-person event
            </Text>
            <Flex direction="column">
              <Text textType="display" textColor="secondary-900" as="p">
                Hack the 6ix is Toronto&apos;s{' '}
                <Text textColor="warning-400">largest</Text> summer hackathon,
                where <Text textColor="warning-400">anyone</Text> can hack to
              </Text>
              <Banner words={words} />
            </Flex>
          </Flex>
        </Animate>

        <Animate
          duration={0.55}
          delay={0.3}
        >
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
            <Flex gap="m">
              {Object.entries(config.socials).map(([ref, social]) => (
                <a
                  href={social.link}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noreferrer"
                  key={ref}
                >
                  <Icon icon={social.icon} size="sm" />
                </a>
              ))}
            </Flex>
          </Flex>
        </Animate>
        <Flex align="center" className={styles.mainAsset}>
          <Animate
            initial={{ opacity: 0, marginBottom: 100 }}
            animate={{ opacity: 1, marginBottom: 0 }}
            duration={0.4}
            delay={0.15}
          >
            <Image
              src={mainAssetUrl}
              alt="A cluster of islands with a TV showing 2022 HT6 website"
            />
          </Animate>
        </Flex>
      </Flex>
      <Flex align="center" className={styles.footerAsset}>
        <Animate
          initial={{ opacity: 0, marginBottom: 100 }}
          animate={{ opacity: 1, marginBottom: 0 }}
          duration={0.25}
          delay={0.05}
        >
          <Image src={footerAssetUrl} alt="An island with two trees" />
        </Animate>
      </Flex>
    </Container>
  );
}

export default Hero;
