import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, onClick }) => {
    return (
        <StyledButton
            onClick={onClick}
            // primary={primary}
            // home={home}
            // style={style}
            type='button'
        >
            {children}
        </StyledButton>
    );
};

export default Button;