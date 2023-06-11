import {
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';
import CloseButton from '../../../assets/icons/close-button.svg';
import { Icon } from '../Icon';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    withoutCloseButton?: boolean
}

const ANIMATION_DELAY = 300;

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        withoutCloseButton = false,
    } = props;

    const { close, isClosing, isMounted } = useModal({ onClose, animationDelay: ANIMATION_DELAY, isOpen });

    const { theme } = useTheme();

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.closed]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={styles.content}>
                    {!withoutCloseButton && <Icon className={styles.closeBtn} Svg={CloseButton} onClick={close} />}
                    {children}
                </div>
            </div>
        </Portal>
    );
};
