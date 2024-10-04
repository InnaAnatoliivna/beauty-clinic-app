import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 32px;
    column-gap: 14px;
    row-gap: 14px;

    @media screen and (min-width: 768px) {
        justify-content: center;
        column-gap: 24px;
        row-gap: 24px;
    }

    @media screen and (min-width: 1440px) {
        column-gap: 32px;
        row-gap: 32px;
    }
`;
