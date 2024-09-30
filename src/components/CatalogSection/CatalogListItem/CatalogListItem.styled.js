import styled from '@emotion/styled';

export const Item = styled.div`
    height: 150px;
    width: calc((100% - 28px) / 2);
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 12px;
    position: relative;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;

    @media screen and (min-width: 768px) {
        height: 210px;
        width: calc((100% - 64px) / 3);

    }

    @media screen and (min-width: 1440px) {
        height: 360px;
    }


    /* .enderm {

    }
    .laser {

    }
    .nanofrax {

    }
    .wodor {

    }
    .mezoter {

    }
    .storz {

    } */
`;


export const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;

    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) );
    border-radius: 12px;
    transition: box-shadow linear 500ms;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    &:hover a {
        transform: scale(1.1);
    }

    a {
        transform: scale(1);

        display: flex;
        align-items: center;    
        justify-content: center;
        width: 100%;           
        height: 100%;

        color: var(--bc-header);
        font-size: 14px;
        text-align: center;

        transition: var(--transition-list-second, color linear 500ms);


        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
        @media screen and (min-width: 1440px) {
        font-size: 24px;
        }

        &:hover {
            transform: scale(1.1);
            color: #fff;
        }
    }
`;