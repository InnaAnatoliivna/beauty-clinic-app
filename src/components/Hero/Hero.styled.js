import styled from '@emotion/styled';
import imageHero from '../../images/photo-desktop.jpg';
import imgHeroMobile from '../../images/photo-mob.jpg';
// import imgBC from '../../images/276230497_149097284242841_4479337240596802514_n.jpg'
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

    @media screen and (min-width: 1440px) {
        bottom: 50%;
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
`

export const Wrapper = styled.div`
    height: 600px;
    background-image: url(${imgHeroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 110%;
    position: relative;

    @media screen and (min-width: 1440px) {
        height: 600px;
    background-image: url(${imageHero});
    }
`;

