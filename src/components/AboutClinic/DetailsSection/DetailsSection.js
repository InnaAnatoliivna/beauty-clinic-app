import React from 'react';
import Container from '../../Container/Container';
import SwiperComponent from '../../Swiper/Swiper';
import { Item, ListStyled, Wrapper } from './DetailsSection.styled';
import imgClinic from '../../../images/servises.jpg'
import dataAboutUs from '../../../resources/dataAboutUs.json';
import { FaFire } from "react-icons/fa";

const DetailsSection = () => {

    const images = [
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic },
        { img: imgClinic }
    ]

    return (
        <Container>
            <Wrapper>
                <p>{dataAboutUs.suptitle}</p>

                <SwiperComponent>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img.img}
                                alt='Photos of the clinic'
                                width='300px'
                            />
                        </div>
                    ))
                    }
                </SwiperComponent>

                <ListStyled>W klinice:</ListStyled>
                {dataAboutUs.descriptions.map((item, index) => (
                    <Item key={index}><FaFire /><p>{item.name}</p></Item>
                ))}
            </Wrapper>
        </Container>
    )
};

export default DetailsSection;