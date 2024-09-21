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

export const Item = styled.li`
    color: var(--color-brown);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 12px;

    svg {
        color: var(--color-red);
        font-size: 24px;
        min-width: 24px; 
        min-height: 24px;
        @media screen and (min-width: 768px) {
            font-size: 26px;
            line-height: 1.2;
            min-width: 26px;
            min-height: 26px;
        }    
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1.3;
    }
`
