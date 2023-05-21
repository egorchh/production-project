import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: VoidFunction;
    isOpen?: boolean;
    animationDelay?: number;
}

/**
 * Хук для работы с модальными компонентами (shared/ui/popups)
 * @param onClose
 * @param animationDelay
 * @param isOpen
 */
export function useModal({
    onClose,
    animationDelay = 300,
    isOpen,
}: UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsMounted(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            setIsMounted(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
