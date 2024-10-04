import React, { useState } from 'react';
import { Container } from '@mui/material';
import { servicesList, servicesNextList } from '../../utils/servicesList';
import ServicesList from '../../components/ServicesComponents/ServicesList/ServicesList'
import ServiceItems from '../../components/ServicesComponents/ServicesList/ServiceItems/ServiceItems';
import { ListStyled, ItemStyled } from './ServicesPage.styled';


const ServicesPage = () => {

    const filterArray = ['Twarz', 'Ciało', 'Medycyna estetyczna', 'Konsultacje kosmetologiczne', 'Wszystkie']
    const servicesArray = [...servicesList, ...servicesNextList];
    const [filteredArray, setFilteredArray] = useState(servicesArray);

    const handleClick = (newValue) => {
        switch (newValue) {
            case 'Twarz':
                setFilteredArray(servicesArray.filter(item => item.type === 'Twarz'));
                break;
            case 'Ciało':
                setFilteredArray(servicesArray.filter(item => item.type === 'Ciało'));
                break;
            case 'Medycyna estetyczna':
                setFilteredArray(servicesArray.filter(item => item.type === 'Medycyna estetyczna'));
                break;
            case 'Konsultacje kosmetologiczne':
                setFilteredArray(servicesArray.filter(item => item.type === 'Konsultacje kosmetologiczne'));
                break;
            case 'Wszystkie':
                setFilteredArray(servicesArray);
                break;
            default:
                setFilteredArray(servicesArray);
        }
    };

    return (
        <>
            <Container>
                <ListStyled>
                    {filterArray.map((item, index) => (
                        <ItemStyled key={index} onClick={() => handleClick(item)}>{item}</ItemStyled>
                    )
                    )}
                </ListStyled>
            </Container>
            <ServicesList>
                <ServiceItems array={filteredArray} />
            </ServicesList>
        </>
    )
};

export default ServicesPage;