import styled from '@emotion/styled';
import imageHero from '../../images/hero-b-c.jpg';
import imgHeroMobile from '../../images/hero-b-c-portret.jpg';
import { StyledButton } from '../Button/Button.styled';


export const Title = styled.h1`
    font-size: 16px;
    color: var(--color-main-text);
    position: relative;
    padding-bottom: 30px;

    @media(max-width: 767px)  {
        padding-top: 20px;
        text-align: center;
    }
    @media (min-width: 768px) {
        font-size: 24px;
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

        position: absolute;
        top: 72px;
        left: 0;
        @media(max-width: 767px)  {
            top: 65px;
            left: 0;
        }
    };
`;

export const WrappMob = styled.div`
    display: flex;
    flex-direction: column;
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
        color: var(--bc-hero);
        border-color: var(--bc-hero);
        background-color: var(--color-brown);

        transition: color linear 500ms,
            border-color linear 500ms,
            background-color linear 500ms;

    &:hover {
        color: var(--color-brown);
        border-color: var(--color-brown);
        background-color: var(--bc-hero);
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
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 420px;
    height: 600px;
    background-image: url(${imgHeroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;

    /* @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${imgHeroMobile});
        }
    //tablet-------------------------------->
    @media (min-width: 768px) {
        background-image:
                    url(${imageHero});
    }
    @media (min-width: 768px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: url(${imageHero});
    }
    //desktop-------------------------------->
        @media (min-width: 1440px) {
        background-image: url(${imageHero});
    }
    @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: url(${imageHero});
    } */
`;

