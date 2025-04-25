import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { HomeSectionTitle, SlideCircleButton } from '../../../CommonStyle';
import useSwiper from '../../../hooks/useSwiper';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../../components/ProductCard/ProductCard';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  SlideCircleButton: SlideCircleButton,
};

export default function CollectionSection() {
  const { swiperRef, slideNext, slidePrev } = useSwiper();
  return (
    <section className="collection">
      <div className="collection__inner inner-common">
        <div className="collection__left">
          <div className="collection__text-box">
            <S.HomeSectionTitle>COLLECTION</S.HomeSectionTitle>
            <p className="collection__desc">
              가장 좋은 것을 주고싶은 마음으로 최선을 다해 제품을 선보이고
              있습니다.
            </p>
            <S.SlideCircleButton
              $translateX={'0'}
              className="prev"
              onClick={slideNext}
            >
              <i className="xi-long-arrow-left"></i>
            </S.SlideCircleButton>
            <S.SlideCircleButton
              $translateX={'0'}
              className="next"
              onClick={slidePrev}
            >
              <i className="xi-long-arrow-right"></i>
            </S.SlideCircleButton>
          </div>
          <CollectionSwiper swiperRef={swiperRef} />
        </div>
        <div className="collection__right">
          <iframe
            src="https://www.youtube.com/embed/3NaWJnFzhZs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function CollectionSwiper({ swiperRef }) {
  const { products } = useProducts();
  const swiperOptions = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    speed: 500,
    loop: true,
    loopAddBlankSlides: false,
    modules: [Autoplay],
    onInit: (swiper) => {
      swiperRef.current = swiper;
    },
    className: 'collection-swiper',
  };

  return (
    <Swiper {...swiperOptions} ref={swiperRef}>
      {products.map((product) => {
        return (
          <SwiperSlide>
            <ProductCard>
              <ProductCard.ImgWrapper product={product} />
              <ProductCard.TextWrapper
                isAbsolute={true}
                padding={'15px'}
                product={product}
              />
            </ProductCard>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
