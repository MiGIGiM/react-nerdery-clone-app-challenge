import { HomeLayout } from '../../Layout/HomeLayout';
import { fetchLikedTracks } from '../../services/spotify.service';
import { useAsync } from '../../hooks/useAsync';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import { useNavigate } from 'react-router';
import { TrackCard } from '../../components/TrackCard';
import styled from 'styled-components';

const PlaylistDataContainer = styled.div`
    display: flex;
    color: white;
    column-gap: 32px;
    align-items: center;
    margin: 32px;

    img {
        width: 192px;
        height: 192px;
    }
`;

const StyledPlaylistName = styled.h1`
    font-size: 72px;
    font-stretch: 100%;
    font-weight: 900;
    margin: 0;
`;

const StyledLikePage = styled.div`
    padding: 1rem;
`;

const Liked = () => {
    const navigate = useNavigate();
    const { user, isAuth } = useAuthorizationContext();
    const { data, loading } = useAsync(() => fetchLikedTracks(user?.id || 0));

    if (!isAuth) {
        navigate('/');
    }

    return (
        <HomeLayout loading={false}>
            <StyledLikePage>
                <PlaylistDataContainer>
                    <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
                        alt=""
                    />
                    <div>
                        <StyledPlaylistName>Liked Songs</StyledPlaylistName>
                    </div>
                </PlaylistDataContainer>
                {data &&
                    data.map((track) => (
                        <TrackCard key={track.id} track={track} />
                    ))}
            </StyledLikePage>
        </HomeLayout>
    );
};

export default Liked;
