import Image from 'next/image';
import Animate from '@/components/Animate';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import config from '@/config';
import boat2 from './_assets/green-boat.png';
import footerAssetUrl from './_assets/lonely-island.png';
import boat1 from './_assets/orange-boat.png';
import mainAssetUrl from './_assets/tv-island.png';
import Banner from './_components/Banner';
import styles from './page.module.scss';

const words = ['network.', 'learn.', 'create.', 'collaborate.', 'innovate.'];

function Hero() {
  return (
    <Container
      innerProps={{ className: styles.content }}
      as="section"
      id="hero"
    >
      <h1 className="hidden">Hack the 6ix 2024 landing page</h1>
      <Flex direction="column" className={styles.container} gap="2x-big">
        <Animate duration={0.8}>
          <Flex direction="column" gap="sm">
            <Text textType="paragraph-lg" textColor="neutral-600" as="p">
              AUG 2-4, 2024 • In-person event
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

        <Animate duration={0.55} delay={0.3}>
          <Flex direction="column" gap="x-sm">
            <Text
              textType="paragraph-lg"
              textColor="secondary-900"
              textWeight="medium"
              as="p"
            >
              Hacker applications are now open! Submission closes July 18th,
              2024 @ 11:59 PM.
            </Text>
            <Button
              className={styles.button}
              buttonColor="primary"
              buttonType="primary"
              type="submit"
              as="a"
              href="https://dash.hackthe6ix.com/"
              target="_blank"
            >
              Apply now
            </Button>
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
        <Flex align="center" className={styles.boat1}>
          <Animate
            initial={{ x: 0 }}
            animate={{ x: -500 }}
            duration={50}
            delay={1}
            repeat={Infinity}
            repeatType="reverse"
            repeatDelay={2}
          >
            <Animate
              initial={{ rotate: 0 }}
              animate={{ rotate: 0.2 }}
              duration={2}
              repeat={Infinity}
              repeatType="reverse"
            >
              <Animate
                initial={{ opacity: 0, marginBottom: 100 }}
                animate={{ opacity: 1, marginBottom: 0 }}
                duration={0.75}
                delay={0.05}
              >
                <Image src={boat1} alt="A tall green boat" />
              </Animate>
            </Animate>
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
      <Flex align="center" className={styles.boat2}>
        <Animate
          initial={{ x: 0 }}
          animate={{ x: 1300 }}
          duration={30}
          delay={1}
          repeat={Infinity}
          repeatType="reverse"
          repeatDelay={2}
        >
          <Animate
            initial={{ rotate: 0 }}
            animate={{ rotate: 2 }}
            duration={2}
            repeat={Infinity}
            repeatType="reverse"
          >
            <Animate
              initial={{ opacity: 0, marginBottom: 100 }}
              animate={{ opacity: 1, marginBottom: 0 }}
              duration={0.75}
              delay={0.05}
            >
              <Image src={boat2} alt="A tall green boat" />
            </Animate>
          </Animate>
        </Animate>
      </Flex>
    </Container>
  );
}

export default Hero;
