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
    transition: var(--transition-list-second);
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
        transform: scale(1.03)    
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 14px 20px;
        
        gap: 10px;    
    }

    @media (min-width: 1240px) {
        padding: 18px 24px;
        background-color: var(--color-cards);

        font-size: 14px;
        font-weight: 500;

        justify-content: start;
        text-align: start;
        gap: 12px;
    }
`;