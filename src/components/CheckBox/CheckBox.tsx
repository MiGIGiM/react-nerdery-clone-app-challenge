import React, { useId } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    accent-color: ${({ theme }) => theme.colors.primary};
`;

const StyledCheckboxLabel = styled.label`
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

interface Props {
    label: string;
}

const CheckBox: React.FunctionComponent<Props> = ({ label }) => {
    const id = useId();

    return (
        <StyledCheckboxLabel htmlFor={id}>
            <StyledCheckbox type="checkbox" id={id} />
            <span>{label}</span>
        </StyledCheckboxLabel>
    );
};

export default CheckBox;
