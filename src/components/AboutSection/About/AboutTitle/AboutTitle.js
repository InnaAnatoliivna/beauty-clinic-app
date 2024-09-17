import React from 'react'
import { TitleStyled } from './AboutTitle.styled'

const AboutTitle = ({ children }) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}

export default AboutTitle