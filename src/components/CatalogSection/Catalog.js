import React from 'react';
import Container from '../Container/Container';
import { Wrapper, Section, Title, ButtonBox } from './Catalog.styled';
import CatalogList from './CatalogList/CatalogList';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import ButtonLink from '../ButtonLink/ButtonLink';

const Catalog = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <Title>Katalog zabiegów</Title>
                    <CatalogList>
                        <CatalogListItem />
                    </CatalogList>
                    <ButtonBox>
                        <ButtonLink path={'/services'}>Pokaż więcej...</ButtonLink>
                    </ButtonBox>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Catalog;