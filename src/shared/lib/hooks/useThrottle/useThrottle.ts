import { useCallback, useEffect, useRef } from 'react';

/**
 * Хук, используемый для вызова функции через определенный интервал времени
 * @param callback - функция, вызываемая каждые delay мс
 * @param delay - интервал, через который вызывается функция
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutRef = useRef<any>(null);

    const throttledCallback = useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            timeoutRef.current = setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);

    useEffect(() => () => (timeoutRef.current), []);

    return throttledCallback;
}
