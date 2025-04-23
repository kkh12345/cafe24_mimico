import * as S from './ProductCardStyle';
import { Link } from 'react-router-dom';

export default function ProductCard({ children }) {
  return <S.ProductCard>{children}</S.ProductCard>;
}

ProductCard.ImgWrapper = function ({ product, children, margin }) {
  const { productId, productImg, productName } = product;
  return (
    <S.ImgWrapper $margin={margin} to={`/productDetail/${productId}`}>
      <img src={`/img/${productImg}`} alt={productName} />
      {children}
    </S.ImgWrapper>
  );
};

ProductCard.IconBox = function () {
  return;
};

ProductCard.TextWrapper = function ({ product, isAbsolute, padding }) {
  const {
    productId,
    productName,
    desc,
    discountRate,
    originalPrice,
    isPopular,
    isNew,
    color,
  } = product;

  return (
    <S.TextWrapper $isAbsolute={isAbsolute} $padding={padding}>
      <h3 className="name">
        <Link to={`/productDetail/${productId}`}>{productName}</Link>
      </h3>
      <p className="desc">{desc}</p>
      <S.PriceInfo $discountRate={discountRate}>
        <span className="original-price">
          {originalPrice.toLocaleString()}원
        </span>
        {discountRate > 0 && (
          <>
            <span className="discounted-price">
              {originalPrice * (1 - discountRate / 100).toLocaleString()}원
            </span>
            <span className="discount-rate">{discountRate}%</span>
          </>
        )}
      </S.PriceInfo>
      {color && (
        <ul className="color-list">
          {color.map((color) => {
            return (
              <li
                key={color}
                className="color-item"
                style={{ backgroundColor: color }}
              ></li>
            );
          })}
        </ul>
      )}

      <div className="badge">
        {isPopular && <img src="/img/badge_popular.jpg" alt="인기상품뱃지" />}
        {isNew && <img src="/img/badge_new.jpg" alt="신상품뱃지" />}
      </div>
    </S.TextWrapper>
  );
};
