import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sitemap from './Sitemap';

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
  HamburgerMenu: styled.button`
    width: 28px;
    aspect-ratio: 1/1;
    margin-left: 20px;
    background: none;
    position: relative;

    & > span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #000;
      position: absolute;
      right: 0;
      transform: translateY(-50%);
      transition: all 0.3s;

      &:nth-child(1) {
        width: ${(props) => (props.$isSitemapOpen ? '100%' : '90%')};
        top: ${(props) => (props.$isSitemapOpen ? '50%' : '25%')};
        transform: translateY(-50%)
          rotate(${(props) => (props.$isSitemapOpen ? '-45deg' : '0')});
      }

      &:nth-child(2) {
        width: 70%;
        top: 50%;
        opacity: ${(props) => (props.$isSitemapOpen ? '0' : '1')};
      }

      &:nth-child(3) {
        width: ${(props) => (props.$isSitemapOpen ? '100%' : '50%')};
        top: ${(props) => (props.$isSitemapOpen ? '50%' : '75%')};
        transform: translateY(-50%)
          rotate(${(props) => (props.$isSitemapOpen ? '45deg' : '0')});
      }
    }
  `,
};

export default function HeaderTop() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const openSiteMap = () => {
    setIsSitemapOpen(!isSitemapOpen);
  };

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

        <S.HamburgerMenu $isSitemapOpen={isSitemapOpen} onClick={openSiteMap}>
          <span></span>
          <span></span>
          <span></span>
        </S.HamburgerMenu>
      </div>
    </div>
  );
}
