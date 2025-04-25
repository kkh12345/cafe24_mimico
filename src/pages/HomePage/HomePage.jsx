import MainVisualSection from './sections/MainVisualSection';
import MainCommentSection from './sections/MainCommentSection';
import InstagramSection from './sections/InstagramSection';
import ReviewSection from './sections/ReviewSection';
import BestSellerSection from './sections/BestSellerSection';
import NewSection from './sections/NewSection';
import CollectionSection from './sections/CollectionSection';
import KidsItemSection from './sections/KidsItemSection';
import { useEffect, useRef } from 'react';
import './HomePage.css';

export default function HomePage() {
  const scrollAniRef = useRef({});

  let lastScrollY = 0;
  useEffect(() => {
    window.scrollTo({ top: 0 });
    let isScrollUp = true;

    const upObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((a) => {
          if (a.isIntersecting) {
            a.target.classList.add('--run');
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const changeObserver = () => {
      if (window.scrollY >= lastScrollY) {
        if (isScrollUp) {
          for (let key in scrollAniRef.current) {
            upObserver.observe(scrollAniRef.current[key]);
          }
        }
        isScrollUp = false;
      } else {
        if (!isScrollUp) {
          for (let key in scrollAniRef.current) {
            upObserver.unobserve(scrollAniRef.current[key]);
          }
        }
        isScrollUp = true;

        for (let key in scrollAniRef.current) {
          if (
            scrollAniRef.current[key].getBoundingClientRect().top >=
            window.innerHeight - 200
          ) {
            scrollAniRef.current[key].classList.remove('--run');
          }
        }
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', changeObserver);

    return () => {
      window.removeEventListener('scroll', changeObserver);
    };
  }, []);

  return (
    <div className="homepage">
      <MainVisualSection />
      <MainCommentSection />
      <BestSellerSection scrollAniRef={scrollAniRef} />
      <NewSection scrollAniRef={scrollAniRef} />
      <CollectionSection />
      <KidsItemSection scrollAniRef={scrollAniRef} />
      <ReviewSection scrollAniRef={scrollAniRef} />
      <InstagramSection />
    </div>
  );
}
