import {
    StyledRadioButtonLabel,
    StyledRadioButton,
} from '../Styles/RadioButton/RadioButton.styles';

interface Props {
    value: string;
}

const RadioButton: React.FC<Props> = ({ value }) => {
    return (
        <StyledRadioButtonLabel>
            <StyledRadioButton type="radio" value={value} />
            <span>{value}</span>
        </StyledRadioButtonLabel>
    );
};

export default RadioButton;
