import React from 'react';
import Container from '../../Container/Container';
import { ListStyled, Wrapper } from './ServisesList.styled';

const ServicesList = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                <ListStyled>
                    {children}
                </ListStyled>
            </Container>
        </Wrapper>
    )
};

export default ServicesList;