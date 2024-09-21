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

    span {
    @media screen and (min-width: 768px) {
        width: 704px;
        /* font-size: 24px; */
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
        margin-bottom: 32px;
        text-indent: 10px;
        text-align: center;
        word-spacing: 1.8px;
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
        line-height: 1.3;
        color: var(--color-main-text);
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 62px;
        font-size: 26px;
    }
    }
`;

export const ContentWrapper = styled.div`

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0 0 0;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1440px) {
        align-items: start;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (min-width: 1440px) {
        position: absolute;
        bottom: 76px;
        left: 239px;
    }
`;
