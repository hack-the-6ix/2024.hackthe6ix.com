import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Hack the 6ix',
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>Nav</nav>
      <main>{children}</main>
    </>
  );
}
