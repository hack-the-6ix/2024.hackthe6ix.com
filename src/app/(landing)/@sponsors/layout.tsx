'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import altura from './_assets/altura.png';
import balsamiq from './_assets/balsamiq.png';
import bestbuy from './_assets/bestbuy.png';
import blue from './_assets/blue.png';
import cs from './_assets/cs.png';
import echo from './_assets/echo.png';
import fdm from './_assets/fdm.png';
import incogni from './_assets/incogni.png';
import nordpass from './_assets/nordpass.png';
import nordvpn from './_assets/nordvpn.png';
import rotman1 from './_assets/rotman1.png';
import rotman2 from './_assets/rotman2.png';
import shark from './_assets/shark.png';
import submarine from './_assets/submarine.png';
import taskade from './_assets/taskade.png';
import turtle from './_assets/turtle.png';
import voiceflow from './_assets/voiceflow.png';
import xyz from './_assets/xyz.png';
import styles from './layout.module.scss';

interface SponsorsLayoutProps {
  companies: ReactNode;
  testimonies: ReactNode;
}

function SponsorsLayout({ companies, testimonies }: SponsorsLayoutProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSize = containerWidth / 2;

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

          {/* {companies} */}
          <Container className={styles.container}>
            <Flex gap="2x-big" align="start" justify="between" direction="row">
              <Image
                src={cs}
                className={styles.cs}
                height={imageSize}
                alt="cs sponsor"
              />
              <Text
                textColor="secondary-900"
                textType="paragraph-lg"
                textWeight="medium"
                textAlign="start"
                as="p"
                className={styles.text}
                style={{ width: '50%' }}
              >
                Intact Insurance is Canada&apos;s largest home, auto and
                business insurance company, the choice of more than four million
                consumers. Its coast-to-coast presence and its strong
                relationship with insurance brokers mean the company can provide
                the outstanding service, comfort and continuity customers
                deserve.
                <br />
                <br />
                Intact Insurance is a member company of Intact Financial
                Corporation (TSX: IFC), the largest provider of property and
                casualty insurance in Canada and a leading provider of specialty
                insurance in North America.
                <br />
                <br />
                For news on Intact,{' '}
                <a
                  href="https://www.torontomu.ca/cs/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  https://www.torontomu.ca/cs/.
                </a>
              </Text>
            </Flex>
          </Container>

          <Container as="section" innerProps={{ className: styles.imageGrid }}>
            <Flex direction="column" align="center" gap="lg">
              <Flex direction="row" gap="lg" className="row1">
                <Image
                  src={altura}
                  className={styles.cs}
                  height="300"
                  alt="altura sponsor"
                />
                <Image
                  src={fdm}
                  className={styles.cs}
                  height="300"
                  alt="fdm sponsor"
                />
              </Flex>
              <Flex direction="row" gap="lg" className="row2">
                <Image
                  src={bestbuy}
                  className={styles.cs}
                  height="400"
                  alt="bestbuy sponsor"
                />
                <Image
                  src={rotman1}
                  className={styles.cs}
                  height="400"
                  alt="rotman1 sponsor"
                />
                <Image
                  src={rotman2}
                  className={styles.cs}
                  height="400"
                  alt="rotman2 sponsor"
                />
              </Flex>
              <Flex direction="row" gap="lg" className="row3">
                <Image
                  src={blue}
                  className={styles.cs}
                  height="400"
                  alt="blue logo sponsor"
                />
                <Image
                  src={xyz}
                  className={styles.cs}
                  height="400"
                  alt="xyz sponsor"
                />
                <Image
                  src={echo}
                  className={styles.cs}
                  height="400"
                  alt="echo sponsor"
                />
                <Image
                  src={taskade}
                  className={styles.cs}
                  height="400"
                  alt="taskade sponsor"
                />
                <Image
                  src={voiceflow}
                  className={styles.cs}
                  height="400"
                  alt="voiceflow sponsor"
                />
              </Flex>
              <Flex direction="row" gap="lg" className="row4">
                <Image
                  src={nordpass}
                  className={styles.cs}
                  height="400"
                  alt="nordpass sponsor"
                />
                <Image
                  src={incogni}
                  className={styles.cs}
                  height="400"
                  alt="incogni sponsor"
                />
                <Image
                  src={nordvpn}
                  className={styles.cs}
                  height="400"
                  alt="nordvpn sponsor"
                />
                <Image
                  src={balsamiq}
                  className={styles.cs}
                  height="400"
                  alt="balsamiq sponsor"
                />
              </Flex>
            </Flex>
          </Container>
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
