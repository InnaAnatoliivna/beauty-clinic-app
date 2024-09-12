import styled from '@emotion/styled';
import imageHero from '../../images/hero-b-c.jpg';
import imgHeroMobile from '../../images/hero-b-c-portret.jpg';


// section with background image >>

export const SectionWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: var(--bc-hero);
    background-image: url(${imgHeroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    
    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${imageHero});
        }

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

    @media (min-width: 1440px) {
        background-image: url(${imageHero});
    }

    @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: url(${imageHero});
    }
`