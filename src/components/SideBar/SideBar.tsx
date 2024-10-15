import React from 'react';
import Image from 'next/image';
import styles from './SideBar.module.scss';
import Socials from '../Socials/Socials';

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarContainer}>
        <Image
          width={160}
          height={160}
          className={styles.avatar}
          src={'/assets/ava.jpg'}
          alt={'danylo-avatar'}
        />
      </div>
      <h3 className={styles.name}>Danylo Pidhornyi</h3>
      <h5 className={styles.speciality}>Frontend Developer</h5>
      <p className={styles.briefInfo}>
        Web developer with comprehensive expertise in JavaScript, TypeScript,
        and modern frameworks. Experienced in building dynamic, user-focused web
        applications and skilled in optimizing for performance and user
        experience.
      </p>
      <div className={styles.asideFooter}>
        <Socials />
      </div>
    </aside>
  );
};

export default SideBar;
