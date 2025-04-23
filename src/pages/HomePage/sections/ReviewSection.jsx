import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import { HomeSectionTitle } from '../../../CommonStyle';
import { MoreButtonSmall } from '../../../CommonStyle';
import useReviews from '../../../hooks/useReviews';
import useSwiper from '../../../hooks/useSwiper';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  MoreButtonSmall: MoreButtonSmall,
};

export default function ReviewSection() {
  return (
    <section className="review">
      <div className="review__inner inner-common">
        <S.HomeSectionTitle $margin={'0 0 25px 0'}>
          상품 사용후기
        </S.HomeSectionTitle>
        <ReviewSwiper />
        <div className="review__more-btn-wrapper">
          <S.MoreButtonSmall to="/review">more</S.MoreButtonSmall>
        </div>
      </div>
    </section>
  );
}

function ReviewSwiper() {
  const { swiperRef, slideNext, slidePrev } = useSwiper();
  const { reviews, getReviews } = useReviews();
  const swiperOptions = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    modules: [Autoplay],
    onInit: (swiper) => {
      swiperRef.current = swiper;
    },
    className: 'review-swiper',
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="review__swiper-wrapper">
      <button className="review__slide-prev-btn" onClick={slidePrev}>
        <i className="xi-angle-left"></i>
      </button>
      <button className="review__slide-next-btn" onClick={slideNext}>
        <i className="xi-angle-right"></i>
      </button>
      <Swiper {...swiperOptions} ref={swiperRef}>
        {reviews.map((review, index) => {
          return (
            <SwiperSlide>
              <ReviewCard>
                <ReviewCard.ImgWrapper review={review} />
                <ReviewCard.TextWrapper review={review} />
              </ReviewCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
