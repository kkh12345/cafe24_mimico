import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoreButton = styled(Link)`
  display: inline-block;
  padding: 22px 17px;
  font-size: 1rem;
  background: var(--point-orange);
  color: #fff;
  border-radius: 30px;
`;

export const MoreButtonSmall = styled(MoreButton)`
  font-size: 0.8125rem;
  padding: 17px 15px;
`;

export const HomeSectionTitle = styled.h2`
  margin: ${(props) => (props.$margin ? props.$margin : '0')};
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
  z-index: 2;

  &.next {
    right: 0;
    transform: translate(
      ${(props) => (props.$translateX ? props.$translateX : '50%')},
      -50%
    );
  }

  &.prev {
    left: 0;
    transform: translate(
      ${(props) => (props.$translateX ? props.$translateX : '-50%')},
      -50%
    );
  }

  & i {
    display: block;
    font-size: 16px;
    font-weight: bold;
  }
`;
