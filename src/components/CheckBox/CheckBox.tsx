import {
    StyledCheckbox,
    StyledCheckboxLabel,
} from '../../components/Styles/Checkbox/Checkbox.styles';
import React, { useId } from 'react';

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
