import React from 'react';
import Container from '../Container/Container';
import { Wrapper, Section, Title, ButtonBox } from './Catalog.styled';
import CatalogList from './CatalogList/CatalogList';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import ButtonLink from '../ButtonLink/ButtonLink';
import { servicesList } from '../../utils/servicesList';


const Catalog = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <Title>Katalog zabiegów</Title>
                    <CatalogList>
                        <CatalogListItem array={servicesList} />
                    </CatalogList>
                    <ButtonBox>
                        <ButtonLink path={'/zabiegi'}>Pokaż więcej...</ButtonLink>
                    </ButtonBox>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Catalog;