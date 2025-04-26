import { useRef } from 'react';

export default function useSwiper() {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const slidePrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const slideAutoplayStop = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.autoplay.stop();
    }
  };

  const slideAutoplayStart = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.autoplay.start();
    }
  };

  return {
    swiperRef,
    slideNext,
    slidePrev,
    slideAutoplayStop,
    slideAutoplayStart,
  };
}
