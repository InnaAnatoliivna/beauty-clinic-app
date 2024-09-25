import styled from '@emotion/styled';

export const TableStyled = styled.table`
    width: 100%;
    max-width: 300px;
    border-collapse: collapse;
    position: relative;
    margin-bottom: 44px;

    td {
        color: var(--color-brown);
        border-bottom: 1px solid var(--bc-hero); 
        padding: 5px; 
        text-align: left;
        font-size: 12px;
        line-height: 1.4;
        text-align: start;
        @media screen and (min-width: 768px) {
            font-size: 14px;
            padding: 8px; 
        }
        @media screen and (min-width: 1440px) {
            font-size: 16px;
            padding: 8px; 
        }
    }
`;

export const TableWrapper = styled.div`
    h3 {
        color: var(--color-dark);
        font-size: 16px;
        background-color: var(--bc-hero);
        @media screen and (min-width: 768px) {
            font-size: 20px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 24px;
        }
    }
`;