import React from 'react';
import { LinkStyled, ListItem } from './MenuItems.styled';
import menuData from '../../resources/menuList.json';

const MenuItems = ({ isMobile, onLinkClick }) => {

    return (
        <>
            {menuData.map((menuItem, index) => (
                <ListItem key={index}>
                    <LinkStyled
                        to={menuItem.link}
                        className={isMobile ? 'mobile' : 'desktop'}
                        onClick={onLinkClick}
                    >
                        {menuItem.name}
                    </LinkStyled>
                </ListItem>
            ))}
        </>
    );
};

export default MenuItems;
