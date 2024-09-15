import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import { CloseButton, CloseIconStyled, WindowStyle, ModalTitle, ModalContent } from './ModalWindow.styled';
import { SocialNetworks } from '../../utils/links';

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
                        {SocialNetworks.map(({ name, link, icon }, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                style={{ margin: '0 10px' }}  // Додаємо відступи між іконками (можеш змінити під свої потреби)
                            >
                                {icon}
                            </a>
                        ))}
                    </ModalContent>
                </>
            </WindowStyle>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
};

export default ModalWindow;
