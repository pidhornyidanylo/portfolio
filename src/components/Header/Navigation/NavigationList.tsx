'use client';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import Burger from './Burger/Burger';
import styles from './NavigationList.module.scss';
import NavLink from './NavLink/NavLink';
import Socials from '@/components/Socials/Socials';

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
  const burgerMenuRef = useRef<HTMLUListElement | null>(null);
  const [showBurger, setShowBurger] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setShowBurger(true);
      } else {
        setShowBurger(false);
        setShowBurgerMenu(false);
      }
    };
    handleResize();
    const debouncedResizeHandler = debounce(handleResize, 200, 500);
    window.addEventListener('resize', debouncedResizeHandler);

    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []);

  const toggleShowMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target as Node)
      ) {
        setShowBurgerMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showBurgerMenu]);

  return (
    <>
      {showBurger ? (
        <>
          <Burger toggleShowMenu={toggleShowMenu} showMenu={showBurgerMenu} />
          {showBurgerMenu && (
            <ul ref={burgerMenuRef} className={styles.navBurgerList}>
              {routesArray.map((routeItem) => (
                <li key={routeItem.routeName + '_insideBurgerMenu'}>
                  <NavLink
                    href={routeItem.routeHref}
                    route={routeItem.routeName}
                  />
                </li>
              ))}
              <div className={styles.socialsContainer}>
                <Socials />
              </div>
            </ul>
          )}
        </>
      ) : (
        <ul className={styles.navList}>
          {routesArray.map((routeItem) => (
            <li key={routeItem.routeName}>
              <NavLink href={routeItem.routeHref} route={routeItem.routeName} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavigationList;
