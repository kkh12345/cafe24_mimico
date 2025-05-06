import { useRef, useState } from 'react';
import useProducts from '../../../hooks/useProducts';

//css
import './ProductDetailLeft.css';
const letMouseHoverImg = 'let_mouse_hover.gif';

export default function ProductDetailLeft({ id }) {
  const zoomBoxRef = useRef(null);
  const bigImageRef = useRef(null);
  const [imgWrapMouseIn, setImgWrapMouseIn] = useState(false);
  const { findProduct } = useProducts();
  const currentProduct = findProduct(id);

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

  return (
    <section className="product-detail__left">
      <div
        className="product-detail__small-img-wrapper"
        onMouseEnter={zoomBoxShow}
        onMouseLeave={zoomBoxHide}
        onMouseMove={(e) => {
          zoomBoxMove(e);
        }}
      >
        <div
          className={`product-detail__zoom-box ${imgWrapMouseIn && '--show'}`}
          ref={zoomBoxRef}
        ></div>
        <img
          className="product-detail__small-img"
          src={`/img/${currentProduct?.productImg}`}
          alt={currentProduct?.productName}
        />
        <img
          className={`product-detail__let-mouse-hover ${
            imgWrapMouseIn && '--hide'
          }`}
          src={`/img/${letMouseHoverImg}`}
          alt="마우스를 올려보세요"
        />
        <div
          className={`product-detail__big-img-wrapper ${
            imgWrapMouseIn && '--show'
          }`}
          ref={bigImageRef}
        >
          <img
            src={`/img/${currentProduct?.productImg}`}
            alt={currentProduct?.productName}
          />
        </div>
      </div>
    </section>
  );
}
