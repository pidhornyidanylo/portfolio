import React from 'react';
import Image from 'next/image';
import styles from './EducationItem.module.scss';
import { EducationPanelProps } from '../QualificationPanel';

const EducationItem = ({ item }: { item: EducationPanelProps }) => {
  return (
    <div className={styles.educationItem} key={item.degree}>
      <p className={styles.educationItemTitle}>{item.field}</p>
      <span className={styles.educationItemDegree}>{item.degree}</span>
      <p className={styles.educationItemInstitution}>{item.institution}</p>
      <p className={styles.educationItemYears}>
        <Image
          className='invertable-icon'
          width={20}
          height={20}
          src={'/assets/icons/about/date.svg'}
          alt={'date'}
        />
        {item.years}
      </p>
    </div>
  );
};

export default EducationItem;
