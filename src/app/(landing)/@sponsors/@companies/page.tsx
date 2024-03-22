'use client';

import { CSSProperties, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import * as R from 'ramda';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import treasureChest from '../_assets/treasure.png';
import * as logos from './_assets';
import styles from './page.module.scss';

type Sponsor = {
  logo: StaticImageData;
  name: string;
  url: string;
};

const sponsors: Sponsor[] = R.repeat(
  {
    logo: logos.bmoLogo,
    url: 'https://www.bmo.com',
    name: 'Bank of Montreal',
  },
  8,
);

const getTriangleWidth = (adjacent: number, angle: number) => {
  const opposite = adjacent * Math.tan(angle);
  return opposite * 2;
};

const rowHeights = [7, 6, 5, 4];
const height = 40;
const angle = 42 * (Math.PI / 180);
const gap = 2;

const rowWidths = rowHeights.map((_, i) => {
  const ii = i + 1;
  const adjacent = height - R.sum(R.take(i, rowHeights)) - ii * gap;
  return getTriangleWidth(adjacent, angle);
});

const arrangeSponsors = () => {
  const rowSpecs = R.zipWith(
    (height, width) => ({ height, width }),
    rowHeights,
    rowWidths,
  );
  return sponsors.reduce(
    (acc, sponsor) => {
      if (!rowSpecs.length) {
        console.error('Out of space, skipping item');
        return acc;
      }

      const ratio = sponsor.logo.width / sponsor.logo.height;
      let expectedWidth = ratio * rowSpecs[0].height + gap;

      // No space, next row
      if (expectedWidth > rowSpecs[0].width) {
        if (rowSpecs.length === 1) {
          console.error('Out of space, skipping item');
          return acc;
        }
        rowSpecs.shift();
        acc.push([]);
        expectedWidth = ratio * rowSpecs[0].height + gap;
      }

      // Store position of sponsor
      rowSpecs[0].width -= expectedWidth;
      R.last(acc)!.push(sponsor);
      return acc;
    },
    [[]] as Sponsor[][],
  );
};

function Companies() {
  const arrangedSponsors = useMemo(arrangeSponsors, []);
  return (
    <Flex
      direction="column"
      align="center"
      gap="3x-big"
      style={
        {
          height: `${height}rem`,
          width: `${getTriangleWidth(height, angle)}rem`,
        } as CSSProperties
      }
      className={styles.container}
    >
      {arrangedSponsors.map((row, j) => (
        <Flex
          justify="space-evenly"
          align="center"
          key={j}
          style={
            {
              maxHeight: `${rowHeights[j]}rem`,
              height: `${rowHeights[j]}rem`,
              maxWidth: `${rowWidths[j]}rem`,
              width: `${rowWidths[j]}rem`,
              gap: 0,
            } as CSSProperties
          }
        >
          {row.map((item, i) => (
            <Flex
              key={i}
              as="a"
              className={styles.logo}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className={styles.logo}
                alt={`${item.name} logo`}
                src={item.logo}
                height={100}
                key={i}
              />
            </Flex>
          ))}
        </Flex>
      ))}
      <Flex className={styles.footer} direction="column" gap="m">
        <Text
          textType="paragraph-lg"
          textWeight="medium"
          textColor="secondary-900"
        >
          ...and more to come
        </Text>
        <Image src={treasureChest} width="100" alt="treasure chest" />
      </Flex>
    </Flex>
  );
}

export default Companies;
