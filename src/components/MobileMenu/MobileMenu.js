import { useEffect } from 'react';
import {
    CloseButton,
    Link,
    MenuWrapper,
    NavList,
    Overlay,
} from './MobileMenu.styled';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({ onClose }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleClickBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };



    return (
        <>
            <Overlay onClick={handleClickBackdrop}>
                <MenuWrapper>
                    <CloseButton onClick={onClose}>
                        <CloseIcon />
                    </CloseButton>
                    <nav>
                        <NavList>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    USłUGI
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    CENNIK
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    VOUCHER
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    ZESPÓL
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    KONTAKT
                                </Link>
                            </li>
                        </NavList>
                    </nav>
                </MenuWrapper>
            </Overlay>
        </>
    )
};

export default MobileMenu;