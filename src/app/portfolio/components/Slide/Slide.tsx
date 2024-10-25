'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '../Slider/Slider';
import Link from 'next/link';
import styles from './Slide.module.scss';

const Slide = ({ project }: { project: Project }) => {
  const [toggleImage, setToggleImage] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {toggleImage ? (
          <Image
            onMouseLeave={() => setToggleImage(false)}
            className={styles.cardImage}
            fill
            src={project.images[1]}
            alt={`${project.title}-image`}
          />
        ) : (
          <Image
            onMouseEnter={() => setToggleImage(true)}
            className={styles.cardImage}
            fill
            src={project.images[0]}
            alt={`${project.title}-image`}
          />
        )}
      </div>
      <div className={styles.cardContent}>
        {project.link && (
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className={styles.cardLink}
            href={project.link as string}
          >
            DEMO
          </Link>
        )}
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.description}>{project.desc}</p>
        <div className={styles.techStackContainer}>
          {project.stack.map((technology) => (
            <span className={styles.techSpan} key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
