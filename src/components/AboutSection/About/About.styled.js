import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 700px;
    overflow: hidden;
    position: relative;
    padding: 28px 0;
    @media screen and (min-width: 768px)  {
        padding: 58px 0;
    }
    @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
`;
