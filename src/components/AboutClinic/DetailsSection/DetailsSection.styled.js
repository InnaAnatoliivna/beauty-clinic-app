import styled from '@emotion/styled';
import background from '../../../images/b-c-img.jpg'

export const Section = styled.div`
    border-bottom: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    @media screen and (min-width: 1440px)  {
        background-image: url(${background});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0;
    }
`;

export const Wrapper = styled.div`
    padding: 28px 0px;
    @media screen and (min-width: 768px)  {
        padding: 58px 0px;
    }
`;

export const Text = styled.div`
    letter-spacing: 0.5px; 
    text-align: center;
    color: var(--color-main-text);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }
`;

export const ListStyled = styled.ul`
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;

    > *:not(:last-child) {
        margin-bottom: 5px; 
    }

    @media screen and (min-width: 768px) and (max-width: 1439px)  {
        max-width: 380px;
        margin-left: 0;
        > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
    @media screen and (min-width: 1440px) {
    > *:not(:last-child) {
        margin-bottom: 16px; 
    }
    }
`;

export const Item = styled.li`
    color: var(--color-main-text);
    /* font-weight: 500; */
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    svg {
        color: var(--color-test);
        font-size: 20px;
        min-width: 24px;
        min-height: 24px;
        @media screen and (min-width: 768px) {
            font-size: 26px;
            line-height: 1.2;
            min-width: 26px;
            min-height: 26px;
        }
    }
`;