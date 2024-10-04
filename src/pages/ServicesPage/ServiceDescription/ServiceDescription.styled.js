import styled from '@emotion/styled';

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Box = styled.div`
    position: relative;
    width:40%;
    min-height: 100%;
    background-color: #e2cfc2;
    align-self: stretch;
`;

export const TextBox = styled.div`
    width: 60%;
    padding: 0 40px;

    p {
        color: var(--color-main-text);
        text-align: center;
        font-size: 14px;
        line-height: 1.2;

        @media screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 1.4;
        }
        @media screen and (min-width: 1440px) {
            font-size: 20px;
        }
    }
`;

export const TitleStyled = styled.h1`
    position: relative; 

    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
    word-spacing: 1.8px;
    letter-spacing: 0.5px; 
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--color-main-text);

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 40px;
        font-size: 26px;
    }
`;

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 60px;
`;

export const LinkStyled = styled.div`
    color: var(--color-brown);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);

    transition: color linear 500ms, border-color linear 500ms;
    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    /* @media screen and (min-width: 768px) and (max-width: 1439px) {
    } */
        @media screen and (min-width: 1440px) {
        font-size: 16px;
    }
    @media (min-width: 768px) {
        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
        &:hover {
            color: var(--bc-hero);
            border-color: var(--bc-hero);
            background-color: var(--color-brown);
        }
    }
`;