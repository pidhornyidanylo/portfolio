'use client';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import styles from './NavigationList.module.scss';

const NavigationList = () => {
  const [showBurger, setShowBurger] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setShowBurger(true);
      } else {
        setShowBurger(false);
      }
    };
    handleResize();
    const debouncedResizeHandler = debounce(handleResize, 200, 500);
    window.addEventListener('resize', debouncedResizeHandler);

    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []);

  return (
    <>
      {showBurger ? (
        <>
          <div className={styles.burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles.navBurgerList}>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/skills'>Skills</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
          </ul>
        </>
      ) : (
        <ul className={styles.navList}>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/skills'>Skills</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavigationList;
