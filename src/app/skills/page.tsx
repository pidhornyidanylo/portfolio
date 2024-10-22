import React from 'react';
import { skills } from './data';
import styles from './page.module.scss';
import SkillsCategory from './components/SkillsCategory/SkillsCategory';

const categoriesArray: Category[] = [
  {
    title: 'Languages & Frameworks',
    icon: '/assets/icons/skills/categorie/frame.svg',
  },
  {
    title: 'UI/UX Tools',
    icon: '/assets/icons/skills/categorie/ui.svg',
  },
  {
    title: 'VersionControl & Deployment',
    icon: '/assets/icons/skills/categorie/version.svg',
  },
  {
    title: 'Testing',
    icon: '/assets/icons/skills/categorie/test.svg',
  },
  {
    title: 'Other Tools',
    icon: '/assets/icons/skills/categorie/tools.svg',
  },
];

type Category = {
  title:
    | 'Languages & Frameworks'
    | 'UI/UX Tools'
    | 'VersionControl & Deployment'
    | 'Testing'
    | 'Other Tools';
  icon: string;
};

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Skills</h3>
      <p className={styles.subTitle}>My technical level</p>
      <section className={styles.frontendSection}>
        <h5 className={styles.sectionTitle}>Frontend Developer</h5>
        <div className={styles.sectionContent}>
          {categoriesArray.map((category) => (
            <SkillsCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              skillset={skills[`${category.title}`]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
