import { Link } from 'react-router-dom';
import { useState } from 'react';
import { brandMenu, categoryMenu, csCenterMenu } from './Sitemap';
import { HasDepth2LinkList } from '../common/LinkList';
import SearchTermList from '../common/SearchTerms';

export default function HeaderBottom() {
  const [isSearchModalShow, setIsSearchModalShow] = useState(false);
  const toggleSearchModal = (e) => {
    e.preventDefault();
    setIsSearchModalShow(!isSearchModalShow);
  };
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
}

function SearchModal({ isSearchModalShow }) {
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
