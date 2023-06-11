import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    borderRadius?: number | string;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const {
        height,
        width,
        borderRadius,
        className,
    } = props;

    const computedStyles: CSSProperties = {
        height,
        width,
        borderRadius,
    };

    return (
        <div
            className={classNames(styles.skeleton, {}, [className])}
            style={computedStyles}
        />
    );
});
