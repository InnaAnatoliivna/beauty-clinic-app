import React from 'react';
import Container from '../Container/Container';
import { Wrapper, FlexWrapp, Text, Section } from './AboutClinic.styled';
import dataAboutUs from '../../resources/dataAboutUs.json';
import image from '../../images/photo-desktop.jpg';
import { TitleStyled } from '../AboutSection/About/AboutTitle/AboutTitle.styled';

const AboutClinic = () => {

    return (
        <Section>
            <Container>
                <Wrapper>
                    <TitleStyled>{dataAboutUs.title}</TitleStyled>
                    <FlexWrapp>
                        <div>
                            <img
                                alt='Portrait'
                                src={image}
                                width='500px'
                            ></img>
                        </div>
                        <Text>{dataAboutUs.subtitle}</Text>
                    </FlexWrapp>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default AboutClinic