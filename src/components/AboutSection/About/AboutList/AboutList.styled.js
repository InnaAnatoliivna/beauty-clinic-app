import styled from '@emotion/styled';

export const ListStyled = styled.ul`
    margin-left: auto;
    margin-bottom: 20px;
    list-style: none;

    > *:not(:last-child) {
        margin-bottom: 5px; 
    }

    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        max-width: 380px;
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
