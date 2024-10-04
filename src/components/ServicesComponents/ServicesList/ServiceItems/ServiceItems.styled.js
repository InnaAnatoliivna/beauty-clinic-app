import styled from '@emotion/styled';

export const ItemStyled = styled.div`
    height: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 12px;
    width: calc((100% - 30px) / 2);
    @media screen and (min-width: 768px) {
        height: 210px;
        width: calc((100% - 66px) / 3);
    }
    @media screen and (min-width: 1440px) {
        height: 360px;
    }
`;

