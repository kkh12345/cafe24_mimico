import { useEffect, useRef, useState } from 'react';

//css
import './ProductDetailInfo.css';
import useProducts from '../../../hooks/useProducts';

const letMouseHoverImg = 'let_mouse_hover.gif';

export default function ProductDetailInfo({ id }) {
  return (
    <article className="product-detail-info">
      <div className="product-detail-info__inner inner-common">
        <ProductDetailInfoLeft id={id} />
        <ProductDetailInfoRight id={id} />
      </div>
    </article>
  );
}

function ProductDetailInfoLeft({ id }) {
  const zoomBoxRef = useRef(null);
  const bigImageRef = useRef(null);
  const [imgWrapMouseIn, setImgWrapMouseIn] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);
  const { products } = useProducts();

  const zoomBoxShow = () => {
    setImgWrapMouseIn(true);
  };

  const zoomBoxHide = () => {
    setImgWrapMouseIn(false);
  };

  const zoomBoxMove = (e) => {
    let [positionX, positionY] = [0, 0];
    const zoomBox = zoomBoxRef.current;
    const bigImg = bigImageRef.current.children[0];
    if (zoomBox !== null && bigImg !== null) {
      const mouseX = e.nativeEvent.offsetX;
      const mouseY = e.nativeEvent.offsetY;
      const zoomBoxWidth = zoomBox.offsetWidth;
      const zoomBoxHeight = zoomBox.offsetHeight;
      const smallImgWrapWidth = zoomBox.parentElement.offsetWidth;
      const smallImgWrapHeight = zoomBox.parentElement.offsetHeight;

      if (0 <= mouseX && mouseX < zoomBoxWidth / 2) {
        positionX = zoomBoxWidth / 2;
      } else if (mouseX + zoomBoxWidth / 2 <= smallImgWrapWidth) {
        positionX = mouseX;
      } else {
        positionX = smallImgWrapWidth - zoomBoxWidth / 2;
      }

      if (0 <= mouseY && mouseY < zoomBoxHeight / 2) {
        positionY = zoomBoxHeight / 2;
      } else if (mouseY + zoomBoxHeight / 2 <= smallImgWrapHeight) {
        positionY = mouseY;
      } else {
        positionY = smallImgWrapHeight - zoomBoxHeight / 2;
      }

      setTimeout(() => {
        bigImg.style.transform = `scale(1.5) translate(${
          (-1 * (positionX / smallImgWrapWidth - 0.5) * 100 * 2) / 3
        }%,${(-1 * ((positionY / smallImgWrapHeight - 0.5) * 100 * 2)) / 3}%)`;
        zoomBox.style.top = `${positionY}px`;
        zoomBox.style.left = `${positionX}px`;
      }, 50);
    }
  };

  useEffect(() => {
    if (products.length > 0)
      setCurrentProduct(products.find((a) => a.productId === parseInt(id)));
  }, [products]);

  return (
    <div className="product-detail-info__left">
      <div
        className="product-detail-info__small-img-wrapper"
        onMouseEnter={zoomBoxShow}
        onMouseLeave={zoomBoxHide}
        onMouseMove={(e) => {
          zoomBoxMove(e);
        }}
      >
        <div
          className={`product-detail-info__zoom-box ${
            imgWrapMouseIn && '--show'
          }`}
          ref={zoomBoxRef}
        ></div>
        <img
          className="product-detail-info__small-img"
          src={`/img/${currentProduct.productImg}`}
          alt={currentProduct.productName}
        />
        <img
          className={`product-detail-info__let-mouse-hover ${
            imgWrapMouseIn && '--hide'
          }`}
          src={`/img/${letMouseHoverImg}`}
          alt="마우스를 올려보세요"
        />
        <div
          className={`product-detail-info__big-img-wrapper ${
            imgWrapMouseIn && '--show'
          }`}
          ref={bigImageRef}
        >
          <img
            src={`/img/${currentProduct.productImg}`}
            alt={currentProduct.productName}
          />
        </div>
      </div>
    </div>
  );
}

function ProductDetailInfoRight({ id }) {}
