import Link from 'next/link';
import React from 'react';
import styles from './NavLink.module.scss';

type NavLinkProps = {
  href: string;
  route: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, route }: NavLinkProps) => (
  <Link className={styles.navLinkItem} href={href}>
    {route}
  </Link>
);
export default NavLink;
