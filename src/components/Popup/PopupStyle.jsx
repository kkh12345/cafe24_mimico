import styled from 'styled-components';

export const Popup = styled.div`
  height: ${(props) => props.$height}px;
  background-color: var(--point-orange);
  color: #fff;
  font-size: 0.75rem;
  overflow: hidden;
  transition: height 0.5s;

  &.--hide {
    height: 0;
  }

  & .inner {
    height: 100%;
    position: relative;
  }
`;

export const Swiper = styled.ul`
  width: max-content;
  height: 100%;
  margin: 0 auto;
  transition: all 0.5s;
`;

export const Slide = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  gap: 8px;

  & .badge {
    height: 20px;
    padding: 0 6px;
    line-height: 22px;
    background-color: #fff;
    color: #3e404b;
    border-radius: 30px;
    font-size: 0.6875rem;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  background: none;
  color: #fff;
  font-size: 1rem;
  position: absolute;
  top: ${(props) => props.$top}px;
  right: 0;
  transform: translateY(-50%);

  & i {
    display: block;
  }
`;
