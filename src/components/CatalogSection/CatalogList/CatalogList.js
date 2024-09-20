import React from 'react';
import { Wrapper } from './CatalogList.styled';

const CatalogList = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default CatalogList;