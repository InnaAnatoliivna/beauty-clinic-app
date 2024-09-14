import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './Backdrop.styled';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Backdrop = ({ closeModal, children }) => {
    const modalRoot = useRef(document.querySelector('#modal-root'));

    useEffect(() => {
        const handleKeyDown = (evt) => {
            if (evt.code === 'Escape' && closeModal) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        disablePageScroll();
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            enablePageScroll();
        };
    }, [closeModal]);

    return createPortal(
        <ModalOverlay
            onClick={(e) => {
                if (e.target === e.currentTarget && closeModal) {
                    closeModal();
                }
            }}
        >
            {children}
        </ModalOverlay>,
        modalRoot.current
    );
};

export default Backdrop;
