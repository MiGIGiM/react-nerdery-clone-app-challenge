import { fetchTracks } from '../../services/spotify.service';
import { TrackCard } from '../../components/TrackCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Props } from './props';
import { useState } from 'react';

const TracksSearch: React.FC<Props> = ({ q }) => {
    const [offset, setOffset] = useState(0);
    const { data: searchData, lastElementRef } = useInfiniteScroll({
        fn: () => fetchTracks(q, offset),
        setNext: setOffset,
        dependencies: [q, offset],
        resetCondition: q === '',
        resetDeps: [q],
    });

    if (!searchData) return null;

    return (
        <>
            {searchData.map((track, index) => (
                <TrackCard
                    key={track.id}
                    track={track}
                    ref={
                        searchData.length === index + 1
                            ? lastElementRef
                            : undefined
                    }
                />
            ))}
        </>
    );
};

export default TracksSearch;
