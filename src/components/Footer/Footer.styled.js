import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    overflow: hidden;

    background-color: var(--bc-header);
    border-top: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 6px 1px rgba(46, 47, 66, 0.08);

    @media screen and (min-width: 768px) {
        padding: 28px 0;
    }
`;

export const WrappFlex = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    /* margin-bottom: 45px; */
    overflow: hidden;

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
    top: 50px;

    @media screen and (min-width: 768px) {
        position: relative;
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

    &::after {
        content: '';
        display: block;
        width: 100%;
        max-width: 1440px;
        height: 1px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

        position: absolute;
        top: -20px;
        left: 0px;
        @media(max-width: 767px)  {
            top: -8px;
            left: 0px;
        }
    };
`;