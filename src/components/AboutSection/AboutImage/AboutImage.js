import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ImgWrapper } from './AboutImage.styled';
import aboutImg from '../../../images/about-1.jpg';
import aboutImgMob from '../../../images/about-mob.jpg';

const AboutImage = () => {

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <ImgWrapper>
            <img
                src={isDesktopOrTablet ? aboutImg : aboutImgMob}
                alt="Klinika kosmetologii"
                width={500}
            />
        </ImgWrapper>
    )
};

export default AboutImage;