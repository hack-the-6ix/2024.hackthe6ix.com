import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import mlhBanner from '@/assets/mlh-banner.svg';

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
      <a
        id="mlh-trust-badge"
        style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue"
        target="_blank"
      >
        <Image src={mlhBanner} alt="MLH 2024 season banner" />
      </a>
      <nav>Nav</nav>
      <main>
        {hero}
        {about}
        {why}
        {sponsors}
        {faq}
        {contact}
      </main>
    </>
  );
}
