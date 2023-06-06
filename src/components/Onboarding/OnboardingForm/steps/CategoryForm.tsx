import styled from 'styled-components';
import { fetchCategories } from '../../../../services/spotify.service';
import { useAsync } from '../../../../hooks/useAsync';
import { OnBoardingFormData } from '../OnboardingForm';
import { Grid, StepTitle } from './Steps.styles';

const StyledCategoryLabel = styled.label`
    box-sizing: border-box;
    background-color: #282828;
    width: 200px;
    aspect-ratio: 1;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;

    & > input {
        display: none;
    }

    &:has(input:checked) {
        outline: 2px solid white;
    }
`;

const CategoryName = styled.span`
    padding: 1rem;
    font-size: 20px;
    width: 80px;

    font-weight: semibold;
    margin: 0;
`;

const CategoryImage = styled.img`
    width: 100px;
    position: absolute;
    transform: rotate(30deg);
    right: 0;
    bottom: 0;
`;

type Props = {
    categories: string[];
    updateField: (field: Partial<OnBoardingFormData>) => void;
};

const CategoryForm: React.FC<Props> = ({ categories, updateField }) => {
    const { data: categoryData } = useAsync(fetchCategories);

    if (!categoryData) return null;

    return (
        <>
            <StepTitle>What type of music do you like?</StepTitle>
            <Grid>
                {categoryData.map((category) => (
                    <StyledCategoryLabel key={category.id}>
                        <input
                            type="checkbox"
                            value={category.id}
                            onChange={(e) =>
                                updateField({
                                    categories: [...categories, e.target.value],
                                })
                            }
                        />
                        <CategoryName>{category.name}</CategoryName>
                        <CategoryImage src={category.image} />
                    </StyledCategoryLabel>
                ))}
            </Grid>
        </>
    );
};

export default CategoryForm;
