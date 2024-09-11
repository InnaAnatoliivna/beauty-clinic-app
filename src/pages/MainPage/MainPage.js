import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { Wrapper } from "./MainPage.styled";

const MainPage = () => {

    return (
        <Section>
            <Container>
                <Wrapper>
                    <Hero />
                </Wrapper>
            </Container>
        </Section>
    )
};

export default MainPage;