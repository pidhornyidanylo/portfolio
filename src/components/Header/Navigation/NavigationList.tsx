'use client';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import RouterItem from './RouterItem/RouterItem';
import Burger from './Burger/Burger';
import { gsap } from 'gsap';
import styles from './NavigationList.module.scss';
console.log(styles.visible);
const routesArray = [
  {
    routeName: 'About',
    routeHref: '/',
  },
  {
    routeName: 'Skills',
    routeHref: '/skills',
  },
  {
    routeName: 'Services',
    routeHref: '/services',
  },
  {
    routeName: 'Portfolio',
    routeHref: '/portfolio',
  },
];

const NavigationList = () => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [showBurger, setShowBurger] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (showMenu) {
      gsap.to(menu, {
        scale: 1,
        duration: 0.05,
      });
    } else {
      gsap.to(menu, {
        scale: 0,
        duration: 0.05,
      });
    }
  }, [showMenu]);

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

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      {showBurger ? (
        <>
          <Burger handleShowMenu={handleShowMenu} showMenu={showMenu} />
          <ul
            ref={menuRef}
            className={`${styles.navBurgerList} ${showMenu ? styles.visible : ''}`}
            data-testid='menu-list'
          >
            {routesArray.map((routeItem) => (
              <RouterItem
                key={routeItem.routeName + '_insideBurgerMenu'}
                href={routeItem.routeHref}
                route={routeItem.routeName}
              />
            ))}
          </ul>
        </>
      ) : (
        <ul className={styles.navList}>
          {routesArray.map((routeItem) => (
            <RouterItem
              key={routeItem.routeName}
              href={routeItem.routeHref}
              route={routeItem.routeName}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default NavigationList;
