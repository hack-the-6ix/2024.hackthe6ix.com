'use client';

import { ElementType, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import logo from '@/assets/logo.png';
import mlhBanner from '@/assets/mlh-banner.svg';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import styles from './Navigation.module.scss';

const navLinks = [
  {
    label: 'About',
    hash: 'about',
  },
  {
    label: 'Why',
    hash: 'why',
  },
  {
    label: 'Sponsors',
    hash: 'sponsors',
  },
  {
    label: 'FAQ',
    hash: 'faq',
  },
  {
    label: 'Contact Us',
    hash: 'contact',
    cta: true,
  },
] as { label: string; hash: string; cta?: boolean }[];

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Container
      as="nav"
      className={styles.container}
      innerProps={{
        as: Flex as ElementType,
        className: styles.nav,
        justify: 'space-between',
        align: 'center',
        gap: 'm',
      }}
    >
      <Image src={logo} alt="HT6 logo" height="48" />
      <Flex className={styles.content} justify="flex-end" gap="3x-lg">
        <Flex
          onClickCapture={() => setShowNav(false)}
          className={cn(showNav && styles.show, styles.links)}
          gap="x-sm"
        >
          {navLinks.map(({ label, hash, cta }, i) => (
            <Button
              buttonColor={cta ? 'primary' : 'secondary'}
              buttonType={cta ? 'primary' : 'tertiary'}
              className={styles.link}
              href={{ hash }}
              as={Link}
              key={i}
            >
              {label}
            </Button>
          ))}
        </Flex>
        <Flex
          onClick={() => setShowNav(true)}
          buttonColor="secondary"
          className={styles.menu}
          align="center"
          gap="sm"
          as={Button}
        >
          <span>Navigate</span>
          <Icon icon="menu" size="md" />
        </Flex>
        <a
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue"
          className={styles.banner}
          target="_blank"
        >
          <Image width="64" src={mlhBanner} alt="MLH 2024 season banner" />
        </a>
      </Flex>
    </Container>
  );
}

export default Navigation;
