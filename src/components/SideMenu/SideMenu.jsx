import { Link } from 'react-router-dom';
import { useState } from 'react';

//컴포넌트
import { LinkList } from '../common/LinkList';

// 커스텀 훅
import useResponsive from '../../hooks/useResponsive';
import useSideMenu from '../../hooks/useSideMenu';

//변수
import { csCenterMenu } from '../Header/Sitemap';
import { brandMenu, categoryMenu } from '../Header/Sitemap';

//css
import './SideMenu.css';

const userLinks = [
  { name: '로그인', to: '/login' },
  { name: '회원가입', to: '/join' },
  { name: '마이페이지', to: '' },
  { name: '주문조회', to: '' },
];

export default function SideMenu() {
  const { isTabletSmall } = useResponsive();
  const { isSideMenuOpen, closeSideMenu } = useSideMenu();

  if (isTabletSmall) {
    return (
      <>
        <aside className={`side-menu ${isSideMenuOpen && '--open'}`}>
          <div className="side-menu__content">
            <LinkList arr={userLinks} className={'side-menu__user-link-list'} />
            <SideMenuLinks />
          </div>
        </aside>
        {isSideMenuOpen && (
          <div className="side-menu__overlay" onClick={closeSideMenu}></div>
        )}
      </>
    );
  }
}

function SideMenuLinks() {
  const menuArr = [
    brandMenu,
    ...categoryMenu,
    { name: 'CS CENTER', to: '', depth2: [...csCenterMenu] },
  ];
  const [isDepth2Open, setIsDepth2Open] = useState(
    Array(menuArr.length).fill(false)
  );

  const toggleDepth2Open = (i) => {
    setIsDepth2Open(
      isDepth2Open.map((a, j) => {
        if (j === i) {
          a = !a;
        } else {
          a = false;
        }
        return a;
      })
    );
  };

  return (
    <ul className="side-menu__link-depth1">
      {menuArr.map((a, i) => {
        return (
          <li key={i} className="side-menu__link-depth1-item">
            <div className="side-menu__link-depth1-item-inner">
              {a.name}
              {a.depth2 && (
                <>
                  <span className="view">
                    {a.name !== 'CS CENTER' && a.name !== 'BRAND' && (
                      <Link to={a.to}>VIEW</Link>
                    )}
                  </span>
                  {isDepth2Open[i] ? (
                    <i
                      className="xi-angle-up-thin"
                      onClick={() => {
                        toggleDepth2Open(i);
                      }}
                    ></i>
                  ) : (
                    <i
                      className="xi-angle-down-thin"
                      onClick={() => {
                        toggleDepth2Open(i);
                      }}
                    ></i>
                  )}
                </>
              )}
            </div>
            {a.depth2 && isDepth2Open[i] && (
              <ul className={`side-menu__link-depth2`}>
                {a.depth2.map((b, j) => {
                  return (
                    <li className="side-menu__link-depth2-item" key={j}>
                      <Link to={b.to}>{b.name}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
