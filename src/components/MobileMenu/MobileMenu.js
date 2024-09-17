import { useEffect } from 'react';
import {
    CloseButton,
    CloseIconStyled,
    MenuWrapper,
    NavList,
    Overlay,
    Text,
    WrappLinks,
    WrappMenu,
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';
import NetworksList from '../NetworksList/NetworksList';

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
                    <WrappMenu>
                        <Logo onClick={handleKeyDown} />
                        <CloseButton onClick={showMenu}>
                            <CloseIconStyled />
                        </CloseButton>
                        <nav>
                            <NavList>
                                {children}
                            </NavList>
                        </nav>
                    </WrappMenu>
                    <WrappLinks>
                        <Text>UMÓW SIĘ</Text>
                        <NetworksList />
                    </WrappLinks>
                </MenuWrapper>
            </Overlay>
        </>
    )
};

export default MobileMenu;