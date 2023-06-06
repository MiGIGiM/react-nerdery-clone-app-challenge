import { useState, useEffect, useRef, useCallback, Dispatch } from 'react';

interface InfiniteScrollParams<T> {
    fn: () => Promise<T[]>;
    dependencies: React.DependencyList;
    resetDeps: React.DependencyList;
    setNext: Dispatch<React.SetStateAction<number>>;
    resetCondition: boolean;
    step?: number;
}

export function useInfiniteScroll<T>({
    fn,
    dependencies,
    resetDeps,
    setNext,
    resetCondition,
    step = 20,
}: InfiniteScrollParams<T>) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>();
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const observer = useRef<IntersectionObserver>();

    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        setNext((prev) => prev + step);
                    }
                },
                {
                    threshold: 0.25,
                },
            );

            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    useEffect(() => {
        setData(undefined);
        setNext(0);
    }, resetDeps);

    useEffect(() => {
        if (resetCondition) {
            return;
        }

        setLoading(true);
        fn()
            .then((res) => {
                setData((prev) => [...new Set([...(prev || []), ...res])]);
                setHasMore(res.length > 0);
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, dependencies);

    return { loading, data, lastElementRef, error };
}
