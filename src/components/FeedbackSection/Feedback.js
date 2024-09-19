import React from 'react';
import Container from '../Container/Container';
import { Wrapper, Title } from './Feedback.styled';
import FeedbackList from './FeedbackList/FeedbackList';
import SwiperComponent from '../Swiper/Swiper';
import FeedbackListItem from './FeedbackListItem/FeedbackListItem';
import dataFeedback from '../../resources/usersFeedback.json';

const Feedback = () => {
    return (
        <Container>
            <Wrapper>
                <Title>OPINIE KLIENTÓW</Title>
                <FeedbackList>
                    <SwiperComponent>
                        {dataFeedback.map((feedback, index) => (
                            <FeedbackListItem key={index} feedback={feedback} />
                        ))}
                    </SwiperComponent>
                </FeedbackList>
            </Wrapper>
        </Container>
    )
};

export default Feedback;