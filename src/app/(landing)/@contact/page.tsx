import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import bedBackground from './_assets/bed_background.svg?url';
import bedForeground from './_assets/bed_foreground.svg?url';
import shipwreck from './_assets/shipwreck.svg?url';
import styles from './layout.module.scss';

function Contact() {
  return (
    <>
      <Container as="section" innerProps={{ className: styles.contact }}>
        <Image
          src={bedBackground}
          alt=""
          fill
          objectPosition="center bottom"
          className={[styles.bgBackground, styles.bg].join(' ')}
        />
        <Image
          src={bedForeground}
          alt=""
          fill
          objectPosition="center bottom"
          className={[styles.bgForeground, styles.bg].join(' ')}
        />
        <Flex direction="row" justify="space-between" align="stretch">
          <Flex direction="column" align="start" className={styles.emailForm}>
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
          <Flex direction="column" align="end" className={styles.shipColumn}>
            <Image src={shipwreck} alt="" fill objectPosition="center" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Contact;
