import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    padding: 12px 18px;
    background-color: var(--color-cards);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards), var(--shadow-card-inset);
    color: var(--color-main-text);
    color: var(--color-main-text);
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    text-align: start;

    display: flex;
    gap: 12px;
    transition: var(--transition-list);
    border: 1.5px solid transparent;

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
`;