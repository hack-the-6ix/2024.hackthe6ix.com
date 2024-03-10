import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import '../styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

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
      <Script strategy="lazyOnload" id="animate">
        {`
          window.setTimeout(() => {
            window.requestAnimationFrame(() => {
              document.documentElement.classList.add("animate");
            });
          }, 50);
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
