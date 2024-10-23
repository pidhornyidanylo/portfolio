import React from 'react';
import styles from './page.module.scss';
import SummaryItem from './components/SummaryItem/SummaryItem';
import QualificationTabs from './components/QualificationTabs/QualificationTabs';
import { aboutDataArray } from './data';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.aboutSection}>
        <h3 className={styles.title}>Summary</h3>
        <p className={styles.info}>
          Web developer with comprehensive expertise in JavaScript, TypeScript,
          and modern frameworks. Experienced in building dynamic, user-focused
          web applications and skilled in optimizing for performance and user
          experience. Driven by a passion for continuous learning, especially in
          emerging technologies, and enthusiastic about contributing to
          innovative projects. Known for excellent problem-solving skills and a
          collaborative mindset, always aiming to make a meaningful impact.
        </p>
        <div className={styles.aboutItemsContainer}>
          {aboutDataArray.map((aboutItem) => (
            <SummaryItem
              key={aboutItem.title}
              title={aboutItem.title}
              icon={aboutItem.icon}
              count={aboutItem.count}
            />
          ))}
        </div>
      </section>
      <section className={styles.qalificationSection}>
        <h3 className={styles.title}>
          Qalification <span>My personal journey</span>
        </h3>
        <QualificationTabs />
      </section>
    </div>
  );
};

export default About;
