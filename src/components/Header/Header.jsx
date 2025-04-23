//css
import './Header.css';

//컴포넌트
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default function Header() {
  return (
    <header id="header" className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
