import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
    max-width: 700px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    border-radius: 20px;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        margin-bottom: 12px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 400px;
    }
    
    @media screen and (min-width: 1440px) {
        width: 500px;
}
img {
    width: 100%;
}
`;