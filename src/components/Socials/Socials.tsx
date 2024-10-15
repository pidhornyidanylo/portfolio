'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './Socials.module.scss';
import Snackbar from '../Snackbar/Snackbar';

const socialLinks = [
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
    copyText: '+380959363487',
    imgSrc: '/assets/icons/telephone.svg',
    alt: 'telephone',
    notification: "You've just copied my phone number!",
    isCopy: true,
  },
  {
    copyText: 'dquark74@protonmail.com',
    imgSrc: '/assets/icons/email.svg',
    alt: 'email',
    notification: "You've just copied my email!",
    isCopy: true,
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
];

const Socials = () => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <ul className={styles.socialsList}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          {link.isCopy ? (
            <Snackbar notification={link.notification as string}>
              <button
                onClick={() => handleCopy(link.copyText as string)}
                className={styles.iconButton}
                aria-label={`Copy ${link.alt}`}
              >
                <Image
                  className='invertable-icon'
                  width={30}
                  height={30}
                  src={link.imgSrc}
                  alt={link.alt}
                />
              </button>
            </Snackbar>
          ) : (
            <Link
              href={link.href as string}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='invertable-icon'
                width={30}
                height={30}
                src={link.imgSrc}
                alt={link.alt}
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Socials;
