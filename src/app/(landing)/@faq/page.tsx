'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import styles from './faq.module.scss';

interface FaqQuestionSection {
  label: string;
  items: {
    question: ReactNode;
    answer: ReactNode;
  }[];
}

const faqQuestions: FaqQuestionSection[] = [
  {
    label: 'General',
    items: [
      {
        question: 'What is Hack the 6ix?',
        answer:
          'Hack the 6ix is an in-person hackathon where “hackers” (participants) design, develop, and pitch a software, hardware, or any kind of tech project built from scratch over the course of 36 hours. Over the course of the weekend, hackers will have opportunities to network, learn, and collaborate through workshops, panels, activities, and more.',
      },
      {
        question:
          'What kind of workshops, talks, and activities will there be at Hack the 6ix?',
        answer:
          'We’ll be hosting a variety of workshops ranging from introductory to advanced topics facilitated by our amazing sponsors and mentors. In addition, there will also be interesting tech talks by industry leaders from different companies. For breaks, we’ll have a ton of fun activities planned for you, such as games, contests, and more! Hack the 6ix is much more than just a hackathon – we want it to be an event that you’ll thoroughly enjoy while expanding your skillset and network.',
      },
      {
        question: 'Do I need to know how to code?',
        answer:
          'Nope! Our mentors and workshops make sure that even if you’re new to coding, you’ll definitely pick up enough skills at the event to make a project. In addition, if you’re a designer or business student, your design and pitching skills are also very valuable!',
      },
    ],
  },
  {
    label: 'Application',
    items: [
      {
        question: 'When do hacker applications open?',
        answer: (
          <>
            Hack the 6ix applications for 2024 will open soon! Subscribe{' '}
            <Link href="#s">here</Link> if you’d like us to notify you when
            applications are out next year!
          </>
        ),
      },
      {
        question: 'Am I eligible to participate?',
        answer:
          'Any high-school students, post-secondary students or recent graduates (>1 years of graduating) are eligible to participate in Hack the 6ix.',
      },
      {
        question: 'What if I don’t have a team or idea?',
        answer:
          'Don’t worry, you will have a chance to form or join a team by messaging the participant groups/chats that we’ll put you in during the weeks leading up to the weekend, as well as through team formation activities during the event.',
      },
    ],
  },
  {
    label: 'Preparation',
    items: [
      {
        question: 'How do I get to Hack the 6ix?',
        answer:
          'Venue and location details will be given to attendees closer to the date of the event.',
      },
      {
        question: 'What should I bring?',
        answer:
          'Make sure to bring your laptop (or desktop) and a piece of valid student ID or government ID! You can also bring a pillow and blanket if you want to get comfy. Everything else will be provided for you!',
      },
      {
        question: 'Will there be hardware provided at the event?',
        answer:
          'We have a variety of hardware that can be borrowed at our hardware station for free, including Raspberry Pi’s, Arduinos, sensors, and breadboards. Due to limited quantity, hardware will be lent out on a first come, first serve basis. If you are unsure whether or not we have a certain piece of hardware that you will need for your hack, bring your own to the event!',
      },
      {
        question: 'How much does it cost to attend?',
        answer:
          'Absolutely nothing! Hack the 6ix is a completely free event run by a non-profit organization. All food, resources, and accommodations for hacking for the entire event will be provided free of charge.',
      },
    ],
  },
  {
    label: 'Health and Safety',
    items: [
      {
        question: 'What COVID-19 precautions will be in place at the event?',
        answer:
          'We will be following the guidance put forth by the Ontario Government for large events at the time of the event. More details will follow closer to the event and any major changes to guidelines or precautions will be communicated to event participants.',
      },
    ],
  },
];

function Faq() {
  const [active, setActive] = useState(0);

  return (
    <Container as="section" innerProps={{ className: styles.container }}>
      <Flex align="center" direction="column" gap="x-lg">
        <Text
          textColor="secondary-900"
          textType="heading-lg"
          textWeight="semi-bold"
          textAlign="center"
          as="h2"
        >
          Frequently asked{' '}
          <Text textType="heading-lg" textColor="warning-400" textWeight="bold">
            questions
          </Text>
        </Text>
        <Flex
          className={styles.buttons}
          direction="row"
          justify="center"
          align="center"
          inline
          gap="lg"
        >
          {faqQuestions.map(({ label }, idx) => (
            <Button
              onClick={() => setActive(idx)}
              buttonColor={active === idx ? 'active' : 'primary'}
              key={idx}
            >
              {label}
            </Button>
          ))}
        </Flex>

        <Flex direction="column" gap="big">
          {faqQuestions[active].items.map((faq, index) => (
            <Flex
              direction="column"
              gap="sm"
              key={index}
              className={styles.item}
            >
              <Text
                textColor="primary-700"
                textType="paragraph-lg"
                textWeight="semi-bold"
                as="h3"
              >
                {faq.question}
              </Text>
              <Text
                textColor="secondary-700"
                textType="paragraph-sm"
                textWeight="normal"
                as="p"
              >
                {faq.answer}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Faq;
