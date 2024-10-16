import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Burger.module.scss';

type BurgerPropsType = {
  showMenu: boolean;
  handleShowMenu: () => void;
};

const Burger = ({ handleShowMenu, showMenu }: BurgerPropsType) => {
  const burgerSpan1 = useRef<HTMLSpanElement | null>(null);
  const burgerSpan2 = useRef<HTMLSpanElement | null>(null);
  const burgerSpan3 = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const span1 = burgerSpan1.current;
    const span2 = burgerSpan2.current;
    const span3 = burgerSpan3.current;
    if (!span1 || !span2 || !span3) return;
    const gsapTimeline = gsap.timeline();
    if (showMenu) {
      gsapTimeline
        .to(span2, { opacity: 0, duration: 0.05, translateX: 20 })
        .to(span1, { rotate: 45, translateY: 11, duration: 0.3 })
        .to(span3, { rotate: -45, translateY: -11, duration: 0.3 });
    } else {
      gsapTimeline
        .to(span1, { rotate: 0, translateY: 0, duration: 0.2 })
        .to(span3, { rotate: 0, translateY: 0, duration: 0.2 })
        .to(span2, { opacity: 1, duration: 0.05, translateX: 0 });
    }
  }, [showMenu]);
  return (
    <div
      data-testid='burger'
      onClick={() => handleShowMenu()}
      className={styles.burger}
    >
      <span ref={burgerSpan1}></span>
      <span ref={burgerSpan2}></span>
      <span ref={burgerSpan3}></span>
    </div>
  );
};

export default Burger;
