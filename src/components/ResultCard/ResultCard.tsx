import { forwardRef } from 'react';
import {
    StyledCardBody,
    StyledCardContainer,
    StyledCardHeader,
} from './ResultCard.styles';

interface Props {
    id: string;
    description: string;
    name: string;
    image: string;
}

const ResultCard = forwardRef<HTMLDivElement, Props>(
    ({ description, name, image }, ref) => (
        <StyledCardContainer ref={ref}>
            <StyledCardHeader>
                <img src={image} alt={`${name} cover`} />
            </StyledCardHeader>
            <StyledCardBody>
                <p>{name}y</p>
                <span>{description}</span>
            </StyledCardBody>
        </StyledCardContainer>
    ),
);

export default ResultCard;
