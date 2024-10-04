import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  padding: 60px 0 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media (min-width: 1440px) {
  }
`;

export const ItemStyled = styled.li`
  cursor: pointer;
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
    font-size: 16px;
    padding: 12px 24px;
  }
  @media (max-width: 767px) {
    width: calc((100% - 12px) / 2);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
