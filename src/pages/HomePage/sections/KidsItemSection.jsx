import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useProducts from '../../../hooks/useProducts';
import {
  MoreButtonSmall,
  HomeSectionTitle,
  ViewMoreProductsBtn,
} from '../../../CommonStyle';
import ProductCard from '../../../components/ProductCard/ProductCard';
import useResponsive from '../../../hooks/useResponsive';
import { useEffect, useState } from 'react';
import './KidsItemSection.css';

const S = {
  MoreButtonSmall: MoreButtonSmall,
  HomeSectionTitle: HomeSectionTitle,
  ViewMoreProductsBtn: ViewMoreProductsBtn,
};

export default function KidsItemSection({ scrollAniRef }) {
  const { products } = useProducts();
  const { isTabletBig, isTabletSmall, isMobile } = useResponsive();
  const [currentPage, setCurrentPage] = useState(1);
  const [perView, setPerView] = useState(0);
  const wholePageCount = Math.ceil(products.length / perView);

  useEffect(() => {
    let i = 0;
    if (isMobile) {
      i = 4;
    } else if (isTabletSmall || isTabletBig) {
      i = 6;
    } else {
      i = 8;
    }
    setPerView(i);
    setCurrentPage(1);
  }, [isTabletBig, isTabletSmall, isMobile]);

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
          <KidsItemGridContainer currentPage={currentPage} perView={perView} />

          {currentPage < wholePageCount && isTabletSmall && (
            <S.ViewMoreProductsBtn
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              더보기 ({currentPage}/{wholePageCount})
              <i className="xi-angle-down"></i>
            </S.ViewMoreProductsBtn>
          )}
        </div>
      </div>
    </section>
  );
}

function KidsItemBannerSwiper() {
  const { isTabletSmall } = useResponsive();

  let slideBannerImg = () => {
    if (isTabletSmall) {
      return ['main_banner02_1 (1).jpg', 'main_banner02_2 (1).jpg'];
    } else {
      return ['main_banner02_1.jpg', 'main_banner02_2.jpg'];
    }
  };
  slideBannerImg = slideBannerImg();

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

function KidsItemGridContainer(props) {
  const { currentPage, perView } = props;
  const { products } = useProducts();

  return (
    <ul className="kids-item__grid-container">
      {products.slice(0, currentPage * perView).map((product) => {
        return (
          <li key={product.productId}>
            <ProductCard>
              <ProductCard.ImgWrapper product={product} />
              <ProductCard.TextWrapper padding={'15px 0'} product={product} />
            </ProductCard>
          </li>
        );
      })}
    </ul>
  );
}
