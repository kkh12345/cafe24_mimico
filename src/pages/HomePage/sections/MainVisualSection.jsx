import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MoreButton } from '../../../CommonStyle';

const S = {
  MoreButton: MoreButton,
};

const slideImgs = ['mainImg1.jpg', 'mainImg2.jpg', 'mainImg3.jpg'];

export default function MainVisualSection() {
  return (
    <section className="main-visual">
      <MainVisualSwiper />
    </section>
  );
}

function MainVisualSwiper() {
  const swiperOptions = {
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 500,
    loop: true,

    modules: [Navigation, Pagination, Autoplay],
    className: 'main-visual-swiper',
  };

  return (
    <div className="main-visual__swiper-wrapper">
      <Swiper {...swiperOptions}>
        {slideImgs.map((img, i) => {
          return (
            <SwiperSlide>
              <div className="main-visual-swiper__text-box">
                <h2>
                  단 하나뿐인 스타일,
                  <br />
                  트렌드를 따라가는 mimico
                </h2>
                <S.MoreButton to="">more</S.MoreButton>
              </div>
              <img src={`/img/${img}`} alt={`메인배너이미지${i + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
