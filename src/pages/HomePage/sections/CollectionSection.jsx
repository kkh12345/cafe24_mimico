import { HomeSectionTitle, SlideCircleButton } from '../../../CommonStyle';

const S = {
  HomeSectionTitle: HomeSectionTitle,
  SlideCircleButton: SlideCircleButton,
};

export default function CollectionSection() {
  return (
    <section className="collection">
      <div className="collection__inner">
        <div className="collection__left">
          <div className="collection__text-box">
            <S.HomeSectionTitle>COLLECTION</S.HomeSectionTitle>
            <p className="collection__desc">
              가장 좋은 것을 주고싶은 마음으로 최선을 다해 제품을 선보이고
              있습니다.
            </p>
            <S.SlideCircleButton $translateX={'0'} className="prev">
              <i className="xi-long-arrow-left"></i>
            </S.SlideCircleButton>
            <S.SlideCircleButton $translateX={'0'} className="next">
              <i className="xi-long-arrow-right"></i>
            </S.SlideCircleButton>
          </div>
        </div>
        <div className="collection__right">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3NaWJnFzhZs?si=yEeL8ImXTsacPoXS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
