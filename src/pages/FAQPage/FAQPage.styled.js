import styled from '@emotion/styled';
import imgBC from '../../images/FAQ-bi.jpg';

export const Section = styled.div`
    background-image: url(${imgBC});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;
`;

export const Wrapper = styled.div`
    padding: 28px 0;
    @media screen and (min-width: 768px)  {
        padding: 58px 0;
    }
`;