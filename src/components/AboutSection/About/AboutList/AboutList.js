import React from 'react';
import { ListStyled } from './AboutList.styled';

const AboutList = ({ children }) => {
    return (
        <ListStyled>{children}</ListStyled>
    )
};

export default AboutList;