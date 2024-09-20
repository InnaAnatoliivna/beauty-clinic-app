import React from 'react';
import Container from '../Container/Container';
import { Wrapper, Section, Title, ButtonStyled } from './Catalog.styled';
import CatalogList from './CatalogList/CatalogList';
import CatalogListItem from './CatalogListItem/CatalogListItem';

const Catalog = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <Title>Katalog zabiegów</Title>
                    <CatalogList>
                        <CatalogListItem />
                        <ButtonStyled path={'/services'}>Pokaż więcej...</ButtonStyled>
                    </CatalogList>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Catalog;