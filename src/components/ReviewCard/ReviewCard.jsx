import { logoImg } from '../Header/HeaderTop';
import { Link } from 'react-router-dom';
import * as S from './ReviewCardStyle';

export default function ReviewCard({ children }) {
  return <S.ReviewCard>{children}</S.ReviewCard>;
}

ReviewCard.ImgWrapper = ({ review }) => {
  return (
    <S.ImgWrapper $reviewImg={review.reviewImg}>
      <img
        className={`thumb-img ${review.reviewImg || 'logo'}`}
        src={`/img/${review.reviewImg ? review.reviewImg : logoImg}`}
        alt={`리뷰썸네일${review.reviewId}`}
      />
    </S.ImgWrapper>
  );
};

ReviewCard.TextWrapper = ({ review }) => {
  return (
    <S.TextWrapper>
      <img src="/img/star5.png" alt="별5개이미지" />
      <h3 className="title">
        <Link to={'/review'}>{review.title}</Link>
      </h3>
      <p className="content">{review.content}</p>
      <p className="nickname">
        <img src={`/img/${logoImg}`} alt="로고이미지" />
        쇼핑몰 이름 님
      </p>
    </S.TextWrapper>
  );
};
