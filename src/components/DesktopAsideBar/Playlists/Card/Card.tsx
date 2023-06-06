import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    id: number;
    name: string;
}

const StyledCard = styled(Link)`
    border-radius: 8px;
    padding: 5px;
    box-sizing: border-box;
    column-gap: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;

    img {
        border-radius: 8px;
        width: 48px;
        height: 48px;
        aspect-ratio: 1/1;
    }

    :hover {
        background-color: #282828;
    }
`;

const Card: React.FC<Props> = ({ id, name }) => {
    return (
        <StyledCard to={`/playlist/${id}`} reloadDocument>
            <img src="/images/playlist.jpeg" alt={name} />
            <p>{name}</p>
        </StyledCard>
    );
};

export default Card;
