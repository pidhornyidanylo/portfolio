import React from 'react';
import styles from './page.module.scss';
import Slider from './components/Slider/Slider';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Portfolio</h3>
      <p className={styles.subTitle}>My recent Work</p>
      <section className={styles.worksSection}>
        <Slider />
      </section>
    </div>
  );
};

export default Portfolio;
