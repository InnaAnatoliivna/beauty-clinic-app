import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../Container/Container';
import { RxThickArrowLeft } from "react-icons/rx";
import { ButtonNavigate } from '../../../components/Button/Button.styled';
import { Box, FlexBox, TextBox, TitleStyled } from '../../../pages/ServicesPage/ServiceDescription/ServiceDescription.styled';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../../Section/Section.styled';

const AboutServices = ({ service }) => {

    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const { name, explanation, info } = service.service;

    const handleClick = async values => {
        navigate("/zabiegi", { replace: true });
    };

    return (
        <SectionWrapper>
            <Container>
                <FlexBox>
                    <Box>
                        <ButtonNavigate
                            type='button'
                            onClick={handleClick}>
                            <RxThickArrowLeft />
                            Powrót do oferty zabiegów
                        </ButtonNavigate>
                        <img
                            width='500px'
                            alt={name}
                            src={isMobile ? service.imageMob[0] : service.image[0]}
                            loading="lazy"
                        ></img>
                    </Box>
                    <TextBox>
                        <TitleStyled>{name}</TitleStyled>
                        <p>{explanation}</p>
                        <p>{info}</p>
                    </TextBox>
                </FlexBox>
            </Container>
        </SectionWrapper>
    )
};

export default AboutServices;