import styled from '@emotion/styled';
import imageHero from '../../images/hero-b-c.jpg'


// section with background image >>

export const SectionWrapper = styled.div`
    max-width: 100%;
    /* max-width: 375px; */
    /* max-height: 812px; */
    margin: 0 auto;
    background-color: var(--bc-hero);
    background-image: 
    /* linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), */
                /* linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), */
                url(${imageHero});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    
    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: 
            /* linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), */
                        /* linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), */
                        url(${imageHero});
        }

    @media (min-width: 768px) {
        /* max-width: 768px; */
        /* max-height: 1024px;  */
        background-image: 
        /* linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), */
                    /* linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), */
                    url(${imageHero});
        /* background-position: 270px 0px; */
    }

    @media (min-width: 768px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: 
            /* linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), */
                        /* linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), */
                        url(${imageHero});
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        /* max-height: 800px; */
        background-image: url(${imageHero});
        /* background-position: 760px 0; */
    }

    @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: 
            /* linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), */
                        /* linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), */
                        url(${imageHero});
    }
`