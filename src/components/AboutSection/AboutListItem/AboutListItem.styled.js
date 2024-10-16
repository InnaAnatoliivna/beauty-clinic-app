import styled from '@emotion/styled';

export const Item = styled.li`
    color: var(--color-main-text);
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.1;
    }
    @media screen and (min-width: 1440px) {
        font-size: 16px;
    }

    svg {
        color: var(--color-test);
        font-size: 20px;
        min-width: 20px;
        min-height: 20px;
        @media screen and (min-width: 768px) {
            font-size: 20px;
            line-height: 1.2;
            min-width: 20px;
            min-height: 20px;
        }
    }
`;



