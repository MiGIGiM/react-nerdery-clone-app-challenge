import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { fetchAlbums } from '../../services/spotify.service';
import { Grid } from './Grid.styles';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const AlbumsSearch: React.FC<Props> = ({ q }) => {
    const [searchParams] = useSearchParams();
    const [offset, setOffset] = useState(0);
    const { data: searchData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchAlbums(q, offset),
        setNext: setOffset,
        dependencies: [q, offset],
        resetCondition: q === '',
        resetDeps: [q, searchParams],
    });

    if (!searchData) return null;

    return (
        <Grid>
            {searchData.map((album, index) => (
                <ResultCard
                    key={album.id}
                    id={album.id}
                    name={album.name}
                    image={album.image}
                    description={album.description}
                    ref={
                        searchData.length === index + 1
                            ? lastElementRef
                            : undefined
                    }
                />
            ))}
        </Grid>
    );
};

export default AlbumsSearch;
