import React, { useRef } from 'react';

//스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

//컴포넌트
import { MoreButton } from '../../../CommonStyle';

//커스텀 훅
import useResponsive from '../../../hooks/useResponsive';
import useSwiper from '../../../hooks/useSwiper';

//css
import './MainVisualSection.css';

const S = {
  MoreButton: MoreButton,
};

export default function MainVisualSection() {
  return (
    <section className="main-visual">
      <MainVisualSwiper />
    </section>
  );
}

function MainVisualSwiper() {
  const textBoxRef = useRef([]);
  const { isTabletSmall } = useResponsive();
  const { swiperRef, slideAutoplayStop, slideAutoplayStart } = useSwiper();
  let slideImgs = () => {
    if (isTabletSmall) {
      return ['mainImg1 (1).jpg', 'mainImg2 (1).jpg', 'mainImg3 (1).jpg'];
    } else {
      return ['mainImg1.jpg', 'mainImg2.jpg', 'mainImg3.jpg'];
    }
  };
  slideImgs = slideImgs();

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
    onInit: (swiper) => {
      swiperRef.current = swiper;
      textBoxRef.current.map((a) => {
        a.classList.add('--appear');
      });
    },
    className: 'main-visual-swiper',
  };

  return (
    <div className="main-visual__swiper-wrapper">
      <div className="main-visual__slide-btns">
        <button onClick={slideAutoplayStop}>
          <i className="xi-pause"></i>
        </button>
        <button onClick={slideAutoplayStart}>
          <i className="xi-play"></i>
        </button>
      </div>

      <Swiper {...swiperOptions}>
        {slideImgs.map((img, i) => {
          return (
            <SwiperSlide>
              <div
                className="main-visual-swiper__text-box"
                ref={(el) => (textBoxRef.current[i] = el)}
              >
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
