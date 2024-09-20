import React from 'react';
import { Item, Box } from './CatalogListItem.styled';
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom';
// import dataServices from '../../../resources/dataServices.json';

const CatalogListItem = () => {

    // const filteredItems = dataServices.filter(item => item.name !== 'Inne')
    // console.log(filteredItems)

    return (
        // <>
        //     {filteredItems.map((item, index) => (
        //         <Item key={index}>{item.name}</Item>
        //     ))}
        // </>
        <>
            <Item className='enderm' key={nanoid()}>
                <Box>
                    <Link to='/services'>Endermologia LPG</Link>
                </Box>
            </Item>
            <Item className='laser' key={nanoid()}>
                <Box>
                    <Link to='/services'>Epilacja laserowa</Link>
                </Box>
            </Item>
            <Item className='nanofrax' key={nanoid()}>
                <Box>
                    <Link to='/services'>Mezoterapia mikroigłowa Nanofrax</Link>
                </Box>
            </Item>
            <Item className='wodor' key={nanoid()}>
                <Box>
                    <Link to='/services'>Oczyszczanie wodorowe + maską PCA</Link>
                </Box>
            </Item>
            <Item className='mezoter' key={nanoid()}><Box>
                <Link to='/services'>Mezoterapia igłowa</Link>
            </Box>
            </Item>
            <Item className='storz' key={nanoid()}>
                <Box>
                    <Link to='/services'>STORZ Fala uderzeniowa</Link>
                </Box>
            </Item>
        </>
    )
};

export default CatalogListItem;