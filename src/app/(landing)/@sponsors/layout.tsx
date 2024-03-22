import { ReactNode } from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './layout.module.scss';

interface SponsorsLayoutProps {
  companies: ReactNode;
  testimonies: ReactNode;
}

function SponsorsLayout({ companies, testimonies }: SponsorsLayoutProps) {
  return (
    <>
      <Container as="section">
        <Flex direction="column" align="center" gap="2x-lg">
          <Flex direction="column" align="center" gap="m">
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
            <Button buttonColor="primary" buttonType="primary">
              Become a Sponsor
            </Button>
          </Flex>
          {companies}
        </Flex>
      </Container>
      <Container as="section" innerProps={{ className: styles.testimonies }}>
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
        </Flex>
      </Container>
    </>
  );
}

export default SponsorsLayout;
