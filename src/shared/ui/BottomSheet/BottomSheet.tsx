import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './BottomSheet.module.scss';

interface BottomSheetProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const BottomSheet = memo((props: BottomSheetProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(styles.bottomSheet, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
