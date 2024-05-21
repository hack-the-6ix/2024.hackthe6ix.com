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
        2023 in <span className={styles.highlight}>numbers</span>
        ...
      </Text>
      <Flex direction="row" className={styles.container}>
        <div className={styles.img_container}>
          <div className={styles.hackers}>
            <Text
              textColor="primary-700"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <Flex
                direction="column"
                align="center"
              >
                <span className={styles.highlight_bold}>350+</span> 
                <span className={styles.subtitle}>Hackers</span>
              </Flex>
            </Text>
          </div>
          <div className={styles.projects}>
            <Text
              textColor="primary-700"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <Flex
                direction="column"
                align="center"
              >
                <span className={styles.highlight_bold}>50+</span> 
                <span className={styles.subtitle}>Projects Submitted</span>
              </Flex>
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
              textColor="primary-700"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <Flex
                direction="column"
                align="center"
              >
                <span className={styles.highlight_bold}>15</span>
                <span className={styles.subtitle}>Mentors</span>
              </Flex>
            </Text>
          </div>
          <div className={styles.prizes}>
            <Text
              textColor="primary-700"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <Flex
                direction="column"
                align="center"
              >
                <span className={styles.highlight_bold}>$15k</span>
                <span className={styles.subtitle}>in Prizes</span>
              </Flex>
            </Text>
          </div>
          <div className={styles.schools}>
            <Text
              textColor="primary-700"
              textType="subtitle-lg"
              textWeight="medium"
              textAlign="center"
              as="h2"
            >
              <Flex
                direction="column"
                align="center"
              >
                <div className={styles.highlight_bold}>78</div>
                <div className={styles.subtitle}>Schools</div>
              </Flex>
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
