'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './Socials.module.scss';
import CopyTooltip from './CopyTooltip/CopyTooltip';

const contactMethodsArray = [
  {
    href: 'https://github.com/pidhornyidanylo',
    imgSrc: '/assets/icons/github.svg',
    alt: 'github',
    isCopy: false,
  },
  {
    href: 'https://www.linkedin.com/in/danylo-pidhornyi-74527a285/',
    imgSrc: '/assets/icons/in.svg',
    alt: 'linkedin',
    isCopy: false,
  },
  {
    href: 'https://t.me/flyingpantera',
    imgSrc: '/assets/icons/tg.svg',
    alt: 'telegram',
    isCopy: false,
  },
  {
    href: 'https://wa.me/380959363487',
    imgSrc: '/assets/icons/whatsapp.svg',
    alt: 'whatsapp',
    isCopy: false,
  },
  {
    copyText: '+380959363487',
    imgSrc: '/assets/icons/telephone.svg',
    alt: 'telephone',
    isCopy: true,
  },
  {
    copyText: 'dquark74@protonmail.com',
    imgSrc: '/assets/icons/email.svg',
    alt: 'email',
    isCopy: true,
  },
];

const Socials = () => {
  return (
    <ul className={styles.socialsList}>
      {contactMethodsArray.map((contactMethod, index) => (
        <li key={index}>
          {contactMethod.isCopy ? (
            <CopyTooltip
              copyText={contactMethod.copyText as string}
              imgSrc={contactMethod.imgSrc}
              alt={contactMethod.alt}
            />
          ) : (
            <Link
              href={contactMethod.href as string}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='invertable-icon'
                width={30}
                height={30}
                src={contactMethod.imgSrc}
                alt={contactMethod.alt}
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Socials;
