import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import bed from './_assets/bed.svg?url';
import styles from './layout.module.scss';

function Contact() {
  return (
    <>
      <Container as="section" innerProps={{ className: styles.contact }}>
        <Image
          src={bed}
          alt=""
          fill
          objectPosition="center top"
          className={styles.bgForeground}
        />
        <Flex direction="column" align="start" gap="2x-lg">
          <Text
            textColor="secondary-900"
            textType="heading-lg"
            textWeight="semi-bold"
            textAlign="start"
            as="h2"
          >
            Contact Us
          </Text>
        </Flex>
      </Container>
    </>
  );
}

export default Contact;
