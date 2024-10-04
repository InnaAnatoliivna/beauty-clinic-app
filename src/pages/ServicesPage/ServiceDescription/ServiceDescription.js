import React from 'react';
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../utils/servicesHelpers";
import AboutServices from '../../../components/ServicesDescription/AboutServices/AboutServices';
import Description from '../../../components/ServicesDescription/Description/Description';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import { ButtonsBox, LinkStyled } from './ServiceDescription.styled';
import { ButtonStyled } from '../../../components/ButtonLink/ButtonLink.styled';



const ServiceDescription = () => {

    const { id } = useParams();
    const service = getServiceById(id);

    return (
        <><div id="back-to-top-anchor"></div>
            <AboutServices service={service} />
            <Description service={service}>
                <ButtonsBox>
                    <ButtonLink path='/price'>Cennik</ButtonLink>
                    <LinkStyled><ButtonStyled to='/faq'>Najczęściej zadawane pytania</ButtonStyled></LinkStyled>
                </ButtonsBox>
            </Description>
        </>
    )
};

export default ServiceDescription;