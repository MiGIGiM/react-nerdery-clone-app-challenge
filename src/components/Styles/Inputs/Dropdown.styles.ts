import styled from 'styled-components';

type Props = {
    backgroundColor?: string;
    flexGrow?: string;
    width?: string;
};

export const StyledDropdown = styled.select<Props>`
    color: white;
    font-family: sans-serif;
    background-color: ${({ backgroundColor }) => backgroundColor || '#121212'};
    width: ${({ width }) => width || '100%'};
    border: none;
    outline: 1px solid #707070;
    display: block;
    border-radius: 2px;
    padding-inline-start: 8px;
    padding-inline-end: 8px;
    min-block-size: 48px;
    font-size: 1rem;
    flex-grow: ${({ flexGrow }) => flexGrow || '0'};

    &:hover {
        outline: 1px solid #c4c4c4;
    }

    &:focus {
        outline: 2px solid white;
    }
`;
