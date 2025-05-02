import { Link } from 'react-router-dom';

// 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

//변수
import { brandMenu, categoryMenu, csCenterMenu } from './Sitemap';

//컴포넌트
import { HasDepth2LinkList } from '../common/LinkList';
import SearchTermList from '../common/SearchTerms';

//커스텀 훅
import useResponsive from '../../hooks/useResponsive';
import useSwiper from '../../hooks/useSwiper';
import useSearchModal from '../../hooks/useSearchModal';

export default function HeaderBottom() {
  const { swiperRef, slideNext } = useSwiper();
  const { isSearchModalShow, toggleSearchModal } = useSearchModal();
  const { isTabletSmall } = useResponsive();

  if (!isTabletSmall) {
    // PC
    return (
      <div className="header__bottom">
        <SearchModal isSearchModalShow={isSearchModalShow} />
        <div className="header__bottom-inner inner-common">
          <GlobalNav />
          <ul className="header__user-icon-list">
            <li className="header__user-icon-item">
              <Link to={'/cart'}>
                <i className="xi-cart"></i>
              </Link>
            </li>
            <li className="header__user-icon-item">
              <Link to={''}>
                <i className="xi-user"></i>
              </Link>
            </li>
            <li className="header__user-icon-item">
              <Link to={''} onClick={toggleSearchModal}>
                {isSearchModalShow ? (
                  <i className="xi-close"></i>
                ) : (
                  <i className="xi-search"></i>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    // 모바일,태블릿
    return (
      <div className="header__bottom-mobile">
        <div className="header__bottom-mobile-inner inner-common">
          <GlobalNavSwiper swiperRef={swiperRef} />
          <button className="global-nav-swiper__next-btn" onClick={slideNext}>
            <i className="xi-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export function SearchModal({ isSearchModalShow }) {
  return (
    <div className={`search-modal ${isSearchModalShow && '--show'}`}>
      <div className="search-modal__inner inner-common">
        <div className="search-modal__search-area">
          <input className="search-modal__search-input" type="text" />
          <Link className="search-modal__search-btn" to={`/search`}>
            <i className="search-modal__search-icon xi-search"></i>
          </Link>
        </div>
        <SearchTermList colGap={'20px'} hasHash={true} />
      </div>
    </div>
  );
}

function GlobalNav() {
  return (
    <nav className="global-nav">
      <HasDepth2LinkList
        arr={[
          brandMenu,
          ...categoryMenu,
          { name: 'CS CENTER', to: '', depth2: [...csCenterMenu] },
        ]}
        depth1ClassName={'global-nav__depth1'}
        depth2ClassName={'global-nav__depth2'}
      />
    </nav>
  );
}

function GlobalNavSwiper({ swiperRef }) {
  const swiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 32,
    speed: 300,
    loop: true,
    modules: [Navigation],

    className: 'global-nav-swiper',
    onInit: (swiper) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <Swiper {...swiperOptions}>
      {categoryMenu.map(({ name, to }) => {
        return (
          <SwiperSlide key={name}>
            <Link to={to}>{name}</Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
