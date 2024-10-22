import React from 'react';
import Image from 'next/image';
import styles from './CertificationItem.module.scss';
import { CertificationPanelProps } from '../QualificationPanel';

const CertificationItem = ({ item }: { item: CertificationPanelProps }) => {
  return (
    <div className={styles.certificationItem} key={item.title}>
      <p className={styles.certificationItemTitle}>{item.title}</p>
      <p className={styles.certificationItemInstitution}>{item.institution}</p>
      <p className={styles.certificationItemYears}>
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

export default CertificationItem;
