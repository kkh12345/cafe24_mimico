import { useRef, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { Link } from 'react-router-dom';

//css
import './ProductDetailRight.css';
export default function ProductDetailRight({ id }) {
  const { findProduct } = useProducts();
  const currentProduct = findProduct(id);
  const selectedOptionsRef = useRef({ color: null, size: null });

  const addToCart = () => {
    console.log(selectedOptionsRef.current);
  };

  return (
    <section className="product-detail__right">
      <ul className="product-detail__info">
        <li className="product-detail__name">
          <dt>상품명</dt>
          <dd>{currentProduct?.productName}</dd>
        </li>
        <li className="product-detail__desc">
          <dt>상품요약정보</dt>
          <dd>{currentProduct?.desc}</dd>
        </li>
        {currentProduct?.discountRate > 0 && (
          <li className="product-detail__consumer-price">
            <dt>소비자가</dt>
            <dd>{currentProduct?.originalPrice?.toLocaleString() + '원'}</dd>
          </li>
        )}
        <li className="product-detail__sale-price">
          <dt>
            <b>판매가</b>
          </dt>
          <dd>
            {currentProduct?.discountRate > 0 ? (
              <>
                {(
                  currentProduct?.originalPrice *
                  (1 - currentProduct.discountRate / 100)
                )?.toLocaleString() + '원'}

                <b className="product-detail__discount-rate">
                  {currentProduct.discountRate}%
                </b>
              </>
            ) : (
              currentProduct?.originalPrice?.toLocaleString() + '원'
            )}
          </dd>
        </li>
      </ul>

      <ul className="product-detail__delivery-info">
        <li>
          <dt>국내.해외배송</dt>
          <dd>국내배송</dd>
        </li>
        <li>
          <dt>배송방법</dt>
          <dd>택배</dd>
        </li>
        <li>
          <dt>배송비</dt>
          <dd>2,500원 (50,000원 이상 구매 시 무료)</dd>
        </li>
      </ul>

      {currentProduct?.size && (
        <ProductSize
          currentProduct={currentProduct}
          className={'product-detail__size'}
          selectedOptionsRef={selectedOptionsRef}
        />
      )}
      {currentProduct?.color && (
        <ProductColor
          currentProduct={currentProduct}
          className={'product-detail__color'}
          selectedOptionsRef={selectedOptionsRef}
        />
      )}

      <p className="product-detail__minimal-order-quantity">
        (최소주문수량 1개이상)
      </p>

      <AdditionalProducts />

      <p className="product-detail__warn-message">
        위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.
      </p>

      <ButtonGroup addToCart={addToCart} />
    </section>
  );
}

function AdditionalProducts() {
  const { products } = useProducts();
  const [isShowAdditionalProducts, setIsShowAdditionalProducts] =
    useState(true);
  const randomNum = Math.ceil(Math.random() * (products.length - 3));
  const toggleAdditionalProductList = () => {
    setIsShowAdditionalProducts(!isShowAdditionalProducts);
  };

  return (
    <div className="product-detail__additional-products">
      <div className="product-detail__additional-products-head">
        <span>추가구성상품</span>
        <span>추가로 구매를 원하시면 선택하세요.</span>
        <button
          className="product-detail__additional-products-dropdown-btn"
          onClick={toggleAdditionalProductList}
        >
          {isShowAdditionalProducts ? (
            <i className="xi-angle-down-min"></i>
          ) : (
            <i className="xi-angle-up-min"></i>
          )}
        </button>
      </div>
      {isShowAdditionalProducts && (
        <ul className="product-detail__additional-product-list">
          {products.slice(randomNum, randomNum + 2).map((a) => {
            return (
              <li
                key={a.productId}
                className="product-detail__additional-product-item"
              >
                <Link to={`/productDetail/${a.productId}`}>
                  <img src={`/img/${a.productImg}`} alt={a.productName} />
                </Link>
                <div className="product-detail__additional-product-info">
                  <p className="product-detail__additional-product-name">
                    {a.productName}
                  </p>
                  <p className="product-detail__additional-product-price">
                    {a.discountRate > 0
                      ? (
                          a.originalPrice *
                          (1 - a.discountRate / 100)
                        ).toLocaleString()
                      : a.originalPrice.toLocaleString()}
                    원
                  </p>

                  {a.color ? (
                    <ProductColor
                      className={'product-detail__additional-product-color'}
                      currentProduct={a}
                    />
                  ) : (
                    a.size && (
                      <ProductSize
                        className={'product-detail__additional-product-size'}
                        currentProduct={a}
                      />
                    )
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ProductSize({ className, currentProduct, selectedOptionsRef }) {
  return (
    <div className={className}>
      <dt>SIZE</dt>
      <dd>
        <ul className={className + '-list'}>
          {currentProduct?.size.map((a) => (
            <li key={a}>
              <input
                id={`productSize${a}`}
                onChange={() => {
                  if (selectedOptionsRef) {
                    selectedOptionsRef.current.size = a;
                  }
                }}
                name="size"
                type="radio"
              />
              <label htmlFor={`productSize${a}`}>{a}</label>
            </li>
          ))}
        </ul>
        <span className="product-detail__pls-select-option">
          [필수]옵션을 선택해 주세요
        </span>
      </dd>
    </div>
  );
}

function ProductColor({ className, currentProduct, selectedOptionsRef }) {
  return (
    <div className={className}>
      <dt>COLOR</dt>
      <dd>
        <ul className={className + '-list'}>
          {currentProduct?.color.map((a) => (
            <li key={a}>
              <input
                onChange={() => {
                  if (selectedOptionsRef) {
                    selectedOptionsRef.current.color = a;
                  }
                }}
                name="color"
                type="radio"
                style={{ backgroundColor: a }}
              />
            </li>
          ))}
        </ul>
        <span className="product-detail__pls-select-option">
          [필수]옵션을 선택해 주세요
        </span>
      </dd>
    </div>
  );
}

function ButtonGroup({ addToCart }) {
  return (
    <div className="product-detail__btn-group">
      <button className="product-detail__buy-now-btn">
        <span>바로 구매하기</span>
      </button>
      <button className="product-detail__add-to-cart-btn" onClick={addToCart}>
        장바구니 담기
      </button>
      <button className="product-detail__register-btn">관심상품등록</button>
    </div>
  );
}
