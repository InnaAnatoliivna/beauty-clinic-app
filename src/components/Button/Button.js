import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, onClick, small }) => {
    return (
        <StyledButton
            onClick={onClick}
            small={small}
            type='button'
        >
            {children}
        </StyledButton>
    );
};

export default Button;