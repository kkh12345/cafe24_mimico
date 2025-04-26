//로고이미지
import { logoImg } from '../Header/HeaderTop';

//css
import './Footer.css';

const socialIcons = [
  'xi-facebook',
  'xi-instagram',
  'xi-kakaotalk',
  'xi-youtube',
];

const otherSiteLogos = [
  'footer_icon01.png',
  'footer_icon02.png',
  'footer_icon03.png',
  'footer_icon04.png',
];

const footerLinks = ['회사소개', '이용약관', '개인정보처리방침', '이용안내'];

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </div>
    </footer>
  );
}

function FooterLeft() {
  return (
    <section className="footer__left">
      <div className="footer__logo-wrapper">
        <img
          className="footer__logo"
          src={`/img/${logoImg}`}
          alt="로고이미지"
        />
      </div>

      <div className="footer__social-icons">
        {socialIcons.map((className) => {
          return (
            <a href="#none" key={className}>
              <i className={className}></i>
            </a>
          );
        })}
      </div>

      <p className="footer__safe-service">
        구매안전서비스<a href="#none">가입사실확인</a> <br />
        고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰이 가입한
        PG에스크로 구매안전서비스를 이용하실 수 있습니다.
      </p>

      <div className="footer__other-site-logos">
        {otherSiteLogos.map((img, i) => {
          return (
            <a href="#none" key={img}>
              <img src={`/img/${img}`} alt={`로고${i}`} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function FooterCenter() {
  return (
    <section className="footer__center">
      <h2 className="footer__center-title">COMPANY INFO</h2>
      <p className="footer__company-details">
        <span>COMPANY :</span> <span>CEO :</span> <span>PHONE :</span>{' '}
        <span>FAX :</span>
        <br />
        <span> BUSINESS LICENCE :</span> <span>E-COMMERCE PERMIT</span>
        <br /> <span>ADDRESS :</span>
      </p>
      <p className="footer__copyright">
        COPYRIGHT &copy; 쇼핑몰 이름 ALL RIGHT RESERVED.{' '}
        <span>HOSTING BY 카페24</span>
      </p>
      <div className="footer__links">
        {footerLinks.map((name) => {
          return (
            <a href="#none" key={name}>
              {name}
            </a>
          );
        })}
      </div>
    </section>
  );
}

function FooterRight() {
  return (
    <section className="footer__right">
      <div className="footer__cs-center">
        <h2>고객센터</h2>
        <p className="footer__runtime">
          <span>고객센터 평일 09:00 - 18:00 (점심 12:00 - 13:00)</span>
          <br />
          <span>토요일 일요일 공휴일 휴무</span>
        </p>
      </div>
      <div className="footer__account">
        <h2>계좌정보</h2>
      </div>
      <p className="footer__account-info">
        <span>계좌정보 우리 1002-355-664254</span>
        <br />
        <span>신한 1234-123-123456</span>
        <br />
        예금주 : 굿디몰디자인
      </p>
    </section>
  );
}
