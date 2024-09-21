import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const TableWrapp = styled.div`
    h2 {
        color: var(--color-dark);
        font-size: 16px;
        background-color: var(--bc-hero);
        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
`;

export const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
    position: relative;
    margin-bottom: 44px;

    th, td {
        color: var(--color-brown);
        border-bottom: 1px solid #e0e0e0; 
        padding: 5px; 
        text-align: left;
        font-size: 12px;
        line-height: 1.4;
        text-align: center;
        @media screen and (min-width: 768px) {
            font-size: 16px;
            padding: 8px; 
        }
    }

    th:first-of-type {
        text-align: left;
    }
    td:first-of-type {
        width: 600px;
        text-align: left;
    }
    td:not(:first-of-type) {
        width: 60px;
    }

    .discount {
        color: var(--color-red);
    }
`;

export const ButtonBox = styled.span`
    position: absolute;
    bottom: -42px;
    right: 0;
`;

export const Span = styled.span`
        display: flex;
        align-items: center; 
        gap: 2px;

        svg{
            font-size: 20px;
            color: var(--color-main-text);
        }
`;