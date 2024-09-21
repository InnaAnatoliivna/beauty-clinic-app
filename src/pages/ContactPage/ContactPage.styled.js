import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 28px 0;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 768px)  {
        padding: 58px 0;
    }

    h3 {
        color: var(--color-dark);
        font-size: 16px;
        background-color: var(--bc-hero);
        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
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