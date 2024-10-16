import styled from '@emotion/styled';

export const Section = styled.div`
    background-color: #e2cfc2;
`;

export const Wrapper = styled.div`
    position: relative;
    @media screen and (max-width: 767px)  {
        padding-top: 30px;
        padding-bottom: 15px;
    }
`;

export const WrappTeam = styled.div`
    position: relative;
    @media screen and (max-width: 767px)  {
        padding-top: 15px;
        padding-bottom: 30px;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding-top: 30px;
        padding-bottom: 60px;
    }
`;


export const FlexWrapp = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
        @media screen and (max-width: 767px)  {
            flex-direction: column;
            img {
                border-radius: 8px; 
                box-shadow: 0 9px 10px rgba(0, 0, 0, 0.3);
            }
        }

    span {
        width: 100%;
        color: var(--bc-header);
        font-size: 14px;
        font-weight: 500;
        background-color: #47373765;
        padding: 8px 20px;
        position: absolute;
        z-index: 100;
        left: 0;
        bottom: 0;
        @media screen and (max-width: 767px){
            border-bottom-left-radius: 8px; 
            border-bottom-right-radius: 8px; 
        }
        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
    }
`;

export const TextBox = styled.div`
    @media screen and (min-width: 768px) {
        width: 60%;
    }
`;

export const Box = styled.div`
    position: relative;
    img {
    @media screen and (min-width: 768px) {
        width: 500px;
    }
    }
`;

export const TitleStyled = styled.h1`
    position: relative; 

    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    text-align: center;
    word-spacing: 1.8px;
    letter-spacing: 0.5px; 
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--color-main-text);

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 62px;
        font-size: 26px;
    }
    @media screen and (min-width: 768px){
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 1.5px;
                background-color: var(--color-main-text);
                box-shadow: var(--shadow-cards-second);
                border-radius: var(--card-border-radius);
                box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

                position: absolute;
                left: 0;

                animation: colorShift 3s infinite;
                @media screen and (min-width: 768px) {
                    top: 80px;
                }
                @media screen and (min-width: 1440px) {
                    top: 95px;
                }
            };}

    @keyframes colorShift {
        0% { background-color: var(--color-main-text);}
        50% {background-color: var(--color-test);}
        100% {background-color: var(--color-main-text); }
    }
`;

export const Text = styled.p`
    text-indent: 50px;
    color: var(--color-main-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.5px; 
    text-align: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.2;
    }
    @media screen and (min-width: 1440px) {
        line-height: 1.3;
        font-size: 20px;
    }
`;
