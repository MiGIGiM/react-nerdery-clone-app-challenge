import styled from 'styled-components';
import TracksSearch from '../../components/SearchResults/Tracks';
import ArtistsSearch from '../../components/SearchResults/Artists';
import AlbumsSearch from '../../components/SearchResults/Albums';
import PlaylistsSearch from '../../components/SearchResults/Playlists';
import { useSearchParams } from 'react-router-dom';
// TODO: Make playlist private
import useDebounceValue from '../../hooks/useDebounceValue';
import { SearchLayout } from '../../Layout/SearchLayout';
import { SearchType } from '../../components/SearchBar/SearchBar';

const StyledPageContainer = styled.section`
    padding: 0 16px;
`;
const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const tab = searchParams.get('type') || SearchType.Album;
    const q = useDebounceValue(query, 500);

    return (
        <SearchLayout>
            <StyledPageContainer>
                {tab === SearchType.Track && <TracksSearch q={q} />}
                {tab === SearchType.Artist && <ArtistsSearch q={q} />}
                {tab === SearchType.Album && <AlbumsSearch q={q} />}
                {tab === SearchType.Playlist && <PlaylistsSearch q={q} />}
            </StyledPageContainer>
        </SearchLayout>
    );
};

export default Search;
