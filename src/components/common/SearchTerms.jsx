import { Link } from 'react-router-dom';
import styled from 'styled-components';

const searchTerms = [
  'mimico',
  'top',
  '스커트',
  '니트',
  '점프수트',
  '굿디몰디자인',
  'BEST',
  'NEW',
];

const S = {
  SearchTermList: styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: ${(props) => props.$colGap};
    row-gap: 12px;

    & a {
      padding: 17px 15px;
      border-radius: 30px;
      background-color: var(--point-yellow);
    }
  `,
};

export default function SearchTermList({ hasHash = false, colGap }) {
  return (
    <S.SearchTermList $colGap={colGap}>
      {searchTerms.map((term) => {
        return (
          <li key={term}>
            <Link to={`/search/${term}`}>
              {hasHash && '#'}
              {term}
            </Link>
          </li>
        );
      })}
    </S.SearchTermList>
  );
}
