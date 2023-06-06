import { useState, useEffect } from 'react';

type PromiseResult<T> = {
    loading: boolean;
    error: Error | null;
    data: T[] | null;
};

export function usePromiseAll<T>(promises: Promise<T>[]): PromiseResult<T> {
    const [result, setResult] = useState<PromiseResult<T>>({
        loading: true,
        error: null,
        data: null,
    });

    useEffect(() => {
        let isMounted = true;

        Promise.all(promises)
            .then((data) => {
                if (isMounted) {
                    setResult({
                        loading: false,
                        error: null,
                        data: data,
                    });
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setResult({
                        loading: false,
                        error: error,
                        data: null,
                    });
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return result;
}
