import About from "../../components/AboutSection/About/About";
import Feedback from "../../components/FeedbackSection/Feedback";
import Hero from "../../components/Hero/Hero";
import { Wrapper } from "./MainPage.styled";

const MainPage = () => {

    return (
        <Wrapper>
            <Hero />
            <About />
            <Feedback />
        </Wrapper>
    )
};

export default MainPage;