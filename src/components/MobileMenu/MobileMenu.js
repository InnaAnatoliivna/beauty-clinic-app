import { useEffect } from 'react';
import {
    CloseButton,
    CloseIconStyled,
    Link,
    MenuWrapper,
    NavList,
    Overlay,
} from './MobileMenu.styled';

const MobileMenu = ({ showMenu }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            showMenu();
        }
    };

    const handleClickBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            showMenu();
        }
    };


    return (
        <>
            <Overlay onClick={handleClickBackdrop}>
                <MenuWrapper>
                    <CloseButton onClick={showMenu}>
                        <CloseIconStyled />
                    </CloseButton>
                    <nav>
                        <NavList>
                            <li>
                                <Link to="/services" onClick={showMenu}>
                                    USłUGI
                                </Link>
                            </li>
                            <li>
                                <Link to="/price" onClick={showMenu}>
                                    CENNIK
                                </Link>
                            </li>
                            <li>
                                <Link to="/voucher" onClick={showMenu}>
                                    VOUCHER
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" onClick={showMenu}>
                                    ZESPÓL
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={showMenu}>
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