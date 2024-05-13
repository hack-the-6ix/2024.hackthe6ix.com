import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';

export default {
  startAt: new Date('2024-08-18T00:00:01.000-04:00'),
  endAt: new Date('2024-08-20T23:59:59.000-04:00'),
  socials: {
    facebook: {
      link: 'https://facebook.com/HackThe6ix',
      icon: FaFacebook,
    },
    instagram: {
      link: 'https://instagram.com/hackthe6ix',
      icon: FaInstagram,
    },
    linkedin: {
      link: 'https://linkedin.com/company/hackthe6ixofficial',
      icon: FaLinkedinIn,
    },
    twitter: {
      link: 'https://twitter.com/hackthe6ix',
      icon: FaTwitter,
    },
  },
  nav: {
    links: [
      {
        label: 'About',
        hash: 'about',
      },
      {
        label: 'Why',
        hash: 'why',
      },
      // {
      //   label: 'Sponsors',
      //   hash: 'sponsors',
      // },
      {
        label: 'FAQ',
        hash: 'faq',
      },
      {
        label: 'Contact Us',
        hash: 'contact',
        cta: true,
      },
    ] as { label: string; hash: string; cta?: boolean }[],
  },
  footer: {
    links: [
      {
        link: 'https://cdn.hackthe6ix.com/privacy-policy.pdf',
        text: 'Privacy Policy',
      },
      {
        link: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
        text: 'MLH Code of Conduct',
      },
      {
        link: 'https://2023.hackthe6ix.com',
        text: '2023 Website',
      },
      {
        link: 'https://google.com',
        text: 'COVID-19 Safety',
      },
    ] as const,
  },
} as const;
