import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { images } from './data';

const Services = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Services</h3>
      <p className={styles.subTitle}>What i offer</p>
      <p className={styles.myOffer}>
        As a frontend developer, I offer responsive design, user-friendly
        interfaces, performance optimization, modern frameworks, and seamless
        user experiences across platforms. I ensure high-quality, maintainable
        code, covered with tests to guarantee reliability and scalability.
      </p>
      <section className={styles.offersSection}>
        {images.map((image, index) => (
          <div key={image.alt} className={styles[`div${index + 1}`]}>
            <Image width={450} height={270} src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
