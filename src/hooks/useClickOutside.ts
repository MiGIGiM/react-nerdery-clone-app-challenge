import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type ReturnType<T> = [React.RefObject<T>, boolean];

export function useClickOutside<T extends HTMLElement>(
    onClickOutside: () => void,
): ReturnType<T> {
    const [clickedOutside, setClickedOutside] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as T)) {
                setClickedOutside(true);
            } else {
                setClickedOutside(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (clickedOutside) {
            onClickOutside();
        }
    }, [clickedOutside]);

    return [ref, clickedOutside];
}
