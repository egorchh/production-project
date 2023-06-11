import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Card = ({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
}: CardProps) => (
    <div
        className={classNames(styles.card, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </div>
);
