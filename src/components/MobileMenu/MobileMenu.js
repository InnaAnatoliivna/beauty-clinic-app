import { useEffect } from 'react';
import {
    CloseButton,
    CloseIconStyled,
    MenuWrapper,
    NavList,
    Overlay,
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';

const MobileMenu = ({ showMenu, children }) => {

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

    return (
        <>
            <Overlay onClick={() => showMenu()}>

                <MenuWrapper>
                    <Logo onClick={handleKeyDown} />
                    <CloseButton onClick={showMenu}>
                        <CloseIconStyled />
                    </CloseButton>
                    <nav>
                        <NavList>
                            {children}
                        </NavList>
                    </nav>
                </MenuWrapper>
            </Overlay>
        </>
    )
};

export default MobileMenu;