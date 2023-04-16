import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ReactNode, MouseEvent, useState, useRef, useEffect, useCallback, MutableRefObject,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';
import CloseButton from '../../assets/icons/close-button.svg';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const ANIMATION_DELAY = 300;

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            setIsOpening(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [styles.opened]: isOpening,
        [styles.closed]: isClosing,
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className, theme])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        <CloseButton onClick={closeHandler} className={styles.closeBtn} />
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
