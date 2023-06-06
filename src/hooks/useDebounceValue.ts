import { useEffect, useState } from 'react';

interface params<T> {
    value: T;
    delay?: number;
}

function useDebounceValue<T>(value: T, delay = 1500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounceValue;
