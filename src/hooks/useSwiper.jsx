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

  return { swiperRef, slideNext, slidePrev };
}
