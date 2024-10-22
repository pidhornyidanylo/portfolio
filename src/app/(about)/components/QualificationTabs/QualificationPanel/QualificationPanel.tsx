import React from 'react';
import EducationItem from './EducationItem/EducationItem';
import CertificationItem from './CertificationItem/CertificationItem';
import styles from './QualificationPanel.module.scss';

export type EducationPanelProps = {
  field: string;
  degree: string;
  institution: string;
  years: string;
};

export const EducationPanel = ({ items }: { items: EducationPanelProps[] }) => {
  return (
    <div className={styles.educationContainer}>
      {items.map((item) => (
        <EducationItem key={item.degree} item={item} />
      ))}
    </div>
  );
};

export type CertificationPanelProps = {
  title: string;
  institution: string;
  years: string;
};

export const CertificationPanel = ({
  items,
}: {
  items: CertificationPanelProps[];
}) => {
  return (
    <div className={styles.certificationContainer}>
      {items.map((item) => (
        <CertificationItem key={item.title} item={item} />
      ))}
    </div>
  );
};
