import { TrackCard } from '../../components/TrackCard';
import {
    removeTrackFromPlaylist,
    getPlaylistTracks,
    addTrackToPlaylist,
} from '../../services/spotify.service';
import { useAsync } from '../../hooks/useAsync';
import styled from 'styled-components';
import { PlaylistTrackSearch } from '../../components/PlaylistTrackSearch';
import { Track } from 'shared/types/spotify';

interface Props {
    playlistId: number;
}

const StyledPlaylistTrack = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
`;

const PlaylistTracklist: React.FC<Props> = ({ playlistId }) => {
    const {
        data: playlistsSongs,
        loading,
        callback: fetchSongs,
    } = useAsync(() => getPlaylistTracks(playlistId), {
        dependencies: [playlistId],
        runOnMount: true,
    });

    const addTrack = (track: Track) => {
        addTrackToPlaylist(playlistId, track).then(fetchSongs);
    };

    const removeTrack = (track: Track) => {
        removeTrackFromPlaylist(track.id).then(fetchSongs);
    };

    return (
        <>
            {playlistsSongs && (
                <StyledPlaylistTrack>
                    {playlistsSongs.map((track) => (
                        <TrackCard
                            key={track.id}
                            track={track}
                            action={() => removeTrack(track)}
                            actionText="x"
                        />
                    ))}
                </StyledPlaylistTrack>
            )}
            <PlaylistTrackSearch
                action={addTrack}
                showSearch={Boolean(!playlistsSongs)}
            />
        </>
    );
};

export default PlaylistTracklist;
