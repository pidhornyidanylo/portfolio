import React from 'react';
import styles from './Header.module.scss';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import NavigationList from './Navigation/NavigationList';

const Header = () => {
  return (
    <header className={styles.header}>
      <h4 className={styles.logo}>Danylo Pidhornyi</h4>
      <nav>
        <NavigationList />
        <SwitchTheme />
      </nav>
    </header>
  );
};

export default Header;
