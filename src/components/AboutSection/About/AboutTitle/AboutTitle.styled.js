import styled from '@emotion/styled';

export const TitleStyled = styled.h3`
    position: relative; 

    margin-bottom: 28px;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    color: var(--color-main-text);

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 704px;
        font-size: 20px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 62px;
        font-size: 20px;

    }

        @media screen and (min-width: 768px) {
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
                top: 140px;
                left: 0;

                animation: colorShift 3s infinite;

                @media screen and (min-width: 768px) and (max-width: 1439px) {
                    top: 110px;
                }
                @media screen and (min-width: 1440px) {
                    top: 160px;
                }
            };
        }

    @keyframes colorShift {
        0% { background-color: var(--color-main-text);}
        50% {background-color: var(--color-test);}
        100% {background-color: var(--color-main-text); }
    }
`;