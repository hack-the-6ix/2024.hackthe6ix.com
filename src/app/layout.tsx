import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Hack the 6ix | Torontos Largest Summer Hackathon',
  description:
    'Hack the 6ix is the largest summer student-run, not-for-profit hackathon now in its 10th iteration, based in Toronto. Join hundreds of students from diverse backgrounds, disciplines, and skill levels to work together on projects that have real-world impact.',
  keywords: ['hackathon', 'toronto', 'students', 'tech', 'innovation'],
  openGraph: {
    title: 'Hack the 6ix | Torontos Largest Summer Hackathon',
    description:
      'Hack the 6ix is the largest summer student-run, not-for-profit hackathon now in its 10th iteration, based in Toronto. Join hundreds of students from diverse backgrounds, disciplines, and skill levels to work together on projects that have real-world impact.',
    url: 'https://hackthe6ix.com',
    siteName: 'Hack the 6ix',
    images: [
      {
        url: './banner.png',
        width: 1200,
        height: 630,
        alt: 'Hack the 6ix banner showcasing diverse students collaborating on innovative projects.',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hack the 6ix | Torontos Largest Summer Hackathon',
    description:
      'Hack the 6ix is the largest summer student-run, not-for-profit hackathon now in its 10th iteration, based in Toronto. Join hundreds of students from diverse backgrounds, disciplines, and skill levels to work together on projects that have real-world impact.',
    images: ['./banner.png'],
    creator: '@hackthe6ix',
  },
  icons: {
    icon: './icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <Script strategy="lazyOnload" id="animate">
        {`
          window.setTimeout(() => {
            window.requestAnimationFrame(() => {
              document.documentElement.classList.add("animate");
            });
          }, 50);
        `}
      </Script>
    </html>
  );
}
