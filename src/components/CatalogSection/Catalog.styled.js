import styled from '@emotion/styled';
import bcImg from '../../images/276230497_149097284242841_4479337240596802514_n.jpg'

export const Section = styled.div`
    background-image: url(${bcImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 0%;
    position: relative;
`;

export const Wrapper = styled.div`
    padding-top: 40px;
    @media (min-width: 768px) {
        padding-top: 30px;
    }
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: var(--color-main-text);
    text-shadow: var(--shadow-text-title);

    margin-bottom: 18px;

    @media (min-width: 768px) {
        font-size: 26px;
        margin-bottom: 30px;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;


