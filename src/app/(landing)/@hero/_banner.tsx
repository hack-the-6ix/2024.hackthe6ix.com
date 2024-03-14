'use client';

import { useEffect, useRef } from 'react';
import Text from '@/components/Text';
import styles from './banner.module.scss';

export interface BannerProps {
  words: string[];
}
export default function Banner({ words }: BannerProps) {
  const wordsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const max = wordsRef.current.length;
    let idx = 1;
    const ref = window.setInterval(() => {
      const ref = wordsRef.current[idx];

      idx = (idx + 1) % max;
    }, 1000);
    return () => {
      window.clearInterval(ref);
      wordsRef.current = [];
    };
  }, []);

  return (
    <Text
      ref={containerRef}
      className={styles.banner}
      textColor="warning-400"
      textType="display"
      as="ul"
    >
      {words.map((word, i) => (
        <li ref={(el) => (wordsRef.current[i] = el)} key={i}>
          {word}
        </li>
      ))}
      <li ref={(el) => (wordsRef.current[words.length] = el)} aria-hidden>
        {words[0]}
      </li>
    </Text>
  );
}
