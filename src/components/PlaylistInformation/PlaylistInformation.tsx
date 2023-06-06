import PlaylistModal from '../Modals/PlaylistModal';
import { StyledFlexContainer } from '../Styles/shared/FlexContainer.styles';
import { MdDelete, MdCreate } from 'react-icons/md';
import styled from 'styled-components';
import { useRef } from 'react';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import {
    deletePlaylistById,
    getUserPlaylistById,
} from '../../services/spotify.service';
import { useAsync } from '../../hooks/useAsync';
import { useNavigate } from 'react-router';

interface Props {
    playlistId: number;
}

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

const StyledPlaylistActionButton = styled.button`
    background-color: black;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
`;

const PlaylistInformation: React.FC<Props> = ({ playlistId }) => {
    const { user } = useAuthorizationContext();
    const modalRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();
    const {
        data: playlistData,
        loading,
        error,
        callback: fetchPlaylistData,
    } = useAsync(() => getUserPlaylistById(playlistId), {
        dependencies: [playlistId],
        runOnMount: true,
    });

    const handleEditPlaylist = () => {
        fetchPlaylistData();
        modalRef.current?.close();
    };

    const handleDeletePlaylist = () => {
        if (!playlistData) return;

        deletePlaylistById(playlistData.id).then(() => navigate('/'));
    };

    if (error) throw new Error(error.message || "Couldn't fetch playlist data");
    if (loading) return <div>Loading...</div>;

    if (!playlistData) return null;

    return (
        <>
            <PlaylistModal
                ref={modalRef}
                initialData={playlistData}
                onClose={handleEditPlaylist}
            />
            <PlaylistDataContainer>
                <img src="/images/playlist.jpeg" alt={playlistData.name} />
                <div>
                    <StyledPlaylistName>
                        {playlistData?.name}
                    </StyledPlaylistName>
                    <p>{playlistData.description}</p>
                    {user?.id === playlistData.userId && (
                        <StyledFlexContainer columnGap="20px">
                            <StyledPlaylistActionButton
                                onClick={handleDeletePlaylist}
                            >
                                <MdDelete />
                            </StyledPlaylistActionButton>
                            <StyledPlaylistActionButton
                                onClick={() => {
                                    modalRef.current?.showModal();
                                }}
                            >
                                <MdCreate />
                            </StyledPlaylistActionButton>
                        </StyledFlexContainer>
                    )}
                </div>
            </PlaylistDataContainer>
        </>
    );
};

export default PlaylistInformation;
