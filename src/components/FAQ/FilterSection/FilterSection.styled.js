import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 28px 0;
    @media screen and (min-width: 768px)  {
        padding: 58px 0;
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

    li {
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        padding: 8px 10px;
        background-color: var(--bc-header);
        border: 1.5px solid var(--color-main-text);
        border-radius: var(--card-border-radius);
        box-shadow: var(--shadow-cards), var(--shadow-card-inset);
        color: var(--color-main-text);

        transition: var(--transition-list);
        transition: color linear 500ms;
        /* transition: var(--transition-list-second); */

        &:hover, :visited, :focus {
            color: var(--color-test);
            border-color: var(--color-test);
            /* transform: scale(1.03)     */
        }
        @media (min-width: 768px) {
            font-size: 16px;
            padding: 12px 24px;
        }
        @media (max-width: 767px) {
            width: calc((100% - 12px) / 2);
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;