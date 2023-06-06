import { useState, useEffect } from 'react';
import { fetchArtists } from '../../../../services/spotify.service';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import useDebounceValue from '../../../../hooks/useDebounceValue';
import { OnBoardingFormData } from '../OnboardingForm';
import { Grid, StepTitle } from './Steps.styles';
import styled from 'styled-components';

const StyledArtistLabel = styled.label`
    box-sizing: border-box;
    background-color: #282828;
    width: 200px;
    height: 250px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;
    padding: 1rem;

    & > input {
        display: none;
    }

    &:has(input:checked) {
        outline: 2px solid white;
    }
`;

const ArtistName = styled.span`
    font-size: 20px;
    text-align: center;

    font-weight: semibold;
    margin: 0;
`;

const ArtistImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
`;

const StyledSearchInput = styled.input`
    all: unset;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.5rem;

    &:focus {
        border-bottom: 1px solid #c4c4c4;
    }
`;

type Props = {
    artists: string[];
    updateField: (field: Partial<OnBoardingFormData>) => void;
};

const ArtistsForm: React.FC<Props> = ({ artists, updateField }) => {
    const [offset, setOffset] = useState(0);
    const [query, setQuery] = useState('');
    const q = useDebounceValue(query, 500);
    const { data: artistData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchArtists(q, offset),
        setNext: setOffset,
        dependencies: [q, offset],
        resetCondition: query === '',
        resetDeps: [query],
    });

    return (
        <>
            <StepTitle>What artists do you like?</StepTitle>
            <StyledSearchInput
                placeholder="Search artists..."
                type="text"
                value={query}
                autoFocus
                onChange={(e) => setQuery(e.target.value)}
            />
            <Grid>
                {artistData?.map((artist, index) => (
                    <div
                        key={artist.id}
                        ref={
                            artistData.length === index + 1
                                ? lastElementRef
                                : undefined
                        }
                    >
                        <StyledArtistLabel>
                            <input
                                type="checkbox"
                                value={artist.id}
                                onChange={(e) =>
                                    updateField({
                                        artists: [...artists, e.target.value],
                                    })
                                }
                            />
                            <ArtistImage src={artist.image} />
                            <ArtistName>{artist.name}</ArtistName>
                        </StyledArtistLabel>
                    </div>
                ))}
            </Grid>
        </>
    );
};

export default ArtistsForm;
