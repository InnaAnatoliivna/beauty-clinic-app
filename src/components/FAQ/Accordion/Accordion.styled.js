import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding-bottom: 30px;
    @media screen and (min-width: 768px)  {
        padding-bottom: 60px;
    }
`;

export const Text = styled.span`
    display: block;
    color: var(--color-brown);
    font-size: 14px;
    @media (min-width: 768px) {
        font-size: 15px;
    }
`;

export const SubTitle = styled.span`
    display: block;
    margin-bottom: 10px;
    color: var(--color-main-text);
    font-size: 10px;
    @media (min-width: 768px) {
        font-size: 12px;
    }
`;