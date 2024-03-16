'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Text from '@/components/Text';
import styles from './Banner.module.scss';

export interface BannerProps {
  words: string[];
}
export default function Banner({ words }: BannerProps) {
  const wordsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const items = wordsRef.current;
    let timeout: number;

    if (!container || items.length === 0) return;
    const action = (idx: number) => {
      const ref = items[idx]!;
      container.style.height = `${ref.offsetHeight}px`;
      container.scrollTo({
        top: ref.offsetTop - container.offsetTop,
        behavior: idx ? 'smooth' : 'instant',
      });

      timeout = window.setTimeout(
        () => action((idx + 1) % items.length),
        idx ? 1500 : 0,
      );
    };

    setIsReady(true);
    action(items.length - 1);
    return () => {
      window.clearTimeout(timeout);
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
        <li
          className={cn(!isReady && styles.hidden)}
          ref={(el) => (wordsRef.current[i] = el)}
          key={i}
        >
          {word}
        </li>
      ))}
      <li ref={(el) => (wordsRef.current[words.length] = el)} aria-hidden>
        {words[0]}
      </li>
    </Text>
  );
}
