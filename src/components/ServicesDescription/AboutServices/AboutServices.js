import React from 'react';
import Container from '../../Container/Container';
import { RxThickArrowLeft } from "react-icons/rx";
import { ButtonNavigate } from '../../../components/Button/Button.styled';
import { Box, FlexBox, TextBox, TitleStyled } from '../../../pages/ServicesPage/ServiceDescription/ServiceDescription.styled';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../../Section/Section.styled';

const AboutServices = ({ service }) => {

    const navigate = useNavigate();
    const { name, explanation, info } = service.service;

    const handleClick = async values => {
        navigate("/services", { replace: true });
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
                            alt={name}
                            src={service.image[0]}
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