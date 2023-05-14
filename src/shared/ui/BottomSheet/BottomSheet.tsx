import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useAnimationModules } from 'shared/lib/components/AnimationProvider';
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

const height = window.innerHeight - 100;

const BottomSheetContent = memo((props: BottomSheetProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;
    const { Gesture, Spring } = useAnimationModules();
    const { theme } = useTheme();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { close, isMounted, isClosing } = useModal({ onClose, isOpen });

    const openBottomSheet = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openBottomSheet();
        }
    }, [isOpen, openBottomSheet]);

    const closeBottomSheet = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    closeBottomSheet();
                } else {
                    openBottomSheet();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.closed]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(styles.bottomSheet, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={() => closeBottomSheet()} />
                <Spring.a.div
                    className={styles.content}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

export const BottomSheet = (props: BottomSheetProps) => {
    const { isLoaded } = useAnimationModules();

    if (!isLoaded) {
        return null;
    }

    return <BottomSheetContent {...props} />;
};
