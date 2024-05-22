import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Hack the 6ix',
  description:
    'Hack the 6ix is the largest summer student-run, not-for-profit hackathon now in its ninth iteration, based in Toronto. Join hundreds of students from diverse backgrounds, disciplines, and skill levels to work together on projects that have real-world impact.',
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
