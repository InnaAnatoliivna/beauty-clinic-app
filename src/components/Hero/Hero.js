import { Wrapper, Title } from "./Hero.styled";
import { MdPhoneIphone } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import InfoCard from "../InfoCard/InfoCard";
import ContentCard from "../ContentCard/ContentCard";
import GoogleMapLink from "../GoogleMapLink/GoogleMapLink"

const Hero = () => {

    return (
        <Section>
            <Container>
                <Wrapper>
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
                    </InfoCard>
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Hero