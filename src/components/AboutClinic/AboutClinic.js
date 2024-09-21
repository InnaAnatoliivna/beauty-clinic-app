import React from 'react';
import Container from '../Container/Container';
import dataAboutUs from '../../resources/dataAboutUs.json';
import { FaFire } from "react-icons/fa";
import { Item, ListStyled } from './AboutClinic.styled';

const AboutClinic = () => {
    return (
        <Container>
            <ListStyled>W klinice:</ListStyled>
            {dataAboutUs.descriptions.map((item, index) => (
                <Item key={index}><FaFire /><p>{item.name}</p></Item>
            ))}
        </Container>
    )
}

export default AboutClinic