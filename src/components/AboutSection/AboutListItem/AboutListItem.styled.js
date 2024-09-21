import styled from '@emotion/styled';

export const Item = styled.li`
    color: var(--color-main-text);
    /* font-weight: 500; */
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



