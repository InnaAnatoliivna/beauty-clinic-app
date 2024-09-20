import React from 'react';
import { Item, Box } from './CatalogListItem.styled';
import { nanoid } from 'nanoid'
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
                    <p>Endermologia LPG</p>
                </Box>
            </Item>
            <Item className='laser' key={nanoid()}>
                <Box>
                    <p>Epilacja laserowa</p>
                </Box>
            </Item>
            <Item className='nanofrax' key={nanoid()}>
                <Box>
                    <p>Mezoterapia mikroigłowa Nanofrax</p>
                </Box>
            </Item>
            <Item className='wodor' key={nanoid()}>
                <Box>
                    <p>Oczyszczanie wodorowe + maską PCA</p>
                </Box>
            </Item>
            <Item className='mezoter' key={nanoid()}><Box>
                <p>Mezoterapia igłowa</p>
            </Box>
            </Item>
            <Item className='storz' key={nanoid()}>
                <Box>
                    <p>STORZ Fala uderzeniowa</p>
                </Box>
            </Item>
        </>
    )
};

export default CatalogListItem;