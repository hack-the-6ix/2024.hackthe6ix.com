import Image from 'next/image';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import bubbles_bottom from '../_assets/bubbles_bottom.png';
import bubbles_left from '../_assets/bubbles_left.png';
import bubbles_right from '../_assets/bubbles_right.png';
import top_bubble from '../_assets/top_bubble.png';
import styles from './page.module.scss';

function Statistics() {
  return (
    <Flex direction="column" className={styles.content}>
      <Image src={top_bubble} className={styles.top_bubble} alt="" />
      <Text
        textColor="secondary-900"
        textType="heading-lg"
        textWeight="semi-bold"
        textAlign="start"
        as="h2"
        className={styles.header}
      >
        Our previous year in <span className={styles.highlight}>numbers</span>
        ...
      </Text>
      <Flex direction="row" className={styles.container}>
        <div className={styles.img_container}>
          <div className={styles.hackers}>
            <Text
              textColor="secondary-900"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <span className={styles.highlight_bold}>440+</span> Hackers
            </Text>
          </div>
          <div className={styles.projects}>
            <Text
              textColor="secondary-900"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <span className={styles.highlight_bold}>50+</span> Projects
              Submitted
            </Text>
          </div>
          <Image
            src={bubbles_left}
            className={styles.bubbles_left}
            alt="bubbles on the left"
          />
        </div>
        <div className={styles.img_container}>
          <div className={styles.mentors}>
            <Text
              textColor="secondary-900"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <span className={styles.highlight_bold}>15</span> Mentors
            </Text>
          </div>
          <div className={styles.prizes}>
            <Text
              textColor="secondary-900"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <span className={styles.highlight_bold}>$15k</span> in Prizes
            </Text>
          </div>
          <div className={styles.schools}>
            <Text
              textColor="secondary-900"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <span className={styles.highlight_bold}>78</span> Schools
            </Text>
          </div>
          <Image
            src={bubbles_right}
            className={styles.bubbles_right}
            alt="bubbles on the right"
          />
        </div>
      </Flex>
      <Image
        src={bubbles_bottom}
        className={styles.bubbles_bottom}
        alt="bubbles on the bottom"
      />
    </Flex>
  );
}

export default Statistics;
