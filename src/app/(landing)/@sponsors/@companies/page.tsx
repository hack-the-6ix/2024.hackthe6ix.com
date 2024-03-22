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
    url: 'https://meraki.cisco.com',
    name: 'Cisco Meraki',
  },
  10,
);

const getTriangleWidth = (adjacent: number, angle: number) => {
  const opposite = adjacent * Math.tan(angle);
  return opposite * 2;
};

const arrangeSponsors = (
  rows: number[],
  angle: number,
  height: number,
  gap: number,
) => {
  const rowSpecs = rows.map((rowHeight, i) => {
    const ii = i + 1;
    const adjacent = height - R.sum(R.take(ii, rows)) - ii * gap;
    return { height: rowHeight, width: getTriangleWidth(adjacent, angle) };
  });

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

const rowHeights = [7, 6, 5, 4, 3];
const height = 40;
const angle = 50 * (Math.PI / 180);

function Companies() {
  const arrangedSponsors = useMemo(
    () => arrangeSponsors(rowHeights, angle, height, 1),
    [],
  );
  return (
    <Flex
      direction="column"
      align="center"
      gap="m"
      style={
        {
          height: `${height}rem`,
          width: `${getTriangleWidth(height, angle)}rem`,
        } as CSSProperties
      }
      className={styles.container}
    >
      {arrangedSponsors.map((row, j) => (
        <Flex align="center" key={j} gap="m">
          {row.map((item, i) => (
            <Image
              src={item.logo}
              height={rowHeights[j] * 16}
              key={i}
              alt={`${item.name} logo`}
            />
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
