import styled from '@emotion/styled';
import { TfiClose } from "react-icons/tfi";

export const WindowStyle = styled.div`
    max-width: 100%;
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 12px;
    border: 1px solid var(--color-brown);
    background-color: var(--bc-header);
    color: var(--color-main-text);
    padding: 35px 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 26px;
    right: 32px;
    background: none;
    border: none;
    cursor: pointer;
    p {
        color:  var(--color-black);
    }
`;

// svg close button mob menu
export const CloseIconStyled = styled(TfiClose)`
    margin-left: auto;
    font-size: 20px;
    fill: var(--color-main-text);
`;
//-------------------------

export const ModalTitle = styled.h3`
    text-align: center;
    margin: 25px 0;
    transform: uppercase;
    letter-spacing: 1.1px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
    }

    img {
        transition: transform 0.3s ease; 

    }
    svg {
        font-size: 40px;
        color: var(--color-black);
        transition: transform 0.3s ease; 
    }

    a:hover svg, a:focus svg {
        transform: scale(1.1); 
    }
    a:hover img, a:focus img {
        transform: scale(1.1); 
    }
`;