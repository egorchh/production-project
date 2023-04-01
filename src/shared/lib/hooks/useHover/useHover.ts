import { useCallback, useMemo, useState } from 'react';

interface useHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverResult = [boolean, useHoverBind]

export const useHover = (): useHoverResult => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [isHover, {
        onMouseEnter,
        onMouseLeave,
    }], [isHover, onMouseEnter, onMouseLeave]);
};
