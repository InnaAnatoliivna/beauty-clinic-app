import React from 'react';
import Container from '../Container/Container';
import { Wrapper, FlexWrapp, Text, Section, Box, TitleStyled, TextBox } from './AboutClinic.styled';
import dataAboutUs from '../../resources/dataAboutUs.json';
import cosmetologistIMG from '../../images/cosmetologist.jpg';

const AboutClinic = () => {

    return (
        <Section>
            <Container>
                <Wrapper>
                    <FlexWrapp>
                        <TextBox>
                            <TitleStyled>{dataAboutUs.title}</TitleStyled>
                            <Text>{dataAboutUs.subtitle}</Text>
                        </TextBox>
                        <Box>
                            <img
                                alt='Portrait'
                                src={cosmetologistIMG}
                                width='500px'
                            ></img>
                            <span>Alicja Łyszyk-Żelaznowska</span>
                        </Box>
                    </FlexWrapp>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default AboutClinic