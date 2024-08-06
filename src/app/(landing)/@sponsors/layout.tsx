import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import shark from './_assets/shark.png';
import submarine from './_assets/submarine.png';
import turtle from './_assets/turtle.png';
import styles from './layout.module.scss';

interface SponsorsLayoutProps {
  companies: ReactNode;
  rockstar: ReactNode;
  testimonies: ReactNode;
}

function SponsorsLayout({
  companies,
  rockstar,
  testimonies,
}: SponsorsLayoutProps) {
  return (
    <>
      <Container
        as="section"
        innerProps={{ className: styles.sponsors }}
        id="sponsors"
      >
        <Flex direction="column" align="center" gap="2x-lg">
          <Flex
            direction="column"
            align="center"
            gap="m"
            className={styles.anchor}
          >
            <Text
              textColor="secondary-900"
              textType="heading-lg"
              textWeight="semi-bold"
              textAlign="center"
              as="h2"
            >
              Sponsor an{' '}
              <Text
                textType="heading-lg"
                textColor="warning-400"
                textWeight="extra-bold"
              >
                exclusive weekend
              </Text>
            </Text>
            <Text
              textColor="secondary-900"
              textType="paragraph-lg"
              textWeight="medium"
              textAlign="center"
              as="p"
            >
              Special thanks to our current sponsors for supporting Hack the 6ix
              and the incubation of big ideas. Want to help us make it even
              better?
            </Text>
            <Button
              buttonColor="primary"
              buttonType="primary"
              href={'mailto:sponsor@hackthe6ix.com'}
              as={Link}
              target="_blank"
              rel="noreferrer"
            >
              Become a Sponsor
            </Button>
            <Image
              src={submarine}
              className={styles.submarine}
              height="200"
              alt="submarine"
            />
          </Flex>
          {rockstar}
          {companies}
        </Flex>
      </Container>
      <Container
        as="section"
        innerProps={{ className: cn(styles.testimonies, styles.anchor) }}
      >
        <Flex direction="column" align="center" gap="x-lg">
          <Flex direction="column" align="center" gap="m">
            <Text
              textColor="secondary-900"
              textType="heading-lg"
              textWeight="semi-bold"
              textAlign="center"
              as="h2"
            >
              Ready to make a{' '}
              <Text
                textType="heading-lg"
                textColor="warning-400"
                textWeight="extra-bold"
              >
                difference?
              </Text>
            </Text>
            <Text
              textColor="secondary-900"
              textType="paragraph-lg"
              textWeight="medium"
              textAlign="center"
              as="p"
            >
              As we embark on our tenth iteration, our mission is to inspire
              young hackers to tackle complex challenges and explore the endless
              possibilities of technology.
            </Text>
          </Flex>
          {testimonies}
          <Image width="200" src={shark} alt="shark" className={styles.shark} />
          <Flex className={styles.turtleBob}>
            <Image
              width="200"
              src={turtle}
              alt="turtle"
              className={styles.turtle}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default SponsorsLayout;
