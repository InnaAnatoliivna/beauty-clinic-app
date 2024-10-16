import styled from '@emotion/styled';

export const ItemStyled = styled.div`
    width: 100%;
    height: 280px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    background-color: var(--bc-header);
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border: 1px solid var(--color-main-text);
    border-radius: 12px;

    padding: 28px;
    font-size: 14px;
    @media (min-width: 768px) {
        font-size:15px;
    }
    @media (min-width: 1440px) {
        height: 300px;
        font-size: 16px;
    }
`;

export const WrapHead = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;

    color: var(--color-main-text);

    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media (min-width: 1440px) {
        margin-bottom: 14px;
    }
`;

export const WrappDetail = styled.div`
    text-align: start;
    margin-bottom: 18px;

    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media (min-width: 1440px) {
        margin-bottom: 14px;
    }

    span {
        color: var(--color-main-text);
    }
    p {
        color: var(--color-brown);
    }
`;

export const Signature = styled.div`
    text-align: end;
    color: var(--color-main-text);
`