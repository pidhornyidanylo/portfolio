import React from 'react';
import Image from 'next/image';
import styles from './SideBar.module.scss';
import Socials from '../Socials/Socials';

const SideBar = () => {
  return (
    <aside data-testid='sidebar' className={styles.sidebar}>
      <div className={styles.avatarContainer}>
        <Image
          height={200}
          width={200}
          style={{ objectFit: 'cover' }}
          className={styles.avatar}
          src={'/assets/ava.jpg'}
          alt={'danylo-avatar'}
        />
      </div>
      <h3 className={styles.name}>Danylo Pidhornyi</h3>
      <h5 className={styles.speciality}>Frontend Developer</h5>
      <p className={styles.briefInfo}>
        Web developer skilled in JavaScript, TypeScript, modern frameworks,
        performance optimization, and collaborative problem-solving.
      </p>
      <div className={styles.sidebarFooter}>
        <Socials />
      </div>
    </aside>
  );
};

export default SideBar;
