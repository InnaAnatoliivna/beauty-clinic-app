import styled from "@emotion/styled";
import circleImg from '../../images/b-c-img.jpg';

export const Wrapper = styled.div`
  padding: 60px 0;
`;


export const ListStyled = styled.ul`
  list-style: none;
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
  gap: 12px;
  @media (max-width: 767px) {
    background-image: url(${circleImg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0%;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 30px;
  }
`;

export const ItemStyled = styled.li`
  cursor: pointer;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  text-align: center;
  padding: 8px 10px;
  background-color: var(--bc-header);
  border: 1.5px solid var(--color-main-text);
  border-radius: var(--card-border-radius);
  box-shadow: var(--shadow-cards), var(--shadow-card-inset);
  color: var(--color-main-text);

  transition: var(--transition-list);
  transition: color linear 500ms;

  &:hover,
  :visited,
  :focus {
    color: var(--color-test);
    border-color: var(--color-test);
  }
  @media (min-width: 768px) {
    height: 64px;
    font-size: 16px;
    padding: 12px 24px;
  }
  @media (min-width: 1440px) {
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

