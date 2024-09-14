import { useMediaQuery } from 'react-responsive';
import { Wrapper, Title, WrappMob, ButtonStyled } from "./Hero.styled";
import { MdPhoneIphone } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import InfoCard from "../InfoCard/InfoCard";
import ContentCard from "../ContentCard/ContentCard";
import GoogleMapLink from "../GoogleMapLink/GoogleMapLink"
import { useEffect, useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

const Hero = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleButton = () => setIsShowModal(!isShowModal);

    useEffect(() => {
        window.addEventListener('keydown', handleButton);
        return () => {
            window.removeEventListener('keydown', handleButton);
        };
    });

    return (
        <Section>
            <Container>
                <Wrapper>
                    {isDesktopOrTablet && (
                        <InfoCard>
                            <Title>ZADBAM O TW0JĄ <br /> SKÓRĘ I CIAŁO</Title>
                            <ContentCard>
                                <MdPhoneIphone />
                                <a href="tel:+48607135955">607-135-955</a>
                            </ContentCard>
                            <ContentCard>
                                <PiChatsThin />
                                <a href="mailto:epilacjaslupsk@gmail.com">EPILACJASLUPSK@GMAIL.COM</a>
                            </ContentCard>
                            <ContentCard>
                                <IoLocationOutline />
                                <GoogleMapLink>
                                    76-200 SŁUPSK, MICKIEWICZA 59/1
                                </GoogleMapLink>
                            </ContentCard>
                            <ButtonStyled onClick={handleButton}>UMÓW</ButtonStyled>
                        </InfoCard>)}
                    {isMobile && (
                        <>
                            <Title>ZADBAM O TW0JĄ <br /> SKÓRĘ I CIAŁO</Title>
                            <WrappMob>
                                <ContentCard>
                                    <GoogleMapLink>
                                        76-200 SŁUPSK, MICKIEWICZA 59/1
                                    </GoogleMapLink>
                                    <IoLocationOutline />
                                </ContentCard>
                                <ContentCard>
                                    <a href="mailto:epilacjaslupsk@gmail.com">EPILACJASLUPSK@GMAIL.COM</a>
                                    <PiChatsThin />
                                </ContentCard>
                                <ContentCard>
                                    <a href="tel:+48607135955">607-135-955</a>
                                    <MdPhoneIphone />
                                </ContentCard>
                            </WrappMob>
                            <ButtonStyled onClick={handleButton}>UMÓW</ButtonStyled>
                        </>
                    )}
                    {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Hero