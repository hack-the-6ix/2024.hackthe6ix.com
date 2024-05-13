import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Footer from './_components/Footer';
import Navigation from './_components/Navigation';

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
      <Navigation />
      <main>
        {hero}
        {about}
        {why}
        {/* {sponsors} */}
        {faq}
        {contact}
      </main>
      <Footer />
    </>
  );
}
