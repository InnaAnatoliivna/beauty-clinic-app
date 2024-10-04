import styled from '@emotion/styled';

export const ListStyled = styled.ul`
    text-align: center;
    list-style: none;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    
    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        max-width: 380px;
        margin-bottom: 11px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 25px;
    }
`;

export const ItemStyled = styled.li`
    text-align: start;
    color: var(--color-main-text);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    flex-direction: column;
    
    align-items: start;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    span{
        font-weight: 400;
    }
    p {
        display: flex;
        gap: 10px;
        align-items: center;
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