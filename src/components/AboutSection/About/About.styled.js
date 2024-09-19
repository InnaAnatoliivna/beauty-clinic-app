import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
    width: 100%;
    min-height: 700px;
    overflow: hidden;
    position: relative;
    padding: 28px 0;
    @media screen and (min-width: 768px)  {
        padding: 58px 0;
    }
    @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
`;

export const Button = styled.div`
    margin-left: 25%;
    width: 180px;
    margin-top: 20px;
    color: var(--bc-hero);
    border-color: var(--bc-hero);
    background-color: var(--color-brown);
    border: 1.5px solid var(--bc-hero);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    
    transition: color linear 500ms, border-color linear 500ms;

    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 200px;
        margin-top: 40px;
        margin-left: 0%;
    }
        @media screen and (min-width: 1440px) {
        width: 230px;
        margin-top: 40px;
        margin-left: 65%;
    font-size: 16px;
    }
    @media (min-width: 768px) {
        transition: color linear 500ms,
            border-color linear 500ms,
            background-color linear 500ms;
        &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }
    }
`

export const ButtonStyled = styled(Link)`
    width: 100%;
    display: inline-block;
    text-align: center;

    color: inherit;
    /* text-transform: uppercase; */
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 14px;
    line-height: 1.1;
    padding: 16px 26px;
    overflow: hidden;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding: 20px 40px;
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 20px;
    }
`;