import { ElementType, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import mlhBanner from '@/assets/mlh-banner.svg';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Home | Hack the 6ix',
};

export interface LandingLayoutProps {
  about: ReactNode;
  contact: ReactNode;
  faq: ReactNode;
  hero: ReactNode;
  sponsors: ReactNode;
  why: ReactNode;
}

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

export default function LandingLayout({
  about,
  contact,
  faq,
  hero,
  sponsors,
  why,
}: LandingLayoutProps) {
  return (
    <>
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
        <Flex justify="flex-end" gap="3x-lg">
          <Flex gap="x-sm">
            {navLinks.map(({ label, hash, cta }, i) => (
              <Button
                buttonColor={cta ? 'primary' : 'secondary'}
                buttonType={cta ? 'primary' : 'tertiary'}
                href={{ hash }}
                as={Link}
                key={i}
              >
                {label}
              </Button>
            ))}
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
      <main>
        {hero}
        {about}
        {why}
        {sponsors}
        {faq}
        {contact}
      </main>
      <Toaster />
    </>
  );
}
