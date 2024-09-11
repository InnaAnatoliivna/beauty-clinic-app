import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
background-color: var(--bc-header);
    width: 100%;
    border-bottom: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 38px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 38px;
`;

export const ListItem = styled.li`
    /* height: 100%; */
`;

export const LinkStyled = styled(Link)`
    height: 100%;
    padding: 35px 0; 
`