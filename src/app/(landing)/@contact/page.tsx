import Image from 'next/image';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import ContactForm from './_components/ContactForm';
import styles from './page.module.scss';

function Contact() {
  return (
    <Container className={styles.container} as="section">
      <Flex direction="column" align="start" gap="big" className={styles.form}>
        <Flex direction="column" align="start" gap="2x-sm">
          <Text
            textColor="primary-600"
            textType="heading-lg"
            textWeight="semi-bold"
            textAlign="start"
            as="h2"
          >
            Still have <Text textColor="warning-400">questions?</Text>
          </Text>
          <Text
            textColor="primary-600"
            textType="paragraph-lg"
            textWeight="medium"
            textAlign="start"
            as="p"
          >
            Send your question our way and we&apos;ll get back to you!
          </Text>
        </Flex>
        <ContactForm />
      </Flex>
    </Container>
  );
}

export default Contact;
