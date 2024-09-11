import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: var(--bc-hero);
  z-index: 2;

  div {
    position: absolute;
    bottom: 26px;
    left: 35px;
    display: flex;
    width: 100%;
    svg {
      stroke: rgba(239, 237, 232, 1);
    }
  }
  @media screen and (min-width: 768px) {
    /* width: 350px; */
    padding: 26px 32px 32px 32px;
  }

  @media screen and (max-width: 1439px) {
    &.shown {
      right: 0;
    }

    &.hidden {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  p {
    color:  var(--color-black);
  }
`;


export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  li {
    padding: 10px 27px;
  }
`;

export const Link = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 27px;
  color: var(--color-black);
  border: 1px solid var(--color-black);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  :focus {
    border: 1px solid var(--color-black);
  }
`;