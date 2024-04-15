import { CSSProperties, ElementType } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Text from '@/components/Text';
import config from '@/config';
import styles from './Footer.module.scss';

const buttonOverride = {
  '--button-color': 'var(--shade-0)',
  '--button-color-hover': 'var(--warning-300)',
  '--button-color-active': 'var(--warning-400)',
} as CSSProperties;

function Footer() {
  return (
    <Container
      className={styles.container}
      innerProps={{
        className: styles.content,
        as: Flex as ElementType,
        justify: 'space-between',
        align: 'flex-end',
        wrap: true,
        gap: 'big',
      }}
      as="footer"
    >
      <Flex direction="column" gap="m">
        <Text
          textType="paragraph-lg"
          textWeight="bold"
          textColor="shade-0"
          as="p"
        >
          HACK THE 6IX
        </Text>
        <Text
          textType="paragraph-lg"
          textWeight="semi-bold"
          textColor="shade-0"
          as="p"
        >
          © Copyright 2024 Hack the 6ix | Made with ♡ in Toronto
        </Text>
      </Flex>
      <Flex direction="column" gap="x-sm">
        <Flex gap="lg" align="center">
          {config.footer.links.map(({ text, link }, idx) => (
            <Button
              style={buttonOverride}
              buttonType="tertiary"
              className={styles.link}
              as={Link}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={idx}
            >
              {text}
            </Button>
          ))}
        </Flex>
        <Flex gap="2x-sm" className={styles.socials}>
          {Object.entries(config.socials).map(([ref, social]) => (
            <IconButton
              buttonType="tertiary"
              style={buttonOverride}
              rel="noopener noreferrer"
              icon={social.icon}
              href={social.link}
              target="_blank"
              key={ref}
              as="a"
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
