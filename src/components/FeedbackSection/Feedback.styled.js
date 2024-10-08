import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding-bottom: 30px;
    padding-top: 30px;
    @media (min-width: 768px) {
        padding-bottom: 60px;
        padding-top: 60px;
    }
`;

export const Title = styled.div`
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