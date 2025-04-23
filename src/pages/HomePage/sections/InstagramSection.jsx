import { HomeSectionTitle } from '../../../CommonStyle';

const instagramThumbs = [
  'insta01.jpg',
  'insta02.jpg',
  'insta03.jpg',
  'insta04.jpg',
  'insta05.jpg',
  'insta06.jpg',
];

const S = {
  HomeSectionTitle: HomeSectionTitle,
};

export default function InstagramSection() {
  return (
    <section className="instagram">
      <div className="instagram-inner inner-common">
        <S.HomeSectionTitle>
          INSTAGRAM !<span className="instagram__id">@ Goodymall_Design</span>
        </S.HomeSectionTitle>
        <ul className="instagram__grid-container">
          {instagramThumbs.map((img, i) => {
            return (
              <li key={i} className="instagram__grid-item">
                <a className="instagram__thumb-wrapper" href="#none">
                  <img src={`/img/${img}`} alt={`썸네일${i + 1}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
