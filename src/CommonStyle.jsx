import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoreButton = styled(Link)`
  display: inline-block;
  padding: 22px 17px;
  font-size: 1rem;
  background: var(--point-orange);
  color: #fff;
  border-radius: 30px;

  @media (max-width: 1200px) {
    padding: 20px 15px;
  }

  @media (max-width: 768px) {
    padding: 15px 12px;
    font-size: 0.875rem;
  }
`;

export const MoreButtonSmall = styled(MoreButton)`
  font-size: 0.8125rem;
  padding: 17px 15px;

  @media (max-width: 480px) {
    font-size: 0.6875rem;
    padding: 8px 10px;
  }
`;

export const HomeSectionTitle = styled.h2`
  text-align: center;
  color: #222222;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
  & .instagram__id {
    margin-left: 0.625rem;
    color: #000000;
    font-size: 0.8125rem;
  }

  & .new__more-btn,
  .kids-item__more-btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 480px) {
    font-size: 1.375rem;
    & .new__more-btn,
    .kids-item__more-btn {
      display: block;
      width: max-content;
      margin-left: auto;
      position: static;
    }
  }
`;

export const SlideCircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1;
  box-shadow: 0px 3px 4px 0px rgb(161 161 161 / 30%);
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;

  &.next {
    right: 0;
  }

  &.prev {
    left: 0;
  }

  & i {
    display: block;
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ViewMoreProductsBtn = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: transparent;
  font-size: 0.8125rem;
  color: #333333;

  .xi-angle-down {
    vertical-align: middle;
    margin-left: 10px;
    color: #555555;
  }
`;
