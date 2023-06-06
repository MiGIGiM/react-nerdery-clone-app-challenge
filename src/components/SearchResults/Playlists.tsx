import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Grid } from './Grid.styles';
import { useState } from 'react';
import { fetchPlaylists } from '../../services/spotify.service';

const PlaylistsSearch: React.FC<Props> = ({ q }) => {
    const [offset, setOffset] = useState(0);
    const { data: playlistsData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchPlaylists(q, offset),
        setNext: setOffset,
        dependencies: [q, offset],
        resetCondition: q === '',
        resetDeps: [q],
    });

    if (!playlistsData) return null;

    return (
        <Grid>
            {playlistsData.map((playlist, index) => (
                <ResultCard
                    key={playlist.id}
                    id={playlist.id}
                    name={playlist.name}
                    image={playlist.image}
                    description={playlist.description}
                    ref={
                        playlistsData.length === index + 1
                            ? lastElementRef
                            : undefined
                    }
                />
            ))}
        </Grid>
    );
};

export default PlaylistsSearch;
