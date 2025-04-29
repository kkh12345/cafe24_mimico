import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchModal } from './HeaderBottom';
import Sitemap from './Sitemap';
import useResponsive from '../../hooks/useResponsive';
import { HamburgerMenuLeft, HamburgerMenuRight } from '../../CommonStyle';
import useSearchModal from '../../hooks/useSearchModal';

export const logoImg = 'logo.png';

const userLinks = [
  {
    name: '로그인',
    to: '/login',
  },
  {
    name: '회원가입',
    to: '/join',
  },
  {
    name: '주문조회',
    to: '',
  },
  {
    name: '쿠폰존',
    to: '',
  },
];

const S = {
  HamburgerMenuLeft: HamburgerMenuLeft,
  HamburgerMenuRight: HamburgerMenuRight,
};

export default function HeaderTop() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const openSiteMap = () => {
    setIsSitemapOpen(!isSitemapOpen);
  };
  const { isSearchModalShow, toggleSearchModal } = useSearchModal();
  const { isTabletSmall } = useResponsive();
  if (!isTabletSmall) {
    return (
      <div className="header__top">
        {/* 사이트맵 */}
        {isSitemapOpen && <Sitemap />}
        <div className="header__top-inner inner-common">
          <Link className="header__logo-wrapper" to="/">
            <img
              className="header__logo"
              src={`/img/${logoImg}`}
              alt="로고이미지"
            />
          </Link>

          <ul className="header__user-link-list">
            {userLinks.map(({ name, to }) => {
              return (
                <li className="header__user-link-item" key={name}>
                  <Link to={to}>{name}</Link>
                </li>
              );
            })}
          </ul>

          <S.HamburgerMenuRight
            $isSitemapOpen={isSitemapOpen}
            onClick={openSiteMap}
          >
            <span></span>
            <span></span>
            <span></span>
          </S.HamburgerMenuRight>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header__top-mobile">
        <SearchModal isSearchModalShow={isSearchModalShow}></SearchModal>
        <div className="header__top-mobile-inner inner-common">
          <S.HamburgerMenuLeft>
            <span></span>
            <span></span>
            <span></span>
          </S.HamburgerMenuLeft>
          <Link className="header__logo-wrapper" to="/">
            <img
              className="header__logo"
              src={`/img/${logoImg}`}
              alt="로고이미지"
            />
          </Link>
          <ul className="header__user-icon-list">
            <li className="header__user-icon-item">
              <Link to={''} onClick={toggleSearchModal}>
                {isSearchModalShow ? (
                  <i className="xi-close"></i>
                ) : (
                  <i className="xi-search"></i>
                )}
              </Link>
            </li>
            <li className="header__user-icon-item">
              <Link to={'/cart'}>
                <i className="xi-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
