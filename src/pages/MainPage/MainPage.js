import About from "../../components/AboutSection/About/About";
import Hero from "../../components/Hero/Hero";
import { Wrapper } from "./MainPage.styled";

const MainPage = () => {

    return (
        <Wrapper>
            <Hero />
            <About />
        </Wrapper>
    )
};

export default MainPage;