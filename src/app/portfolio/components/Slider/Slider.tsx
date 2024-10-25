'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper/modules';
import { data } from '../../data';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';
import 'swiper/css';

export type Project = {
  title: string;
  desc: string;
  link?: string;
  stack: string[];
  images: string[];
};

const Slider = () => {
  const pagination = {
    clickable: true,
    bulletClass: 'pagination-bullet',
    renderBullet(index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <Swiper
      autoFocus
      className={styles.slider}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      spaceBetween={20}
      slidesPerView={1}
      pagination={pagination}
      modules={[Pagination, Keyboard]}
    >
      {data.map((project: Project) => (
        <SwiperSlide className={styles.sliderSlide} key={project.title}>
          <Slide project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
