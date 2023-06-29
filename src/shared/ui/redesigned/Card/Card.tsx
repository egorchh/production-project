import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined';

export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    fullWidth?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

export const Card = ({
    className,
    children,
    variant = 'normal',
    padding = '8',
    fullWidth,
    ...otherProps
}: CardProps) => {
    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(styles.card, {
                [styles.fullWidth]: fullWidth,
            }, [className, styles[variant], styles[paddingClass]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
