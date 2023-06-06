import { useState } from 'react';
import { getRandomRGBColor } from '../../../assets/scripts';
import styled from 'styled-components';

interface Props {
    id: string;
    name: string;
    image: string;
    onClick: (str: string) => void;
    selected?: boolean;
}

const StyledCategoryCard = styled.button<{
    background: string;
    selected: boolean;
}>`
    box-sizing: border-box;
    background-color: ${({ background }) => background};
    width: 200px;
    aspect-ratio: 1;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    border: ${({ selected }) => (selected ? '2px solid white' : 'none')};
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

const CategoryCard: React.FC<Props> = ({
    id,
    name,
    image,
    onClick,
    selected,
}) => {
    const [bgColor, _] = useState(getRandomRGBColor());
    const handleClick = () => {
        onClick(id);
    };

    return (
        <StyledCategoryCard
            background={bgColor}
            onClick={handleClick}
            selected={selected || false}
        >
            <CategoryName>{name}</CategoryName>
            <CategoryImage src={image} alt="" />
        </StyledCategoryCard>
    );
};

export default CategoryCard;
