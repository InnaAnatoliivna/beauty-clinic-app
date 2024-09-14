import styled from '@emotion/styled';

export const StyledButton = styled.button`

    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 16px;
    line-height: 18px;
    padding: 12px 40px;
    overflow: hidden;
    white-space: nowrap;

    transition: color linear 500ms, border-color linear 500ms;

    &:hover {
        border-color: var(--color-dark);
        color: var(--color-dark);
    }
`;