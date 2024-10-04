import React from 'react';
import { Link } from 'react-router-dom';
import { ItemStyled } from './ServiceItems.styled';
import { Box } from '../../../CatalogSection/CatalogListItem/CatalogListItem.styled';

const ServiceItems = ({ array }) => {
    return (
        <>
            {
                array.map((service, index) =>
                (<ItemStyled key={index} style={{ backgroundImage: `url(${service.photo})` }}>
                    {/* <Box> */}
                    <Link to={service.link}>{service.name}</Link>
                    {/* </Box> */}
                </ItemStyled>))
            }
        </>
    )
};

export default ServiceItems;