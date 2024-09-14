import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 358px;
    height: 510px;
    padding: 50px 26px;
    background-color: var(--color-white);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second);
    color: var(--color-main-text);
    text-align: center;
    /* font-size: 12px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    position: absolute;
    top: 55px;
    left: 100%;

    /* @media (min-width: 768px) {
        font-size: 8px;
    } */
`;