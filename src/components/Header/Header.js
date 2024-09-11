import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import logo from '../../images/logo-b-c-1.jpg';
import { Navigation, List, Wrapper, ListItem, LinkStyled } from './Header.styled';
// import SpaIcon from '@mui/icons-material/Spa';

const Header = () => {


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

                    <List>
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
                    </List>
                </Navigation>

            </Container>
        </Wrapper>
    )
};

export default Header;