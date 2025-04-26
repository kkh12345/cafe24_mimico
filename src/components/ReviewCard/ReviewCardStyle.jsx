import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ReviewCard = styled.div`
  border-radius: var(--border-radius30);
  overflow: hidden;
  background-color: #fff;
`;

export const ImgWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  overflow: hidden;

  &:hover {
    & .thumb-img {
      transform: scale(1.1);
    }
  }

  & .thumb-img {
    width: ${(props) => props.$reviewImg && '100%'};
    height: ${(props) => props.$reviewImg && '100%'};
    object-fit: cover;
    transition: transform 0.5s;

    &.logo {
      object-fit: contain;
    }
  }

  @media (max-width: 1200px) {
    height: 250px;
  }
  @media (max-width: 480px) {
    height: 200px;

    & .thumb-img {
      &.logo {
        height: 30px;
        object-fit: cover;
      }
    }
  }
`;

export const TextWrapper = styled.div`
  padding: 20px;

  & .title a,
  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & .title {
    margin-top: 10px;
    font-size: 0.9375rem;
    color: #333;
    & a {
      -webkit-line-clamp: 1;
    }
  }

  & .content {
    height: 35px;
    margin-top: 5px;
    line-height: 1.5;
    font-size: 0.75rem;
    color: #777;
    -webkit-line-clamp: 2;
  }

  & .nickname {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    font-size: 0.75rem;
    color: #999;

    & > img {
      width: 30px;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    &. nickname {
      margin-top: 10px;
    }
  }
`;
