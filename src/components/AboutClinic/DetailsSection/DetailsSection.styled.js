import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 15px 0px;
    @media screen and (min-width: 768px)  {
        padding: 60px 0px;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding-bottom: 30px;
    }
`;

export const Text = styled.div`
    letter-spacing: 0.5px; 
    text-align: center;
    color: var(--color-main-text);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }
`;

export const ListStyled = styled.ul`
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;

    > *:not(:last-child) {
        margin-bottom: 5px; 
    }

    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        margin-left: 0;
        > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
    @media screen and (min-width: 1440px) {
    > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
`;

export const Item = styled.li`
    color: var(--color-main-text);
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    svg {
        color: var(--color-test);
        font-size: 20px;
        min-width: 24px;
        min-height: 24px;
        @media screen and (min-width: 768px) {
            font-size: 26px;
            line-height: 1.2;
            min-width: 26px;
            min-height: 26px;
        }
    }
`;

export const SwiperWrapp = styled.div`
    height: auto;
`;