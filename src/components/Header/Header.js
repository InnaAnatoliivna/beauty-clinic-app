import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import logo from '../../images/logo-b-c-1.jpg';
import { Navigation, List, Wrapper, ListItem, LinkStyled } from './Header.styled';
// import SpaIcon from '@mui/icons-material/Spa';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
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
                        <button type='button' onClick={handleMobileMenu}>
                            <MenuIcon />
                        </button>)
                    }

                    {isDesktopOrTablet && (<List>
                        <ListItem>
                            <LinkStyled to='/'>USłUGI</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/'>CENNIK</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/'>VOUCHER</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/'>ZESPÓL</LinkStyled>
                        </ListItem>
                        <ListItem>
                            <LinkStyled to='/'>KONTAKT</LinkStyled>
                        </ListItem>
                    </List>)}

                    {isOpenMenu && <MobileMenu onClose={isOpenMenu} />}
                </Navigation>

            </Container>
        </Wrapper>
    )
};

export default Header;