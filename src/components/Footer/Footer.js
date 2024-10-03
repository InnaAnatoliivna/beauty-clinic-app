import React from 'react';
import { Wrapper, WrappFlex, WrappLinks, ContactInfo, TextStyled } from './Footer.styled';
import Container from '../Container/Container'
import Logo from '../Logo/Logo';
import NetworksList from '../NetworksList/NetworksList';
import GoogleMapLink from '../GoogleMapLink/GoogleMapLink';
import dataContakt from '../../resources/dataContacts.json';


const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <WrappFlex>

                    <ContactInfo>
                        <a href={`tel:${dataContakt.phoneToCall}`}>{dataContakt.phoneToShow}</a>
                        <a href={`mailto:${dataContakt.email}`}>{dataContakt.email}</a>
                        <GoogleMapLink>
                            {dataContakt.address}
                        </GoogleMapLink>
                    </ContactInfo>

                    <Logo />

                    <WrappLinks>
                        <NetworksList />
                    </WrappLinks>

                </WrappFlex>
                <TextStyled>
                    <span>Copyright © 2024</span>
                    <span>Developed by
                        <a href='https://www.linkedin.com/in/inna-zadorozhnia-07384827a/'
                            target="_blank"
                            rel="noopener noreferrer"
                        > Inna Zadorozhnia
                        </a></span>
                </TextStyled>
            </Container>
        </Wrapper>
    )
};

export default Footer;