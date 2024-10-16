import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 30px 0;
    @media screen and (min-width: 768px)  {
        padding: 60px 0 30px 0;
    }

    span {
    @media screen and (min-width: 768px) {
        width: 704px;
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
        font-size: 20px;
    }
    }
`;

export const ContentWrapper = styled.div`

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        bottom: 100px;
        left: 220px;
    }
`;
