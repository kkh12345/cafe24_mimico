import { HomeSectionTitle, ViewMoreProductsBtn } from '../../../CommonStyle';
import { MoreButtonSmall } from '../../../CommonStyle';
import ProductCard from '../../../components/ProductCard/ProductCard';
import useProducts from '../../../hooks/useProducts';
import useResponsive from '../../../hooks/useResponsive';
import { useState, useEffect } from 'react';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  MoreButtonSmall: MoreButtonSmall,
  ViewMoreProductsBtn: ViewMoreProductsBtn,
};

export default function NewSection({ scrollAniRef }) {
  const { newProducts } = useProducts();
  const { isTabletSmall, isMobile } = useResponsive();
  const [currentPage, setCurrentPage] = useState(1);
  const [perView, setPerView] = useState(0);
  const wholePageCount = Math.ceil(newProducts.length / perView);

  useEffect(() => {
    let i = 0;
    if (isTabletSmall) {
      i = 4;
    } else {
      i = 6;
    }
    setPerView(i);
    setCurrentPage(1);
  }, [isTabletSmall, isMobile]);

  return (
    <section className="new scroll-ani">
      <div
        className="new__inner inner-common scroll-ani-wrapper"
        ref={(el) => {
          scrollAniRef.current.newSection = el;
        }}
      >
        <S.HomeSectionTitle>
          NEW!
          <S.MoreButtonSmall className="new__more-btn" to="">
            more
          </S.MoreButtonSmall>
        </S.HomeSectionTitle>

        <ul className="new__grid-container">
          {newProducts.slice(0, currentPage * perView).map((product) => {
            return (
              <li key={product.productId}>
                <ProductCard>
                  <ProductCard.ImgWrapper product={product} />
                  <ProductCard.TextWrapper
                    isAbsolute={isTabletSmall ? false : true}
                    padding={isTabletSmall && '15px 0'}
                    product={product}
                  />
                </ProductCard>
              </li>
            );
          })}
        </ul>

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
    </section>
  );
}
