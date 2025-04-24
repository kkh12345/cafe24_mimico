import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useProducts from '../../../hooks/useProducts';
import { MoreButtonSmall, HomeSectionTitle } from '../../../CommonStyle';
import ProductCard from '../../../components/ProductCard/ProductCard';

const S = {
  MoreButtonSmall: MoreButtonSmall,
  HomeSectionTitle: HomeSectionTitle,
};

const slideBannerImg = ['main_banner02_1.jpg', 'main_banner02_2.jpg'];

export default function KidsItemSection({ scrollAniRef }) {
  return (
    <section className="kids-item scroll-ani">
      <div
        className="kids-item__inner inner-common scroll-ani-wrapper"
        ref={(el) => {
          scrollAniRef.current.kidsItemSection = el;
        }}
      >
        <S.HomeSectionTitle $margin={'0 0 25px 0'}>
          KIDS ITEM
          <S.MoreButtonSmall className="kids-item__more-btn" to="">
            more
          </S.MoreButtonSmall>
        </S.HomeSectionTitle>

        <div className="kids-item__content-box">
          <KidsItemBannerSwiper />
          <KidsItemGridContainer />
        </div>
      </div>
    </section>
  );
}

function KidsItemBannerSwiper() {
  const swiperOptions = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
    modules: [Autoplay, Navigation],
    className: 'kids-item-banner-swiper',
  };

  return (
    <Swiper {...swiperOptions}>
      {slideBannerImg.map((img, i) => {
        return (
          <SwiperSlide>
            <img src={`/img/${img}`} alt={`배너이미지${i + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function KidsItemGridContainer() {
  const { products } = useProducts();
  return (
    <ul className="kids-item__grid-container">
      {products.slice(0, 8).map((product) => {
        return (
          <li key={product.productId}>
            <ProductCard>
              <ProductCard.ImgWrapper product={product} />
              <ProductCard.TextWrapper padding={'15px'} product={product} />
            </ProductCard>
          </li>
        );
      })}
    </ul>
  );
}
