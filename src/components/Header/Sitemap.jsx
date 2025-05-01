//컴포넌트
import { LinkList, HasDepth2LinkList } from '../common/LinkList';

export const brandMenu = {
  name: 'BRAND',
  to: '',
  depth2: [
    {
      name: '브랜드소개',
      to: '',
    },
  ],
};

export const categoryMenu = [
  {
    name: '점퍼',
    to: '/shop/점퍼',
    depth2: [
      {
        name: '패딩',
        to: '/shop/패딩',
      },
      {
        name: '자켓',
        to: '/shop/자켓',
      },
      {
        name: '리버서블',
        to: '/shop/리버서블',
      },
    ],
  },
  {
    name: '가디건',
    to: '/shop/가디건',
    depth2: [
      {
        name: '버튼가디건',
        to: '/shop/버튼가디건',
      },
      {
        name: '스트링가디건',
        to: '/shop/스트링가디건',
      },
    ],
  },
  {
    name: '티셔츠',
    to: '/shop/티셔츠',
  },
  {
    name: '하의',
    to: '/shop/하의',
    depth2: [
      {
        name: '바지',
        to: '/shop/바지',
      },
      {
        name: '스커트',
        to: '/shop/스커트',
      },
    ],
  },
  {
    name: '세트',
    to: '/shop/세트',
  },
  {
    name: '레깅스',
    to: '/shop/레깅스',
  },
  {
    name: '이너웨어',
    to: '/shop/이너웨어',
  },
  {
    name: '악세사리',
    to: '/shop/악세사리',
  },
  {
    name: '신발',
    to: '/shop/신발',
  },
];

export const csCenterMenu = [
  {
    name: '공지사항',
    to: '',
  },
  {
    name: '상품Q&A',
    to: '',
  },
  {
    name: '갤러리',
    to: '',
  },
  {
    name: '댕댕 후기',
    to: '',
  },
];

const mypageMenu = [
  {
    name: '주문조회',
    to: '',
  },
  {
    name: '관심상품',
    to: '',
  },
  {
    name: '좋아요',
    to: '',
  },
  {
    name: '쿠폰',
    to: '',
  },
];

export default function Sitemap() {
  return (
    <div className="sitemap">
      <div className="sitemap__inner inner-common">
        <div className="sitemap__category">
          <HasDepth2LinkList
            arr={[brandMenu, ...categoryMenu]}
            depth1ClassName={'sitemap__category-depth1'}
            depth2ClassName={'sitemap__category-depth2'}
          />
        </div>
        <div className="sitemap__cs-center">
          <h3>C/S CENTER</h3>
          <LinkList arr={csCenterMenu} className={'sitemap__cs-center-menu'} />
        </div>
        <div className="sitemap__mypage">
          <h3>MYPAGE</h3>
          <LinkList arr={mypageMenu} className={'sitemap__mypage-menu'} />
        </div>
      </div>
    </div>
  );
}
