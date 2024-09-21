import styled from '@emotion/styled';

export const ListStyled = styled.ul`
    margin-bottom: 20px;
    list-style: none;

    > *:not(:last-child) {
        margin-bottom: 8px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        max-width: 380px;
        margin-left: 0;
        > *:not(:last-child) {
        margin-bottom: 11px;
    }
    }

    @media screen and (min-width: 1440px) {
    > *:not(:last-child) {
        margin-bottom: 16px;
    }

        width: 538px;
    }
`;
