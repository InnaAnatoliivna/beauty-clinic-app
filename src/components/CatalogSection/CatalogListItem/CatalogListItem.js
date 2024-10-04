import React from 'react';
import { Item, Box } from './CatalogListItem.styled';
import { Link } from 'react-router-dom';

const CatalogListItem = ({ array }) => {

    return (
        <>
            {array.map((item, index) => (
                <Item className={item.className} key={index}
                    style={{ backgroundImage: `url(${item.photo})` }}
                >
                    <Box>
                        <Link to={item.link}>{item.name}</Link>
                    </Box>
                </Item>
            ))}
        </>
    )
};

export default CatalogListItem;