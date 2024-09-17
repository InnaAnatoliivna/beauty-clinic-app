import { useMediaQuery } from 'react-responsive';
import { Wrapper, Title, WrappMob, ButtonStyled } from "./Hero.styled";
// import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import InfoCard from "../InfoCard/InfoCard";
import { useEffect, useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import ContactList from '../ContactList/ContactList';


const Hero = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleButton = () => setIsShowModal(!isShowModal);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsShowModal(false);
        }
    };
    useEffect(() => {
        if (isShowModal) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isShowModal]);

    return (
        // <Section>
        <Container>
            <Wrapper>
                {isDesktopOrTablet && (
                    <InfoCard>
                        <Title>ZADBAM O TW0JĄ <br /> SKÓRĘ I CIAŁO</Title>
                        <ContactList />
                        <ButtonStyled onClick={handleButton}>UMÓW SIĘ</ButtonStyled>
                    </InfoCard>)}
                {isMobile && (
                    <>
                        <Title>ZADBAM O TW0JĄ <br /> SKÓRĘ I CIAŁO</Title>
                        <WrappMob>
                            <ContactList />
                        </WrappMob>
                        <ButtonStyled onClick={handleButton}>UMÓW SIĘ</ButtonStyled>
                    </>
                )}
                {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
            </Wrapper>
        </Container>
        // </Section>
    )
};

export default Hero