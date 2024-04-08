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
  socialsFooter: {
    instagram: {
      link: 'https://instagram.com/hackthe6ix',
      icon: FaInstagram,
    },
    twitter: {
      link: 'https://twitter.com/hackthe6ix',
      icon: FaTwitter,
    },
    facebook: {
      link: 'https://facebook.com/HackThe6ix',
      icon: FaFacebook,
    },
    linkedin: {
      link: 'https://linkedin.com/company/hackthe6ixofficial',
      icon: FaLinkedinIn,
    },
  },
} as const;
