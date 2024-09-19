import React from 'react';
import { ItemStyled, WrapHead, WrappDetail, Signature } from './FeedbackListItem.styled';
import Stars from '../../Stars/Stars';

const FeedbackListItem = ({ feedback }) => {
    return (
        <>
            <ItemStyled>
                <WrapHead>
                    <p>{feedback.date}</p>
                    <Stars />
                </WrapHead>
                <WrappDetail>
                    <p><span>Usługa: </span> {feedback.service}</p>
                    <p><span>Pracownik: </span> {feedback.employee}</p>
                </WrappDetail>
                <p>"{feedback.commentary}"</p>
                <Signature>{feedback.author}</Signature>
            </ItemStyled>
        </>
    )
};

export default FeedbackListItem;