import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCard = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  padding: ${(props) => (props.$padding ? props.$padding : '15px')};
  font-size: 0.75rem;
  ${(props) => props.$isAbsolute && TextWrapperAbsolute}
  transition: all 0.5s;

  & .name,
  .desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }

  & .name {
    font-size: 0.75rem;
    font-weight: 500;
  }

  & .desc {
    margin: 8px 0;
    color: #555555;
  }

  & .color-list {
    margin: 4px 0 5px;
    display: flex;
    gap: 4px;

    & .color-item {
      width: 12px;
      aspect-ratio: 1;
      border: 1px solid #eee;
      border-radius: 50%;
    }
  }

  & .badge {
    margin-top: 4px;
    display: flex;
    gap: 3px;
  }
`;

export const ImgWrapper = styled(Link)`
  display: block;
  margin: ${(props) => (props.$margin ? props.$margin : '0')};
  border-radius: var(--border-radius30);
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s;
  }

  &:hover {
    & img {
      transform: scale(1.1);
    }
    & + ${TextWrapper} {
      opacity: 1;
      visibility: visible;
      pointer-events: none;
    }
  }
`;
export const TextWrapperAbsolute = css`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.84);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export const PriceInfo = styled.div`
  & .original-price {
    margin-right: 8px;
    color: ${(props) => (props.$discountRate > 0 ? '#999999' : '000000')};
    text-decoration: ${(props) =>
      props.$discountRate > 0 ? 'line-through' : 'none'};
    font-weight: ${(props) => (props.$discountRate > 0 ? '500' : 'bold')};
  }

  & .discounted-price {
    margin-right: 5px;
    font-weight: bold;
  }

  & .discount-rate {
    color: #f46a52;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
