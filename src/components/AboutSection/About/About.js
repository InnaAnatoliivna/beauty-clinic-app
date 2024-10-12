import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { ContentWrapper, Wrapper, ButtonBox } from './About.styled';
import dataAboutUs from '../../../resources/dataAboutUs.json';
import AboutList from './AboutList/AboutList';
import AboutListItem from '../AboutListItem/AboutListItem';
import AboutTitle from './AboutTitle/AboutTitle';
import AboutImage from '../AboutImage/AboutImage';
import ButtonLink from '../../ButtonLink/ButtonLink';

const About = () => {
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <Section>
            <Container>
                <Wrapper>
                    <AboutTitle>
                        {dataAboutUs.title}
                    </AboutTitle>
                    <ContentWrapper>
                        {isMobile && (
                            <>
                                <AboutImage />
                                <AboutTitle>W Klinice:</AboutTitle>
                            </>
                        )}

                        <AboutList>
                            {isDesktopOrTablet && <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>W Klinice:</span>}
                            <AboutListItem />
                        </AboutList>
                        {isDesktopOrTablet && (
                            <AboutImage />
                        )}
                    </ContentWrapper>
                    <ButtonBox>
                        <ButtonLink path={'/o-nas'}>Czytaj więcej...</ButtonLink>
                    </ButtonBox>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default About;