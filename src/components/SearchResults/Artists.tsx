import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { fetchArtists } from '../../services/spotify.service';
import { Grid } from './Grid.styles';
import { useState } from 'react';

const ArtistsSearch: React.FC<Props> = ({ q }) => {
    const [offset, setOffest] = useState(0);
    const { data: artistsData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchArtists(q, offset),
        dependencies: [q, offset],
        resetCondition: q === '',
        resetDeps: [q],
        setNext: setOffest,
    });

    if (!artistsData) return null;

    return (
        <Grid>
            {artistsData.map((artist, index) => (
                <ResultCard
                    key={artist.id}
                    id={artist.id}
                    name={artist.name}
                    image={artist.image}
                    description={artist.description}
                    ref={
                        artistsData.length === index + 1
                            ? lastElementRef
                            : undefined
                    }
                />
            ))}
        </Grid>
    );
};

export default ArtistsSearch;
