import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { SlideCircleButton } from '../../../CommonStyle';
import { HomeSectionTitle } from '../../../CommonStyle';

//커스텀 훅
import useProducts from '../../../hooks/useProducts';
import useSwiper from '../../../hooks/useSwiper';
import useResponsive from '../../../hooks/useResponsive';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  SlideCircleButton: SlideCircleButton,
};

export default function BestSellerSection({ scrollAniRef }) {
  return (
    <section className="best-seller ">
      <div
        className="best-seller__inner inner-common scroll-ani-wrapper"
        ref={(el) => {
          scrollAniRef.current.bestSellerSection = el;
        }}
      >
        <S.HomeSectionTitle $margin={'0 0 10px'}>
          BEST SELLER
        </S.HomeSectionTitle>
        <BestSellerSwiper />
      </div>
    </section>
  );
}

function BestSellerSwiper() {
  const { products, getProducts } = useProducts();
  const { swiperRef, slideNext, slidePrev } = useSwiper();
  const { isMobile } = useResponsive();

  const swiperOptions = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    loopAddBlankSlides: false,
    modules: [Autoplay],
    onInit: (swiper) => {
      swiperRef.current = swiper;
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      0: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
    },
    className: 'best-seller-swiper',
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="best-seller__swiper-wrapper">
      <S.SlideCircleButton onClick={slidePrev} className="prev">
        <i className="xi-long-arrow-left"></i>
      </S.SlideCircleButton>
      <S.SlideCircleButton onClick={slideNext} className="next">
        <i className="xi-long-arrow-right"></i>
      </S.SlideCircleButton>
      <Swiper {...swiperOptions} ref={swiperRef}>
        {products.map((product) => {
          return (
            <SwiperSlide>
              <ProductCard>
                <ProductCard.ImgWrapper margin={'15px'} product={product} />
                <ProductCard.TextWrapper
                  padding={isMobile && '0 11px 15px'}
                  product={product}
                />
              </ProductCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
