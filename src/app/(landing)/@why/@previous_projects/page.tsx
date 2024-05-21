import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import polaroid1 from '../_assets/polaroid_first_place.png';
import polaroid2 from '../_assets/polaroid_second_place.png';
import polaroid3 from '../_assets/polaroid_third_place.png';
import styles from './page.module.scss';

function PreviousProjects() {
  return (
    <Flex direction="column" className={styles.content} gap="lg">
      <Flex direction="column" align="center" className={styles.text} gap="sm">
        <Text
          textColor="secondary-900"
          textType="heading-lg"
          textWeight="semi-bold"
          textAlign="center"
          as="h2"
        >
          Explore Previous <span className={styles.highlight}>Projects</span>
        </Text>
        <Text
          textType="paragraph-lg"
          textColor="secondary-900"
          textWeight="medium"
          textAlign="center"
          as="p"
        >
          In 2023, <strong>51 teams</strong> brought outstanding projects to
          life, showcasing their creativity and problem-solving skills.
        </Text>
        <Button
          buttonColor="primary"
          buttonType="primary"
          href={'https://hackthe6ix2023.devpost.com/'}
          as={Link}
          target="_blank"
          rel="noreferrer"
        >
          See All Projects
        </Button>
      </Flex>

      <Flex direction="row" className={styles.container} gap="2x-big">
        <Flex direction="column">
          <Link href=" https://devpost.com/software/medifly" target="_blank">
            <Image
              src={polaroid2}
              className={styles.polaroid2}
              alt="polariod second place"
            />
          </Link>
        </Flex>
        <Flex direction="column">
          <Link
            href="https://devpost.com/software/professor-puddles"
            target="_blank"
          >
            <Image
              src={polaroid1}
              className={styles.polaroid1}
              alt="polariod first place"
            />
          </Link>
        </Flex>
        <Flex direction="column">
          <Link
            href="https://devpost.com/software/readright-q5exuz"
            target="_blank"
          >
            <Image
              src={polaroid3}
              className={styles.polaroid3}
              alt="polariod third place"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PreviousProjects;
