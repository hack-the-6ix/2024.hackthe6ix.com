import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import Text from '@/components/Text';
import config from '@/config';
import bedBackground from './_assets/bed_background.svg?url';
import bedForeground from './_assets/bed_foreground.svg?url';
import shipwreck from './_assets/shipwreck.svg?url';
import styles from './layout.module.scss';

function Contact() {
  return (
    <>
      <Container as="section" innerProps={{ className: styles.contact }}>
        <Image
          src={bedBackground}
          alt=""
          fill
          objectPosition="center bottom"
          className={[styles.bgBackground, styles.bg].join(' ')}
        />
        <Image
          src={bedForeground}
          alt=""
          fill
          objectPosition="center bottom"
          className={[styles.bgForeground, styles.bg].join(' ')}
        />
        <Flex
          direction="row"
          justify="space-between"
          align="stretch"
          className={styles.contactRow}
        >
          <Flex
            direction="column"
            align="start"
            className={styles.emailForm}
            gap="x-big"
          >
            <Flex direction="column" align="start" gap="sm">
              <Text
                textColor="primary-600"
                textType="heading-lg"
                textWeight="semi-bold"
                textAlign="start"
                as="h2"
              >
                Still have <span className={styles.highlight}>questions?</span>
              </Text>
              <Text
                textColor="primary-600"
                textType="paragraph-lg"
                textWeight="medium"
                textAlign="start"
                as="p"
              >
                Send your question our way and we'll get back to you!
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="start"
              className={styles.contactFields}
              gap="sm"
            >
              <Flex
                direction="row"
                align="start"
                gap="sm"
                className={styles.contactFirstRow}
              >
                <Input
                  label="Name"
                  required
                  placeholder="Enter Name"
                  width="50%"
                />
                <Input
                  label="Email"
                  required
                  placeholder="Enter Email"
                  width="50%"
                />
              </Flex>
              <Input
                label="Enter your question"
                required
                placeholder="Send us your questions here!"
                width="100%"
              />
              <Button
                buttonType="primary"
                buttonColor="primary"
                className={styles.contactSubmit}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
          <Flex direction="column" align="end" className={styles.shipColumn}>
            <Image src={shipwreck} alt="" fill objectPosition="center" />
          </Flex>
        </Flex>
        <Flex direction="row" className={styles.footer} align="flex-end">
          <Flex
            direction="column"
            align="left"
            gap="m"
            className={styles.copyright}
          >
            <Text
              textColor="primary-50"
              textType="paragraph-lg"
              textWeight="bold"
              as="p"
              textAlign="start"
            >
              HACK THE 6IX
            </Text>
            <Text
              textColor="primary-50"
              textType="paragraph-lg"
              textWeight="bold"
              as="p"
              textAlign="start"
            >
              &nbsp;© Copyright 2024 Hack the 6ix | Made with ♡ in Toronto
            </Text>
          </Flex>
          <Flex direction="column" align="left" gap="2x-sm">
            <Flex direction="row" gap="m" className={styles.footerLinks}>
              {Object.entries(config.footerLinks).map(([ref, link]) => (
                <Text
                  textColor="primary-50"
                  textType="label"
                  textWeight="semi-bold"
                  as="a"
                  href={link.link}
                  target="_blank"
                  key={ref}
                >
                  {link.text}
                </Text>
              ))}
            </Flex>
            <Flex
              direction="row"
              align="space-between"
              className={styles.socials}
              gap="sm"
            >
              {Object.entries(config.socialsFooter).map(([ref, social]) => (
                <IconButton
                  buttonType="tertiary"
                  buttonDarker
                  rel="noopener noreferrer"
                  icon={social.icon}
                  href={social.link}
                  target="_blank"
                  key={ref}
                  as="a"
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Contact;
