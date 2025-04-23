import { logoImg } from '../../../components/Header/HeaderTop';
import SearchTermList from '../../../components/common/SearchTerms';

export default function MainCommentSection() {
  return (
    <section className="main-comment">
      <div className="main-comment__inner inner-common">
        <h2>
          <img
            className="main-comment__logo"
            src={`/img/${logoImg}`}
            alt="로고이미지"
          />
          쇼핑몰 이름에서 특별한 디자인을 만나보세요.
        </h2>
        <SearchTermList colGap={'10px'} />
      </div>
    </section>
  );
}
