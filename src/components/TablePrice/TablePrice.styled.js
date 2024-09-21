import styled from '@emotion/styled';
import Button from '../Button/Button';

export const Wrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const TableWrapp = styled.div`
margin-bottom: 32px;

h2 {
    background-color: var(--bc-hero);
}
`;

export const TableStyled = styled.table`
width: 100%;
border-collapse: collapse;

    th, td {
        border-bottom: 1px solid #e0e0e0; 
        padding: 8px; 
        text-align: left;
        font-size: 14px;
        text-align: center;
    }
    th:first-child {
        text-align: left;
    }
    td:first-child {
        width: 600px;
        text-align: left;
    }
`;

export const ButtonStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;