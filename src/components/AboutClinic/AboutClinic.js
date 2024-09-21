import React from 'react';
import Container from '../Container/Container';
import dataAboutUs from '../../resources/dataAboutUs.json';
import { FaFire } from "react-icons/fa";
import { Item, ListStyled, Wrapper } from './AboutClinic.styled';
import { Section } from '../CatalogSection/Catalog.styled';

const AboutClinic = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <h1>{dataAboutUs.title}</h1>
                    <p>{dataAboutUs.subtitle}</p>
                    <p>{dataAboutUs.suptitle}</p>
                    <ListStyled>W klinice:</ListStyled>
                    {dataAboutUs.descriptions.map((item, index) => (
                        <Item key={index}><FaFire /><p>{item.name}</p></Item>
                    ))}
                </Wrapper>
            </Container>
        </Section>
    )
}

export default AboutClinic