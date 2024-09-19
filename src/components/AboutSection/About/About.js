import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { ContentWrapper, Wrapper, ButtonStyled, Button } from './About.styled';
import dataAboutUs from '../../../resources/dataAboutUs.json';

import AboutList from './AboutList/AboutList';
import AboutListItem from '../AboutListItem/AboutListItem';
import AboutTitle from './AboutTitle/AboutTitle';
import AboutImage from '../AboutImage/AboutImage';

const About = () => {
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <Section>
            <Container>
                <Wrapper>
                    <ContentWrapper>
                        <AboutTitle>{dataAboutUs.info}</AboutTitle>
                        {isMobile && (
                            <AboutImage />
                        )}
                        <AboutList>
                            <AboutListItem />
                        </AboutList>
                        <Button>
                            <ButtonStyled to="/about-us">Czytaj więcej ...</ButtonStyled>
                        </Button>
                    </ContentWrapper>
                    {isDesktopOrTablet && (
                        <AboutImage />
                    )}
                </Wrapper>
            </Container>
        </Section>
    )
};

export default About;