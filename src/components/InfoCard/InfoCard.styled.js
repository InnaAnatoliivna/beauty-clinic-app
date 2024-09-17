import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 458px;
    height: 510px;
    padding: 50px 40px;
    background-color: var(--color-white);
    border: 1.5px solid var(--color-main-text);
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
    right: 0;

    @media (max-width: 1439px) {
        max-width: 328px;
        padding: 40px 30px;
    }
`;