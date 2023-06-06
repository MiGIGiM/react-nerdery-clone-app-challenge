import styled from 'styled-components';

export const StyledRadioButton = styled.input.attrs({ type: 'radio' })`
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
    font: inherit;
    color: #c4c4c4;
    height: 14px;
    width: 14px;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    display: grid;
    place-content: center;

    &::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 0.5em 0.5em ${({ theme }) => theme.colors.primary};
    }

    &:checked::before {
        transform: scale(0.8);
    }
`;

export const StyledRadioButtonLabel = styled.label`
    display: flex;
    align-items: center;
    column-gap: 0.5em;
    cursor: pointer;
    font-size: 0.85em;

    & > span {
        margin-top: 0.5em;
    }
`;
