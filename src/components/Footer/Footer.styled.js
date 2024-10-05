import styled from '@emotion/styled';

export const Section = styled.div`
    position: relative;
    padding: 15px 0 10px 0;
    background-color: var(--bc-header);
    border-top: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 6px 1px rgba(46, 47, 66, 0.08);

    @media screen and (min-width: 768px) {
        padding: 30px 0;
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

        position: absolute;
        bottom: 48px;
        left: 0px;
        @media(min-width: 768px)  {
            left: 0px;
            bottom: 60px;
        }
    };
`;

export const Wrapper = styled.div`
    height: 126px;
    @media(min-width: 768px)  {
        height: 170px;
    }
`;

export const WrappFlex = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;

    svg {
        font-size: 20px;
        color: var(--color-black);
        @media screen and (min-width: 768px) {
            font-size: 34px;
        }
    }
`;

export const WrappLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 768px) {
        gap: 24px;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 5px;
    z-index: 100;

    position: absolute;
    right: 0px;
    top: 30px;

    @media screen and (min-width: 768px) {
        position: static;
        gap: 12px;
        align-items: flex-start;
    }

    a {
        font-size: 8px;
        color: var(--color-main-text);
        @media screen and (min-width: 768px) {
            font-size: 10px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 14px;
        }
    }
`;

export const TextStyled = styled.p`
    position: relative;
    margin-top: 28px;
    font-size: 9px;
    text-align: end;
    color: var(--color-main-text);
    a {
        font-weight: 500;
        color: var(--color-main-text);
    }
    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    
`;