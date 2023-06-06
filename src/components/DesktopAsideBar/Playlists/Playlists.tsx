import { useAsync } from '../../../hooks/useAsync';
import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import {
    createPlaylist,
    getUserPlaylists,
} from '../../../services/spotify.service';
import { MdViewWeek, MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Card } from './Card';
import { StyledFlexContainer } from '../../../components/Styles/shared/FlexContainer.styles';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const StyledPlaylistsContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 10px;
`;

const StyledTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin: 0;
    font-weight: 400;
    font-size: 1.15rem;
    color: white;
    padding: 10px 12px;
`;

const StyledPlaylistHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledPlaylistButton = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;

    &:hover {
        background-color: #282828;
    }
`;

const StyledLinkCard = styled(Link)`
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

const Playlists = () => {
    const { isAuth, user } = useAuthorizationContext();
    const navigate = useNavigate();
    const { loading, data, callback } = useAsync(
        () => getUserPlaylists(user?.id || 0),
        { dependencies: [user], runOnMount: false },
    );

    useEffect(() => {
        if (isAuth && user) callback();
    }, [isAuth, user]);

    const handleClick = async () => {
        if (!isAuth) {
            alert('You need to be logged in to create a playlist');
        }

        const data = await createPlaylist(user?.id || 0).finally(() =>
            callback(),
        );

        navigate(`/playlist/${data.id}`);
    };

    return (
        <StyledPlaylistsContainer>
            <StyledPlaylistHeader>
                <StyledTitle>
                    <MdViewWeek />
                    <span>Your Library</span>
                </StyledTitle>
                <StyledPlaylistButton onClick={handleClick}>
                    <MdAdd />
                </StyledPlaylistButton>
            </StyledPlaylistHeader>
            <StyledLinkCard to="/liked">
                <img
                    src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
                    alt=""
                />
                <p>Liked Songs</p>
            </StyledLinkCard>
            {isAuth && (
                <>
                    {loading && !data ? (
                        <p>Loading...</p>
                    ) : (
                        <StyledFlexContainer flexDirection="column">
                            {data?.map((playlist) => (
                                <Card
                                    key={playlist.id}
                                    id={playlist.id}
                                    name={playlist.name}
                                />
                            ))}
                        </StyledFlexContainer>
                    )}
                </>
            )}
        </StyledPlaylistsContainer>
    );
};

export default Playlists;
