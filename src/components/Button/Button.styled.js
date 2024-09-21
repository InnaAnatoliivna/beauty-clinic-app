import styled from '@emotion/styled';

export const StyledButton = styled.button`
    background-color: var(--bc-hero);
    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: ${(props) => (props.small ? '14px' : '16px')};
    line-height: 18px;
    padding: ${(props) => (props.small ? '10px 24px' : '12px 40px')} ;
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
        font-size: ${(props) => (props.small ? '14px' : '18px')};
    }
    }
`;