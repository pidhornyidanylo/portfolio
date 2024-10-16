import Link from 'next/link';
import React from 'react';
import styles from './RouterItem.module.scss';

type RouterItemPropsType = {
  href: string;
  route: string;
};

const RouterItem: React.FC<RouterItemPropsType> = ({
  href,
  route,
}: RouterItemPropsType) => {
  return (
    <li className={styles.routerListItem}>
      <Link className={styles.routerLinkItem} href={href}>
        {route}
      </Link>
    </li>
  );
};

export default RouterItem;
