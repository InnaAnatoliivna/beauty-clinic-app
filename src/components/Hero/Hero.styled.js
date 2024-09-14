import styled from '@emotion/styled';
import imageHero from '../../images/hero-b-c.jpg';
import imgHeroMobile from '../../images/hero-b-c-portret.jpg';


export const Title = styled.h1`

    position: relative;
    padding-bottom: 50px;

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
    };
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
`