import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../../components/Container/Container';
import { FaFire } from "react-icons/fa";
import { Box, FlexBox, TextBox, TitleStyled } from '../../../pages/ServicesPage/ServiceDescription/ServiceDescription.styled';
import { ItemStyled, ListStyled } from './Description.styled';

const Description = ({ service, children }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const { name, advantages } = service.service;

    return (
        <Container>
            <FlexBox>
                <TextBox>
                    {advantages.map((item, index) => (
                        <React.Fragment key={`advantage-section-${index}`}>
                            <TitleStyled key={`subtitle${index}`}>{item.suptitle}</TitleStyled>
                            <ListStyled key={`list${index}`}>
                                {item.info.map((advantage, subIndex) => (
                                    <ItemStyled key={`advantage-${index}-${subIndex}`}><p><FaFire />{advantage.advantage}</p>
                                        <span>{advantage.description}</span>
                                    </ItemStyled>
                                ))}
                            </ListStyled>
                        </React.Fragment>
                    ))}

                    {children}

                </TextBox>
                <Box>
                    <img
                        alt={name}
                        src={isMobile ? service.imageMob[1] : service.image[1]}
                        loading="lazy"
                    ></img>
                    {service.image[2] && (
                        <img
                            width='500px'
                            alt={name}
                            src={isMobile ? service.imageMob[2] : service.image[2]}
                        ></img>
                    )}
                    {service.image[3] && (
                        <img
                            width='500px'
                            alt={name}
                            src={isMobile ? service.imageMob[3] : service.image[3]}
                            loading="lazy"
                        ></img>
                    )}
                </Box>
            </FlexBox>
        </Container>
    )
};

export default Description;