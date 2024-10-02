import React from 'react';
import Container from '../../Container/Container';
import SwiperComponent from '../../Swiper/Swiper';
import { Item, ListStyled, Wrapper, Text } from './DetailsSection.styled';
import dataAboutUs from '../../../resources/dataAboutUs.json';
import { FaFire } from "react-icons/fa";
import { slidesList } from '../../../utils/slidesList';
import Section from '../../Section/Section';
import ButtonLink from '../../ButtonLink/ButtonLink';

const DetailsSection = () => {

    return (
        <Section>
            <Container>
                <Wrapper>
                    <Text>{dataAboutUs.suptitle}</Text>

                    <SwiperComponent>
                        {slidesList.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img.image}
                                    alt='Photos of the clinic'
                                    width='300px'
                                />
                            </div>
                        ))
                        }
                    </SwiperComponent>

                    <ListStyled><Text>W klinice:</Text>
                        {dataAboutUs.descriptions.map((item, index) => (
                            <Item key={index}><FaFire /><p>{item.name}</p></Item>
                        ))}
                    </ListStyled>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <ButtonLink path='/services'>Zobacz naszą ofertę</ButtonLink>
                    </div>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default DetailsSection;