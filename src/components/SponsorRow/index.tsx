import Image from 'next/image';
import Link from 'next/link';
import Flex from '../Flex';
import styles from './SponsorRow.module.css';

export type Sponsor = {
  link: string;
  img: string; // absolute path to the logo image
  alt: string;
};

export type SponsorRowProps = {
  size?: number;
  sponsors?: Sponsor[];
};

function SponsorRow({ size = 300, sponsors = [], ...props }: SponsorRowProps) {
  return (
    <Flex direction="row" gap="lg" className={styles.row}>
      {sponsors.map((sponsor, index) => (
        <Flex direction="column" key={index} {...props}>
          <Link href={sponsor.link} target="_blank"></Link>
          <Image
            src={sponsor.img}
            className={styles.sponsor}
            height={size}
            alt={sponsor.alt}
          />
        </Flex>
      ))}
    </Flex>
  );
}

export default SponsorRow;
