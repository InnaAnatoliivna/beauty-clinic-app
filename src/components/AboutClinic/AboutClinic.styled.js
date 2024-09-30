import styled from '@emotion/styled';
import background from '../../images/b-c-img.jpg';

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
    padding-top: 28px;
    position: relative;
    @media screen and (min-width: 768px)  {
        padding-top: 58px;
    }
`;

export const FlexWrapp = styled.div`
    display: flex;
    align-items: center;
        @media screen and (max-width: 767px)  {
            flex-direction: column;
            img {
                border-radius: 8px; 
                box-shadow: 0 9px 10px rgba(0, 0, 0, 0.3);
                margin-bottom: 15px;
            }
        }
`;

export const Text = styled.div`
    color: var(--color-main-text);
    font-size: 14px;
    font-style: italic;
    line-height: 1.2;
    text-align: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        width: 60%;
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
        width: 40%;
        font-size: 18px;
    }
`;
