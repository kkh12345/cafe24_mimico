import { useEffect, useState, useRef } from 'react';
import * as S from './PopupStyle';

const benefits = [
  '신규 회원가입시 다양한 혜택이 가득 !',
  '장바구니 아이템 추첨 할인',
];

export default function Popup() {
  const slideHeight = 30;
  const [popupHeight, setPopupHeight] = useState(slideHeight);
  const hidePopup = () => {
    setPopupHeight(0);
  };

  return (
    <S.Popup $height={popupHeight}>
      <div className="inner inner-common">
        <PopupSwiper popupHeight={popupHeight} slideHeight={slideHeight} />
        <S.CloseButton
          $top={slideHeight / 2}
          className="popup__close-btn"
          onClick={hidePopup}
        >
          <i className="xi-close"></i>
        </S.CloseButton>
      </div>
    </S.Popup>
  );
}

function PopupSwiper({ popupHeight, slideHeight }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current !== null) {
      let interval;
      let timer;

      const funcWhenDeHidingPopup = () => {
        clearInterval(interval);
        clearTimeout(timer);
      };

      if (popupHeight <= 0) {
        funcWhenDeHidingPopup();
      } else {
        let activeIndex = 0;
        const intervalTime = 4000;
        const swiperTransitionTime = 500;
        const swiper = swiperRef.current;
        const slides = swiperRef.current.children;
        const cloneFirstSlide = slides[0].cloneNode(true); //첫 번째 슬라이드 복사본

        if (benefits.length === slides.length) {
          swiper.appendChild(cloneFirstSlide);
        }

        const changeSlide = () => {
          swiper.style.transition = `all ${swiperTransitionTime}ms`;
          activeIndex++;
          translateSwiper();

          // 복사본 슬라이드까지 왔을 때
          // 애니메이션 없애고 첫번째 슬라이드로 이동하여 눈속임
          if (activeIndex >= slides.length - 1) {
            timer = setTimeout(() => {
              swiper.style.transition = 'none';
              activeIndex = 0;
              translateSwiper();
            }, swiperTransitionTime);
          }
        };

        const translateSwiper = () => {
          swiper.style.transform = `translateY(${
            -1 * activeIndex * slideHeight
          }px)`;
        };

        interval = setInterval(changeSlide, intervalTime);
      }

      return () => {
        funcWhenDeHidingPopup();
      };
    }
  }, [popupHeight]);
  return (
    <S.Swiper ref={swiperRef}>
      {benefits.map((benefit, i) => {
        return (
          <S.Slide key={i}>
            <span className="badge">혜택{i + 1}</span>
            {benefit}
          </S.Slide>
        );
      })}
    </S.Swiper>
  );
}
