import React from 'react';
import Container from '../Container/Container';
import { Wrapper, FlexWrapp, Text } from './AboutClinic.styled';
import dataAboutUs from '../../resources/dataAboutUs.json';
import image from '../../images/photo-desktop.jpg';

const AboutClinic = () => {

    return (
        // <Section>
        <Container>
            <Wrapper>
                <h1>{dataAboutUs.title}</h1>
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
        // </Section>
    )
}

export default AboutClinic