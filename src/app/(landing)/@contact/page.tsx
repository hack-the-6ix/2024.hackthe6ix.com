import Link from 'next/link';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Text from '@/components/Text';
import config from '@/config';
import ContactForm from './_components/ContactForm';
import styles from './page.module.scss';

const links = [
  {
    label: 'Privacy Policy',
    href: '#privacy',
  },
  {
    label: 'MLH Code of Conduct',
    href: '#mlh',
  },
  {
    label: '2023 Website',
    href: '#2023',
  },
  {
    label: 'Covid - 19 Safety',
    href: '#covid',
  },
];

function Contact() {
  return (
    <Container innerProps={{ className: styles.contact }}>
      <Flex direction="column" gap="3x-big" as="section">
        {/* Contact section */}
        <Flex
          direction="column"
          align="start"
          gap="big"
          className={styles.form}
        >
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
        {/* Lower sections */}
        <Flex justify="space-between" as="footer" wrap>
          <Flex direction="column">
            <Text textType="paragraph-lg" textWeight="bold">
              HACK THE 6IX
            </Text>
            <Text textType="paragraph-lg" textWeight="semi-bold">
              © Copyright 2024 Hack the 6ix | Made with ♡ in Toronto
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex>
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={idx}
                >
                  {link.label}
                </Link>
              ))}
            </Flex>
            <Flex>
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
                  as={Link}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Contact;
