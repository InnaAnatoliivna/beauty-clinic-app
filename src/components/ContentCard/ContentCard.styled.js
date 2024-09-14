import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 8px 12px;
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards), var(--shadow-card-inset);
    color: var(--color-main-text);
    font-size: 11px;


    display: flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition-list);
    border: 1.5px solid var(--color-main-text);

    a {
        height: 100%;
        width: 100%;
        color: var(--color-main-text);

        display: flex;
        align-items: center;
    }

    svg {
        font-size: 20px;
    }

    &:hover {
        border-color: var(--color-dark);    
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 12px 18px;
        background-color: var(--color-cards);

        font-size: 12px;
        font-weight: 500;

        justify-content: start;
        text-align: start;
        gap: 12px;
    }
`;