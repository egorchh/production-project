import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './BottomSheet.module.scss';

interface BottomSheetProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const BottomSheet = memo((props: BottomSheetProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;
    const { theme } = useTheme();

    const { close, isMounted, isClosing } = useModal({ onClose, isOpen });

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.closed]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.bottomSheet, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
