import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const StyledSearchInput = styled.input`
    background-color: transparent;
    border: transparent;
    outline: transparent;
    color: white;
    width: 100%;
`;

const StyledSearchForm = styled.div`
    box-sizing: border-box;
    color: white;
    padding: 0 16px;
    width: 330px;
    height: 48px;
    background-color: #242424;
    border-radius: 500px;
    border: none;
    display: flex;
    align-items: center;
    border: 1px solid #626262;

    &:focus-within {
        border: 1px solid white;
    }
`;

const StyledPill = styled.label<{ current: boolean }>`
    background-color: ${({ current }) => (current ? 'white' : '#242424')};
    display: inline-flex;
    justify-content: center;
    align-content: center;
    padding: 4px 12px;
    line-height: 14px;
    border-radius: 32px;
    color: ${({ current }) => (current ? 'black' : 'white')};
    font-size: 14px;
    cursor: pointer;
`;

const SearchBarContainer = styled.div`
    top: 0;
    flex-grow: 1;
    padding: 20px 0;
`;

export enum SearchType {
    Album = 'album',
    Track = 'track',
    Artist = 'artist',
    Playlist = 'playlist',
}

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        q: '',
        type: SearchType.Album,
    });

    const q = searchParams.get('q') || '';
    const tab = (searchParams.get('type') as SearchType) || SearchType.Album;

    const handleTypeChange = (type: SearchType) => {
        searchParams.set('type', type);
        setSearchParams(searchParams);
    };

    return (
        <SearchBarContainer>
            <StyledSearchForm>
                <MdSearch size={20} />
                <StyledSearchInput
                    type="text"
                    value={q}
                    onChange={(e) => {
                        searchParams.set('q', e.target.value);
                        setSearchParams(searchParams);
                    }}
                    placeholder="What do you want to listen to?"
                />
            </StyledSearchForm>
            <StyledFlexContainer columnGap="18px" marginTop="16px">
                <StyledPill
                    current={tab === 'album'}
                    onClick={() => handleTypeChange(SearchType.Album)}
                >
                    Albums
                </StyledPill>
                <StyledPill
                    current={tab === 'track'}
                    onClick={() => handleTypeChange(SearchType.Track)}
                >
                    Songs
                </StyledPill>
                <StyledPill
                    current={tab === 'artist'}
                    onClick={() => handleTypeChange(SearchType.Artist)}
                >
                    Artists
                </StyledPill>
                <StyledPill
                    current={tab === 'playlist'}
                    onClick={() => handleTypeChange(SearchType.Playlist)}
                >
                    Playlists
                </StyledPill>
            </StyledFlexContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;
