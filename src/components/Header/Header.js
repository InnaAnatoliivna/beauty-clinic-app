import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import logo from '../../images/logo-b-c-1.jpg';
import { Navigation, List, Wrapper, ListItem, LinkStyled, MenuIconStyled, ButtonMenu } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleMobileMenu = () => setIsOpenMenu(!isOpenMenu);

    return (
        <Wrapper>
            <Container>
                <Navigation>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt='ŻELAZNOWSKA - beauty clinic'
                            width='300'
                        />
                    </Link>

                    {isMobile && (
                        <ButtonMenu type='button' onClick={handleMobileMenu}>
                            <MenuIconStyled />
                        </ButtonMenu>)
                    }

                    {isDesktopOrTablet && (<List>
                        <ListItem>
                            <LinkStyled to='/services'>USłUGI</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/price'>CENNIK</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/voucher'>VOUCHER</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/team'>ZESPÓL</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/contact'>KONTAKT</LinkStyled>
                        </ListItem>
                    </List>)}

                    {isOpenMenu && <MobileMenu
                        showMenu={handleMobileMenu}
                    />}
                </Navigation>

            </Container>
        </Wrapper>
    )
};

export default Header;