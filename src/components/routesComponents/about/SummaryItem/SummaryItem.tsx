import React from 'react';
import Image from 'next/image';
import styles from './SummaryItem.module.scss';

type SummaryItemProps = {
  title: string;
  icon: string;
  count: number;
};

const SummaryItem: React.FC<SummaryItemProps> = ({
  title,
  icon,
  count,
}: SummaryItemProps) => {
  return (
    <div key={title} className={styles.itemContainer}>
      <Image
        className='invertable-icon'
        width={30}
        height={30}
        src={icon}
        alt={title}
      />
      <div>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemCount}>{count}</div>
      </div>
    </div>
  );
};

export default SummaryItem;
