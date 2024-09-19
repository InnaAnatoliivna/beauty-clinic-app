import styled from '@emotion/styled';
import imageCloud from '../../../images/cloud-bc-3.jpeg';

export const ItemStyled = styled.div`
    background-image: url(${imageCloud});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    width: 100%;
    max-width: 500px;
    height: 300px;
    padding: 50px;
    font-size: 14px;
    @media (min-width: 768px) {
        height: 250px;
        font-size:15px;
        padding: 20px 26px;
    }
    @media (min-width: 1440px) {
        height: 300px;
        padding: 28px;
        font-size: 18px;
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