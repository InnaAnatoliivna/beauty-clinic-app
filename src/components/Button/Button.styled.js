import styled from '@emotion/styled';

export const StyledButton = styled.button`
    background-color: var(--bc-hero);
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

@media (min-width: 768px) {
        color: var(--bc-hero);
        border-color: var(--bc-hero);
        background-color: var(--color-brown);

        transition: color linear 500ms,
            border-color linear 500ms,
            background-color linear 500ms;

        &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }

        @media screen and (min-width: 1440px) {
            /* bottom: 35%;
            left: -50%;
            padding: 20px 36px; */
            font-size: 18px;
        }

    }
    /* &:hover {
        border-color: var(--color-dark);
        color: var(--color-dark);
    } */
`;