import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Hack the 6ix',
  description: 'owo',
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
