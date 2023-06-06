import { useEffect, useState } from 'react';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { TrackCard } from '../../components/TrackCard';
import styled from 'styled-components';
import { Track } from '../../shared/types/spotify';
import useDebounceValue from '../../hooks/useDebounceValue';
import { fetchTracks } from '../../services/spotify.service';

interface Props {
    action: (t: Track) => void;
    showSearch: boolean;
}

const StyledSearchSection = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    padding: 32px;
    color: white;
`;

const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 900;
`;

const StyledSearchInput = styled.input`
    all: unset;
    background-color: #2c2c2c;
    padding: 8px 32px;
    font-size: 14px;
    border-radius: 4px;
    width: clamp(200px, 360px, 100%);
    font-weight: normal;
    margin-bottom: 32px;
    color: white;
`;

const StyledToggleButton = styled.button`
    all: unset;
    color: white;
    cursor: pointer;
`;

const StyledTrackList = styled.div`
    max-height: 900px;
    overflow-y: auto;
`;

const PlaylistTrackSearch: React.FC<Props> = ({ action, showSearch }) => {
    const [show, setShow] = useState(showSearch);
    const [query, setQuery] = useState('');
    const [offset, setOffset] = useState(0);

    const q = useDebounceValue(query);

    const { data: searchData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchTracks(q, offset),
        setNext: setOffset,
        dependencies: [q, offset],
        resetCondition: q === '',
        resetDeps: [query],
    });

    useEffect(() => {
        setQuery('');
    }, [show]);

    if (!show)
        return (
            <StyledSearchSection>
                <StyledFlexContainer justifyContent="flex-end">
                    <StyledToggleButton
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Find More
                    </StyledToggleButton>
                </StyledFlexContainer>
            </StyledSearchSection>
        );

    return (
        <StyledSearchSection>
            <StyledFlexContainer
                alignItems="center"
                justifyContent="space-between"
            >
                <h3>Let's find something for your playlist</h3>
                <StyledCloseButton onClick={() => setShow((prev) => !prev)}>
                    x
                </StyledCloseButton>
            </StyledFlexContainer>
            <StyledSearchInput
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                placeholder="Search for songs"
            />
            <StyledTrackList>
                {searchData &&
                    searchData.map((track, index) => (
                        <TrackCard
                            key={track.id}
                            track={track}
                            ref={
                                searchData.length === index + 1
                                    ? lastElementRef
                                    : undefined
                            }
                            action={() => action(track)}
                            actionText="+"
                        />
                    ))}
            </StyledTrackList>
        </StyledSearchSection>
    );
};

export default PlaylistTrackSearch;
