import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { formatMillisecondsToTime } from '../../assets/scripts';
import { Track } from '../../shared/types/spotify';
import styled from 'styled-components';
import { forwardRef, useState } from 'react';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import {
    updateTrackInfo,
    createTrackInfo,
} from '../../services/spotify.service';

interface Props {
    track: Track;
    action?: () => void;
    actionText?: string;
}

const StyledTrackCard = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;

    svg {
        fill: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        background-color: #282828;
    }
`;

const StyledImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    margin: 0;
    margin-right: 16px;
    flex-grow: 0;
    display: inline-block;
`;

const StyledP = styled.p<{ color?: string }>`
    color: ${({ color }) => color || '#b3b3b3'};
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    flex-grow: 0;
    width: 200px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
`;

const StyledButton = styled.button`
    border-radius: 16px;
    border: 1px white solid;
    padding: 2px 8px;
    color: white;
`;

const TrackCard = forwardRef<HTMLDivElement, Props>(
    ({ track, action, actionText }, ref) => {
        const { user, isAuth } = useAuthorizationContext();
        const [trackLiked, setTrackLicked] = useState(track.liked);

        const handleFavoriteButtonClick = () => {
            if (!isAuth && !user) return;

            if (track.playlistId) {
                updateTrackInfo({
                    ...track,
                    liked: !track.liked,
                });
            } else {
                createTrackInfo({
                    ...track,
                    liked: true,
                });
            }

            setTrackLicked(!trackLiked);
        };

        return (
            <StyledTrackCard ref={ref}>
                <StyledFlexContainer alignItems="center">
                    <StyledImage
                        src={track.album.image}
                        alt={`${track.album.name} cover`}
                    />
                    <div>
                        <StyledP color="white">{track.name}</StyledP>
                        <StyledP>{track.artist}</StyledP>
                    </div>
                </StyledFlexContainer>
                <StyledP>{track.album.name}</StyledP>
                <StyledP>{formatMillisecondsToTime(track.duration_ms)}</StyledP>
                <button onClick={handleFavoriteButtonClick}>
                    {trackLiked ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
                {action && (
                    <StyledButton type="button" onClick={action}>
                        {actionText}
                    </StyledButton>
                )}
            </StyledTrackCard>
        );
    },
);

export default TrackCard;
