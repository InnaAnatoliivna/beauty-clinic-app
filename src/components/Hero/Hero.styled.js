import styled from '@emotion/styled';
import imageHero from '../../images/photo-desktop.jpg';
import imgHeroMobile from '../../images/photo-mob.jpg';
import { StyledButton } from '../Button/Button.styled';
import circleImg from '../../images/b-c-img.jpg';

export const Section = styled.div`
    @media screen and (min-width: 768px) {
        background-image: url(${circleImg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0%;
    }
`;

export const Title = styled.h1`
    font-size: 16px;
    color: var(--color-main-text);
    position: relative;
    padding-bottom: 30px;
    text-shadow: var(--shadow-text-title);

    @media(max-width: 767px)  {
        padding-top: 20px;
        text-align: center;
    }
    @media (min-width: 768px) {
        font-size: 26px;
        padding-bottom: 50px;
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

        position: absolute;
        top: 78px;
        left: 0;
        @media(max-width: 767px)  {
            top: 65px;
            left: 0;
        }
    };
`;

export const WrappMob = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
    align-items: end;
    gap: 16px;
    position: relative;
`;

export const ButtonStyled = styled(StyledButton)`
    position: absolute;
    bottom: 150px;
    left: 30%;

    @media (min-width: 768px) {
        bottom: 50%;
        left: -50%;
        padding: 18px 40px;

        @media screen and (min-width: 1440px) {
            bottom: 35%;
            left: -50%;
            padding: 20px 36px;
            font-size: 18px;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1); 
            }
            100% {
                transform: scale(1);
            }
        }
        animation: pulse 2s infinite;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        bottom: -100px;
        left: 26%;
    }
`

export const Wrapper = styled.div`
    height: 580px;
    background-image: url(${imgHeroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 110%;
    position: relative;

    @media screen and (min-width: 768px) {
        height: 700px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${imageHero});
    }
`;

