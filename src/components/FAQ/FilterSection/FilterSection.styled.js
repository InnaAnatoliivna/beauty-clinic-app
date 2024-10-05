import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 30px 0;
    @media screen and (min-width: 768px)  {
        padding: 60px 0;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    @media (min-width: 768px) {
        flex-wrap: nowrap;
        gap: 30px;
    }
`;