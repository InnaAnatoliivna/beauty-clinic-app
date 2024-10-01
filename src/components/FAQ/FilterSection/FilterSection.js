import React from 'react';
import Container from '../../Container/Container';
import { List, Wrapper } from './FilterSection.styled';

const FilterSection = ({ children }) => {


    return (
        <Container>
            <Wrapper>
                <List>
                    {children}
                </List>
            </Wrapper>
        </Container>
    )
};

export default FilterSection;