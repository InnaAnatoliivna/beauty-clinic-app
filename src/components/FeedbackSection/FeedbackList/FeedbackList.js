import React from 'react';
import { ListStyled } from './FeedbackList.styled';

const FeedbackList = ({ children }) => {
    return (
        <ListStyled>{children}</ListStyled>
    )
};

export default FeedbackList;