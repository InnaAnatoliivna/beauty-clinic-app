import React from 'react';
import dataAboutUs from '../../../resources/dataAboutUs.json';
import { FaFire } from "react-icons/fa";
import { Item } from './AboutListItem.styled';

const AboutListItem = () => {
    return (
        <>
            {dataAboutUs.descriptions.map((item, index) => (
                <Item key={index}><FaFire /><p>{item.name}</p></Item>
            ))}
        </>
    )
};

export default AboutListItem;