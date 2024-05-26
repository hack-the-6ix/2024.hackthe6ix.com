'use client';

import { ElementType, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import logo from '@/assets/logo.png';
import mlhBanner from '@/assets/mlh-banner.svg?url';
import Animate from '@/components/Animate';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import config from '@/config';
import styles from './Navigation.module.scss';

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(document.body.scrollTop !== 0);
    window.addEventListener('scroll', handler, true);
    handler();

    return () => {
      window.removeEventListener('scroll', handler, true);
    };
  }, []);

  return (
    <Animate delay={0.5} duration={0.5}>
      <Container
        as="nav"
        className={cn(scrolled && styles.scrolled, styles.container)}
        innerProps={{
          as: Flex as ElementType,
          className: styles.nav,
          justify: 'space-between',
          align: 'center',
          gap: 'm',
        }}
      >
        <a href="#hero">
          <Image src={logo} alt="HT6 logo" height="48" />
        </a>
        <Flex className={styles.content} justify="flex-end" gap="lg">
          <Flex
            onClickCapture={() => setShowNav(false)}
            className={cn(showNav && styles.show, styles.links)}
            gap="x-sm"
          >
            {config.nav.links.map(({ label, hash, cta }, i) => (
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
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
            className={styles.banner}
            target="_blank"
          >
            <Image width="64" src={mlhBanner} alt="MLH 2025 season banner" />
          </a>
        </Flex>
      </Container>
    </Animate>
  );
}

export default Navigation;
