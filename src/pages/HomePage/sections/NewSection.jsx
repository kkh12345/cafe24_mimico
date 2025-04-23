import { HomeSectionTitle } from '../../../CommonStyle';
import { MoreButtonSmall } from '../../../CommonStyle';
import ProductCard from '../../../components/ProductCard/ProductCard';
import useProducts from '../../../hooks/useProducts';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  MoreButtonSmall: MoreButtonSmall,
};

export default function NewSection() {
  const { newProducts } = useProducts();

  return (
    <section className="new">
      <div className="new__inner inner-common">
        <S.HomeSectionTitle>
          NEW
          <S.MoreButtonSmall className="new__more-btn" to="">
            more
          </S.MoreButtonSmall>
        </S.HomeSectionTitle>
        <ul className="new__grid-container">
          {newProducts.map((product) => {
            return (
              <li key={product.productId}>
                <ProductCard>
                  <ProductCard.ImgWrapper product={product} />
                  <ProductCard.TextWrapper
                    isAbsolute={true}
                    product={product}
                  />
                </ProductCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
