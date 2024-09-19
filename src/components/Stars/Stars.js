import React from 'react';
import { IoIosStar } from "react-icons/io"; import { Wrapper } from './Stars.styled';

const Stars = () => {
    const starsArray = Array(5).fill(0);

    return (
        <Wrapper>
            {starsArray.map((_, index) => (
                <IoIosStar key={index} />
            ))}
        </Wrapper>
    );
};

export default Stars;
