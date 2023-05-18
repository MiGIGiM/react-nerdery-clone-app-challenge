import { StyledDropdown } from '../../components/Styles/Dropdown/Dropdown.styles';
import React from 'react';

interface Props {
    options: {
        value: string;
        label: string;
    }[];
    backgroundColor?: string;
    flexGrow?: string;
    width?: string;
}

const Dropdown: React.FunctionComponent<Props> = ({
    options,
    backgroundColor,
    flexGrow,
    width,
}) => (
    <StyledDropdown
        backgroundColor={backgroundColor}
        flexGrow={flexGrow}
        width={width}
        defaultValue={options[0].value}
    >
        {options.map((option, index) => (
            <option key={index} value={option.value} disabled={index === 0}>
                {option.label}
            </option>
        ))}
    </StyledDropdown>
);

export default Dropdown;
