import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import { CloseButton, CloseIconStyled, WindowStyle, ModalTitle, ModalContent } from './ModalWindow.styled';
import NetworksList from '../NetworksList/NetworksList';

const ModalWindow = ({ toggleShowMenu }) => {
    const [isCloseModal, setIsCloseModal] = useState(false);

    const handleCloseModal = () => {
        setIsCloseModal(!isCloseModal);
        toggleShowMenu();
    };

    return createPortal(
        <Backdrop closeModal={toggleShowMenu}>
            <WindowStyle>
                <CloseButton onClick={handleCloseModal}>
                    <CloseIconStyled />
                </CloseButton>
                <>
                    <ModalTitle>ZAREZERWUJ WIZYTĘ <br /> PRZEZ</ModalTitle>
                    <ModalContent>
                        <NetworksList />
                    </ModalContent>
                </>
            </WindowStyle>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
};

export default ModalWindow;
