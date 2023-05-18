import styled from 'styled-components';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    accent-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCheckboxLabel = styled.label`
    font-size: 0.85em;
    overflow-wrap: break-word;
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: start;
    column-gap: 12px;
    cursor: pointer;

    & span {
        line-height: 1.2rem;
    }
`;
