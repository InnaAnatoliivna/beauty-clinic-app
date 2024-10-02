import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../Container/Container';
import { Wrapper, FlexWrapp, Text, Section, Box, TitleStyled, TextBox } from './AboutClinic.styled';
import dataAboutUs from '../../resources/dataAboutUs.json';
import cosmetologistIMG from '../../images/cosmetologist.jpg';

const AboutClinic = () => {

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <Section>
            <Container>
                <div id="back-to-top-anchor"></div>
                <Wrapper>
                    <FlexWrapp>
                        {isMobile && (
                            <>
                                <Box>
                                    <TitleStyled>{dataAboutUs.title}</TitleStyled>
                                    <img
                                        alt='Portrait'
                                        src={cosmetologistIMG}
                                        width='500px'
                                    ></img>
                                    <span>Alicja Łyszyk-Żelaznowska</span>
                                </Box></>)}
                        <TextBox>
                            {isDesktopOrTablet && (
                                <TitleStyled>{dataAboutUs.title}</TitleStyled>)}
                            <Text>{dataAboutUs.subtitle}</Text>
                        </TextBox>
                        {isDesktopOrTablet && (<Box>
                            <img
                                alt='Portrait'
                                src={cosmetologistIMG}
                                width='500px'
                            ></img>
                            <span>Alicja Łyszyk-Żelaznowska</span>
                        </Box>)}
                    </FlexWrapp>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default AboutClinic