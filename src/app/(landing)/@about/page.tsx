import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import Innovations from './_components/Innovations';
import styles from './about.module.scss';

function AboutPage() {
  return (
    <>
      <Container as="section" className={styles.frame} id="about">
        <Flex
          align="center"
          direction="column"
          className={styles.container}
          gap="2x-big"
        >
          <Text
            textType="heading-lg"
            textColor="secondary-900"
            textWeight="semi-bold"
            textAlign="center"
            as="h2"
          >
            Join us for an{' '}
            <Text textColor="warning-400" textWeight="bold">
              unforgettable
            </Text>{' '}
            weekend
          </Text>
          <Text
            className={styles.content}
            textType="paragraph-lg"
            textColor="secondary-900"
            textWeight="medium"
            textAlign="center"
            as="p"
          >
            Hack the 6ix is Toronto&apos;s largest summer student-run,
            not-for-profit hackathon now in its <strong>tenth iteration</strong>
            ! With a diverse and talented community of hackers, Hack the 6ix is
            a key player in the Toronto tech ecosystem. We&apos;re empowering
            students to present their ideas of the future.
          </Text>
        </Flex>
      </Container>
      <Innovations />
    </>
  );
}

export default AboutPage;
